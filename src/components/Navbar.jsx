import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const links = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ---- logo / name ---- */}
        <a href="#home" className="logo">
          Harsh&nbsp;Kumar&nbsp;Mishra
        </a>

        {/* ---- desktop links ---- */}
        <ul className="nav-links">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className={window.location.hash === href ? "active" : ""}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* ---- burger button ---- */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ---- mobile drawer ---- */}
      <ul className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              onClick={() => setOpen(false)}
              className={window.location.hash === href ? "active" : ""}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


