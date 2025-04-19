import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import authService from "../services/authService"; 

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Checking access...</p>;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
