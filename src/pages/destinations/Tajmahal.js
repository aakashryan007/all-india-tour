import React from "react";

const TajMahal = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-900">Taj Mahal</h1>
      <img src="https://source.unsplash.com/800x400/?tajmahal" alt="Taj Mahal" className="w-full h-96 object-cover mt-4" />
      <p className="mt-4 text-gray-800 text-lg">
        The Taj Mahal is one of the Seven Wonders of the World. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum is a symbol of love.
      </p>
    </div>
  );
};

export default TajMahal;
