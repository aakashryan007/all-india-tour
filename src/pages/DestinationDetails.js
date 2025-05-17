import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Destinations.css"; // Using the same CSS

// Sample details for each destination
const destinationData = {
  "taj-mahal": {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "One of the Seven Wonders of the World, a symbol of love built by Shah Jahan.",
    image: "/assets/taj-mahal.jpg",
  },
  "varanasi-ghats": {
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "The spiritual capital of India with mesmerizing Ganga Aarti and sacred temples.",
    image: "/src/assest/varanasi-ghats.jpeg",
  },
  "golden-temple": {
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    description: "A stunning Sikh shrine with a peaceful ambiance and free langar (community meal).",
    image: "/src/assest/golden-temple.jpeg",
  },
  "leh-ladakh": {
    name: "Leh-Ladakh",
    location: "Jammu & Kashmir",
    description: "Famous for high-altitude passes, Pangong Lake, Nubra Valley, and monasteries.",
    image: "/src/assest/leh-ladakh.jpeg",
  },
  "dal-lake": {
    name: "Dal Lake",
    location: "Srinagar, Jammu & Kashmir",
    description: "Known for houseboats, Shikara rides, and breathtaking Himalayan views.",
    image: "/src/assest/dal-lake.jpeg",
  },
};

const DestinationDetails = () => {
  const { id } = useParams();
  const place = destinationData[id];

  if (!place) {
    return <h2>Destination not found!</h2>;
  }

  return (
    <div className="destination-detail-container">
      <img src={place.image} alt={place.name} className="destination-detail-image" />
      <h1>{place.name}</h1>
      <h3>{place.location}</h3>
      <p>{place.description}</p>
    </div>
  );
};

export default DestinationDetails;
