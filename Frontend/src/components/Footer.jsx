import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div style={{ padding: "20px", paddingLeft: "170px" }} id="subscribeSection">
        <p style={{ fontSize: "40px" }}>Don't miss out</p>
        <p className="h4">Sign up to stay updated on the latest in technology</p>
        <br />
        <form action="emails.php" method="post">
          <input
            type="email"
            placeholder="   ✉️  Email Address"
            className="emailBox"
            name="email"
            required
          />
          <input
            type="submit"
            value="Subscribe To RoadmapGuider"
            className="subscribeBox"
            style={{ color: "blue" }}
          />
        </form>
        <br />
        <div className="flexContainer">
          <div style={{ width: "600px" }}>
            <p>
              We're committed to your privacy. RoadmapGuider uses the information
              you provide to us to contact you about our relevant content,
              products, and services. You may unsubscribe at any time.
            </p>
          </div>
          <div id="socialMediaSection">
            <p className="h3 mb-3">Get in touch</p>
            <p>
              <a href="#">
                <img src="Images/SocialMediaIcons/instagramIcon2.svg" alt="" className="icons" />
              </a>
              <a href="#">
                <img src="Images/SocialMediaIcons/facebookIcon2.svg" alt="" className="icons" />
              </a>
              <a href="#">
                <img src="Images/SocialMediaIcons/youtubeIcon2.svg" alt="" className="icons" />
              </a>
              <a href="https://github.com/vedantBCodes">
                <img src="Images/SocialMediaIcons/githubIcon2.png" alt="" className="icons" />
              </a>
              <a href="#">
                <img src="Images/SocialMediaIcons/twitterIcon2.svg" alt="" className="icons" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid white" }} />
      <div id="copyrightLine">
        <h4 className="text-center copyrightLine">
          copyright <img src="Images/copyrightIcon6.png" alt="" className="logo" width={30}/> Made with
          <img src="Images/heartlogo.png" alt="" className="logo" width={35}/> by Deversh Dandale. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;