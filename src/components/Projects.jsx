import React from "react";
import { Circle, ExternalLink } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <section className="block" id="projects">
      <Reveal>
       <SectionLabel index="06" title="other builds" icon="🧩" /> 
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-top">
                <span className="project-name display">{p.name}</span>
                <span className="project-status">
                  <Circle size={7} fill="#4CE0C7" color="#4CE0C7" /> {p.status}
                </span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-metrics">
                {p.metrics.map((m) => <span className="metric-chip mono" key={m}>{m}</span>)}
              </div>
              <div className="project-footer">
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="skill-tag mono" key={s} style={{ fontSize: "10.5px", padding: "3px 8px" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <a href={p.href} className="project-link" target="_blank"><ExternalLink size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
