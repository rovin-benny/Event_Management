import React from "react";
import "./Home.css"; // Ensure you have this file in your styles

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: "url('/your-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="hero-content text-white text-center">
        <h1>Plan Your Dream Event with Us</h1>
        <p>Seamless planning for unforgettable moments</p>
        <button className="btn btn-warning">Explore Events</button>
      </div>
    </div>
  );
};

export default HeroSection;
