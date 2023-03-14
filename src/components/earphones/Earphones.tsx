import React from "react";
import "./Earphones.css";
import Navbar from "../navbar/Navbar";
import ItemsLeft from "../items/ItemsLeft";
import earphones1 from "../../assets/earphones1.jpg";
import Shop from "../shop/Shop";
import Blog from "../blog/Blog";
import Footer from "../footer/Footer";
const Earphones = () => {
  return (
    <div>
      <Navbar />
      <div className="title">
        <h2>Earphones</h2>
      </div>
      <ItemsLeft
        itemTitle="YX1 WIRELESS
EARPHONES"
        itemDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        image={earphones1}
      />
      <Shop />
      <Blog />
      <Footer />
    </div>
  );
};

export default Earphones;
