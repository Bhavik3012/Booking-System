// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { FiUser } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current user (or null) on mount
    authService.getCurrentUser().then(setUser);
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    navigate("/login", { replace: true });
  };

  const navItems = [
    "Home",
    "Trains",
    "Flights",
    "Hotels",
    "Buses",
    "Homestays",
    "Trips",
    "About",
  ];

  return (
    <header className="w-full bg-[#FFF3E0] shadow-2xl sticky top-0 z-50 border-b border-[#FFF9C4] rounded-b-lg">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center transform transition hover:scale-105"
          >
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-1 rounded-md text-base font-medium transition transform duration-300 hover:scale-105 ${
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

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center">
            <div className="hidden lg:flex space-x-2">
              {user ? (
                <>
                  {/* Profile Icon */}
                  <Link
                    to="/profile"
                    className="p-2 text-[#424242] hover:text-[#FFA726] transition hover:scale-105"
                  >
                    <FiUser size={24} />
                  </Link>
                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 bg-[#FFA726] hover:bg-[#FB8C00] text-white rounded-md shadow transition hover:scale-105"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-1 text-[#424242] bg-white rounded-md shadow transition hover:scale-105 hover:bg-[#FFF9C4]"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="px-3 py-1 text-white bg-[#FB8C00] rounded-md shadow transition hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#424242] hover:text-white hover:bg-[#FFA726] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFA726] transition hover:scale-105"
              >
                <span className="sr-only">Toggle main menu</span>
                {menuOpen ? (
                  <svg
                    className="h-6 w-6"
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
                    className="h-6 w-6"
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
              {navItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition hover:scale-105 ${
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

              {user ? (
                <>
                  <li>
                    <Link
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#424242] hover:bg-[#FFF9C4] hover:text-[#FFA726] transition hover:scale-105"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[#FFA726] text-white hover:bg-[#FB8C00] transition hover:scale-105"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="flex space-x-2">
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 px-3 py-2 text-base font-medium text-[#424242] bg-white rounded-md shadow hover:bg-[#FFF9C4] hover:scale-105 text-center"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 px-3 py-2 text-base font-medium text-white bg-[#FB8C00] rounded-md shadow hover:scale-105 text-center"
                  >
                    Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
