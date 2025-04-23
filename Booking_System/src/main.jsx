// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import {
  Home,
  About,
  Flights,
  Hotels,
  Trains,
  Buses,
  Homestays,
  Trips,
  Login,
  SignUp,
  PrivateRoute,
} from "./components/index";

import BookingHistory from "./pages/bookings/BookingHistory";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import CreateAdmin from "./components/Admin/CreateAdmin";
import AdminRoute from "./components/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Public routes
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "flights", element: <Flights /> },
      { path: "hotels", element: <Hotels /> },
      { path: "trains", element: <Trains /> },
      { path: "buses", element: <Buses /> },
      { path: "homestays", element: <Homestays /> },
      { path: "trips", element: <Trips /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },

      // Protected routes
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <BookingHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      // Admin routes
      {
        path: "admin/create-admin",
        element: (
          <AdminRoute>
            <CreateAdmin />
          </AdminRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
