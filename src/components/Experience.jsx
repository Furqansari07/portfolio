import React from "react";
import { Circle } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { EXPERIENCE } from "../data.js";

export default function Experience() {
  return (
    <section className="block" id="experience">
      <Reveal>
        <SectionLabel index="03" title="experience log" />
        {EXPERIENCE.map((exp) => (
          <div className="log-entry" key={exp.hash}>
            <div className="log-hash mono">{exp.hash}</div>
            <div>
              <div className="log-role display">{exp.role}</div>
              <div className="log-meta mono">
                <span>{exp.company}</span>
                <Circle size={3} fill="currentColor" />
                <span>{exp.date}</span>
              </div>
              <ul className="log-points">
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <div className="log-stack">
                {exp.stack.map((s) => <span className="skill-tag mono" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
