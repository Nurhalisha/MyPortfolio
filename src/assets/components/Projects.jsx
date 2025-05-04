import React from "react";
import { Link } from "react-router-dom";
import "./projects.css"; // Ensure you have the updated CSS file linked

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar-right">
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="projects-container">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on, showcasing my skills and knowledge.</p>

        <div className="project-cards">
          {/* Mini Pokédex */}
          <div className="project-card">
            <div className="project-details">
              <h3>Mini Pokédex</h3>
              <p>A simple Pokémon search app that displays information about different Pokémon.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Nurhalisha/MyPortfolio/tree/minipokedex/pokedexmini" // Correct GitHub link for Mini Pokédex
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://minipokdex.netlify.app" // Live website link for Mini Pokédex
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                 | Live Website
                </a>
              </div>
            </div>
          </div>

          {/* Scientific Calculator */}
          <div className="project-card">
            <div className="project-details">
              <h3>Scientific Calculator</h3>
              <p>A fully functional scientific calculator with multiple functions and features.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Nurhalisha/MyPortfolio/tree/calculator" // Correct GitHub link for Scientific Calculator
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://maincal.netlify.app" // Live website link for Scientific Calculator
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                 | Live Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
