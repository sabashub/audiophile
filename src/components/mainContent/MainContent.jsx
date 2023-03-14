import React from "react";
import "./MainContent.css";
import SpeakerImage from "../../assets/MainContentSpeaker.png";
import zx7_image from "../../assets/zx7.png";
import yx1_image from "../../assets/yx1.png";
const MainContent = () => {
  return (
    <div className="main_content_container">
      <div className="zx9_speaker_container">
        <div className="oval">
          <div className="oval1"></div>
          <div className="oval2"></div>
        </div>
        <img src={SpeakerImage} className="zx9_image" />
        <div className="zx9_content">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
      <div className="zx7_container">
        <img src={zx7_image} className="zx7_image" />
        <h1>ZX7 SPEAKER</h1>
        <button>SEE PRODUCT</button>
      </div>
      <div className="yx1_container">
        <div className="yx1_image">
          <img src={yx1_image} className="yx1_image" />
        </div>
        <div className="yx1_content">
          <h1>YX1 EARPHONES</h1>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
