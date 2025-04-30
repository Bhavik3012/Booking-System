// src/services/bookingsService.js
import { conf } from "../conf/conf.js";
import { Client, Databases, ID, Permission, Role, Query } from "appwrite";

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject(conf.appwriteProjectId);

const db = new Databases(client);

/**
 * Create a new booking (requires authentication)
 * @param {Object} bookingData - Booking details
 * @returns {Promise<Object>}
 */
export async function createBooking(bookingData) {
  try {
    if (!bookingData.userId) {
      throw new Error('User must be logged in to create a booking');
    }

    const permissions = [
      Permission.read(Role.user(bookingData.userId)),
      Permission.update(Role.user(bookingData.userId)),
      Permission.delete(Role.user(bookingData.userId))
    ];

    // Create the booking document with correct attribute names
    const bookingDocument = {
      userId: bookingData.userId,
      busId: bookingData.busId,
      from: bookingData.from,
      to: bookingData.to,
      dateTime: bookingData.dateTime,
      seats: bookingData.seats,
      totalPrice: bookingData.totalPrice || 0,
      status: 'confirmed',
      bookingDate: new Date().toISOString()
    };

    console.log('Creating booking with data:', bookingDocument);

    return await db.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBookings,
      ID.unique(),
      bookingDocument,
      permissions
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
}

/**
 * Get bookings for a specific user
 * @param {string} userId - The ID of the user
 * @returns {Promise<Array>}
 */
export async function getUserBookings(userId) {
  try {
    if (!userId) {
      throw new Error('User must be logged in to view bookings');
    }

    const response = await db.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBookings,
      [
        Query.equal('userId', userId)
      ]
    );

    return response.documents;
  } catch (error) {
    console.error('Error getting user bookings:', error);
    throw error;
  }
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
 * @param {string} bookingId - The ID of the booking
 * @param {string} userId - The ID of the user
 * @returns {Promise<void>}
 */
export async function cancelBooking(bookingId, userId) {
  try {
    if (!userId) {
      throw new Error('User must be logged in to cancel a booking');
    }

    await db.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBookings,
      bookingId
    );
  } catch (error) {
    console.error('Error canceling booking:', error);
    throw error;
  }
}
