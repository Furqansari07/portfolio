import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import OtherBuilds from "./components/OtherBuilds.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* ignore storage errors */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="portfolio-root" data-theme={theme}>
      <div className="grid-bg" />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <div className="nav-spacer" />
      <Hero />
      <TechMarquee />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <OtherBuilds />
      <Contact />
      <Footer />
    </div>
  );
}