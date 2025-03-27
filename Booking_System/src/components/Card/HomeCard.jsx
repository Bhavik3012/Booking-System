import React from "react";

const HomeCard = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center transition transform hover:scale-105">
      <img
        src={card.image || "https://via.placeholder.com/600x300?text=Deal"}
        alt={card.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-orange-600 mb-2">{card.title}</h3>
      <p className="text-gray-700 text-center">{card.description}</p>
    </div>
  );
};

export default HomeCard;
