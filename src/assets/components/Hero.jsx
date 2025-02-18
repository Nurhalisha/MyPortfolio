import React from "react";
import "./hero.css";
import background from 'C:\Users\DELL\Desktop\SAM\MyPortfolio\src\assets\image\1600w-pE_Ruap0PiI (1).jpg';

const ProfilePage = () => {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <div className="hero-logo">NS</div>
        <h1 className="hero-title">
          Hello, I am{" "}
          <span className="circle-wrapper">
            <span className="circle-text">Nur</span>
            <div className="circle-animation"></div>
          </span>
          !
        </h1>
        <p className="hero-subtitle">Web Developer | Designer</p>
        <p className="hero-text">
          I believe brevity is key. My print and digital designs are all about minimalism and elegance.
        </p>
        <div>
          <button className="hero-button">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
