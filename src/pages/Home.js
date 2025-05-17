import React from "react";
import "../styles/Home.css"; // Add styling later

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Explore Incredible India</h1>
        <p>Find your next travel destination</p>
        <input type="text" placeholder="Search destinations..." />
        <button>Search</button>
      </section>

      {/* Featured Destinations */}
      <section className="featured">
        <h2>Popular Destinations</h2>
        <div className="grid">
          <div className="destination">Taj Mahal</div>
          <div className="destination">Munnar</div>
          <div className="destination">Leh Ladakh</div>
          <div className="destination">Jaipur</div>
          <div className="destination">Goa</div>
          <div className="destination">Varanasi</div>
          <div className="destination">Andaman</div>
          <div className="destination">Rishikesh</div>
          <div className="destination">Shimla</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <button>View All Destinations</button>
      </section>
    </div>
  );
};

export default Home;
