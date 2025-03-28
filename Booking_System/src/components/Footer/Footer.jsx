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
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FB8C00]">
                Booking System
              </span>
            </Link>
            <p className="mt-4 text-[#424242]">
              Your one-stop solution for all travel bookings. Experience
              seamless journeys with unbeatable deals and top-notch service.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-2/3">
            {[
              { title: "Company", links: ["Home", "About Us", "Careers", "Blog"] },
              { title: "Services", links: ["Trains", "Flights", "Hotels", "Packages"] },
              { title: "Support", links: ["Contact Us", "FAQ", "Terms & Conditions", "Privacy Policy"] },
              { title: "Follow Us", links: ["GitHub", "Discord", "Twitter", "Dribbble"] },
            ].map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-[#424242] uppercase">
                  {section.title}
                </h2>
                <ul className="text-[#424242] font-medium">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-4">
                      <Link to="#" className="hover:text-[#FB8C00]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-[#FFA726]" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-[#424242] sm:text-center">
            © 2025
            <a href="https://github.com/Bhavik3012" className="hover:text-[#FB8C00] ml-1">
              bhaviksongara
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {["Facebook", "Instagram", "LinkedIn"].map((platform, index) => (
              <Link key={index} to="#" className="text-[#424242] hover:text-[#FB8C00]">
                <span className="sr-only">{platform}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {/* Placeholder Path */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
