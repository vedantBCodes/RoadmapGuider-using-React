// App.jsx
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ChatGpt from "./components/Skills/ChatGpt.jsx";
import JoinSection from "./components/JoinSection.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import UpArrowButton from "./components/UpArrowButton.jsx";
import "./App.css";
import GraphicDesigning from "./components/Skills/GraphicDesigning.jsx";
import DigitalMarketing from "./components/Skills/DigitalMarketing.jsx";
import VideoEditing from "./components/Skills/VideoEditing.jsx";
import MachineLearning from "./components/Skills/MachineLearning.jsx";
import CloudComputing from "./components/Skills/CloudComputing.jsx";
import Sql from "./components/Skills/Sql.jsx";
import DataAnalyst from "./components/Skills/DataAnalyst.jsx";
import CyberSecurity from "./components/Skills/CyberSecurity.jsx";
import ArtificialIntelligence from "./components/Skills/ArtificialIntelligence.jsx";

function App() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
             <Navbar onContactClick={toggleContact} />
              <HeroSection onContactClick={toggleContact} />
              <SkillsSection />
              <JoinSection />
              <Community />
              <Footer />
            </>
          }
        />

        {/* ChatGPT page */}
        <Route
          path="/chatgpt"
          element={
            <>
              <ChatGpt />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
        <Route
          path="/graphicdesigning"
          element={
            <>
              <GraphicDesigning />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
        <Route
          path="/digitalmarketing"
          element={
            <>
              <DigitalMarketing />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
         <Route
          path="/videoediting"
          element={
            <>
              <VideoEditing />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
        <Route
          path="/machinelearning"
          element={
            <>
              <MachineLearning />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
        <Route
          path="/cloudcomputing"
          element={
            <>
              <CloudComputing />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
         <Route
          path="/sql"
          element={
            <>
              <Sql />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
         <Route
          path="/dataanalyst"
          element={
            <>
              <DataAnalyst />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
         <Route
          path="/cybersecurity"
          element={
            <>
              <CyberSecurity />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
           <Route
          path="/ai"
          element={
            <>
              <ArtificialIntelligence />
              <Footer /> {/* Keep footer if you want */}
            </>
          }
        />
      </Routes>

      {/* Contact Us Popup */}
      {showContact && <ContactUs onClose={toggleContact} />}

      {/* Scroll Up Button */}
      <UpArrowButton />
    </Router>
  );
}

export default App;
