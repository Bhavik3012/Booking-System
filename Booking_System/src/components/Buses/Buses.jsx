// src/components/Buses/Buses.jsx
import React, { useState, useEffect } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

import { databases } from "../../lib/appwrite";
import authService from "../../services/authService";
import { Query } from "appwrite";

// Use Vite env variables
const {
  VITE_APPWRITE_DATABASE_ID: DB_ID,
  VITE_APPWRITE_COLLECTION_ID_BUSES: BUSES_COLL,
} = import.meta.env;

export default function Buses() {
  // form state
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    date: "",
    type: "",
  });
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);

  // check current user on mount
  useEffect(() => {
    authService
      .getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // initial fetch
  useEffect(() => {
    fetchBuses();
  }, []);

  // fetch buses with optional filters
  const fetchBuses = async (queryFilters = {}) => {
    try {
      const queries = [];
      Object.entries(queryFilters).forEach(([key, value]) => {
        if (value) queries.push(Query.equal(key, value));
      });
      const res = await databases.listDocuments(DB_ID, BUSES_COLL, queries);
      setResults(res.documents);
    } catch (err) {
      console.error("Error fetching buses:", err);
    }
  };

  const handleSearch = () => fetchBuses(filters);

  const handleBookNow = async (bus) => {
    const current = await authService.getCurrentUser().catch(() => null);
    if (!current) {
      alert("Please log in to book a bus.");
      window.location.href = "/login";
      return;
    }
    // Navigate to checkout or create booking
    window.location.href = `/checkout?busId=${bus.$id}`;
  };

  const onChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-[#FFF3E0]">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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

      {/* Search Section */}
      <section className="container mx-auto p-8 mt-6">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-[#424242] mb-6">
            Find Your Bus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input
              name="from"
              value={filters.from}
              onChange={onChange}
              placeholder="From City/Stop"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              name="to"
              value={filters.to}
              onChange={onChange}
              placeholder="To City/Stop"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              name="date"
              type="date"
              value={filters.date}
              onChange={onChange}
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              name="type"
              value={filters.type}
              onChange={(value) => setFilters((f) => ({ ...f, type: value }))}
              className="border-[#FFA726] bg-white focus:ring-[#FFA726]"
            >
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="AC">AC</SelectItem>
              <SelectItem value="NonAC">Non AC</SelectItem>
              <SelectItem value="Sleeper">Sleeper</SelectItem>
            </Select>
          </div>
          <Button
            onClick={handleSearch}
            className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white"
          >
            Search Buses
          </Button>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto p-8">
        {results.length === 0 ? (
          <p className="text-center text-xl text-[#424242]">No buses found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((bus) => (
              <Card
                key={bus.$id}
                className="border border-[#FFA726] hover:shadow-2xl transition duration-300"
              >
                <img
                  src={bus.Image}
                  alt={`${bus.from} to ${bus.to}`}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg text-[#424242]">
                    {bus.from} — {bus.to}
                  </h4>
                  <p className="mt-2 text-[#424242]">Date: {bus.date}</p>
                  <p className="text-[#424242]">Type: {bus.type}</p>
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
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
