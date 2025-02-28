import React from "react";
import { useParams } from "react-router-dom";

const destinationData = {
  1: { 
    name: "Goa", 
    images: ["https://source.unsplash.com/600x400/?goa,beach", "https://source.unsplash.com/600x400/?goa"], 
    places: ["Baga Beach", "Dudhsagar Waterfalls", "Aguada Fort"], 
    hotels: ["Taj Goa", "Leela Palace"]
  },
  2: { 
    name: "Jaipur", 
    images: ["https://source.unsplash.com/600x400/?jaipur,india", "https://source.unsplash.com/600x400/?hawa-mahal"], 
    places: ["Hawa Mahal", "Amer Fort", "Jal Mahal"], 
    hotels: ["Rambagh Palace", "ITC Rajputana"]
  },
  3: { 
    name: "Manali", 
    images: ["https://source.unsplash.com/600x400/?manali,mountains", "https://source.unsplash.com/600x400/?snow"], 
    places: ["Rohtang Pass", "Solang Valley", "Hadimba Temple"], 
    hotels: ["The Himalayan", "Span Resort"]
  },
  4: { 
    name: "Varanasi", 
    images: ["https://source.unsplash.com/600x400/?varanasi,temple", "https://source.unsplash.com/600x400/?ganga"], 
    places: ["Kashi Vishwanath Temple", "Dasaswamedh Ghat"], 
    hotels: ["BrijRama Palace", "Taj Ganges"]
  },
  5: { 
    name: "Delhi", 
    images: ["https://source.unsplash.com/600x400/?delhi,india", "https://source.unsplash.com/600x400/?redfort"], 
    places: ["India Gate", "Red Fort", "Qutub Minar"], 
    hotels: ["The Oberoi", "Taj Palace"]
  },
  6: { 
    name: "Ooty", 
    images: ["https://source.unsplash.com/600x400/?ooty,hills", "https://source.unsplash.com/600x400/?ooty"], 
    places: ["Ooty Lake", "Doddabetta Peak"], 
    hotels: ["Savoy - IHCL", "Sterling Ooty"]
  },
  7: { 
    name: "Mysore", 
    images: ["https://source.unsplash.com/600x400/?mysore,palace", "https://source.unsplash.com/600x400/?mysore"], 
    places: ["Mysore Palace", "Brindavan Gardens"], 
    hotels: ["Radisson Blu", "The Windflower Resort"]
  },
  8: { 
    name: "Munnar", 
    images: ["https://source.unsplash.com/600x400/?munnar,tea", "https://source.unsplash.com/600x400/?munnar"], 
    places: ["Tea Gardens", "Eravikulam National Park"], 
    hotels: ["Tea County Resort", "Windermere Estate"]
  },
  9: { 
    name: "Kodaikanal", 
    images: ["https://source.unsplash.com/600x400/?kodaikanal,lake", "https://source.unsplash.com/600x400/?hills"], 
    places: ["Kodaikanal Lake", "Pillar Rocks"], 
    hotels: ["The Carlton", "Kodai Resort"]
  },
  10: { 
    name: "Kanyakumari", 
    images: ["https://source.unsplash.com/600x400/?kanyakumari,beach", "https://source.unsplash.com/600x400/?sunset"], 
    places: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue"], 
    hotels: ["Hotel Seaview", "Sparsa Resort"]
  }
};

const DestinationDetails = () => {
  const { id } = useParams();
  const data = destinationData[id];

  if (!data) {
    return <h2 className="text-center text-3xl text-red-600">Destination Not Found</h2>;
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold">{data.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.images.map((img, index) => (
          <img key={index} src={img} alt={data.name} className="w-full h-64 object-cover" />
        ))}
      </div>
      <h3 className="text-2xl mt-4 font-semibold">Places to Visit</h3>
      <ul className="list-disc ml-6">
        {data.places.map((place, index) => (
          <li key={index} className="text-lg">{place}</li>
        ))}
      </ul>
      <h3 className="text-2xl mt-4 font-semibold">Hotels</h3>
      <ul className="list-disc ml-6">
        {data.hotels.map((hotel, index) => (
          <li key={index} className="text-lg">{hotel}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationDetails;
