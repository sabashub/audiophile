import React from "react";
import "./ShopCard.css";

type propsType = {
  shopCardImage: any;
  category: any;
};
const ShopCard = (props: propsType): JSX.Element => {
  const { shopCardImage, category } = props;
  return (
    <div className="shop_card_container">
      <img src={shopCardImage} className="shop_card1" />
      <div className="card_content">
        <h3 className="headphones">{category}</h3>
        <p className="shop_p">SHOP</p>
      </div>
    </div>
  );
};

export default ShopCard;
