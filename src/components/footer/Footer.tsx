import React from "react";
import "./Footer.css";
import Insta from "../../assets/Insta.png";
import Fb from "../../assets/Fb.png";
import Twitter from "../../assets/Twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content1">
        <h1>audiophile</h1>
        <p className="p1">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="p2">Copyright 2021. All Rights Reserved</p>
      </div>
      <div className="footer_content2">
        <div className="footer_navbar">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/headphones"}>
            <p>HEadphones</p>
          </Link>
          <Link to={"/speakers"}>
            <p>Speakers</p>
          </Link>
          <Link to={"/earphones"}>
            <p>Earphones</p>
          </Link>
        </div>
        <div className="social_media">
          <img src={Fb} />
          <img src={Twitter} />
          <img src={Insta} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
