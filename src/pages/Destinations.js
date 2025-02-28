import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Goa",
    location: "Goa",
    image: "https://source.unsplash.com/300x200/?goa,beach",
    description: "Golden beaches, nightlife, and amazing seafood."
  },
  {
    id: 2,
    name: "Jaipur",
    location: "Rajasthan",
    image: "https://source.unsplash.com/300x200/?jaipur,india",
    description: "The Pink City, known for its palaces and rich culture."
  },
  {
    id: 3,
    name: "Manali",
    location: "Himachal Pradesh",
    image: "https://source.unsplash.com/300x200/?manali,mountains",
    description: "Snowy mountains and adventure sports hub."
  },
  {
    id: 4,
    name: "Varanasi",
    location: "Uttar Pradesh",
    image: "https://source.unsplash.com/300x200/?varanasi,temple",
    description: "Spiritual city on the banks of the Ganges."
  },
  {
    id: 5,
    name: "Delhi",
    location: "Delhi",
    image: "https://source.unsplash.com/300x200/?delhi,india",
    description: "Capital of India, home to historic monuments."
  },
  {
    id: 6,
    name: "Ooty",
    location: "Tamil Nadu",
    image: "https://source.unsplash.com/300x200/?ooty,hills",
    description: "A beautiful hill station with cool climate and greenery."
  },
  {
    id: 7,
    name: "Mysore",
    location: "Karnataka",
    image: "https://source.unsplash.com/300x200/?mysore,palace",
    description: "A magnificent royal palace in Karnataka."
  },
  {
    id: 8,
    name: "Munnar",
    location: "Kerala",
    image: "https://source.unsplash.com/300x200/?munnar,tea",
    description: "Famous for tea gardens and lush green hills."
  },
  {
    id: 9,
    name: "Kodaikanal",
    location: "Tamil Nadu",
    image: "https://source.unsplash.com/300x200/?kodaikanal,lake",
    description: "A misty hill station with stunning landscapes."
  },
  {
    id: 10,
    name: "Kanyakumari",
    location: "Tamil Nadu",
    image: "https://source.unsplash.com/300x200/?kanyakumari,beach",
    description: "Southernmost tip of India, famous for sunrise views."
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-900 py-6">Explore Destinations</h1>
      <div className="grid grid-cols-3 gap-6 px-10">
        {destinations.map((destination) => (
          <Link
            to={`/destinations/${destination.id}`}
            key={destination.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-900">{destination.name}</h2>
              <p className="text-sm text-gray-600">{destination.location}</p>
              <p className="mt-2 text-gray-800">{destination.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
