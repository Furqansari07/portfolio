import React, { useState, useEffect } from "react";
import { Terminal, Sun, Moon, Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Terminal size={18} color="#4CE0C7" />
        furqan.dev
      </div>

      {/* Desktop links */}
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

      {/* Mobile controls */}
      <div className="nav-mobile-controls">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle light and dark theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="hamburger-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={handleLinkClick}
          >
            {label}
          </a>
        ))}
        <span className="status-pill mobile-status-pill">
          <span className="pulse-dot" />open to work
        </span>
      </div>

      {menuOpen && <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}