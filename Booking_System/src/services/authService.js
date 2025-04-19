// src/services/authService.js
import conf from "../conf/conf.js";
import { Client, Account, Databases, ID, Permission, Role } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl) // e.g. "https://cloud.appwrite.io/v1"
      .setProject(conf.appwriteProjectId); // your project ID

    this.account = new Account(this.client);
    this.db = new Databases(this.client);
  }

  /**
   * 1️⃣ Create Auth user
   * 2️⃣ Create session (login)
   * 3️⃣ Insert profile doc into DB collection
   */
  async createAccount({ email, password, name }) {
    try {
      // 1️⃣ Create the user account
      await this.account.create(ID.unique(), email, password, name);

      // 2️⃣ Log them in
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );

      // 3️⃣ Write a profile document
      await this.db.createDocument(
        conf.appwriteDatabaseId, // e.g. "travel_db"
        conf.appwriteCollectionId, // e.g. "users"
        ID.unique(),
        {
          name,
          email,
          createdAt: new Date().toISOString(),
        },
        [
          // only the user themself can read/update this doc
          Permission.read(Role.user(session.userId)),
          Permission.update(Role.user(session.userId)),
        ]
      );

      return session;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Standard email/password login
   */
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Returns the current user or null
   */
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.warn("AuthService.getCurrentUser error:", error.message);
      return null;
    }
  }

  /**
   * Logs out the user by deleting all sessions
   */
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.warn("AuthService.logout error:", error.message);
    }
  }
}

const authService = new AuthService();
export default authService;
