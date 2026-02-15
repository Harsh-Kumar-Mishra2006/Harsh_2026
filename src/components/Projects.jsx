import React from "react";
import "./Projects.css";

/* -----------------------------------------------------------------------
   Feel free to edit the image paths (`img`), gradients (`grad`), button
   colours (`btn`), GitHub & Live URLs later.
------------------------------------------------------------------------ */
const projects = [
  {
    title: "SeatAdda Website",
    img: "seat-adda.png",                          // add your image file
    desc: "Responsive online bus‑booking frontend (non‑working demo).",
    grad: "linear-gradient(135deg,#ff512f,#dd2476)",
    btn:  "linear-gradient(135deg,#ff512f,#dd2476)",
    github: "#https://github.com/Harsh-Kumar-Mishra2006/Seat-Adda-Professional-website",
    live:   "#https://seat-adda-professional-website.vercel.app/",
  },
  {
    title: "Tic‑Tac‑Toe (AI)",
    img: "tictactoe.png",
    desc: "User‑vs‑computer Tic‑Tac‑Toe game with simple AI logic.",
    grad: "linear-gradient(135deg,#00b4db,#0083b0)",
    btn:  "linear-gradient(135deg,#00b4db,#0083b0)",
    github: "#https://github.com/Harsh-Kumar-Mishra2006/Tic-Tac-Toe",
    live:   "#https://tic-tac-toe-lime-pi.vercel.app/",
  },
  {
    title: "Weather App",
    img: "weatherapp.png",
    desc: "Enter any city and instantly fetch real‑time weather data.",
    grad: "linear-gradient(135deg,#f7971e,#ffd200)",
    btn:  "linear-gradient(135deg,#f7971e,#ffd200)",
    github: "#https://github.com/Harsh-Kumar-Mishra2006/WeatherApp",
    live:   "#https://weather-app-murex-five-57.vercel.app/",
  },
  {
    title: "Image Creator",
    img: "imagegenerator.png",
    desc: "Type a prompt and generate stunning images via AI.",
    grad: "linear-gradient(135deg,#8e2de2,#4a00e0)",
    btn:  "linear-gradient(135deg,#8e2de2,#4a00e0)",
    github: "#https://github.com/Harsh-Kumar-Mishra2006/Image-creator",
    live:   "#https://image-creator-weld.vercel.app/",
  },
];

export default function Projects() {
  return (
    <main className="projects-wrapper" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map(
          ({ title, img, desc, grad, btn, github, live }) => (
            <article
              key={title}
              className="project-card"
              style={{ "--grad": grad, "--btn": btn }}
            >
              {/* left side: image area */}
              <div
                className="project-image"
                style={{ backgroundImage: `url(${img})` }}
              />

              {/* right side: info */}
              <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <div className="project-links">
                  <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </main>
  );
}
