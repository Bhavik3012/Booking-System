import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Trips() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-black text-orange-400 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Trips & Adventures</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Trips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Packages
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
          className="bg-cover bg-center h-80"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 shadow-xl shadow-orange-400">
            Embark on Your Next Adventure
          </h2>
          <p className="mt-4 text-xl text-yellow-100">
            Discover exclusive trip packages and unforgettable journeys
          </p>
          <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Explore Trips
          </Button>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black mb-4">Search Trips</h3>
          <div className="space-y-4 text-white">
            <Input
              placeholder="Destination"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="Start Date"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Input
              type="date"
              placeholder="End Date"
              className="border-orange-400 focus:ring-orange-400"
            />
            <Select
              defaultValue="Adventure"
              className="border-orange-400 focus:ring-orange-400"
            >
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Leisure">Leisure</SelectItem>
              <SelectItem value="Cultural">Cultural</SelectItem>
              <SelectItem value="Wildlife">Wildlife</SelectItem>
            </Select>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Apply Filters
            </Button>
          </div>
        </aside>

        {/* Trips Listings Grid */}
        <section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Mountain Adventure"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">
                Mountain Adventure
              </h4>
              <p className="text-gray-700 mt-2">
                Conquer peaks and explore hidden trails on this thrilling
                expedition.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$250/person</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Cultural Expedition"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">
                Cultural Expedition
              </h4>
              <p className="text-gray-700 mt-2">
                Immerse yourself in rich history and vibrant traditions.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$180/person</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Beach Getaway"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">Beach Getaway</h4>
              <p className="text-gray-700 mt-2">
                Relax on pristine beaches and enjoy the soothing ocean breeze.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$220/person</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-orange-300 hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/355423/pexels-photo-355423.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Wildlife Safari"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-black">Wildlife Safari</h4>
              <p className="text-gray-700 mt-2">
                Get up close with nature on an exhilarating safari adventure.
              </p>
              <p className="mt-2 text-orange-500 font-semibold">$300/person</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>

      {/* Call-to-Action Banner */}
      <section className="bg-orange-500 text-black p-8 rounded-lg container mx-auto my-8">
        <h3 className="text-3xl font-bold">Plan Your Dream Trip Today</h3>
        <p className="mt-4 text-xl">
          Exclusive deals, tailored experiences, and unforgettable journeys
          await you.
        </p>
        <Button className="mt-6 bg-black hover:bg-gray-800 text-orange-400 px-8 py-3">
          Discover More
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-orange-400 p-6 text-center">
        <p>© 2025 Trips & Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
}
