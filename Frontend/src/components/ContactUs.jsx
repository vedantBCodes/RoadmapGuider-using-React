import React from "react";
import "./ContactUs.css";

const ContactUs = ({ onClose }) => {
  return (
    <div id="contact_us" className="show">
      <img
        src="Images/crossIcon.png"
        alt="Close"
        id="ContactCrosIcon"
        onClick={onClose}
      />

      <p className="h5" style={{ color: "blue" }}>
        Got A Question
      </p>
      <p className="display-6">Contact us</p>
      <p>
        We’re here to help and answer any questions you might have.
        <br />
        We look forward to hearing from you!
      </p>

      <form action="contactUsInfo.php" method="GET">
        <center>
          <div className="contactInput">
            <i className="fa-solid fa-user"></i>&nbsp;
            <input type="text" placeholder="Name" name="Name" required />
          </div>
        </center>
        <br /> <br />
        <center>
          <div className="contactInput">
            <i className="fa-solid fa-envelope"></i>&nbsp;
            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="email"
              required
            />
          </div>
        </center>
        <br />

        <label htmlFor="message" id="messageLabel">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message
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

        <input
          type="submit"
          id="contactSubmit"
          value="Submit"
          style={{ border: "2px solid blue" }}
        />
      </form>
    </div>
  );
};

export default ContactUs;
