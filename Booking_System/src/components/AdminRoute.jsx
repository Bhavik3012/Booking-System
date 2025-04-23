import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import authService from "../services/authService";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const adminStatus = await authService.isAdmin();
        setIsAdmin(adminStatus);
      } catch (error) {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Checking admin access...</p>;
  }

  return isAdmin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AdminRoute; 