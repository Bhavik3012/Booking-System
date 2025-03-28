import React from "react";
import { Button } from "../ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-black text-orange-400 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/trips" className="hover:text-orange-300">
                  Trips
                </a>
              </li>
              <li>
                <a href="/hotels" className="hover:text-orange-300">
                  Hotels
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-80"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-400">
            Who We Are
          </h2>
          <p className="mt-4 text-xl text-yellow-100">
            Journey with us into a world of unforgettable experiences.
          </p>
        </div>
      </section>

      {/* About Content */}
      <main className="container mx-auto p-8 space-y-12">
        <section>
          <h3 className="text-3xl font-bold text-black mb-4">Our Story</h3>
          <p className="text-lg text-gray-700">
            Founded in 2020, our company is dedicated to making travel simple
            and accessible. With a passion for adventure and a commitment to
            quality, we have grown to offer a wide range of travel services,
            including trips, hotel bookings, bus tours, and homestays.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-black mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700">
            Our mission is to create seamless and memorable travel experiences
            for every customer. We strive to bring you the best deals, the most
            reliable services, and inspiring destinations to explore. Whether
            you're planning a family vacation, a solo adventure, or a business
            trip, we're here to help every step of the way.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-black mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <strong>Integrity:</strong> We believe in honest and transparent
              communication.
            </li>
            <li>
              <strong>Innovation:</strong> We constantly evolve to offer
              cutting-edge travel solutions.
            </li>
            <li>
              <strong>Customer-Centricity:</strong> Your satisfaction is our top
              priority.
            </li>
            <li>
              <strong>Quality:</strong> We partner with the best providers to
              ensure a premium experience.
            </li>
          </ul>
        </section>

        <section className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Contact Us
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-orange-400 p-6 text-center">
        <p>© 2025 Our Travel Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
