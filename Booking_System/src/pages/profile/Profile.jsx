// src/pages/profile/Profile.jsx
import React, { useState, useEffect } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((u) => setUser(u))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
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
    <div className="min-h-screen bg-[#FFF3E0] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
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
              {new Date(user.$createdAt).toLocaleDateString()}
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
    </div>
  );
}
