import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import authService from '../../services/authService';
import { getAllBookings, cancelBooking } from '../../services/bookingsService';

function formatDateTime(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "Invalid date";

  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();

  const hh = d.getHours();
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  const min = String(d.getMinutes()).padStart(2, "0");
  const sec = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");
  const ampm = hh >= 12 ? "PM" : "AM";

  return `${mm}/${dd}/${yyyy} ${String(h12).padStart(2, "0")}:${min}:${sec}.${ms} ${ampm}`;
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (!currentUser || !currentUser.labels?.includes('admin')) {
          setError('Access denied. Admin only.');
          return;
        }

        const allBookings = await getAllBookings();
        setBookings(allBookings);
      } catch (error) {
        setError('Failed to fetch bookings');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await cancelBooking(bookingId);
        setBookings(bookings.map(booking => 
          booking.$id === bookingId 
            ? { ...booking, status: 'cancelled' }
            : booking
        ));
        alert('Booking cancelled successfully');
      } catch (error) {
        alert('Failed to cancel booking');
      }
    }
  };

  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }

  if (loading) {
    return <div className="text-center py-20">Loading bookings...</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF3E0] p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-[#424242] mb-8">All Bookings</h1>
        
        {bookings.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-[#424242]">No bookings found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <Card
                key={booking.$id}
                className={`border ${
                  booking.status === 'cancelled'
                    ? 'border-red-500'
                    : 'border-[#FFA726]'
                }`}
              >
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-[#424242]">
                    {booking.from} → {booking.to}
                  </h3>
                  <p className="text-[#424242] mt-2">
                    <span className="font-medium">User ID:</span> {booking.userId}
                  </p>
                  <p className="text-[#424242]">
                    <span className="font-medium">Date & Time:</span>{' '}
                    {formatDateTime(booking.dateTime)}
                  </p>
                  <p className="text-[#424242]">
                    <span className="font-medium">Seats:</span> {booking.seats}
                  </p>
                  <p className="text-[#424242]">
                    <span className="font-medium">Total Price:</span> $
                    {booking.totalPrice}
                  </p>
                  <p className="text-[#424242]">
                    <span className="font-medium">Status:</span>{' '}
                    <span
                      className={`${
                        booking.status === 'confirmed'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </p>
                  {booking.status === 'confirmed' && (
                    <Button
                      onClick={() => handleCancelBooking(booking.$id)}
                      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white"
                    >
                      Cancel Booking
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 