import React from "react";
import { useState } from "react";
import "./Contact.css";
import zuridesk from "./img/Footer/Zuri.Internship_Logo.svg";
import ingressdesk from "./img/Footer/I4G.svg";

const Contact = () => {
  return (
    <div className="Contact_Contact">
      <h1 className="contactMe">Contact Me</h1>
      <p className="contactPa">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <div className="llabel">
        <div className="llabel1">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            id="first_name"
          />
        </div>
        <div className="llabel1">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            id="last_name"
          />
        </div>
        <div className="llabel1">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="yourname@email.com" id="email" />
        </div>
        <div>
          <h2 className="mess">Message</h2>
          <textarea
            name=""
            id="message"
            cols="40"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="check">
          <input type="checkbox" />
          <p>You agree to providing your data to [name] who may contact you.</p>
        </div>
        <button id="btn__submit">Send message</button>
      </div>
      <hr className="linee" />
      <footer className="footerr">
        <img src={zuridesk} alt="" className="zuriii" />
        <h2 className="internn">HNG Internship 9 Frontend Task</h2>
        <img src={ingressdesk} alt="" className="ingresss" />
      </footer>
    </div>
  );
};

export default Contact;
