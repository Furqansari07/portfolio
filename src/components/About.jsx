import React from "react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { SKILLS } from "../data.js";

export default function About() {
  return (
    <section className="block" id="about">
      <Reveal>
        <SectionLabel index="01" title="about" />
        <div className="about-grid">
          <p className="about-text">
            I'm a Computer Engineering graduate <strong>(9.14 CGPA, top 5% of my batch)</strong> who
            treats software the way an engineer treats a load-bearing structure — it has to
            hold under real weight, not just look right in a demo. That mindset is what took
            a database query from slow to <strong>40% faster</strong>, and a REST API from "working"
            to <strong>99.5% reliable</strong> in production.
            <br /><br />
            Outside of internships, I build things I'm genuinely curious about — a JWT-secured
            recipe platform, an NLP tool that summarizes meetings — and I keep my fundamentals
            sharp with <strong>270+ solved DSA problems</strong> on LeetCode, top 15% globally.
            Right now I'm looking for a full-time Software Engineer or Full Stack Developer
            role where that same rigor gets applied at real scale.
          </p>
          <div className="skills-panel">
            {Object.entries(SKILLS).map(([group, tags]) => (
              <div className="skill-group" key={group}>
                <div className="skill-group-title mono">{group}</div>
                <div className="skill-tags">
                  {tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
