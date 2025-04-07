import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Select, SelectItem } from "../ui/Select";

export default function Hotels() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-[#FFF9C4] py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#424242]">Hotels Booking</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-12 flex-grow">
        {/* Search Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#424242]">
            Find Your Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="City or Destination"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              placeholder="Hotel Name (Optional)"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Check-In Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Input
              type="date"
              placeholder="Check-Out Date"
              className="border-[#FFA726] focus:ring-[#FFA726]"
            />
            <Select
              defaultValue="Standard"
              className="border-[#FFA726] focus:ring-[#FFA726] bg-white"
            >
              <SelectItem value="Standard">Standard Room</SelectItem>
              <SelectItem value="Deluxe">Deluxe Room</SelectItem>
              <SelectItem value="Suite">Suite</SelectItem>
            </Select>
          </div>
          <Button className="mt-6 w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
            Search Hotels
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
                <h3 className="font-bold text-xl text-[#424242]">New York</h3>
                <p className="text-[#424242] mt-2">
                  Experience the best hotels in the city that never sleeps.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">Paris</h3>
                <p className="text-[#424242] mt-2">
                  Luxury stays and cozy hotels for an unforgettable experience.
                </p>
                <Button className="mt-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-[#FFA726] hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-[#424242]">Dubai</h3>
                <p className="text-[#424242] mt-2">
                  Modern hotels with world-class amenities await you.
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
            Enjoy exclusive discounts on top hotels. Book now and save up to 30%
            on your stay.
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
