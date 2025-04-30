import React, { useState, useEffect } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";

import { databases } from "../../lib/appwrite";
import authService from "../../services/authService";
import { Query } from "appwrite";

// Vite env variables
const {
  VITE_APPWRITE_DATABASE_ID: DB_ID,
  VITE_APPWRITE_COLLECTION_ID_TRAINS: TRAINS_COLL,
} = import.meta.env;

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

  return `${mm}/${dd}/${yyyy} ${String(h12).padStart(
    2,
    "0"
  )}:${min}:${sec}.${ms} ${ampm}`;
}

export default function Trains() {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    date: "",
    type: "",
  });
  const [allTrains, setAllTrains] = useState([]);
  const [fromStations, setFromStations] = useState([]);
  const [toStations, setToStations] = useState([]);
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);

  // Load current user
  useEffect(() => {
    authService
      .getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // Load all trains + build dropdown options
  useEffect(() => {
    (async () => {
      try {
        const { documents } = await databases.listDocuments(
          DB_ID,
          TRAINS_COLL,
          []
        );
        setAllTrains(documents);
        setResults(documents);
        setFromStations([...new Set(documents.map((t) => t.from))].sort());
        setToStations([...new Set(documents.map((t) => t.to))].sort());
      } catch (err) {
        console.error("Error loading trains:", err);
      }
    })();
  }, []);

  // Fetch with filters
  const fetchTrains = async (queryFilters = {}) => {
    try {
      const queries = Object.entries(queryFilters)
        .filter(([, v]) => v)
        .map(([k, v]) => Query.equal(k, v));
      const { documents } = await databases.listDocuments(
        DB_ID,
        TRAINS_COLL,
        queries
      );
      setResults(documents);
    } catch (err) {
      console.error("Error fetching trains:", err);
    }
  };

  const handleSearch = () => fetchTrains(filters);
  const onInputChange = (e) =>
    setFilters((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleBookNow = async (train) => {
    const current = await authService.getCurrentUser().catch(() => null);
    if (!current) {
      alert("Please log in to book a train.");
      return void (window.location.href = "/login");
    }
    window.location.href = `/checkout?trainId=${train.$id}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0]">
      {/* Hero */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FB8C00]">
              Travel by Train in Comfort
            </h2>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto p-8 mt-6">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-[#424242] mb-6">
            Find Your Train
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <select
              name="from"
              value={filters.from}
              onChange={onInputChange}
              className="border border-[#FFA726] focus:ring-[#FFA726] rounded px-3 py-2 bg-white"
            >
              <option value="">Any Origin</option>
              {fromStations.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              name="to"
              value={filters.to}
              onChange={onInputChange}
              className="border border-[#FFA726] focus:ring-[#FFA726] rounded px-3 py-2 bg-white"
            >
              <option value="">Any Destination</option>
              {toStations.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              name="type"
              value={filters.type}
              onChange={onInputChange}
              className="border border-[#FFA726] focus:ring-[#FFA726] rounded px-3 py-2 bg-white"
            >
              <option value="">All Types</option>
              <option value="Express">Express</option>
              <option value="Superfast">Superfast</option>
              <option value="Rajdhani">Rajdhani</option>
              <option value="Shatabdi">Shatabdi</option>
            </select>
          </div>
          <Button
            onClick={handleSearch}
            className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white"
          >
            Search Trains
          </Button>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto p-8">
        {results.length === 0 ? (
          <p className="text-center text-xl text-[#424242]">No trains found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((train) => {
              const dateField =
                train.dateTime ||
                train.DateTime ||
                train.departureTime ||
                train.departure_date;
              return (
                <Card
                  key={train.$id}
                  className={`border ${
                    train.status === "active"
                      ? "border-[#FFA726]"
                      : "border-red-500"
                  }`}
                >
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-[#424242]">
                      {train.name} - {train.type}
                    </h3>
                    <p className="text-[#424242] mt-2">
                      <span className="font-medium">Route:</span> {train.from} →{" "}
                      {train.to}
                    </p>
                    <p className="text-[#424242]">
                      <span className="font-medium">Departure:</span>{" "}
                      {formatDateTime(dateField)}
                    </p>
                    <p className="text-[#424242]">
                      <span className="font-medium">Available Seats:</span>{" "}
                      {train.availableSeats}
                    </p>
                    <p className="text-[#424242]">
                      <span className="font-medium">Price per Seat:</span> $
                      {train.price}
                    </p>
                    <p className="text-[#424242]">
                      <span className="font-medium">Status:</span>{" "}
                      <span
                        className={`${
                          train.status === "active"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {train.status}
                      </span>
                    </p>

                    {train.availableSeats > 0 && train.status === "active" ? (
                      <Button
                        onClick={() => handleBookNow(train)}
                        className="mt-4 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white"
                      >
                        Book Now
                      </Button>
                    ) : (
                      <p className="mt-4 text-red-600">
                        {train.status === "active"
                          ? "No seats available"
                          : "Train is not active"}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
