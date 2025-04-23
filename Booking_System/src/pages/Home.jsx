import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllBuses } from '../services/busService';
import BusCard from '../components/BusCard';

function Home() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        setLoading(true);
        const busList = await getAllBuses();
        setBuses(busList);
        setError(null);
      } catch (error) {
        console.error('Error fetching buses:', error);
        setError('Failed to load buses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, [location.key]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  if (buses.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        No buses available at the moment.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {buses.map((bus) => (
        <BusCard key={bus.$id} bus={bus} />
      ))}
    </div>
  );
}

export default Home; 