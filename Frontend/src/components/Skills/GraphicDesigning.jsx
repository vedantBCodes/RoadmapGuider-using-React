// src/components/GraphicDesigning.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./GraphicDesigning.css";

const GraphicDesigning = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="firstGDSubPage">
        <NavLink to="/">
          <img
            src="/Images/RgLogo.png"
            alt="Roadmap Guider Logo"
            width="100"
            className="ms-3 mt-4 logo-img"
          />
        </NavLink>
      </div>

      {/* Second Subpage (hero text + form) */}
      <div className="container-fluid secondSubPageBg">
        <div className="row">
          <div className="col-7">
            <div id="firstPara">
              <p className="display-6">How to Become a Graphic Designer</p>
              <br />
              <p>
                RG's Graphic Designer career guide is intended to help you take the first steps toward a career
                in graphic design. The guide provides an in-depth overview of the graphic design skills you should
                learn, the best training options, career paths in graphic design, how to become a Graphic Designer,
                and more.
              </p>
            </div>
          </div>

          <div className="col-4">
            <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
              <p style={{ fontSize: "25px" }}>Become a Graphic Designer</p>
              <p>
                Speak to a Learning Advisor to learn more about how our bootcamps and courses can help you become a
                Graphic Designer.
              </p>
              <center>
                <input type="text" placeholder="Enter your Name:" />
                <br />
                <br />
                <input type="email" placeholder="Enter your email:" />
                <br />
                <br />
                <input type="submit" value="Submit" />
              </center>
            </form>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="container my-4">
        <div className="row">
          {/* Sticky sidebar */}
          <div className="col-3">
            <div id="Questions">
              <p className="h2">Graphic Designing</p>
              <br />
              <a href="#Q1">What is graphic Designing ?</a>
              <br />
              <br />
              <a href="#Q2">What Does a Graphic Designer Do ?</a>
              <br />
              <br />
              <a href="#Q3">What Skills Do Graphic Designers Need?</a>
              <br />
              <br />
              <a href="#Q4">What Tools Do Graphic Designers Use ?</a>
              <br />
              <br />
              <a href="#Q5">Is Graphic Design a Good Career?</a>
              <br />
              <br />
              <hr style={{ border: "2px solid black" }} />
              <a href="#Tips">Some Tips For Beginners</a>
            </div>
          </div>

          {/* Main article */}
          <div className="col-9 secondHalf">
            <section id="Q1" className="answer">
              <p className="questionHead">What is graphic Designing ?</p>
              <br />
              <p className="questionPara">
                Graphic design is the craft of planning and creating visual content to communicate ideas and messages.
                Graphic design is everywhere you look in the digital age — from billboards to cereal boxes to mobile apps.
              </p>
            </section>

            <section id="Q2" className="answer">
              <p className="questionHead">What Does a Graphic Designer Do ?</p>
              <br />
              <p className="questionPara">
                Graphic Designers create visual concepts to communicate information. They create everything from posters
                and billboards to packaging, logos and marketing materials...
              </p>
            </section>

            <section id="Q3" className="answer">
              <p className="questionHead">What Skills Do Graphic Designers Need ?</p>
              <br />
              <p className="questionPara">
                <strong>Creativity</strong> <br />
                Graphic Designers are constantly tasked with developing new and unique ideas...
                <br />
              </p>
            </section>

            <section id="Q4" className="answer">
              <p className="questionHead">What Tools Do Graphic Designers Use ?</p>
              <br />
              <p className="questionPara">
                Adobe Creative Suite is the most popular option in the industry (Photoshop, Illustrator, InDesign, After Effects)...
              </p>
            </section>

            <section id="Q5" className="answer">
              <p className="questionHead">Is Graphic Design a Good Career ?</p>
              <br />
              <p className="questionPara">Graphic design is a great career for people who are creative thinkers and enjoy art, technology, and communication...</p>
              <hr />
            </section>

            <section id="Tips" className="tips">
              <p className="tipsHeading">Graphic Design Tips for Beginners</p>
              <ol>
                <li>Learn fundamental design principles.</li>
                <li>Enroll in a graphic design course.</li>
                <li>Master a design program of your choosing.</li>
                <li>Practice regularly and build a portfolio.</li>
                <li>Network with fellow designers.</li>
              </ol>
            </section>
          </div>
        </div>
      </div>

      {/* Up arrow (keeps same class so shared CSS works) */}
      <a href="#" className="upArrowButton">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
};

export default GraphicDesigning;
