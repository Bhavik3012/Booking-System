// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FFF3E0] w-full border-t border-[#FFA726] pt-8 pb-4 rounded-t-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo & Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center">
              <img
                src="https://www.cdnlogo.com/logos/b/94/booking-com.svg"
                className="mr-3 h-16"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FB8C00]">
                
              </span>
            </Link>
            <p className="mt-4 text-[#424242]">
              Your one-stop solution for all travel bookings. Experience
              seamless journeys with unbeatable deals and top-notch service.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-2/3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#424242] uppercase">
                Company
              </h2>
              <ul className="text-[#424242] font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:text-[#FB8C00]">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:text-[#FB8C00]">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/careers" className="hover:text-[#FB8C00]">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/blog" className="hover:text-[#FB8C00]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#424242] uppercase">
                Services
              </h2>
              <ul className="text-[#424242] font-medium">
                <li className="mb-4">
                  <Link to="/trains" className="hover:text-[#FB8C00]">
                    Trains
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/flights" className="hover:text-[#FB8C00]">
                    Flights
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/hotels" className="hover:text-[#FB8C00]">
                    Hotels
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/trips" className="hover:text-[#FB8C00]">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#424242] uppercase">
                Support
              </h2>
              <ul className="text-[#424242] font-medium">
                <li className="mb-4">
                  <Link to="/about" className="hover:text-[#FB8C00]">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/faq" className="hover:text-[#FB8C00]">
                    FAQ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/terms" className="hover:text-[#FB8C00]">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/privacy" className="hover:text-[#FB8C00]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#424242] uppercase">
                Follow Us
              </h2>
              <ul className="text-[#424242] font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Bhavik3012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FB8C00]"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FB8C00]"
                  >
                    Discord
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FB8C00]"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FB8C00]"
                  >
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#FFA726]" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-[#424242] sm:text-center">
            © {new Date().getFullYear()} Booking System. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
