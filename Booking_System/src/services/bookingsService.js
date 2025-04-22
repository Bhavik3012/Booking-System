// src/services/bookingsService.js
import conf from "../conf/conf.js";
import { Client, Databases, ID, Permission, Role, Query } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const db = new Databases(client);

/**
 * Create a new booking
 * @param {Object} bookingData - Booking details
 * @returns {Promise<Object>}
 */
export function createBooking(bookingData) {
  return db.createDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBookings,
    ID.unique(),
    {
      ...bookingData,
      status: 'confirmed',
      bookingDate: new Date().toISOString()
    }
  );
}

/**
 * Get all bookings for a user
 * @param {string} userId
 * @returns {Promise<Array>}
 */
export function getUserBookings(userId) {
  return db.listDocuments(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBookings,
    [
      Query.equal('userId', userId)
    ]
  ).then(res => res.documents);
}

/**
 * Get all bookings (admin only)
 * @returns {Promise<Array>}
 */
export function getAllBookings() {
  return db.listDocuments(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBookings
  ).then(res => res.documents);
}

/**
 * Get booking by ID
 * @param {string} bookingId
 * @returns {Promise<Object>}
 */
export function getBooking(bookingId) {
  return db.getDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBookings,
    bookingId
  );
}

/**
 * Cancel a booking
 * @param {string} bookingId
 * @returns {Promise<Object>}
 */
export function cancelBooking(bookingId) {
  return db.updateDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionIdBookings,
    bookingId,
    {
      status: 'cancelled'
    }
  );
}
