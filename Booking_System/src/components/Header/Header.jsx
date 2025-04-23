// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { FiUser } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current user (or null) on mount
    authService.getCurrentUser().then(async (user) => {
      setUser(user);
      if (user) {
        const adminStatus = await authService.isAdmin();
        setIsAdmin(adminStatus);
      }
    });
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    setIsAdmin(false);
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
              src="https://www.cdnlogo.com/logos/b/94/booking-com.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-[#424242] hover:text-[#FFA726] transition ${
                    isActive ? "text-[#FFA726] font-medium" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center">
            <div className="hidden lg:flex space-x-2">
              {user ? (
                <>
                  {/* Admin Link */}
                  {isAdmin && (
                    <Link
                      to="/admin/create-admin"
                      className="px-3 py-1 text-[#424242] bg-white rounded-md shadow transition hover:scale-105 hover:bg-[#FFF9C4]"
                    >
                      Admin
                    </Link>
                  )}
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
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-[#424242] hover:text-[#FFA726] transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden">
            <ul className="space-y-4 py-4">
              {navItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-[#FFA726] bg-[#FFF9C4]"
                          : "text-[#424242] hover:bg-[#FFF9C4] hover:text-[#FFA726]"
                      } transition hover:scale-105`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              {user ? (
                <>
                  {isAdmin && (
                    <li>
                      <Link
                        to="/admin/create-admin"
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#424242] hover:bg-[#FFF9C4] hover:text-[#FFA726] transition hover:scale-105"
                      >
                        Admin
                      </Link>
                    </li>
                  )}
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
