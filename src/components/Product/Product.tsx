import React from "react";
import "./Product.css";
import Navbar from "../navbar/Navbar";
import headphones1 from "../../assets/headphones1.jpg";
import { useState } from "react";

type onClick = {
  onAdd?: () => void;
  onRemove?: () => void;
};

const Product = () => {
  const [amount, setAmount] = useState<number>(1);
  const onAdd = () => {
    setAmount(amount + 1);
  };
  const onRemove = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <div className="product_container">
      <Navbar />
      <p>Go Back</p>
      <div className="items_container">
        <img src={headphones1} />
        <div className="items_content_container">
          <p className="newProduct">NEW PRODUCT</p>
          <h1 className="items_title">XX99 Mark II Headphones</h1>
          <p className="items_description">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <h3>${20 * amount}</h3>
          <div className="cart_and_button">
            <div className="button_container">
              <button type="button" placeholder="asdasd" onClick={onRemove}>
                -
              </button>

              <span>{amount}</span>
              <button placeholder="-" type="button" onClick={onAdd}>
                +
              </button>
            </div>
            <button className="see_product_btn">Add to cart</button>
          </div>
          <div className="product_description">
            <div className="features">
              <h1>FEATURES</h1>
              <p>
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat. The advanced Active Noise
                Cancellation with built-in equalizer allow you to experience
                your audio world on your terms. It lets you enjoy your audio in
                peace, but quickly interact with your surroundings when you need
                to. Combined with Bluetooth 5. 0 compliant connectivity and 17
                hour battery life, the XX99 Mark II headphones gives you
                superior sound, cutting-edge technology, and a modern design
                aesthetic.
              </p>
            </div>
            <div className="in_the_box">
              <h1>in the box</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
