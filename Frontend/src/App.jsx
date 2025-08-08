// App.jsx
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import JoinSection from "./components/JoinSection.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import UpArrowButton from "./components/UpArrowButton.jsx";

import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <Router>
      <Navbar onContactClick={toggleContact} />

      {/* Hero Section */}
      <HeroSection onContactClick={toggleContact} />

      {/* Skills Section */}
      <SkillsSection />

      {/* Join Section */}
      <JoinSection />

      {/* Community Section */}
      <Community />

      {/* Footer */}
      <Footer />

      {/* Contact Us Popup */}
      {showContact && <ContactUs onClose={toggleContact} />}

      {/* Scroll Up Button */}
      <UpArrowButton />
    </Router>
  );
}

export default App;
