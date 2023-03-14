import React from "react";
import "./ItemsLeft.css";
import headphone1 from "../../assets/headphones1.jpg";

type propsType = {
  itemTitle: string;
  itemDescription: string;
  image: string;
};
const ItemsLeft = (props: propsType) => {
  const { itemTitle, itemDescription, image } = props;
  return (
    <div className="items_container">
      <img src={image} />
      <div className="items_content_container">
        <p className="newProduct">NEW PRODUCT</p>
        <h1 className="items_title">{itemTitle}</h1>
        <p className="items_description">{itemDescription}</p>
        <button className="see_product_btn">See Product</button>
      </div>
    </div>
  );
};

export default ItemsLeft;
