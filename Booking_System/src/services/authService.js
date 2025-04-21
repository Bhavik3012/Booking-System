// src/services/authService.js
import conf from "../conf/conf.js";
import { Client, Account, Databases, ID, Permission, Role } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
    this.db = new Databases(this.client);
  }

  /**
   * 1️⃣ Create Auth user
   * 2️⃣ Log them in
   * 3️⃣ Insert profile doc keyed by userId
   */
  async createAccount({ email, password, name }) {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    const session = await this.account.createEmailPasswordSession(
      email,
      password
    );
    await this.db.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdUser,
      userAccount.$id,
      { name, email, createdAt: new Date().toISOString() },
      [
        Permission.read(Role.user(userAccount.$id)),
        Permission.update(Role.user(userAccount.$id)),
      ]
    );
    return session;
  }

  /** Standard email/password login */
  async login({ email, password }) {
    return this.account.createEmailPasswordSession(email, password);
  }

  /** Returns merged account + profile or null */
  async getCurrentUser() {
    try {
      const account = await this.account.get();
      let profile = {};
      try {
        profile = await this.db.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionIdUser,
          account.$id
        );
      } catch {}
      return { ...account, ...profile };
    } catch {
      return null;
    }
  }

  /** Convenience: true if there’s an active session */
  async isAuthenticated() {
    try {
      await this.account.get();
      return true;
    } catch {
      return false;
    }
  }

  /** Logs out the user by deleting all sessions */
  async logout() {
    await this.account.deleteSessions();
  }
}

export default new AuthService();
