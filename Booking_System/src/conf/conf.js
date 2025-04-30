// src/conf/conf.js
export const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionIdBuses: import.meta.env.VITE_APPWRITE_COLLECTION_ID_BUSES,
  appwriteCollectionIdTrains: import.meta.env.VITE_APPWRITE_COLLECTION_ID_TRAINS,
  appwriteCollectionIdBookings: import.meta.env.VITE_APPWRITE_COLLECTION_ID_BOOKINGS,
  appwriteCollectionIdUser: import.meta.env.VITE_APPWRITE_COLLECTION_ID_USER,
};
