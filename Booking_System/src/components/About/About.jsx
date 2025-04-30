import React from "react";
import { Button } from "../ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF3E0]">
      {/* Header */}
      <header className="w-full bg-white shadow-2xl top-0 z-50 border-b border-[#FFF9C4] rounded-b-lg">
        <div className="container mx-auto flex justify-center items-center p-6">
          <h1 className="text-4xl font-bold text-[#424242]">About Us</h1>
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
        {/* Text Container on top of Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#FB8C00]">
              Who We Are
            </h2>
            <p className="mt-4 text-xl text-[#424242]">
              Journey with us into a world of unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <main className="container mx-auto p-8 space-y-12">
        <section>
          <h3 className="text-3xl font-bold text-[#424242] mb-4">Our Story</h3>
          <p className="text-lg text-[#424242]">
            Founded in 2025, our company is dedicated to making travel simple and accessible.
            With a passion for adventure and a commitment to quality, we have grown to offer a wide range of travel services,
            including trips, hotel bookings, bus tours, and homestays.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-[#424242] mb-4">Our Mission</h3>
          <p className="text-lg text-[#424242]">
            Our mission is to create seamless and memorable travel experiences for every customer.
            We strive to bring you the best deals, the most reliable services, and inspiring destinations to explore.
            Whether you're planning a family vacation, a solo adventure, or a business trip, we're here to help every step of the way.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-[#424242] mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-[#424242] space-y-2">
            <li>
              <strong>Integrity:</strong> We believe in honest and transparent communication.
            </li>
            <li>
              <strong>Innovation:</strong> We constantly evolve to offer cutting-edge travel solutions.
            </li>
            <li>
              <strong>Customer-Centricity:</strong> Your satisfaction is our top priority.
            </li>
            <li>
              <strong>Quality:</strong> We partner with the best providers to ensure a premium experience.
            </li>
          </ul>
        </section>

        <section className="text-center">
          <Button className="bg-[#FB8C00] hover:bg-[#FB8C00] text-white px-8 py-3"
         
          >
            Contact Us
          </Button>
        </section>
      </main>

     <br />
    </div>
  );
}
