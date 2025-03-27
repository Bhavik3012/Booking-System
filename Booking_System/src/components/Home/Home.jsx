import React, { useState, useEffect } from "react";
import { HomeCard } from "../index";

const cardData = [
  {
    title: "Exclusive Train Offer",
    description:
      "Save up to 25% on train bookings. Enjoy comfort and speed at unbeatable rates.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Flight Deals",
    description:
      "Fly high with our discount flights and experience luxury in the skies.",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hotel Discounts",
    description:
      "Book hotels at amazing rates with top-notch service and comfort.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

const offers = [
  {
    title: "Summer Special",
    description:
      "Get 30% off on all summer bookings. Enjoy the sun with exclusive discounts!",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Weekend Getaway",
    description:
      "Escape the hustle with our weekend deals at top destinations.",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cardData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalCards]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 shadow-md sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center">
            <h1 className="text-3xl font-bold mb-3 md:mb-0">Booking System</h1>
            <nav>
              <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <li>
                  <a href="/book" className="hover:underline text-lg">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline text-lg">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline text-lg">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Full-Width Discount Banner */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Big Discount Offer"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Centered Content Container */}
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-12">
          {/* Cards Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Featured Deals
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <HomeCard card={cardData[currentIndex]} />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + totalCards) % totalCards
                    )
                  }
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300 transform ease-in-out"
                >
                  &#8592;
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % totalCards)
                  }
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300 transform ease-in-out"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </section>

          {/* Offers Section */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-yellow-100 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-orange-600 mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Booking System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
