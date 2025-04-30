// src/services/authService.js
import { conf } from "../conf/conf.js";
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
      // First create the user account
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        const currentTime = new Date().toISOString();

        // Create user document with required attributes
        const userDocument = {
          name: name,
          email: email,
          role: "user",
          userId: userAccount.$id,
          createdAt: currentTime,
          updatedAt: currentTime,
        };

        // Create user document in database with correct permissions
        await this.db.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionIdUser,
          userAccount.$id,
          userDocument
        );

        // Create session and return it
        return await this.account.createEmailPasswordSession(email, password);
      } else {
        throw new Error("Failed to create user account");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      if (error.code === 429) {
        throw new Error(
          "Too many signup attempts. Please wait a few minutes and try again."
        );
      }
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
        role: "admin",
      }
    );
    return session;
  }

  /** Standard email/password login */
  async login({ email, password }) {
    try {
      // First check if there's an active session
      try {
        const session = await this.account.getSession("current");
        if (session) {
          // If there's an active session, delete it first
          await this.account.deleteSessions();
        }
      } catch (error) {
        // 401 is expected when no session exists
        if (error.code !== 401) {
          console.error("Error checking session:", error);
        }
      }

      // Create new session (this verifies auth credentials)
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );

      // Get account details from auth system
      const account = await this.account.get();

      // Check if user document exists in database
      try {
        const userDoc = await this.db.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionIdUser,
          account.$id
        );

        // If we get here, user exists in both places
        return session;
      } catch (error) {
        // If document doesn't exist in database
        if (error.code === 404) {
          // Delete the session since user is not properly set up
          await this.account.deleteSessions();
          throw new Error("User profile not found. Please contact support.");
        }
        throw error;
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.code === 429) {
        throw new Error(
          "Too many login attempts. Please wait a few minutes and try again."
        );
      }
      throw error;
    }
  }

  /** Returns merged account + profile or null */
  async getCurrentUser() {
    try {
      // First check if we have a valid session
      try {
        const session = await this.account.getSession("current");
        if (!session) {
          return null;
        }
      } catch (error) {
        // 401 is expected when not logged in
        if (error.code !== 401) {
          console.error("Error checking session:", error);
        }
        return null;
      }

      // Get the account details
      const account = await this.account.get();

      // Get the user profile from database
      try {
        const profile = await this.db.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionIdUser,
          account.$id
        );
        return { ...account, ...profile };
      } catch (error) {
        // If profile doesn't exist, create it
        if (error.code === 404) {
          const currentTime = new Date().toISOString();
          const userDocument = {
            name: account.name,
            email: account.email,
            role: "user",
            userId: account.$id,
            createdAt: currentTime,
            updatedAt: currentTime,
          };

          // Create document with proper permissions
          await this.db.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionIdUser,
            account.$id,
            userDocument
          );

          return { ...account, ...userDocument };
        }
        console.error("Error getting user profile:", error);
        return account;
      }
    } catch (error) {
      if (error?.code === 401) {
        return null;
      }
      console.error("Error getting current user:", error);
      return null;
    }
  }

  /** Check if current user is admin */
  async isAdmin() {
    try {
      const user = await this.getCurrentUser();
      return user?.role === "admin";
    } catch (error) {
      console.error("Error checking admin status:", error);
      return false;
    }
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
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
}

export default new AuthService();
