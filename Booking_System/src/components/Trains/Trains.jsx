import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Train() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-black text-orange-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Train Booking</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Book
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
      <main className="container mx-auto p-8 space-y-12">
        {/* Search Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Find Your Train
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="From Station"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              placeholder="To Station"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Journey Date"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Select
              defaultValue="sleeper"
              className="border-orange-400 focus:ring-orange-400"
            >
              <SelectItem value="sleeper">Sleeper</SelectItem>
              <SelectItem value="3AC">3AC</SelectItem>
              <SelectItem value="2AC">2AC</SelectItem>
              <SelectItem value="1AC">1AC</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white">
            Search Trains
          </Button>
        </section>

        {/* Popular Routes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-orange-300 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black">Mumbai - Delhi</h3>
                <p className="text-gray-700 mt-2">
                  Fast and comfortable trains available.
                </p>
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-orange-300 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black">
                  Bangalore - Chennai
                </h3>
                <p className="text-gray-700 mt-2">
                  High-speed and regular trains offered.
                </p>
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-orange-300 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black">
                  Kolkata - Hyderabad
                </h3>
                <p className="text-gray-700 mt-2">
                  Experience comfort and convenience.
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
            Enjoy exclusive discounts up to 30% on selected routes. Book now and
            embark on a hassle-free journey.
          </p>
          <Button className="mt-6 bg-black hover:bg-gray-800 text-orange-400">
            View Offers
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-orange-400 p-4 text-center">
        <p>© 2025 Train Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}
