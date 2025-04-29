// src/pages/checkout/Checkout.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { databases } from "../../lib/appwrite";
import authService from "../../services/authService";
import { updateSeats, getAvailableSeats } from "../../services/busService";
import { createBooking } from "../../services/bookingsService";

const {
  VITE_APPWRITE_DATABASE_ID: DB_ID,
  VITE_APPWRITE_COLLECTION_ID_BUSES: BUSES_COLL,
} = import.meta.env;

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

  return `${mm}/${dd}/${yyyy} ${String(h12).padStart(
    2,
    "0"
  )}:${min}:${sec}.${ms} ${ampm}`;
}

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const busId = searchParams.get("busId");
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [seatsToBook, setSeatsToBook] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!busId) return;

    const fetchBusAndSeats = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (!currentUser) throw new Error("Not logged in");

        const busData = await databases.getDocument(DB_ID, BUSES_COLL, busId);
        setBus(busData);

        const seats = await getAvailableSeats(busId);
        setAvailableSeats(seats);
      } catch (error) {
        console.error("Error:", error);
        setBus(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBusAndSeats();
  }, [busId]);

  const handleSeatChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= availableSeats) {
      setSeatsToBook(value);
    }
  };

  const handleBook = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        throw new Error("User not authenticated");
      }

      // Calculate total price
      const totalPrice = seatsToBook * (bus?.price || 0);

      // Get current available seats
      const currentAvailableSeats = await getAvailableSeats(busId);
      
      // Create an array of seat numbers starting from the first available seat
      const seatNumbers = Array.from(
        { length: seatsToBook }, 
        (_, i) => currentAvailableSeats - i
      ).reverse();

      // Create booking data with all required fields
      const bookingData = {
        userId: currentUser.$id,
        busId: busId,
        from: bus.from,
        to: bus.to,
        dateTime: bus.dateTime || bus.DateTime || bus.departureTime || bus.departure_date,
        seats: seatNumbers,
        totalPrice: totalPrice,
        status: "confirmed",
        bookingDate: new Date().toISOString()
      };

      console.log("Creating booking with data:", bookingData);

      // Create the booking
      const booking = await createBooking(bookingData);
      console.log("Booking created successfully:", booking);

      // Update bus seats
      await updateSeats(busId, seatsToBook, currentUser.$id);

      // Show success message and redirect
      alert(`Booking confirmed successfully! Your seat numbers are: ${seatNumbers.join(', ')}`);
      navigate("/bookings");
    } catch (error) {
      console.error("Booking error:", error);
      alert(error.message);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading checkout…</div>;
  }

  if (!bus) {
    return (
      <div className="text-center py-20 text-[#424242]">
        Bus not found or you don't have access.
      </div>
    );
  }

  // Try different possible date field names
  const dateField = bus.dateTime || bus.DateTime || bus.departureTime || bus.departure_date;

  return (
    <div className="min-h-screen bg-[#FFF3E0] p-6 flex justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-[#424242] mb-4">
          Bus Booking Summary
        </h2>
        <div className="space-y-2 text-[#424242] mb-6">
          <div>
            <span className="font-medium">Route:</span> {bus.from} → {bus.to}
          </div>
          <div>
            <span className="font-medium">Type:</span> {bus.type}
          </div>
          <div>
            <span className="font-medium">Date & Time:</span>{" "}
            {dateField ? formatDateTime(dateField) : 'Not available'}
          </div>
          <div>
            <span className="font-medium">Available Seats:</span>{" "}
            {availableSeats}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Number of Seats to Book:
            </label>
            <input
              type="number"
              min="1"
              max={availableSeats}
              value={seatsToBook}
              onChange={handleSeatChange}
              className="mt-1 block w-full rounded-md border border-[#FFA726] focus:ring-[#FFA726] focus:border-[#FFA726] px-3 py-2 bg-white text-[#424242]"
            />
          </div>
          <div>
            <span className="font-medium">Total Price:</span> $
            {bus.price * seatsToBook}
          </div>
        </div>
        <button
          onClick={handleBook}
          className="w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white py-3 rounded-lg"
          disabled={availableSeats === 0}
        >
          {availableSeats === 0 ? "No Seats Available" : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}
