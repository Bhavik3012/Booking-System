import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingHistory from '../../pages/bookings/BookingHistory';
import * as authService from '../../services/authService';
import { Client, Databases, Account } from 'appwrite';

// Mock the Appwrite modules
jest.mock('appwrite', () => ({
  Client: jest.fn().mockImplementation(() => ({
    setEndpoint: jest.fn().mockReturnThis(),
    setProject: jest.fn().mockReturnThis()
  })),
  Databases: jest.fn().mockImplementation(() => ({
    listDocuments: jest.fn()
  })),
  Account: jest.fn().mockImplementation(() => ({
    get: jest.fn()
  }))
}));

// Mock the authService
jest.mock('../../services/authService', () => ({
  getCurrentUser: jest.fn(),
  isAuthenticated: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  createAccount: jest.fn(),
  createAdminAccount: jest.fn(),
  isAdmin: jest.fn()
}));

describe('BookingHistory Component', () => {
  const mockBookings = [
    {
      $id: '1',
      roomNumber: '101',
      checkInDate: '2024-03-01',
      checkOutDate: '2024-03-05',
      status: 'active'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    // Mock authService methods
    authService.getCurrentUser.mockResolvedValue({
      $id: 'user123',
      name: 'Test User',
      email: 'test@example.com'
    });
    authService.isAuthenticated.mockResolvedValue(true);
  });

  test('1. Shows loading state initially', async () => {
    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );

    // Check if Appwrite client is properly initialized
    expect(Client).toHaveBeenCalled();
    expect(Client().setEndpoint).toHaveBeenCalled();
    expect(Client().setProject).toHaveBeenCalled();

    // Check loading state
    expect(screen.getByText('Loading bookings…')).toBeInTheDocument();
  });

  test('2. Shows no bookings message when user has no bookings', async () => {
    // Mock Appwrite response
    Databases.prototype.listDocuments.mockResolvedValue({ documents: [] });

    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );

    // Verify Appwrite database call
    await waitFor(() => {
      expect(Databases.prototype.listDocuments).toHaveBeenCalledWith(
        expect.any(String), // databaseId
        expect.any(String), // collectionId
        expect.arrayContaining([
          expect.objectContaining({
            key: 'userId',
            value: 'user123'
          })
        ])
      );
    });

    // Check empty state message
    expect(screen.getByText('You have no bookings yet.')).toBeInTheDocument();
  });

  test('3. Displays booking details when user has bookings', async () => {
    // Mock Appwrite response
    Databases.prototype.listDocuments.mockResolvedValue({ documents: mockBookings });

    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );

    // Verify Appwrite database call
    await waitFor(() => {
      expect(Databases.prototype.listDocuments).toHaveBeenCalled();
      expect(screen.getByText('Room 101')).toBeInTheDocument();
      expect(screen.getByText('Check-in: 2024-03-01')).toBeInTheDocument();
      expect(screen.getByText('Check-out: 2024-03-05')).toBeInTheDocument();
    });
  });

  test('4. Shows error message when Appwrite API fails', async () => {
    // Mock Appwrite error
    Databases.prototype.listDocuments.mockRejectedValue(new Error('Appwrite API Error'));

    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );

    // Verify error handling
    await waitFor(() => {
      expect(screen.getByText('Failed to load bookings')).toBeInTheDocument();
    });
  });

  test('5. Shows checkout link for active bookings', async () => {
    // Mock Appwrite response
    Databases.prototype.listDocuments.mockResolvedValue({ documents: mockBookings });

    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );

    // Verify booking data and checkout link
    await waitFor(() => {
      const checkoutLink = screen.getByText('Checkout');
      expect(checkoutLink).toBeInTheDocument();
      expect(checkoutLink.closest('a')).toHaveAttribute('href', '/checkout?bookingId=1');
    });
  });

  test('6. Handles Appwrite authentication error', async () => {
    // Mock auth error
    authService.getCurrentUser.mockRejectedValue(new Error('Appwrite Auth Error'));

    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );

    // Verify error handling
    await waitFor(() => {
      expect(screen.getByText('Failed to load bookings')).toBeInTheDocument();
    });
  });
}); 