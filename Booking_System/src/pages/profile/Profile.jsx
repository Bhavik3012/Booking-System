// src/pages/profile/Profile.jsx
import React, { useState, useEffect } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { getUserBookings } from "../../services/bookingsService";
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

export default function Profile() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (!currentUser) {
          setUser(null);
          return;
        }
        setUser(currentUser);
        
        const userBookings = await getUserBookings(currentUser.$id);
        setBookings(userBookings);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading profile…</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-xl">You must be logged in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF3E0] p-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold text-[#424242] mb-6 text-center">
              My Profile
            </h2>
            <div className="space-y-4 text-[#424242] mb-6">
              <div>
                <span className="font-medium">Name: </span>
                {user.name}
              </div>
              <div>
                <span className="font-medium">Email: </span>
                {user.email}
              </div>
              {user.$createdAt && (
                <div>
                  <span className="font-medium">Member since: </span>
                  {formatDateTime(user.$createdAt)}
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Logout
            </button>
          </div>

          {/* Booking History Section */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#424242] mb-6 text-center">
              Booking History
            </h2>
            {bookings.length === 0 ? (
              <p className="text-center text-[#424242]">No bookings found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookings.map((booking) => {
                  // Try different possible date field names
                  const dateField = booking.dateTime || booking.DateTime || booking.departureTime || booking.departure_date;
                  return (
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
                          {dateField ? formatDateTime(dateField) : 'Not available'}
                        </p>
                        <p className="text-[#424242]">
                          <span className="font-medium">Seats:</span>{" "}
                          {booking.seats}
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
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
