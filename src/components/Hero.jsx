import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            I'm <span className="name-highlight">Harsh Kumar Mishra</span>,
            <br />
            <span>Frontend Web Developer</span>
          </h1>
          <p className="hero-description">
            I specialize in building elegant, fast, and responsive websites using React.js,
            Tailwind CSS, and JavaScript. With a strong passion for design and development,
            I bring user-centric ideas to life on the web.
          </p>
          <a
            href="/resume.pdf"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Resume
          </a>
        </div>

        <div className="hero-image">
          <img src="me.jpg" alt="Harsh Kumar Mishra" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

