import React, { useState, useEffect } from "react";

export default function Home() {
  // Testimonials for slider
  const testimonials = [
    {
      quote:
        "This booking system changed the way I travel. Seamless, reliable, and truly innovative! I always get the best deals and support every time I book my trips.",
      author: "Alice Johnson",
    },
    {
      quote:
        "Unbeatable deals and fantastic service. The intuitive interface and dedicated support team make planning my vacations stress-free.",
      author: "Mark Thompson",
    },
    {
      quote:
        "I love the simplicity and clarity of this platform. Booking my trips has never been easier, and the exclusive offers keep me coming back for more.",
      author: "Sophia Lee",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalTestimonials]);

  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* HERO SECTION */}
      <section className="relative">
        <div
          className="bg-cover bg-center h-[600px]"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-xl shadow-xl text-center max-w-2xl mx-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FB8C00]">
              Discover Your Next Adventure
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#424242]">
              Explore a world of exclusive travel deals for flights, trains,
              hotels, buses, homestays, and more – all seamlessly booked in one
              place.
            </p>
            <button className="mt-6 px-8 py-4 bg-[#FFA726] hover:bg-[#FB8C00] text-white text-lg font-semibold rounded-full transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#424242] mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl md:text-2xl text-[#424242] mb-12 max-w-3xl mx-auto">
            We cover every aspect of your travel needs. From discounted flights
            to luxurious hotel bookings, reliable train and bus services, unique
            homestay experiences, and curated travel packages – we have it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600"
                alt="Flight Booking"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#FFA726] mb-4">
                  Flight Booking
                </h3>
                <p className="text-xl text-[#424242]">
                  Enjoy exclusive flight deals and premium cabin experiences at
                  unbeatable prices.
                </p>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600"
                alt="Hotel Booking"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#FFA726] mb-4">
                  Hotel Booking
                </h3>
                <p className="text-xl text-[#424242]">
                  Discover top-rated hotels and boutique stays with our
                  exclusive deals.
                </p>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Train & Bus Booking"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#FFA726] mb-4">
                  Train & Bus Booking
                </h3>
                <p className="text-xl text-[#424242]">
                  Travel in comfort and style with our reliable train and bus
                  services tailored to your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#FFF9C4]">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#424242] mb-10">
            Why Choose Our Booking System?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#FFA726] mb-4">
                Effortless Booking
              </h3>
              <p className="text-xl text-[#424242]">
                Our user-friendly interface simplifies travel planning, allowing
                you to compare and book in just a few clicks.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#FFA726] mb-4">
                Exclusive Deals
              </h3>
              <p className="text-xl text-[#424242]">
                Benefit from exclusive discounts and competitive pricing that
                save you time and money.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#FFA726] mb-4">
                24/7 Dedicated Support
              </h3>
              <p className="text-xl text-[#424242]">
                Our expert support team is available around the clock to assist
                you with any inquiries or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#424242] mb-10">
            What Our Customers Say
          </h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-3xl italic text-[#424242] mb-8">
              “{testimonials[currentTestimonial].quote}”
            </blockquote>
            <p className="text-2xl font-semibold text-[#FFA726]">
              - {testimonials[currentTestimonial].author}
            </p>
          </div>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#424242] mb-12">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#FFF3E0] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600"
                alt="News 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FFA726] mb-3">
                  New Airline Partnerships Announced
                </h3>
                <p className="text-xl text-[#424242]">
                  Our latest collaboration brings you more flight options and
                  unbeatable prices.
                </p>
              </div>
            </div>
            <div className="bg-[#FFF3E0] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600"
                alt="News 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FFA726] mb-3">
                  Exclusive Hotel Deals for Summer
                </h3>
                <p className="text-xl text-[#424242]">
                  Book now and enjoy special rates at top hotels around the
                  world.
                </p>
              </div>
            </div>
            <div className="bg-[#FFF3E0] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600"
                alt="News 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FFA726] mb-3">
                  Innovative Travel Packages Unveiled
                </h3>
                <p className="text-xl text-[#424242]">
                  Discover our new range of customizable travel packages for
                  every type of traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-[#FFF9C4]">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#424242] mb-10">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://graphicdesigneye.com/images/hotel-logo-design-service.png"
              alt="Partner 1"
              className="h-16"
            />
            <img
              src="https://marketplace.canva.com/EAE_ePObE_8/1/0/800w/canva-elegant-gold-green-line-ornament-boutique-hotel-logo-jFj2YYIbEPs.jpg"
              alt="Partner 2"
              className="h-16"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyblRzW2ET2uC9wdJBm6_PUq1zCiSi6SGJw&s"
              alt="Partner 3"
              className="h-16"
            />
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79e33c43598993.57f54c1dce78a.png"
              alt="Partner 4"
              className="h-16"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#424242] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="p-8 bg-[#FFF9C4] rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#FFA726] mb-2">
                How do I book a trip?
              </h3>
              <p className="text-xl text-[#424242]">
                Simply choose your desired service, select your dates, and
                follow the easy steps to book your travel.
              </p>
            </div>
            <div className="p-8 bg-[#FFF9C4] rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#FFA726] mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-xl text-[#424242]">
                We accept all major credit cards, debit cards, and online
                payment systems.
              </p>
            </div>
            <div className="p-8 bg-[#FFF9C4] rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#FFA726] mb-2">
                Can I cancel or reschedule my booking?
              </h3>
              <p className="text-xl text-[#424242]">
                Yes, you can cancel or reschedule your booking as per our
                policy. Please check our Terms & Conditions for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="py-20 bg-[#FB8C00]">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-2xl text-white mb-10">
            Join thousands of satisfied travelers who have unlocked exclusive
            deals and unforgettable experiences with our booking system.
          </p>
          <button className="px-10 py-5 bg-white text-[#FB8C00] font-bold text-2xl rounded-full shadow-xl hover:bg-[#FFF9C4] transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* EXTENDED FOOTER */}
      <footer className="bg-[#FFF9C4] py-8">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center text-[#424242] text-lg">
          &copy; {new Date().getFullYear()} Booking System. All rights reserved.
          <br />
          <span className="block mt-2">
            Your gateway to a world of travel possibilities.
          </span>
        </div>
      </footer>
    </div>
  );
}
