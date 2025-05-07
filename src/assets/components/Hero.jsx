import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css"; // Ensure the CSS path is correct
import bgImage from "../image/BGK.jpg"; // Make sure this path is correct
import logo from "../image/logo.jpg"; // Make sure this path is correct

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="hero-card">
        <div className="hero-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
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
          I believe brevity is key. My print and digital designs are all about
          minimalism and elegance.
        </p>
        <button className="hero-button" onClick={() => navigate("/about")}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
