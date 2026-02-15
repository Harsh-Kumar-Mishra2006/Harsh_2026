import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>&copy; {year} Harsh Kumar Mishra. All rights reserved.</p>
        <p className="footer-contact">📧 mishrakumarharsh987@gmail.com</p>
        <p className="footer-contact">📞 7461079371</p>
        <p>Terms & Policies</p>

        <div className="footer-icons">
          <a
            href="https://github.com/Harsh-Kumar-Mishra2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-kumar-702a33323"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

