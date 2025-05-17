import React from "react";
import { Link } from "react-router-dom";
import "../styles/Destinations.css"; // CSS for styling

// Sample data for destinations (Replace image paths later)
const destinations = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image: "/assets/taj-mahal-2.jpg",
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    image: "/assets/varanasi-ghats.jpg",
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    image: "/assets/golden-temple.jpg",
  },
  {
    id: "leh-ladakh",
    name: "Leh-Ladakh",
    location: "Jammu & Kashmir",
    image: "/assets/leh-ladakh.jpg",
  },
  {
    id: "dal-lake",
    name: "Dal Lake",
    location: "Srinagar, Jammu & Kashmir",
    image: "/assets/dal-lake.jpg",
  },
  {
    id: "jaipur",
    name: "Jaipur (Pink City)",
    location: "Rajasthan",
    image: "/assets/pink-city.jpg",
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer (Golden City)",
    location: "Rajasthan",
    image: "/assets/jaisalmer.jpg",
  },
  {
    id: "rann-of-kutch",
    name: "Rann of Kutch",
    location: "Gujarat",
    image: "/assets/rann-of-kutch.jpg",
  },
  {
    id: "jim-corbett",
    name: "Jim Corbett National Park",
    location: "Uttarakhand",
    image: "/assets/jim-corbett.jpg",
  },
  {
    id: "manali",
    name: "Manali",
    location: "Himachal Pradesh",
    image: "/assets/manali.jpg",
  },
  {
    id: "munnar",
    name: "Munnar",
    location: "Kerala",
    image: "/assets/munnar.jpg",
  },
  {
    id: "alleppey",
    name: "Alleppey (Backwaters)",
    location: "Kerala",
    image: "/assets/alleppey.jpg",
  },
  {
    id: "hampi",
    name: "Hampi",
    location: "Karnataka",
    image: "/assets/hampi.jpg",
  },
  {
    id: "coorg",
    name: "Coorg",
    location: "Karnataka",
    image: "/assets/coorg.jpg",
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    location: "Karnataka",
    image: "/assets/mysore-palace.jpg",
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    image: "/assets/rameshwaram.jpg",
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal",
    location: "Tamil Nadu",
    image: "/assets/kodaikanal.jpg",
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram",
    location: "Tamil Nadu",
    image: "/assets/mahabalipuram.jpg",
  },
  {
    id: "brihadeeswarar-temple",
    name: "Brihadeeswarar Temple",
    location: "Thanjavur, Tamil Nadu",
    image: "/assets/brihadeeswarar-temple.jpg",
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    image: "/assets/meenakshi-temple.jpg",
  },
  {
    id: "chidambaram-temple",
    name: "Chidambaram Nataraja Temple",
    location: "Chidambaram, Tamil Nadu",
    image: "/assets/chidambaram-temple.jpg",
  },
  {
    id: "araku-valley",
    name: "Araku Valley",
    location: "Andhra Pradesh",
    image: "/assets/araku-valley.jpg",
  },
  {
    id: "horsley-hills",
    name: "Horsley Hills",
    location: "Andhra Pradesh",
    image: "/assets/horsley-hills.jpg",
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    location: "West Bengal",
    image: "/assets/darjeeling.jpg",
  },
  {
    id: "sundarbans",
    name: "Sundarbans",
    location: "West Bengal",
    image: "/assets/sundarbans.jpg",
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    location: "Odisha",
    image: "/assets/konark-sun-temple.jpg",
  },
  {
    id: "chilika-lake",
    name: "Chilika Lake",
    location: "Odisha",
    image: "/assets/chilika-lake.jpg",
  },
  {
    id: "gangtok",
    name: "Gangtok",
    location: "Sikkim",
    image: "/assets/gangtok.jpg",
  },
  {
    id: "tawang",
    name: "Tawang",
    location: "Arunachal Pradesh",
    image: "/assets/tawang.jpg",
  },
  {
    id: "kaziranga",
    name: "Kaziranga National Park",
    location: "Assam",
    image: "/assets/kaziranga.jpg",
  },
  {
    id: "majuli-island",
    name: "Majuli Island",
    location: "Assam",
    image: "/assets/majuli-island.jpg",
  },
  {
    id: "dzukou-valley",
    name: "Dzukou Valley",
    location: "Nagaland",
    image: "/assets/dzukou-valley.jpg",
  },
  {
    id: "shillong",
    name: "Shillong (Scotland of the East)",
    location: "Meghalaya",
    image: "/assets/shillong.jpg",
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta & Ellora Caves",
    location: "Maharashtra",
    image: "/assets/ajanta-ellora.jpg",
  },
  {
    id: "lonavala-khandala",
    name: "Lonavala & Khandala",
    location: "Maharashtra",
    image: "/assets/lonavala-khandala.jpg",
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    location: "Mumbai, Maharashtra",
    image: "/assets/gateway-of-india.jpg",
  },
  {
    id: "goa-beaches",
    name: "Goa Beaches",
    location: "Goa",
    image: "/assets/goa-beaches.jpg",
  },
  {
    id: "dudhsagar-waterfalls",
    name: "Dudhsagar Waterfalls",
    location: "Goa",
    image: "/assets/dudhsagar-waterfalls.jpg",
  },
  {
    id: "khajuraho-temples",
    name: "Khajuraho Temples",
    location: "Madhya Pradesh",
    image: "/assets/khajuraho-temples.jpg",
  },
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    location: "Gujarat",
    image: "/assets/statue-of-unity.jpg",
  },
];

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h1 className="explore-title">Explore India</h1>
      <div className="destinations-grid">
        {destinations.map((place) => (
          <Link key={place.id} to={`/destination/${place.id}`} className="destination-card">
            <img src={place.image} alt={place.name} className="destination-image" />
            <div className="destination-text">
              <h2>{place.name}</h2>
              <p>{place.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
