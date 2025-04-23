module.exports = {
  appwriteUrl: 'https://cloud.appwrite.io/v1',
  appwriteProjectId: 'test-project-id',
  appwriteDatabaseId: 'test-database-id',
  appwriteCollectionIdBookings: 'test-bookings-collection-id',
  appwriteCollectionIdUser: 'test-users-collection-id',
  appwriteClient: {
    setEndpoint: jest.fn(),
    setProject: jest.fn()
  }
}; 