import React, { useState, useEffect } from "react";
import { Terminal, Sun, Moon } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "about" },
  { id: "education", label: "education" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "achievements", label: "achievements" },
  { id: "contact", label: "contact" },
];

export default function Nav({ theme, toggleTheme }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-64px 0px -65% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Terminal size={18} color="#4CE0C7" />
        furqan.dev
      </div>
      <div className="nav-links">
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
            {label}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle light and dark theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <span className="status-pill">
          <span className="pulse-dot" />open to work
        </span>
      </div>
    </nav>
  );
}
