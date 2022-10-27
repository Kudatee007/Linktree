import React from "react";
import shareBtn from "./img/shareBtn.svg";
import proPics from "./img/Ellipse 3.svg";
import share2 from "./img/share2.svg";
import "./Linktree.css";
import slack from "./img/slack.svg";
import git from "./img/github.svg";
import zuri from "./img/zuri.svg";
import ingress from "./img/ingress.svg";

const Linktree = () => {
  return (
    <div className="LinkTree">
      {/* slack username */}
      <h1 id="slack" className="turner">
        timilehinkudaisi01
      </h1>

      {/* profile picture */}

      <img src={proPics} alt="" id="profile_img" className="profile" />

      {/* share Btn  */}
      <img src={shareBtn} alt="" className="share" />
      <img src={share2} alt="" className="share2" />

      <h1 className="profName">Kudaisi Timilehin</h1>

      {/* links */}

      <div className="links">
        <a href="https://twitter.com/kudatee001" id="twitter">
          Twitter Link
        </a>
        <a href="https://books.zuri.team" id="btn_zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id="books">
          Zuri Books
        </a>
        <a href="https://books.zuri.team/" id="book_python">
          Python Books
        </a>
        <a href="https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book_design">
          Design Books
        </a>
      </div>
      <div className="desktop-View">
        <div className="icons">
          <img src={slack} alt="" />
          <img src={git} alt="" />
        </div>
        <hr className="line" />
        <footer className="footer">
            <img src={zuri} alt="" />
            <h2 className="intern">HNG Internship 9 Frontend Task</h2>
            <img src={ingress} alt="" />
        </footer>
      </div>
    </div>
  );
};

export default Linktree;
