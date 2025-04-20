// src/pages/checkout/Checkout.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import bookingsService from "../../services/bookingsService";
import authService from "../../services/authService";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!bookingId) return;
    authService
      .getCurrentUser()
      .then((u) => {
        if (!u) throw new Error("Not logged in");
        return bookingsService.getBooking(bookingId);
      })
      .then((b) => setBooking(b))
      .catch(() => setBooking(null))
      .finally(() => setLoading(false));
  }, [bookingId]);

  if (loading) {
    return <div className="text-center py-20">Loading checkout…</div>;
  }
  if (!booking) {
    return (
      <div className="text-center py-20 text-[#424242]">
        Booking not found or you don’t have access.
      </div>
    );
  }

  const handlePay = () => {
    // integrate your payment gateway here…
    alert("Payment successful!");
    navigate("/bookings");
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0] p-6 flex justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-[#424242] mb-4">Checkout</h2>
        <div className="space-y-2 text-[#424242] mb-6">
          <div>
            <span className="font-medium">Booking ID:</span> {booking.$id}
          </div>
          <div>
            <span className="font-medium">Type:</span> {booking.serviceType}
          </div>
          <div>
            <span className="font-medium">Date:</span> {booking.date}
          </div>
          <div>
            <span className="font-medium">Details:</span> {booking.details}
          </div>
          <div>
            <span className="font-medium">Amount:</span> ${booking.amount}
          </div>
        </div>
        <button
          onClick={handlePay}
          className="w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white py-3 rounded-lg"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
