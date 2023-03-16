import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import ShopCard from "../shopCard/ShopCard";
import shopCard1 from "../../assets/shopCard1.png";
import shopCard2 from "../../assets/shopCard2.png";
import shopCard3 from "../../assets/shopCard3.png";

const Shop = (): JSX.Element => {
  return (
    <div className="shop_container">
      <Link to={"/headphones"}>
        <ShopCard shopCardImage={shopCard1} category="HEADPHONES" />
      </Link>
      <Link to={"/speakers"}>
        <ShopCard shopCardImage={shopCard2} category="SPEAKERS" />
      </Link>

      <Link to={"/earphones"}>
        <ShopCard shopCardImage={shopCard3} category="EARPHONES" />
      </Link>
    </div>
  );
};

export default Shop;
