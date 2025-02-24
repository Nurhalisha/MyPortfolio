import React from "react";
import "./Aboutme.css";
import profileImage from "../image/me.jpg"; // Adjust the path

const Profile = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h2 className="title">ABOUT ME</h2>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h3 className="name">Nurhalisha Sari (she/her)</h3>
        <p className="role">WEB DEVELOPER / DESIGNER</p>
        <h3 className="section-title">INTRODUCTION</h3>
        <p className="description">
          I'm a Web developer and designer with a passion for creating clean,
          responsive, and user-friendly interfaces. I focus on blending
          creativity with functionality to deliver seamless digital
          experiences.
        </p>
        <h3 className="section-title">ENTERED CONTEST</h3>
        <p className="contest">2023 FRONTEND DESIGNING - WMSU MAIN</p>
        <div className="social-icons">
          <span className="icon">📧</span>
          <span className="icon">📷</span>
          <span className="icon">🐦</span>
          <span className="icon">📘</span>
          <span className="icon">🔗</span>
          <p className="contact">CONTACT ME</p>
        </div>
      </div>
      <div className="right-section">
        <div className="box">
          <h3>SKILLS & EXPERTISE</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>WEB DESIGNING</li>
            <li>GRAPHIC ARTS</li>
          </ul>
        </div>
        <div className="box">
          <h3>CAREER GOALS</h3>
          <ul>
            <li>MASTER PYTHON PROGRAMMING LANGUAGE</li>
            <li>MASTER JAVA PROGRAMMING LANGUAGE</li>
            <li>
              Aspiring to become a full-stack developer, focusing on creating
              impactful web experiences.
            </li>
          </ul>
        </div>
        <div className="box">
          <h3>PERSONAL TOUCH</h3>
          <ul>
            <li>Hobbies: Play Online Games & Playing Softball</li>
            <li>Fun Fact: I love engaging in extreme activities like cliff diving.</li>
            <li>Trip in Life - Push the limits</li>
          </ul>
        </div>
        <button className="resume-button">Call to Action</button>
      </div>
    </div>
  );
};

export default Profile;
