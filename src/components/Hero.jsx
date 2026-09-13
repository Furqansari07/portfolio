import React, { useState } from "react";
import { Download, Github, Linkedin, ArrowUpRight, User } from "lucide-react";
import StatCard from "./StatCard.jsx";
import PreviewModal from "./PreviewModal.jsx";
import { BOOT_LINES, STATS, RESUME_URL, PROFILE_PHOTO_URL } from "../data.js";
import { useInView } from "../hooks.js";

export default function Hero() {
  const [bootStep, setBootStep] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [heroRef] = useInView(0.1);

  React.useEffect(() => {
    if (bootStep < BOOT_LINES.length) {
      const t = setTimeout(() => setBootStep((s) => s + 1), 380);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBootDone(true), 300);
      return () => clearTimeout(t);
    }
  }, [bootStep]);

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-top">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot" style={{ background: "#FF6B6B" }} />
            <span className="dot" style={{ background: "#F5A623" }} />
            <span className="dot" style={{ background: "#4CE0C7" }} />
          </div>
          <div className="terminal-body mono">
            {BOOT_LINES.slice(0, bootStep).map((line, i) => (
              <div key={i} className={`boot-line ${line.startsWith("$") ? "cmd" : ""}`}>
                {line}
              </div>
            ))}
            {bootStep < BOOT_LINES.length && <span className="cursor" />}
          </div>
        </div>

               <div className="avatar-frame" aria-hidden={!PROFILE_PHOTO_URL}>
          {PROFILE_PHOTO_URL ? (
            <img src={PROFILE_PHOTO_URL} alt="Furqan Ansari" className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              <User size={30} strokeWidth={1.4} />
              <span className="mono avatar-placeholder-label">add photo</span>
            </div>
          )}
        </div> 
      </div>

      <h1 className="hero-title display">
        Furqan Ansari —<br />
        <span className="accent">Full Stack Software Engineer</span>
      </h1>
      <p className="hero-sub">
        I build web applications that don't just work — they hold up under real usage.
        React.js and ASP.NET Core on the front lines, MySQL and MongoDB underneath,
        shipped with the same rigor whether it's a client product or a 2am side project.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View projects <ArrowUpRight size={15} />
        </a>
        <button onClick={() => setResumeOpen(true)} className="btn btn-ghost">
          <Download size={15} /> Resume
        </button>
        <a href="https://github.com/Furqansari07" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <Github size={15} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/furqansari07" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <Linkedin size={15} /> LinkedIn
        </a>
      </div>

      <div className={`stats-row ${bootDone ? "hero-in" : ""}`}>
        {STATS.map((s, i) => (
          <StatCard key={s.label} stat={s} active={bootDone} delay={i * 120} />
        ))}
      </div>

      {resumeOpen && (
        <PreviewModal title="resume.pdf" url={RESUME_URL} onClose={() => setResumeOpen(false)} />
      )}
    </div>
  );
}