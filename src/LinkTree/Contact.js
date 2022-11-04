import React, { useState, useRef } from "react";
import "./Contact.css";
import zuridesk from "./img/Footer/Zuri.Internship_Logo.svg";
import ingressdesk from "./img/Footer/I4G.svg";

const Contact = () => {
  const name = "Timilehin";
  const [emaiil, setEmaiil] = useState("");
  const [message, setMessage] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [error, setError] = useState(false);
  const inputRef3 = useRef()
  const inputRef4 = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    if(emaiil == "" || message == "" || first.length == "" || last == "") {
        setError(true)
        inputRef3.current.style.border = "1px solid red"
    }else{
      inputRef3.current.style.border = "1px solid black"
    }
  }
  return (
    <div className="Contact_Contact">
      <div className="Contact_Contacts">
        <h1 className="contactMe">Contact Me</h1>
        <p className="contactPa">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="llabel">
            <div className="llabel1">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
                onChange={e=> setFirst(e.target.value)}
              />
            </div>
            <div className="llabel1">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
                onChange={e=> setLast(e.target.value)}
              />
            </div>
          </div>
          <div className="llabel2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="yourname@email.com" id="email" onChange={e=>setEmaiil(e.target.value)} ref={inputRef3}/>
            {error && emaiil == "" ? <label className="lab">please enter your email address</label> : ""}
          </div>
          <div className="llabel3">
            <h2 className="mess">Message</h2>
            <textarea
              name=""
              id="message"
              cols="40"
              rows="10"
              onChange={e=>setMessage(e.target.value)}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            {error && message == "" ? <label className="lab">please enter a message</label> : ""}
          </div>
          <div className="check">
            <input type="checkbox" className="checkbox" ref={inputRef4}/>
            <p>
              You agree to providing your data to {name} who may contact you.
            </p>
          </div>
          <button id="btn__submit">Send message</button>
        </form>
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
