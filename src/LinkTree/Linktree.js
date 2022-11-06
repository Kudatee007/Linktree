import React from "react";
import shareBtn from "./img/shareBtn.svg";
import proPics from "./img/Ellipse 3.svg";
import share2 from "./img/share2.svg";
import "./Linktree.css";
import slack from "./img/slack.svg";
import git from "./img/github.svg";
import zuridesk from "./img/Footer/Zuri.Internship_Logo.svg";
import ingressdesk from "./img/Footer/I4G.svg";
import { Link } from "react-router-dom";

const Linktree = () => {
  return (
    <div className="LinkTree">
      {/* slack username */}

      <h1 id="slack">timilehinkudaisi01</h1>

      {/* profile picture */}

      <img src={proPics} alt="" id="profile__img" />

      {/* share Btn  */}
      <img src={shareBtn} alt="" id="share" />
      <img src={share2} alt="" id="share2" />

      <h1 id="twitter">Kudatee01</h1>

      {/* links */}

      <div className="links">
        <a href="https://twitter.com/kudatee001" id="twitter__link">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id="books">
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<timilehinkudaisi01>"
          id="book__python"
        >
          Python Books
        </a>
        <a href="https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          Design Books
        </a>

        <a href="/contact" id="contact">
          Contact Me
        </a>
      </div>
      <div className="desktop-View">
        <div className="icons">
          <a href="timilehinkudaisi01">
            <img src={slack} alt="slack" />
          </a>
          <a href="https://github.com/Kuldatee">
            <img src={git} alt="github" />
          </a>
        </div>
        <hr className="line" />
        <footer className="footer">
          <img src={zuridesk} alt="" className="zurii" />
          <h2 className="intern">HNG Internship 9 Frontend Task</h2>
          <img src={ingressdesk} alt="" className="ingress" />
        </footer>
      </div>
    </div>
  );
};

export default Linktree;
