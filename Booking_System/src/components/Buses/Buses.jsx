// src/components/Buses/Buses.jsx
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
  VITE_APPWRITE_COLLECTION_ID_BUSES: BUSES_COLL,
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

export default function Buses() {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    date: "",
    type: "",
  });
  const [allBuses, setAllBuses] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);

  // Load current user
  useEffect(() => {
    authService
      .getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // Load all buses + build dropdown options
  useEffect(() => {
    (async () => {
      try {
        const { documents } = await databases.listDocuments(
          DB_ID,
          BUSES_COLL,
          []
        );
        setAllBuses(documents);
        setResults(documents);
        setFromCities([...new Set(documents.map((b) => b.from))].sort());
        setToCities([...new Set(documents.map((b) => b.to))].sort());
      } catch (err) {
        console.error("Error loading buses:", err);
      }
    })();
  }, []);

  // Fetch with filters
  const fetchBuses = async (queryFilters = {}) => {
    try {
      const queries = Object.entries(queryFilters)
        .filter(([, v]) => v)
        .map(([k, v]) => Query.equal(k, v));
      const { documents } = await databases.listDocuments(
        DB_ID,
        BUSES_COLL,
        queries
      );
      setResults(documents);
    } catch (err) {
      console.error("Error fetching buses:", err);
    }
  };

  const handleSearch = () => fetchBuses(filters);
  const onInputChange = (e) =>
    setFilters((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleBookNow = async (bus) => {
    const current = await authService.getCurrentUser().catch(() => null);
    if (!current) {
      alert("Please log in to book a bus.");
      return void (window.location.href = "/login");
    }
    window.location.href = `/checkout?busId=${bus.$id}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0]">
      {/* Hero */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FB8C00]">
              Travel in Comfort & Style
            </h2>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto p-8 mt-6">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-[#424242] mb-6">
            Find Your Bus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <select
              name="from"
              value={filters.from}
              onChange={onInputChange}
              className="border border-[#FFA726] focus:ring-[#FFA726] rounded px-3 py-2 bg-white"
            >
              <option value="">Any Origin</option>
              {fromCities.map((c) => (
                <option key={c} value={c}>
                  {c}
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
              {toCities.map((c) => (
                <option key={c} value={c}>
                  {c}
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
              <option value="AC">AC</option>
              <option value="NonAC">Non AC</option>
              <option value="Sleeper">Sleeper</option>
            </select>
          </div>
          <Button
            onClick={handleSearch}
            className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white"
          >
            Search Buses
          </Button>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto p-8">
        {results.length === 0 ? (
          <p className="text-center text-xl text-[#424242]">No buses found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((bus) => {
              // Use your Appwrite attribute key "DateTime" here:
              const iso = bus.DateTime;
              return (
                <Card
                  key={bus.$id}
                  className="border border-[#FFA726] hover:shadow-2xl transition duration-300"
                >
                  <CardContent className="p-4">
                    <h4 className="font-bold text-lg text-[#424242]">
                      {bus.from} — {bus.to}
                    </h4>
                    <p className="mt-2 text-[#424242]">DateTime: {formatDateTime(iso)}</p>
                    <p className="text-[#424242]">
                      <span className="font-medium">Type:</span> {bus.type}
                    </p>
                    <p className="text-sm text-[#757575] mt-1">
                      {bus.description}
                    </p>
                    <Button
                      onClick={() => handleBookNow(bus)}
                      className="mt-4 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white"
                    >
                      Book Now
                    </Button>
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
