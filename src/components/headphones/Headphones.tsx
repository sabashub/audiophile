import React from "react";
import { Link } from "react-router-dom";
import CartLogo from "../../assets/CartShape.png";
import Navbar from "../navbar/Navbar";
import "./Headphones.css";
import ItemsLeft from "../items/ItemsLeft";
import ItemsRight from "../items/ItemsRight";
import headphone1 from "../../assets/headphones1.jpg";
import headphone2 from "../../assets/headphones2.jpg";
import headphone3 from "../../assets/headphone3.jpg";
import Shop from "../shop/Shop";
import Footer from "../footer/Footer";
import Blog from "../blog/Blog";
const Headphones = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="title">
        <h2>Headphones</h2>
      </div>
      <ItemsLeft
        itemTitle="XX99 Mark II Headphones"
        itemDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        image={headphone1}
      />
      <ItemsRight
        itemTitle="XX99 Mark I Headphones"
        itemDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        image={headphone2}
      />
      <ItemsLeft
        itemTitle="XX59
Headphones"
        itemDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        image={headphone3}
      />
      <Shop />
      <Blog />
      <Footer />
    </div>
  );
};

export default Headphones;
