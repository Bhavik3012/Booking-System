// src/lib/appwrite.js
import { Client, Databases, Account } from "appwrite";

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const account = new Account(client);
