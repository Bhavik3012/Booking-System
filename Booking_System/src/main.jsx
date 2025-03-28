import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
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
} from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/trains",
        element: <Trains />,
      },
      {
        path: "/Buses",
        element: <Buses />,
      },
      {
        path: "/Homestays",
        element: <Homestays />,
      },
      {
        path: "/Trips",
        element: <Trips />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
