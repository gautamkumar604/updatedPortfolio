import React, { useState }from "react";
import { useEffect } from "react";
import "./Home.css";
import png from "./programmer.png";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    // Create and append script tag for the library
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize library once the script is loaded
    script.onload = () => {
      if (window.Typed) {
        new window.Typed('#element', {
          strings: ['#Trained as a fresher', '#Software Developer', '#Frontend devlopment'],
          typeSpeed: 120,
        });
      }
    };
  }, []);

  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-heading">
          <span>MY</span>Portfolio
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="intro-section">
        <h1>Welcome to My Portfolio</h1>
        <div className="intro-content">
          Hii,<br />
          My name is <span>Gautam Kumar,</span>
        <p>
          And I'm a passionate developer with a love for creating amazing web applications.
          With expertise in various technologies and a keen eye for design, I'm here to showcase my work and
          connect with potential clients and collaborators. Feel free to explore my portfolio and reach out.
        </p>
        <span id="element"></span>
        <div className="img">
          <img src={png} alt="download png" />
        </div>
        <div className="btn-1">
            <button type="button" id="button">Download cv</button>
            <button type="button" id="button">Contact me</button>
        </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
