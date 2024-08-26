import React from "react";
import hero_image from "../assets/Group 77.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={hero_image} alt="hero-image" className="hero_image" />
      <div className="hero_texts">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
