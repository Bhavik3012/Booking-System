import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Hotels() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-black text-orange-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Hotel Booking</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container text-white mx-auto p-8 space-y-12">
        {/* Search Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Find Your Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="City or Destination"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              placeholder="Hotel Name (Optional)"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Check-In Date"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Check-Out Date"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Select
              defaultValue="Standard"
              className="border-orange-400 focus:ring-orange-400"
            >
              <SelectItem value="Standard">Standard Room</SelectItem>
              <SelectItem value="Deluxe">Deluxe Room</SelectItem>
              <SelectItem value="Suite">Suite</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white">
            Search Hotels
          </Button>
        </section>

        {/* Popular Destinations Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-orange-300 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black">New York</h3>
                <p className="text-gray-700 mt-2">
                  Experience the best hotels in the city that never sleeps.
                </p>
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-orange-300 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black">Paris</h3>
                <p className="text-gray-700 mt-2">
                  Luxury stays and cozy hotels for an unforgettable experience.
                </p>
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-orange-300 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black">Dubai</h3>
                <p className="text-gray-700 mt-2">
                  Modern hotels with world-class amenities await you.
                </p>
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="bg-orange-500 text-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold">Special Offers</h2>
          <p className="mt-4 text-lg">
            Enjoy exclusive discounts on top hotels. Book now and save up to 30%
            on your stay.
          </p>
          <Button className="mt-6 bg-black hover:bg-gray-800 text-orange-400">
            View Offers
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-orange-400 p-4 text-center">
        <p>© 2025 Hotel Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}
