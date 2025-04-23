// src/services/busService.js
import conf from "../conf/conf.js";
import { Client, Databases, Permission, Role } from "appwrite";

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject(conf.appwriteProjectId);

const db = new Databases(client);

/**
 * Fetch all buses, optionally applying Appwrite Query filters.
 * @param {import("appwrite").Query[]} [queries=[]]
 * @returns {Promise<Array>}
 */
export function getAllBuses(queries = []) {
  return db
    .listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBuses,
      queries
    )
    .then((res) => res.documents);
}

/**
 * Fetch a single bus document by its ID.
 * @param {string} busId
 * @returns {Promise<Object>}
 */
export function getBus(busId) {
  return db.getDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBuses,
    busId
  );
}

/**
 * Update available seats for a bus (requires authentication)
 * @param {string} busId
 * @param {number} seatsToBook
 * @param {string} userId
 * @returns {Promise<Object>}
 */
export function updateSeats(busId, seatsToBook, userId) {
  if (!userId) {
    throw new Error('User must be logged in to update seats');
  }

  return db.getDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBuses,
    busId
  ).then((bus) => {
    const currentSeats = bus.availableSeats || 0;
    if (currentSeats < seatsToBook) {
      throw new Error('Not enough seats available');
    }
    return db.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBuses,
      busId,
      {
        availableSeats: currentSeats - seatsToBook
      },
      [
        Permission.update(Role.user(userId))
      ]
    );
  });
}

/**
 * Get available seats for a bus
 * @param {string} busId
 * @returns {Promise<number>}
 */
export function getAvailableSeats(busId) {
  return db.getDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBuses,
    busId
  ).then((bus) => bus.availableSeats || 0);
}
