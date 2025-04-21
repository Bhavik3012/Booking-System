// src/services/bookingsService.js
import conf from "../conf/conf.js";
import { Client, Databases, ID, Permission, Role, Query } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const db = new Databases(client);

export default {
  getUserBookings: (userId) =>
    db
      .listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdBookings,
        [Query.equal("userId", userId)]
      )
      .then((res) => res.documents),

  getBooking: (bookingId) =>
    db.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBookings,
      bookingId
    ),

  /**
   * General booking creator for any service type
   */
  createBooking: ({
    userId,
    serviceType,
    serviceId,
    date,
    seatNumber = null,
    roomId = null,
    amount,
    status = "confirmed",
  }) => {
    return db.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBookings,
      ID.unique(),
      {
        userId,
        serviceType,
        serviceId,
        date,
        seatNumber,
        roomId,
        amount,
        status,
        bookedAt: new Date().toISOString(),
      },
      [Permission.read(Role.user(userId)), Permission.update(Role.user(userId))]
    );
  },
};
