import React from "react";
import "./Header.css";
import CartLogo from "../../assets/CartShape.png";
import HeaderImage from "../../assets/image-hero.jpg";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_image">
        <img src={HeaderImage} className="header_image" />
      </div>
      <div className="divs_container">
        <div className="navbar_container">
          <Navbar />
        </div>

        <div className="header_content">
          <p className="new_product">NEW PRODUCT</p>
          <h1 className="header_content_title">XX99 Mark II Headphones</h1>
          <p className="header_content_paragraph">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="see_product_btn">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
