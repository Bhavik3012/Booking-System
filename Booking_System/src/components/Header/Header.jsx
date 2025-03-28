import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF3E0] shadow-2xl sticky top-0 z-50 border-b border-[#FFF9C4] rounded-b-lg">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center transform transition duration-300 hover:scale-105"
          >
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-6">
            {[
              "Home",
              "Trains",
              "Flights",
              "Hotels",
              "Buses",
              "Homestays",
              "Trips",
              "About",
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item}`}
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-1 rounded-md text-base font-medium transition transform duration-300 ease-in-out hover:scale-105 ${
                    isActive
                      ? "bg-[#FFA726] text-white shadow-md"
                      : "text-[#424242] hover:bg-[#FFF9C4] hover:text-[#FFA726]"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center">
            <div className="hidden lg:flex space-x-2">
              <Link
                to="/login"
                className="px-3 py-1 text-base font-medium text-[#424242] bg-white rounded-md shadow transition transform duration-300 ease-in-out hover:scale-105 hover:bg-[#FFF9C4]"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 text-base font-medium text-white bg-[#FB8C00] rounded-md shadow transition transform duration-300 ease-in-out hover:scale-105"
              >
                Get Started
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#424242] hover:text-white hover:bg-[#FFA726] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFA726] transition transform duration-300 ease-in-out hover:scale-105"
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
            <ul className="space-y-2 px-2 pb-3">
              {[
                "Home",
                "Trains",
                "Flights",
                "Buses",
                "Hotels",
                "Homestays",
                "Trips",
                "About",
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item}`}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition transform duration-300 ease-in-out hover:scale-105 ${
                        isActive
                          ? "bg-[#FFA726] text-white shadow-md"
                          : "text-[#424242] hover:bg-[#FFF9C4] hover:text-[#FFA726]"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 flex space-x-2 px-2">
                <Link
                  to="/login"
                  className="flex-1 px-3 py-2 text-base font-medium text-[#424242] bg-white rounded-md shadow transition transform duration-300 ease-in-out hover:scale-105 hover:bg-[#FFF9C4] text-center"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 px-3 py-2 text-base font-medium text-white bg-[#FB8C00] rounded-md shadow transition transform duration-300 ease-in-out hover:scale-105 text-center"
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
