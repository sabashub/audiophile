import "./Speakers.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import ItemsLeft from "../items/ItemsLeft";
import ItemsRight from "../items/ItemsRight";
import Speakers1 from "../../assets/speakers1.jpg";
import Speakers2 from "../../assets/speakers2.jpg";
import Blog from "../blog/Blog";
import Footer from "../footer/Footer";
import Shop from "../shop/Shop";
const Speakers = () => {
  return (
    <div>
      <Navbar />
      <div className="title">
        <h2>speakers</h2>
      </div>
      <ItemsLeft
        itemTitle="ZX9
SPEAKER"
        itemDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        image={Speakers1}
      />
      <ItemsRight
        itemTitle="ZX7
SPEAKER"
        itemDescription="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        image={Speakers2}
      />
      <Shop />
      <Blog />
      <Footer />
    </div>
  );
};
export default Speakers;
