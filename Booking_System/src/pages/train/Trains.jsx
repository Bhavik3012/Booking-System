import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTrains } from "../../services/trainService";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { account } from "../../lib/appwrite";

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

const Trains = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await account.get();
        setIsAuthenticated(!!user);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        setLoading(true);
        const response = await getAllTrains();
        setTrains(response.documents);
        setError(null);
      } catch (error) {
        console.error("Error fetching trains:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchTrains();
    }
  }, [isAuthenticated]);

  const filteredTrains = trains.filter(train => 
    train.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to view trains</h2>
          <Link to="/login">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading trains...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#424242] mb-8 text-center">
          Available Trains
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search trains by name or route..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredTrains.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600">No trains found</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrains.map((train) => (
              <Card key={train.$id} className="p-6">
                <h3 className="text-xl font-bold mb-2">{train.name}</h3>
                <p className="text-gray-600 mb-2">{train.route}</p>
                <p className="text-gray-600 mb-2">
                  {formatDateTime(train.dateTime)}
                </p>
                <p className="text-gray-600 mb-2">
                  Available Seats: {train.availableSeats}
                </p>
                <p className="text-gray-600 mb-4">
                  Price per seat: ${train.pricePerSeat}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    train.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {train.status}
                  </span>
                  {train.availableSeats > 0 && train.status === 'active' ? (
                    <Link to={`/train/${train.$id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        View Details
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      className="bg-gray-300 text-gray-600 cursor-not-allowed"
                      disabled
                    >
                      Not Available
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trains; 