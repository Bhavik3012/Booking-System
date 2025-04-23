const React = require('react');
const { render, screen, waitFor } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const BookingHistory = require('../pages/bookings/BookingHistory').default;
const authService = require('../services/authService').default;

// Mock the services
jest.mock('../services/authService', () => ({
  default: {
    getCurrentUser: jest.fn()
  }
}));

jest.mock('../services/bookingService', () => ({
  default: {
    getBookings: jest.fn()
  }
}));

describe('BookingHistory Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('1. Displays loading state correctly', () => {
    // Mock the getCurrentUser to return a user
    authService.getCurrentUser.mockResolvedValue({ $id: '123' });
    
    // Mock the getBookings to return a promise that never resolves
    require('../services/bookingService').default.getBookings.mockImplementation(() => new Promise(() => {}));
    
    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Loading bookings…')).toBeInTheDocument();
  });

  test('2. Displays no bookings message when user has no bookings', async () => {
    // Mock the getCurrentUser to return a user
    authService.getCurrentUser.mockResolvedValue({ $id: '123' });
    
    // Mock the getBookings to return an empty array
    require('../services/bookingService').default.getBookings.mockResolvedValue([]);
    
    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByText('You have no bookings yet.')).toBeInTheDocument();
    });
  });

  test('3. Displays booking list when user has bookings', async () => {
    // Mock the getCurrentUser to return a user
    authService.getCurrentUser.mockResolvedValue({ $id: '123' });
    
    // Mock the getBookings to return some bookings
    const mockBookings = [
      {
        $id: '1',
        serviceType: 'Deluxe Room',
        date: '2024-04-01',
        details: 'Check-in: 2024-04-01, Check-out: 2024-04-03'
      }
    ];
    require('../services/bookingService').default.getBookings.mockResolvedValue(mockBookings);
    
    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Deluxe Room Booking')).toBeInTheDocument();
      expect(screen.getByText('Date: 2024-04-01')).toBeInTheDocument();
      expect(screen.getByText('Details: Check-in: 2024-04-01, Check-out: 2024-04-03')).toBeInTheDocument();
    });
  });

  test('4. Handles error state correctly', async () => {
    // Mock the getCurrentUser to return a user
    authService.getCurrentUser.mockResolvedValue({ $id: '123' });
    
    // Mock the getBookings to throw an error
    require('../services/bookingService').default.getBookings.mockRejectedValue(new Error('Failed to fetch bookings'));
    
    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load bookings')).toBeInTheDocument();
    });
  });

  test('5. Checkout link is present for each booking', async () => {
    // Mock the getCurrentUser to return a user
    authService.getCurrentUser.mockResolvedValue({ $id: '123' });
    
    // Mock the getBookings to return a booking
    const mockBookings = [
      {
        $id: '1',
        serviceType: 'Deluxe Room',
        date: '2024-04-01',
        details: 'Check-in: 2024-04-01, Check-out: 2024-04-03'
      }
    ];
    require('../services/bookingService').default.getBookings.mockResolvedValue(mockBookings);
    
    render(
      <MemoryRouter>
        <BookingHistory />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      const checkoutLink = screen.getByText('Checkout');
      expect(checkoutLink).toBeInTheDocument();
      expect(checkoutLink.closest('a')).toHaveAttribute('href', '/checkout?bookingId=1');
    });
  });
}); 