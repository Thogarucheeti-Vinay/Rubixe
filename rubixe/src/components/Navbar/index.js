import React, { useState } from "react";
import "./index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://rubixe.com/">
          <img
            className="navbar-logo"
            src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
            alt="Rubixe Logo"
          />
        </a>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/" className="navbar-link">
            HOME
          </a>
          <a href="/" className="navbar-link">
            SERVICES
          </a>
          <a href="/" className="navbar-link">
            PRODUCTS
          </a>
          <div className="dropdown">
            <button className={`dropbtn navbar-link ai-internship`}>
              AI INTERNSHIP
            </button>
            <div className="dropdown-content">
              <a href="#" className="navbar-link">
                INCUBATION CENTER
              </a>
              <a href="#" className="navbar-link">
                AI INTERNSHIP PROJECTS
              </a>
              <a href="#" className="navbar-link">
                APPLY ONLINE
              </a>
            </div>
          </div>
          <a href="/" className="navbar-link">
            CAREER
          </a>
          <a href="/" className="navbar-link">
            BLOG
          </a>
          <a href="/" className="navbar-link">
            ABOUT
          </a>
          <a href="/" className="navbar-link">
            CONTACT US
          </a>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
