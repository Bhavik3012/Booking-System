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
   * 2️⃣ Log them in
   * 3️⃣ Insert profile doc keyed by userId
   */
  async createAccount({ email, password, name }) {
    try {
      // 1️⃣ Create the user account, returns user object including $id
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // 2️⃣ Log them in, returns session
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );

      // 3️⃣ Write a profile document using user's ID as document ID
      await this.db.createDocument(
        conf.appwriteDatabaseId, // e.g. "travel_db"
        conf.appwriteCollectionId, // e.g. "users"
        userAccount.$id, // document ID = user.$id
        {
          name,
          email,
          createdAt: new Date().toISOString(),
        },
        [
          // only the user themself can read/update this doc
          Permission.read(Role.user(userAccount.$id)),
          Permission.update(Role.user(userAccount.$id)),
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
   * Returns merged account + profile or null
   */
  async getCurrentUser() {
    try {
      // fetch basic account info
      const account = await this.account.get();
      // attempt to fetch profile by the same ID
      let profile = {};
      try {
        profile = await this.db.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          account.$id
        );
      } catch {
        // no profile found, ignore
      }
      // merge account and profile fields
      return { ...account, ...profile };
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
