import React from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { SOFT_SKILLS, CERTIFICATIONS } from "../data.js";

export default function Achievements() {
  return (
    <section className="block" id="achievements">
      <Reveal>
        <SectionLabel index="05" title="achievements & certifications" />
        <div className="achieve-grid">
          <div className="achieve-card">
            <div className="achieve-card-title mono">leetcode</div>
            <div className="leetcode-row">
              <div className="leetcode-badge">250+</div>
              <div className="leetcode-meta">
                DSA problems solved · top 15% globally<br />
                <a href="#" target="_blank" rel="noopener noreferrer">view leetcode profile →</a>
              </div>
            </div>
          </div>
          <div className="achieve-card">
            <div className="achieve-card-title mono">soft skills</div>
            <div className="soft-pills">
              {SOFT_SKILLS.map((s) => <span className="soft-pill" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
        <div className="achieve-card">
          <div className="achieve-card-title mono">certifications</div>
          <div className="cert-list">
            {CERTIFICATIONS.map((c) => (
              <div className="cert-row" key={c.name}>
                <div className="cert-info">
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-issuer mono">{c.issuer}</span>
                </div>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                    <ExternalLink size={12} style={{ verticalAlign: "-2px", marginRight: 4 }} />
                    View certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}