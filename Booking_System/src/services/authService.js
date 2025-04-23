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
   * Create a regular user account
   */
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Create user document with required attributes
        const userDocument = {
          name: name,
          email: email,
          role: 'user',
          userId: userAccount.$id
        };

        // Create user document in database
        await this.db.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionIdUser,
          userAccount.$id,
          userDocument,
          [
            Permission.read(Role.any()),  // Anyone can read
            Permission.update(Role.user(userAccount.$id)),  // Only the user can update
            Permission.delete(Role.user(userAccount.$id))   // Only the user can delete
          ]
        );

        // Login the user after successful registration
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error('Error creating account:', error);
      throw error;
    }
  }

  /**
   * Create an admin account
   */
  async createAdminAccount({ email, password, name }) {
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
      { 
        name, 
        email,
        role: 'admin'
      },
      [
        Permission.read(Role.any()), // Can read all documents
        Permission.update(Role.any()), // Can update all documents
        Permission.delete(Role.any()) // Can delete all documents
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

  /** Check if current user is admin */
  async isAdmin() {
    const user = await this.getCurrentUser();
    return user?.role === 'admin';
  }

  /** Convenience: true if there's an active session */
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
