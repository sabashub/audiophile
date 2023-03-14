import React from "react";
import "./Shop.css";
import ShopCard from "../shopCard/ShopCard";
import shopCard1 from "../../assets/shopCard1.png";
import shopCard2 from "../../assets/shopCard2.png";
import shopCard3 from "../../assets/shopCard3.png";

const Shop = (): JSX.Element => {
  return (
    <div className="shop_container">
      <ShopCard shopCardImage={shopCard1} category="HEADPHONES" />
      <ShopCard shopCardImage={shopCard2} category="SPEAKERS" />
      <ShopCard shopCardImage={shopCard3} category="EARPHONES" />
    </div>
  );
};

export default Shop;
