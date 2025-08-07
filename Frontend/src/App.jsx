// App.jsx
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import JoinSection from "./components/JoinSection.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import UpArrowButton from "./components/UpArrowButton.jsx";
import HeroSection from "./components/HeroSection.jsx";

import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleCloseContact = () => {
    setShowContact(false);
  };

  return (
    <Router>
      <Navbar />
      <HeroSection onContactClick={handleContactClick} />

      <SkillsSection />
      <JoinSection />
      <Community />
      <Footer />

      {showContact && <ContactUs onClose={handleCloseContact} />}
      <UpArrowButton />
    </Router>
  );
}

export default App;
