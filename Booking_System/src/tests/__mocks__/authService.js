module.exports = {
  getCurrentUser: jest.fn().mockResolvedValue({ $id: '123' }),
  isAuthenticated: jest.fn().mockResolvedValue(true),
  login: jest.fn(),
  logout: jest.fn(),
  createAccount: jest.fn(),
  createAdminAccount: jest.fn(),
  isAdmin: jest.fn().mockResolvedValue(false)
}; 