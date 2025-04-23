const conf = require("../conf/conf.js");
const { Databases, ID } = require("appwrite");

class BookingService {
  constructor() {
    this.databases = new Databases(conf.appwriteClient);
  }

  async getBookings(userId) {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdBookings,
        [
          `equal("userId", "${userId}")`
        ]
      );
      return response.documents;
    } catch (error) {
      console.error("Error getting bookings:", error);
      throw error;
    }
  }

  async createBooking(bookingData) {
    try {
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdBookings,
        ID.unique(),
        bookingData
      );
      return response;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  }

  async deleteBooking(bookingId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdBookings,
        bookingId
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
      throw error;
    }
  }
}

const bookingService = new BookingService();
module.exports = bookingService; 