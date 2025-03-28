import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Trips() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl text-center max-w-2xl mx-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FB8C00]">
              Embark on Your Next Adventure
            </h2>
            <p className="mt-4 text-lg md:text-2xl text-[#424242]">
              Discover exclusive trip packages and unforgettable journeys.
            </p>
            <Button className="mt-6 bg-[#FFA726] hover:bg-[#FB8C00] text-white px-8 py-3 text-lg font-semibold rounded-full transition duration-300">
              Explore Trips
            </Button>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH SECTION */}
      <section className="container mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8 flex-grow">
        {/* Filter Sidebar */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-[#424242] mb-4">Search Trips</h3>
          <div className="space-y-4">
            <Input
              placeholder="Destination"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Start Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="End Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              defaultValue="Adventure"
              className="border-[#FFA726] focus:ring-[#FFA726] bg-white"
            >
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Leisure">Leisure</SelectItem>
              <SelectItem value="Cultural">Cultural</SelectItem>
              <SelectItem value="Wildlife">Wildlife</SelectItem>
            </Select>
            <Button className="w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
              Apply Filters
            </Button>
          </div>
        </aside>

        {/* Trips Listings Grid */}
        <section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Listing Card 1 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Mountain Adventure"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Mountain Adventure
              </h4>
              <p className="text-[#424242] mt-2">
                Conquer peaks and explore hidden trails on this thrilling expedition.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$250/person</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Listing Card 2 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Cultural Expedition"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Cultural Expedition
              </h4>
              <p className="text-[#424242] mt-2">
                Immerse yourself in rich history and vibrant traditions.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$180/person</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Listing Card 3 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/21014/pexels-photo-21014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Beach Getaway"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Beach Getaway
              </h4>
              <p className="text-[#424242] mt-2">
                Relax on pristine beaches and enjoy the soothing ocean breeze.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$220/person</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Listing Card 4 */}
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <img
                src="https://images.pexels.com/photos/355423/pexels-photo-355423.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
                alt="Wildlife Safari"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-xl text-[#424242]">
                Wildlife Safari
              </h4>
              <p className="text-[#424242] mt-2">
                Get up close with nature on an exhilarating safari adventure.
              </p>
              <p className="mt-2 text-[#FFA726] font-semibold">$300/person</p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>

      {/* CALL-TO-ACTION BANNER */}
      <section className="bg-[#FB8C00] text-white p-8 rounded-lg container mx-auto my-8">
        <h3 className="text-3xl font-bold">Plan Your Dream Trip Today</h3>
        <p className="mt-4 text-xl">
          Exclusive deals, tailored experiences, and unforgettable journeys await you.
        </p>
        <Button className="mt-6 bg-white hover:bg-[#FFF9C4] text-[#FB8C00] px-8 py-3">
          Discover More
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-orange-400 p-6 text-center">
        <p>© 2025 Trips & Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
}
  