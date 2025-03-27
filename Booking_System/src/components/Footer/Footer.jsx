import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-yellow-300 pt-8 pb-4 rounded-t-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo & Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">
                Booking System
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your one-stop solution for all travel bookings. Experience
              seamless journeys with unbeatable deals and top-notch service.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-2/3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Services
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <Link to="/trains" className="hover:underline">
                    Trains
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/flights" className="hover:underline">
                    Flights
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/hotels" className="hover:underline">
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="hover:underline">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Support
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow Us
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Bhavik3012"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Dribbble
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025{" "}
            <a
              href="https://github.com/Bhavik3012"
              className="hover:underline text-orange-600"
            >
              bhaviksongara
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.5-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.853-3.039-1.853 0-2.137 1.447-2.137 2.942v5.666H9.347V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.367-1.848 3.6 0 4.266 2.371 4.266 5.455v6.284zM5.337 7.433a2.063 2.063 0 1 1 .001-4.126 2.063 2.063 0 0 1-.001 4.126zM6.863 20.452H3.812V9h3.051v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.451C0 23.208.792 24 1.771 24h20.451C23.208 24 24 23.208 24 22.225V1.771C24 .792 23.208 0 22.225 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
