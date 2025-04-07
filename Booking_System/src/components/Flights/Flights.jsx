import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Flights() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-[#FFF9C4] py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#424242]">Flights Booking</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12 flex-grow">
        {/* Search Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#424242]">
            Find Your Flight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="From City/Airport"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              placeholder="To City/Airport"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Departure Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Return Date (Optional)"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              defaultValue="Economy"
              className="border-[#FFA726] focus:ring-[#FFA726] bg-white"
            >
              <SelectItem value="Economy">Economy</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="FirstClass">First Class</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
            Search Flights
          </Button>
        </section>

        {/* Popular Destinations Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#424242]">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">
                  New York - London
                </h3>
                <p className="text-[#424242] mt-2">
                  Direct flights available daily.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">
                  Paris - Dubai
                </h3>
                <p className="text-[#424242] mt-2">
                  Experience luxury and comfort.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">
                  Tokyo - Singapore
                </h3>
                <p className="text-[#424242] mt-2">
                  Enjoy convenient connections and offers.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="bg-[#FB8C00] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold">Special Offers</h2>
          <p className="mt-4 text-lg">
            Grab exclusive discounts and offers on your next flight. Book now and save big on your journey.
          </p>
          <Button className="mt-6 bg-white hover:bg-[#FFF9C4] text-[#FB8C00]">
            View Offers
          </Button>
        </section>
      </main>

      <br />
    </div>
  );
}
