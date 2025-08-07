// components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import Clock from "./Clock";

const HeroSection = ({ onContactClick }) => {
  return (
    <header className="hero-section">
      <div className="overlay">
        <div className="hero-text">
          <h1>Grow your skills</h1>
          <p>Learn in-demand skills with best resources !</p>
          <button className="contact-button" onClick={onContactClick}>
            Contact Us
          </button>
        </div>
        <div className="clock-wrapper">
          <Clock />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
