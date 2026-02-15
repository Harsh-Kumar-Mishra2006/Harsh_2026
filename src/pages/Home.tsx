// src/pages/Home.tsx
import React from "react";
import Layout from "../components/layout/layout";
import HeroPage from "../components/ui/HeroPage";
import About from "../components/sections/Home/about/About";
import StatsSection from "../components/ui/Stats";
import Skills from "../components/sections/Home/skills/Skills";
import Projects from "../components/sections/Home/projects/Projects";
import CertificatesAchievements from "../components/sections/Home/certificates_acheivements/certificates_acheivements";
import Contact from "../components/sections/Home/contact/contact";

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroPage />
      <StatsSection />
      <About />
      <Skills />
      <Projects />
      <CertificatesAchievements />
      <Contact />
    </Layout>
  );
};

export default Home;
