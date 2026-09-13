import React from "react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { OTHER_BUILDS } from "../data.js";

export default function OtherBuilds() {
  return (
    <section className="block" id="other-builds">
      <Reveal>
        <SectionLabel index="06" title="other builds" icon="🧩" />
        <p className="builds-note">
          Smaller practice projects from early on — kept here for completeness rather than
          featured above, since the four projects up top better represent my current level.
        </p>
        <div className="builds-grid">
          {OTHER_BUILDS.map((b) => (
            <div className="build-card" key={b.name}>
              <div className="build-name">{b.name}</div>
              <div className="build-desc">{b.desc}</div>
              <div className="build-footer">
                <div className="build-stack">
                  {b.stack.map((s) => <span className="build-tag mono" key={s}>{s}</span>)}
                </div>
                {b.href && (
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="build-url">
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
