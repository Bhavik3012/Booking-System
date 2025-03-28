import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Train() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-[#FFF9C4] py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#424242]">Train Booking</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12 flex-grow">
        {/* Search Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#424242]">
            Find Your Train
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="From Station"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              placeholder="To Station"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Journey Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              defaultValue="sleeper"
              className="border-[#FFA726] focus:ring-[#FFA726] bg-white"
            >
              <SelectItem value="sleeper">Sleeper</SelectItem>
              <SelectItem value="3AC">3AC</SelectItem>
              <SelectItem value="2AC">2AC</SelectItem>
              <SelectItem value="1AC">1AC</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
            Search Trains
          </Button>
        </section>

        {/* Popular Routes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#424242]">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">
                  Mumbai - Delhi
                </h3>
                <p className="text-[#424242] mt-2">
                  Fast and comfortable trains available.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">
                  Bangalore - Chennai
                </h3>
                <p className="text-[#424242] mt-2">
                  High-speed and regular trains offered.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">
                  Kolkata - Hyderabad
                </h3>
                <p className="text-[#424242] mt-2">
                  Experience comfort and convenience.
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
            Enjoy exclusive discounts up to 30% on selected routes. Book now and
            embark on a hassle-free journey.
          </p>
          <Button className="mt-6 bg-white hover:bg-[#FFF9C4] text-[#FB8C00]">
            View Offers
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFF9C4] py-6">
        <div className="container mx-auto text-center text-[#424242] text-lg">
          © {new Date().getFullYear()} Train Booking. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
