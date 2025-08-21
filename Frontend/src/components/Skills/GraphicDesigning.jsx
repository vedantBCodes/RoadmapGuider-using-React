// src/components/GraphicDesigning.jsx
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./GraphicDesigning.css";

const GraphicDesigning = () => {
  useEffect(() => {
    const arrowButton = document.querySelector(".upArrowButton");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        arrowButton.classList.add("active");
      } else {
        arrowButton.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Second Subpage */}
      <div className="container-fluid secondSubPageBg">
        <div className="row">
          <div className="col-7">
            <div id="firstPara">
              <p className="display-6">How to Become a Graphic Designer</p>
              <br />
              <p>
                RG's Graphic Designer career guide is intended to help you take
                the first steps toward a career in graphic design. <br /> <br />
                The guide provides an in-depth overview of the graphic design
                skills you should learn, the best training options, career paths
                in graphic design, how to become a Graphic Designer, and more.
              </p>
            </div>
          </div>

          <div className="col-4">
            <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
              <p className="form-title">Become a Graphic Designer</p>
              <p>
                Speak to a Learning Advisor to learn more about how our
                bootcamps and courses can help you become a Graphic Designer.
              </p>
              <center>
                <input type="text" placeholder="Enter your Name:" />
                <br />
                <br />
                <input type="email" placeholder="Enter your Email:" />
                <br />
                <br />
                <input type="submit" value="Submit" />
              </center>
            </form>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-3">
          <div id="Questions">
            <p className="h2">Graphic Designing</p>
           
            <a href="#Q1">What is Graphic Designing ?</a>

            <a href="#Q2">What Does a Graphic Designer Do ?</a>
  
            <a href="#Q3">What Skills Do Graphic Designers Need?</a>
         
            <a href="#Q4">What Tools Do Graphic Designers Use ?</a>
          
            <a href="#Q5">Is Graphic Design a Good Career?</a>
           
            <hr />
            <a href="#Tips">Some Tips For Beginners</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-8 secondHalf">
          <section id="Q1" className="answer">
            <p className="questionHead">What is Graphic Designing ?</p>
            <br />
            <p className="questionPara">
              Graphic design is the craft of planning and creating visual
              content to communicate ideas and messages. Graphic design is
              everywhere you look in the digital age — from billboards to cereal
              boxes to mobile apps. Through incorporating different elements and
              principles, these designs can influence our perception and
              emotions. <br /> <br />
              Graphic design is also known as communication design, and Graphic
              Designers are essentially visual communicators. They bring visual
              concepts to life, most commonly through graphic design software,
              and inform or engage consumers through text, graphics and images.
              <br /> <br />
              Graphic design is one way that companies connect with consumers.
              Design can be used to promote and sell products, to convey a
              message, or to develop a brand identity.
            </p>
          </section>

         <section id="Q2" className="answer">
  <p className="questionHead">What Does a Graphic Designer Do ?</p>
  <br />
  <p className="questionPara">
    Graphic Designers create visual concepts to communicate information.
    They create everything from posters and billboards to packaging, logos,
    and marketing materials. Graphic Designers use elements such as shapes,
    colors, typography, images and more to convey ideas to an audience. <br /> <br />
    Graphic Designers can work in-house, creating designs specifically for one
    brand, or at an agency or as a freelancer, where they work with a variety of clients. 
    <br /> <br />
    The role of Graphic Designers varies depending on where they work. Some tasks
    may include selecting photos and typefaces, developing layouts, and designing logos. 
    Graphic Designers may specialize in areas like motion graphics or print media. 
    <br /> <br />
    They often need to communicate with clients and consumers to develop designs 
    that portray an intended message. They also collaborate with other designers, 
    marketers, analysts, writers, and programmers to create successful products, 
    campaigns, or websites.
  </p>
</section>


         <section id="Q3" className="answer">
  <p className="questionHead">What Skills Do Graphic Designers Need ?</p>
  <br />
  <p className="questionPara">
    <strong>Creativity</strong> <br />
    Graphic Designers are constantly tasked with developing new and unique
    ideas. Their designs need to capture people’s attention while also
    communicating an intended message. <br /> <br />
    
    <strong>Communication</strong> <br />
    Graphic design is visual communication, so communication skills are at
    the heart of a Graphic Designer’s work. They must communicate ideas
    through designs, as well as collaborate with colleagues and clients.
    Sometimes they also explain design decisions to non-designers. <br /> <br />
    
    <strong>Strategy</strong> <br />
    Graphic Designers are strategic thinkers – they consider how design
    elements work together and how best to convey meaning while adhering to
    design standards. This may involve market research, brainstorming,
    thumbnailing, and evaluating designs. <br /> <br />
    
    <strong>Problem Solving</strong> <br />
    A design brief is essentially a problem: a client needs something
    communicated, and the right design solves it. Designers use problem-solving
    skills to troubleshoot issues and revise work to meet client needs. <br /> <br />
    
    <strong>Time Management</strong> <br />
    Designers often juggle multiple projects at once, each with its own
    deadlines. Strong organizational and prioritization skills are key to
    delivering work on time.
  </p>
</section>

         <section id="Q4" className="answer">
  <p className="questionHead">What Tools Do Graphic Designers Use ?</p>
  <br />
  <p className="questionPara">
    Graphic Designers most commonly use graphic design software. 
    Adobe Creative Suite is the most popular option in the industry, 
    but there are also other powerful programs available, such as Sketch. 
    In addition to software, designers rely on computers, tablets, and cameras. 
    <br /> <br />
    
    Graphic design software allows designers to create, edit, and view digital art. 
    Depending on the program, they can create illustrations, develop multimedia, 
    stylize or edit images, and format layouts. <br /> <br />
    
    <strong>Photoshop</strong> <br />
    Photoshop is the industry standard for image editing. It supports 
    2D and 3D image manipulation, compositing, video editing, and image analysis. <br /> <br />
    
    <strong>Sketch</strong> <br />
    A vector-based tool (Mac only) focused on web, app, and interface design. 
    It’s widely used for icons, social media graphics, and prototyping user flows. <br /> <br />
    
    <strong>Illustrator</strong> <br />
    Illustrator is best for vector illustrations, logos, and fonts. 
    Unlike raster graphics, vector designs can be resized infinitely without losing quality. <br /> <br />
    
    <strong>InDesign</strong> <br />
    InDesign is a page layout program often used in publishing. 
    It’s ideal for magazines, newspapers, brochures, and reports. <br /> <br />
    
    <strong>After Effects</strong> <br />
    A motion graphics and visual effects software. Designers use it for animations, 
    transitions, movie titles, and even 3D design.
  </p>
</section>

          <section id="Q5" className="answer">
  <p className="questionHead">Is Graphic Design a Good Career ?</p>
  <br />
  <p className="questionPara">
    Graphic design is a great career for people who are creative thinkers and 
    enjoy art, technology, and communication. Since nearly every industry needs 
    design, Graphic Designers have many opportunities to work on diverse and 
    exciting projects. <br /> <br />
    
    It can also be a very fulfilling career — designers often see the real-world 
    impact of their work in products, advertisements, websites, and branding. 
    Design is also an essential marketing tool, making designers highly valuable 
    in the workplace. <br /> <br />
    
    However, demand for Graphic Designers varies by industry. For example, the 
    publishing industry is seeing a decline in design roles, while opportunities 
    are growing in technology and digital services as companies expand their 
    online presence. <br /> <br />
    
    Graphic Designers also have many transferable skills that allow them to 
    branch out into related fields such as UX/UI design, product design, and web 
    development, giving them long-term career flexibility.
  </p>
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
    <li>Follow design influencers and industry leaders.</li>
    <li>Build an inspiration catalog.</li>
    <li>Dissect the process behind professional designs.</li>
    <li>Get specific with your online search queries.</li>
    <li>Replicate your favorite work for learning purposes.</li>
    <li>Embrace negative space.</li>
    <li>Seek constructive feedback from others.</li>
    <li>Undertake a passion project.</li>
    <li>Just start and keep experimenting.</li>
  </ol>
</section>

        </div>
      </div>

      {/* Up Arrow */}
      <a href="#" className="upArrowButton">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
};

export default GraphicDesigning;
