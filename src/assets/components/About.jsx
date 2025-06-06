import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../image/boutme.jpg";
import PI from "../image/me.jpg";
import "./Aboutme.css";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
<nav className="navbar">
        <div className="navbar-left">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar-right">
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
        </div>
      </nav>
        <div className="about-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="about-card">
          {/* Left Section */}
          <div className="left-section">
            <h2 className="title">ABOUT ME</h2>
            <img src={PI} alt="Profile" className="profile-image" />
            <h3 className="name">
              Nurhalisha Sari <span className="pronoun">(she/her)</span>
            </h3>
            <p className="role">Web Developer & Designer</p>
            <p className="description">
              I'm Nurhalisha, or Ali for short. I focus on designing and building clean,
              user-friendly, and visually appealing websites. I strive to create smooth and
              functional digital experiences that are both engaging and effective.
              With a keen eye for detail and a strong understanding of design principles,
              I aim to develop websites that not only look great but also provide a seamless
              user experience.
            </p>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div className="box">
              <h3>SKILLS & EXPERTISE</h3>
              <ul className="skills-list">
                <li><i className="fa-brands fa-html5"></i> HTML</li>
                <li><i className="fa-brands fa-css3-alt"></i> CSS</li>
                <li><i className="fa-solid fa-paintbrush"></i> Web Designing</li>
                <li><i className="fa-brands fa-adn"></i> Adobe</li>
                <li><i className="fa-solid fa-palette"></i> Canva</li>
                <li><i className="fa-brands fa-figma"></i> Figma</li>
              </ul>
            </div>

            <div className="box">
              <h3>CAREER GOALS</h3>
              <ul>
                <li>
                  I strive to refine my technical skills, gain hands-on experience, and
                  continuously improve my craft. Through freelance projects and collaborative
                  work, I'm looking forward to building a strong portfolio that reflects my
                  growth and expertise. I'm also working on mastering Python & Java while
                  keeping up with evolving technologies, and aiming to become a Full-Stack
                  Developer.
                </li>
              </ul>
            </div>

            <div className="box">
              <h3>PERSONAL TOUCH</h3>
              <ul>
                <li>Hobbies: Playing Softball and Online Games</li>
                <li>
                  Fun Fact: I Love Extreme Activities that trigger adrenaline rush like cliff
                  diving.
                </li>
              </ul>
            </div>

            <button className="back-button" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
