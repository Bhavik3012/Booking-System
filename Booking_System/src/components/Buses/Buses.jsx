import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Buses() {
  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Header */}
      <header className="bg-black text-orange-400 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Bus Booking</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Buses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Routes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
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
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 shadow-xl shadow-orange-500">
            Travel in Comfort & Style
          </h2>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto p-8 mt-6">
        <div className="bg-white p-8 rounded-lg shadow-2xl text-white">
          <h3 className="text-2xl font-bold text-black mb-6">Find Your Bus</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              placeholder="From City/Stop"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              placeholder="To City/Stop"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Travel Date"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Select
              defaultValue="AC"
              className="border-orange-400 focus:ring-orange-400"
            >
              <SelectItem value="AC">AC</SelectItem>
              <SelectItem value="NonAC">Non AC</SelectItem>
              <SelectItem value="Sleeper">Sleeper</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white">
            Search Buses
          </Button>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="container mx-auto p-8">
        <h3 className="text-2xl font-bold text-black mb-6">
          Popular Bus Routes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-black">Mumbai - Pune</h4>
              <p className="text-gray-700 mt-2">
                Multiple departures daily with comfortable seating.
              </p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-black">Delhi - Agra</h4>
              <p className="text-gray-700 mt-2">
                Quick and affordable services available.
              </p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-black">
                Bangalore - Mysore
              </h4>
              <p className="text-gray-700 mt-2">
                Frequent and punctual services.
              </p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-black">
                Chennai - Coimbatore
              </h4>
              <p className="text-gray-700 mt-2">
                Comfortable journeys with top-notch services.
              </p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="bg-orange-500 text-black p-8 rounded-lg container mx-auto mb-8">
        <h3 className="text-2xl font-bold">Exclusive Bus Offers</h3>
        <p className="mt-4 text-lg">
          Avail exciting discounts and deals on bus tickets. Enjoy hassle-free
          journeys at unbeatable prices.
        </p>
        <Button className="mt-6 bg-black hover:bg-gray-800 text-orange-400">
          View Offers
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-orange-400 p-6 text-center">
        <p>© 2025 Bus Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}
