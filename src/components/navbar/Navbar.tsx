import React from "react";
import { Link } from "react-router-dom";
import CartLogo from "../../assets/CartShape.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header_container">
      <div className="header_image">
        {/* <img src={HeaderImage} className="header_image" /> */}
      </div>
      <div className="divs_container">
        <div className="navbar_container">
          <Link to={"/"}>
            <h1 className="audiophile">audiophile</h1>
          </Link>

          <div className="navbar">
            <Link to={"/"}>
              <p>HOME</p>
            </Link>
            <Link to={"/headphones"}>
              <p>HEADPHONES</p>
            </Link>
            <Link to={"/speakers"}>
              <p>SPEAKERS</p>
            </Link>
            <Link to={"/earphones"}>
              <p>EARPHONES</p>
            </Link>
          </div>

          <img src={CartLogo} className="cart_logo" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
