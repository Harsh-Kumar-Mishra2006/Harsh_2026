import React from "react";
import "./About.css";

export default function About() {
  const projects = [
    "SeatAdda – Online Bus Booking UI",
    "AI Tic‑Tac‑Toe Game",
    "Weather App (OpenWeather API)",
    "Image Creator (DALL·E)",
    "Swiggy UI Clone",
    "Word Counter / NotePad",
  ];

  const skills = [
    "HTML / CSS",
    "JavaScript / ES6",
    "React.js",
    "Next.js",
    "Figma & UI Design",
    "Digital Marketing",
    "Canva Graphics",
    "Video Editing",
    "Content Creation",
    "Social Media Handling",
  ];

  return (
    <main className="about-section" id="about">
      {/* heading */}
      <h1 className="about-heading">
        About <span>Me</span>
      </h1>

      {/* longer intro */}
      <p className="about-intro">
        I’m <strong>Harsh Kumar Mishra</strong>, a self‑driven front‑end
        developer who loves turning complex ideas into elegant web experiences.
        Over the last six months I’ve shipped production‑ready UIs, explored
        design systems, and dived deep into performance tuning. Whether I’m
        architecting components in React, sketching high‑fidelity mock‑ups in
        Figma, or optimising SEO for marketing campaigns, my goal is the same —
        craft solutions that are fast, accessible, and delightful to use.
        Curiosity keeps me learning, collaboration keeps me humble, and coffee
        keeps me coding .
      </p>

      {/* gradient bars (core stack) */}
      <div className="core-stack">
        {["HTML & CSS", "JavaScript", "React.js", "Next.js"].map((skill) => (
          <div key={skill} className="skill">
            <span className="skill-name">{skill}</span>
            <div className="skill-bar" />
          </div>
        ))}
      </div>

      {/* featured projects */}
      <section className="subsection">
        <h2 className="subheading"> Featured Projects</h2>
        <div className="card-grid">
          {projects.map((title) => (
            <div key={title} className="card project-card">
              {title}
            </div>
          ))}
        </div>
      </section>

      {/* key skills */}
      <section className="subsection">
        <h2 className="subheading"> Key Skills</h2>
        <div className="card-grid">
          {skills.map((skill) => (
            <div key={skill} className="card skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* stats */}
     {/* ── Stats / Highlights ───────────────────────── */}
<section className="stats">
  {[
    { label: "Experience", value: "6 Months+", icon: "🕓" },
    { label: "Live Projects", value: "3+", icon: "🚀" },
    { label: "Frontend Internship", value: "1", icon: "💼" },
  ].map(({ label, value, icon }) => (
    <div key={label} className="stat">
      <span className="stat-icon">{icon}</span>
      <h3 className="stat-number">{value}</h3>
      <p className="stat-label">{label}</p>
    </div>
  ))}
</section>
    </main>
  );
}

