import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Certificate.css";
import "./Navbar.css";
import certificateImage from "../image/certificate.jpg";

const certificates = [
  {
    title: "Responsive Web Design in FreeCodeCamp",
    hours: "300 hours",
    link: "https://www.freecodecamp.org/certification/fcc57e033a5-b99d-40f8-81ed-fc475bb2c08f/responsive-web-design",
    image: certificateImage,
  },
];

const Certificate = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar-right">
          <Link to="/about">About Me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>

      {/* Certificate Section */}
      <div className="certificate-container">
        <h1 className="certificate-header">My Certificates</h1>
        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <img
                className="certificate-image"
                src={certificate.image}
                alt={certificate.title}
                onClick={() => openModal(certificate.image)}
              />
              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p>
                  <strong>Hours:</strong> {certificate.hours}
                </p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="certificate-modal" onClick={closeModal}>
          <img
            className="certificate-modal-image"
            src={modalImage}
            alt="Enlarged Certificate"
          />
        </div>
      )}
    </div>
  );
};

export default Certificate;
