import { databases, account } from '../lib/appwrite';
import { conf } from '../conf/conf';

/**
 * Fetch all trains, optionally applying Appwrite Query filters.
 * @param {import("appwrite").Query[]} [queries=[]]
 * @returns {Promise<Array>}
 */
export const getAllTrains = async (queries = []) => {
  try {
    const user = await account.get();
    if (!user) {
      throw new Error('User not authenticated');
    }
    return await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdTrains,
      queries
    );
  } catch (error) {
    console.error('Error fetching trains:', error);
    throw error;
  }
};

/**
 * Fetch a single train document by its ID.
 * @param {string} trainId
 * @returns {Promise<Object>}
 */
export const getTrain = async (trainId) => {
  try {
    const user = await account.get();
    if (!user) {
      throw new Error('User not authenticated');
    }
    return await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdTrains,
      trainId
    );
  } catch (error) {
    console.error('Error fetching train:', error);
    throw error;
  }
};

/**
 * Update available seats for a train (requires authentication)
 * @param {string} trainId
 * @param {number} seatsToBook
 * @param {string} userId
 * @returns {Promise<Object>}
 */
export const updateTrainSeats = async (trainId, seatsToBook, userId) => {
  try {
    const user = await account.get();
    if (!user) {
      throw new Error('User not authenticated');
    }
    const train = await getTrain(trainId);
    const updatedSeats = train.availableSeats - seatsToBook;
    
    return await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdTrains,
      trainId,
      {
        availableSeats: updatedSeats,
        lastUpdatedBy: userId
      }
    );
  } catch (error) {
    console.error('Error updating train seats:', error);
    throw error;
  }
};

/**
 * Get available seats for a train
 * @param {string} trainId
 * @returns {Promise<number>}
 */
export const getAvailableTrainSeats = async (trainId) => {
  try {
    const user = await account.get();
    if (!user) {
      throw new Error('User not authenticated');
    }
    const train = await getTrain(trainId);
    return train.availableSeats;
  } catch (error) {
    console.error('Error getting available seats:', error);
    throw error;
  }
};
