// src/conf/conf.js
const conf = {
  appwriteUrl: 'https://fra.cloud.appwrite.io/v1',
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionIdUser: import.meta.env.VITE_APPWRITE_COLLECTION_ID_USER,
  appwriteCollectionIdBookings: import.meta.env.VITE_APPWRITE_COLLECTION_ID_BOOKINGS,
  appwriteCollectionIdBuses: import.meta.env.VITE_APPWRITE_COLLECTION_ID_BUSES,
};

export default conf;
