import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Homestays() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-black text-orange-400 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Homestay Booking</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Homestays
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Destinations
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
          className="bg-cover bg-center h-72"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 shadow-xl shadow-orange-400">
            Experience Local Living
          </h2>
          <p className="mt-4 text-xl text-yellow-100">
            Find unique homestays around the world
          </p>
          <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Explore Now
          </Button>
        </div>
      </section>

      {/* Filter & Listings Section */}
      <main className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Sidebar */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black mb-4">Filters</h3>
          <div className="space-y-4 text-white">
            <Input
              placeholder="Location"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Check-In"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Check-Out"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Select
              defaultValue="Any"
              className="border-orange-400 focus:ring-orange-400"
            >
              <SelectItem value="Any">Price Range: Any</SelectItem>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-200">$100 - $200</SelectItem>
            </Select>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Apply Filters
            </Button>
          </div>
        </aside>

        {/* Listings Grid */}
        <section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Cozy Cottage"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">
                Cozy Cottage in the Countryside
              </h4>
              <p className="text-gray-700 mt-2">
                Experience tranquility in a beautiful countryside setting.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$120/night</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Modern Villa"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">
                Modern Villa with Pool
              </h4>
              <p className="text-gray-700 mt-2">
                Enjoy luxury living with modern amenities and a private pool.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$200/night</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="City Apartment"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">
                City Apartment Homestay
              </h4>
              <p className="text-gray-700 mt-2">
                Stay in the heart of the city with all modern comforts.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$150/night</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Beachside Resort"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">
                Beachside Resort Homestay
              </h4>
              <p className="text-gray-700 mt-2">
                Enjoy a relaxing stay with sea views and comfortable amenities.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$180/night</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-orange-400 p-6 text-center">
        <p>© 2025 Homestay Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}
