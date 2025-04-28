// src/pages/bookings/BookingHistory.jsx
import React, { useState, useEffect } from "react";
import authService from "../../services/authService";
import { getUserBookings } from "../../services/bookingsService";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/Card";

/**
 * Turn an ISO string into "MM/DD/YYYY hh:mm:ss.SSS AM/PM"
 */
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

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let userId;

    const fetchBookings = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (!user) throw new Error("Not logged in");
        userId = user.$id;
        const list = await getUserBookings(userId);
        if (isMounted) {
          setBookings(list);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setBookings([]);
          setError(err.message || "Failed to load bookings");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBookings();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading bookings…</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FFF3E0] p-6">
        <div className="max-w-3xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="text-center">{error}</p>
          <p className="text-center mt-2">
            <Link to="/" className="text-[#FFA726] underline">
              Return to Home
            </Link>
          </p>
        </div>
      </div>
    );
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {bookings.map((booking) => (
            <Card
              key={booking.$id}
              className={`border ${
                booking.status === "cancelled"
                  ? "border-red-500"
                  : "border-[#FFA726]"
              }`}
            >
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-[#424242]">
                  {booking.from} → {booking.to}
                </h3>
                <p className="text-[#424242] mt-2">
                  <span className="font-medium">Date & Time:</span>{" "}
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
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`${
                      booking.status === "confirmed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
