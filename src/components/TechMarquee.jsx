import React from "react";
import { SKILLS } from "../data.js";

const TECHS = Array.from(new Set(Object.values(SKILLS).flat()));

export default function TechMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-label mono">$ ls ./toolbelt</div>
      <div className="marquee-track">
        <div className="marquee-group">
          {TECHS.map((t, i) => (
            <span className="marquee-item mono" key={`a-${i}`}>
              <span className="marquee-dot" />
              {t}
            </span>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {TECHS.map((t, i) => (
            <span className="marquee-item mono" key={`b-${i}`}>
              <span className="marquee-dot" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}