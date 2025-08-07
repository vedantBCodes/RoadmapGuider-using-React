import React from "react";

const ContactUs = () => {
  return (
    <div id="contact_us">
      <img src="Images/crossIcon.png" alt="close" id="ContactCrosIcon" />
      <p className="h5" style={{ color: "blue" }}>Got A Question</p>
      <p className="display-6">Contact us</p>
      <p>
        We’re here to help and answer any questions you might have. We look
        forward to hearing from you!
      </p>
      <form action="contactUsInfo.php" method="GET">
        <center>
          <div className="contactInput">
            <i className="fa-solid fa-user"></i>&nbsp;
            <input type="text" placeholder="Name" name="Name" required />
          </div>
        </center>
        <br />
        <center>
          <div className="contactInput">
            <i className="fa-solid fa-envelope"></i>&nbsp;
            <input type="email" placeholder="Email" name="Email" required />
          </div>
        </center>
        <br />
        <label htmlFor="message" id="messageLabel">
          &nbsp;&nbsp;&nbsp;&nbsp;Message
        </label>
        <br />
        <textarea
          name="Message"
          placeholder="Enter message"
          id="message"
          cols="30"
          rows="5"
          required
        ></textarea>
        <input type="submit" id="contactSubmit" style={{ border: "2px solid blue" }} />
      </form>
    </div>
  );
};

export default ContactUs;