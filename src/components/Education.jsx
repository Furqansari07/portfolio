import React from "react";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { EDUCATION } from "../data.js";

export default function Education() {
  return (
    <section className="block" id="education">
      <Reveal>
        <SectionLabel index="02" title="education" />
        <div className="edu-list">
          {EDUCATION.map((e) => (
            <div className="edu-row" key={e.degree}>
              <div className="edu-icon"><GraduationCap size={18} /></div>
              <div className="edu-main">
                <div className="edu-degree display">{e.degree}</div>
                <div className="edu-school mono">{e.school} · {e.date}</div>
              </div>
              {e.highlight && (
                <div className="edu-highlight">
                  <div className="edu-highlight-value mono">{e.highlight}</div>
                  <div className="edu-highlight-label">{e.highlightLabel}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
