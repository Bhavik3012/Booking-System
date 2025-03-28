import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Homestays() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* HERO SECTION */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-96 md:h-[500px]"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-90 p-8 md:p-10 rounded-xl shadow-xl text-center max-w-2xl mx-4">
            <h2 className="text-4xl md:text-6xl font-bold text-[#FB8C00]">
              Experience Local Living
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-[#424242]">
              Find unique homestays around the world that offer authentic local experiences.
            </p>
            <Button className="mt-6 bg-[#FFA726] hover:bg-[#FB8C00] text-white px-8 py-3 text-lg font-semibold rounded-full transition duration-300">
              Explore Now
            </Button>
          </div>
        </div>
      </section>

      {/* FILTER & LISTINGS SECTION */}
      <main className="container mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8 flex-grow">
        {/* Filter Sidebar */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-[#424242] mb-4">Filters</h3>
          <div className="space-y-4">
            <Input
              placeholder="Location"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Check-In"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Check-Out"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              defaultValue="Any"
              className="border-[#FFA726] focus:ring-[#FFA726] bg-white"
            >
              <SelectItem value="Any">Price Range: Any</SelectItem>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-200">$100 - $200</SelectItem>
            </Select>
            <Button className="w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
              Apply Filters
            </Button>
          </div>
        </aside>

        {/* Listings Grid */}
        <section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Listing Card 1 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Cozy Cottage in the Countryside"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Cozy Cottage in the Countryside
              </h4>
              <p className="text-gray-700 mt-2">
                Experience tranquility in a beautiful countryside setting.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$120/night</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          {/* Listing Card 2 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Modern Villa with Pool"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Modern Villa with Pool
              </h4>
              <p className="text-gray-700 mt-2">
                Enjoy luxury living with modern amenities and a private pool.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$200/night</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          {/* Listing Card 3 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="City Apartment Homestay"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                City Apartment Homestay
              </h4>
              <p className="text-gray-700 mt-2">
                Stay in the heart of the city with all modern comforts.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$150/night</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          {/* Listing Card 4 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Beachside Resort Homestay"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Beachside Resort Homestay
              </h4>
              <p className="text-gray-700 mt-2">
                Enjoy a relaxing stay with sea views and comfortable amenities.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$180/night</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#FFF9C4] py-6">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center text-[#424242] text-lg">
          © {new Date().getFullYear()} Homestay Booking. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
