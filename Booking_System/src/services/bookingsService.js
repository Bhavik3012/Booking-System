// src/services/bookingsService.js
import conf from "../conf/conf.js";
import { Client, Databases, Query } from "appwrite";

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
        [ Query.equal("userId", userId) ]
      )
      .then((res) => res.documents),

  getBooking: (bookingId) =>
    db.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionIdBookings,
      bookingId
    ),
};
