import React from "react";
import { useState } from "react";
import "./Contact.css";
import zuridesk from "./img/Footer/Zuri.Internship_Logo.svg";
import ingressdesk from "./img/Footer/I4G.svg";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <div>
        <div>
          <h2>First name</h2>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div>
          <h2>Last name</h2>
          <input type="text" placeholder="Enter your last name" />
        </div>
        <div>
          <h2>Email</h2>
          <input type="text" placeholder="yourname@email.com" />
        </div>
        <div>
          <h2>Message</h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div>
          <input type="checkbox" />
          <p>You agree to providing your data to [name] who may contact you.</p>
        </div>
        <button>Send message</button>
      </div>
      <hr className="linee" />
        <footer className="footerr">
            <img src={zuridesk} alt="" className="zuriii"/>
            <h2 className="internn">HNG Internship 9 Frontend Task</h2>
            <img src={ingressdesk} alt="" className="ingresss"/>
        </footer>
    </div>
  );
};

export default Contact;
