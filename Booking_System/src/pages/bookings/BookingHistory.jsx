// src/pages/bookings/BookingHistory.jsx
import React, { useState, useEffect } from "react";
import authService from "../../services/authService";
import bookingsService from "../../services/bookingsService"; // create this to wrap Appwrite DB calls
import { Link } from "react-router-dom";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let userId;
    authService
      .getCurrentUser()
      .then((u) => {
        if (!u) throw new Error("Not logged in");
        userId = u.$id;
        return bookingsService.getUserBookings(userId);
      })
      .then((list) => setBookings(list))
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading bookings…</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF3E0] p-6">
      <h2 className="text-3xl font-bold text-[#424242] mb-6 text-center">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-xl text-[#424242]">
          You have no bookings yet.{" "}
          <Link to="/" className="text-[#FFA726] underline">
            Book something now!
          </Link>
        </p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {bookings.map((b) => (
            <div
              key={b.$id}
              className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <div className="font-semibold text-lg text-[#424242]">
                  {b.serviceType} Booking
                </div>
                <div className="text-[#424242]">Date: {b.date}</div>
                <div className="text-[#424242]">Details: {b.details}</div>
              </div>
              <Link
                to={`/checkout?bookingId=${b.$id}`}
                className="px-4 py-2 bg-[#FFA726] text-white rounded hover:bg-[#FB8C00]"
              >
                Checkout
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
