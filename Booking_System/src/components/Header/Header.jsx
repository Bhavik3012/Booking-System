import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b border-yellow-300 rounded-b-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center transform transition duration-500 hover:scale-105"
          >
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-8">
            {["Home", "Trains", "Flights", "Hotels", "About"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={item === "Home" ? "/" : `/${item}`}
                  className={({ isActive }) =>
                    `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition transform duration-300 ease-in-out ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                        : "text-gray-800 hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 hover:text-gray-900"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </div>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center">
            <div className="hidden lg:flex space-x-4">
              <Link
                to="#"
                className="px-4 py-2 text-sm font-medium text-orange-600 bg-white rounded-md shadow hover:bg-gray-100 transform transition duration-300 ease-in-out hover:scale-105"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md shadow hover:bg-orange-700 transform transition duration-300 ease-in-out hover:scale-105"
              >
                Get Started
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 transform transition duration-300 ease-in-out"
              >
                <span className="sr-only">Toggle main menu</span>
                {menuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2">
            <ul className="space-y-1 px-2 pb-3">
              {["Home", "Trains", "Flights", "Hotels", "About"].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item === "Home" ? "/" : `/${item}`}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium transition transform duration-300 ease-in-out ${
                          isActive
                            ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 hover:text-gray-900"
                        }`
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
              <li className="mt-2 flex space-x-2 px-3">
                <Link
                  to="#"
                  className="flex-1 px-4 py-2 text-sm font-medium text-orange-600 bg-white rounded-md shadow hover:bg-gray-100 transition transform duration-300 ease-in-out hover:scale-105 text-center"
                >
                  Log in
                </Link>
                <Link
                  to="#"
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md shadow hover:bg-orange-700 transition transform duration-300 ease-in-out hover:scale-105 text-center"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
