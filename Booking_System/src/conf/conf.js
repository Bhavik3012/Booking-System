// src/conf/conf.js
const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionIdUser: import.meta.env.VITE_APPWRITE_COLLECTION_ID_USER,
  appwriteCollectionIdBookings: import.meta.env
    .VITE_APPWRITE_COLLECTION_ID_BOOKINGS,
};

export default conf;
