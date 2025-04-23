import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Mock the authService
jest.mock('../services/authService.js', () => ({
  getCurrentUser: jest.fn(),
  isAuthenticated: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  createAccount: jest.fn(),
  createAdminAccount: jest.fn(),
  isAdmin: jest.fn()
}));

// Mock the conf module
jest.mock('../conf/conf.js', () => ({
  appwriteUrl: 'http://localhost/v1',
  appwriteProjectId: 'test-project-id',
  databaseId: 'test-database-id',
  usersCollectionId: 'test-users-collection-id',
  bookingsCollectionId: 'test-bookings-collection-id'
}));

// Add TextEncoder and TextDecoder to global scope
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 