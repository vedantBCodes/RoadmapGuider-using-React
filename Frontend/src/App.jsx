// App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import SkillsSection from "./components/SkillsSection.jsx";
import JoinSection from "./components/JoinSection.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Clock from "./components/Clock.jsx";
import UpArrowButton from "./components/UpArrowButton.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <header id="firstSubpage">
        <div className="container-fluid p-0">
          <img
            src="Images/firstHomeSubPageBgImage.png"
            className="img-fluid homePageBgImage"
            alt=""
          />
          <div className="quote">
            <p className="display-6">Grow your skills</p>
            <p>Learn in-demand skills with best resources !</p>
            <input type="submit" value="Contact Us" id="contactButton" />
          </div>
        </div>
      </header>

      <Clock />
      <SkillsSection />
      <JoinSection />
      <Community />
      <Footer />
      <ContactUs />
      <UpArrowButton />
    </Router>
  );
}

export default App;