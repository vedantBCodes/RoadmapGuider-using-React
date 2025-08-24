import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const skillsList = [
  { name: "ChatGPT", path: "/chatgpt" },
  { name: "Graphic Designing", path: "/graphicdesigning" },
  { name: "Digital Marketing", path: "/digitalmarketing" },
  { name: "Video Editing", path: "/videoediting" },
  { name: "Machine Learning", path: "/machinelearning" },
  { name: "Cloud Computing", path: "/cloudcomputing" },
  { name: "Introduction to SQL", path: "/sql" },
  { name: "Data Analysis", path: "/dataanalyst" },
  { name: "Introduction to Cyber Security", path: "/cybersecurity" },
  { name: "Artificial Intelligence", path: "/ai" },
  { name: "Introduction to Programming", path: "/programming" }
];

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      setNoResults(false);
      return;
    }

    const matches = skillsList.filter(skill =>
      skill.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(matches);
    setNoResults(matches.length === 0);
  };

  const handleSelect = (path) => {
    navigate(path);
    setQuery("");
    setFilteredResults([]);
    setNoResults(false);
  };

  return (
    <nav>
      <div className="d-flex flex-row justify-content-between mx-3 mt-2">
        {/* Logo & Domain Name */}
        <div className="h2 domainName">
          <img src="Images/RgLogo5.jpg" alt="Logo" width="50px" className="websiteLogo" />
          &nbsp;&nbsp;RoadmapGuider
        </div>

        {/* Search Box */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            className="typeahead"
            placeholder="  🔍  What do you want to learn ? "
            value={query}
            onChange={handleInputChange}
            id="inputBox"
          />

          {/* Dropdown Results */}
          {query && (
            <ul className="dropdown-list">
              {filteredResults.map((item, index) => (
                <li key={index} onClick={() => handleSelect(item.path)}>
                  {item.name}
                </li>
              ))}
              {noResults && <li className="no-results">No results found</li>}
            </ul>
          )}
        </div>

        {/* About & Sign In Section */}
        <div id="aboutAndSignIn">
          <a href="https://vedantbcodes.github.io/My-personal-portfolio/" target="_blank" rel="noreferrer">About Me</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="Images/logInIcon.png" alt="" style={{ width: "30px", height: "25px" }} id="loginIcon" />
          <a href="/signin">
            <input
              type="submit"
              value="Sign In"
              style={{ border: "none", backgroundColor: "white", color: "blue" }}
            />
          </a>
          <img src="Images/profileIcon.png" alt="Profile Icon" className="img-fluid profileImg" width={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
