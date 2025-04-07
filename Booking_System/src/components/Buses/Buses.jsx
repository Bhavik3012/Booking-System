import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Buses() {
  return (
    <div className="min-h-screen bg-[#FFF3E0]">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        {/* Use a contrasting text container without reducing the image opacity */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FB8C00]">
              Travel in Comfort & Style
            </h2>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto p-8 mt-6">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-[#424242] mb-6">
            Find Your Bus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              placeholder="From City/Stop"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              placeholder="To City/Stop"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Travel Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              defaultValue="AC"
              className="border-[#FFA726] bg-white focus:ring-[#FFA726]"
            >
              <SelectItem value="AC">AC</SelectItem>
              <SelectItem value="NonAC">Non AC</SelectItem>
              <SelectItem value="Sleeper">Sleeper</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
            Search Buses
          </Button>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="container mx-auto p-8">
        <h3 className="text-2xl font-bold text-[#424242] mb-6">
          Popular Bus Routes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-[#424242]">
                Mumbai - Pune
              </h4>
              <p className="text-gray-700 mt-2">
                Multiple departures daily with comfortable seating.
              </p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-[#424242]">Delhi - Agra</h4>
              <p className="text-gray-700 mt-2">
                Quick and affordable services available.
              </p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-[#424242]">
                Bangalore - Mysore
              </h4>
              <p className="text-gray-700 mt-2">
                Frequent and punctual services.
              </p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
          <Card className="border border-[#FFA726] hover:shadow-2xl transition duration-300">
            <CardContent className="p-4">
              <h4 className="font-bold text-lg text-[#424242]">
                Chennai - Coimbatore
              </h4>
              <p className="text-gray-700 mt-2">
                Comfortable journeys with top-notch services.
              </p>
              <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white w-full">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="bg-[#FB8C00] text-white p-8 rounded-lg container mx-auto mb-8">
        <h3 className="text-2xl font-bold">Exclusive Bus Offers</h3>
        <p className="mt-4 text-lg">
          Avail exciting discounts and deals on bus tickets. Enjoy hassle-free
          journeys at unbeatable prices.
        </p>
        <Button className="mt-6 bg-white hover:bg-[#FFF9C4] text-[#FB8C00]">
          View Offers
        </Button>
      </section>

      <br />
    </div>
  );
}
