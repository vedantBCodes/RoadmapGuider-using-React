import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="d-flex flex-row justify-content-between mx-3 mt-2">
        <div className="h2 domainName">
          <img src="Images/RgLogo5.jpg" alt="Logo" width="50px" className="websiteLogo" />
          &nbsp;&nbsp;RoadmapGuider
        </div>
        <div>
          <input
            type="text"
            className="typeahead"
            data-provide="typeahead"
            placeholder="  🔍  What do you want to learn ? "
            id="inputBox"
          />
        </div>
        <div id="aboutAndSignIn">
          <a href="https://vedantbcodes.github.io/My-personal-portfolio/" target="_blank">About Me</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="Images/logInIcon.png" alt="" style={{ width: "30px", height: "25px" }}  id="loginIcon"/>
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