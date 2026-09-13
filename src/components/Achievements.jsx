import React, { useState } from "react";
import { Eye, Trophy } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import PreviewModal from "./PreviewModal.jsx";
import { SOFT_SKILLS, CERTIFICATIONS, LEETCODE_URL, toPreviewUrl } from "../data.js";

export default function Achievements() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="block" id="achievements">
      <Reveal>
        <SectionLabel index="05" title="achievements & certifications" icon="🏆" />
        <div className="achieve-grid">
          <div className="achieve-card">
            <div className="achieve-card-title mono">
              <Trophy size={12} style={{ verticalAlign: "-2px", marginRight: 5 }} />
              leetcode
            </div>
            <div className="leetcode-row">
              <div className="leetcode-badge">300+</div>
              <div className="leetcode-meta">
                DSA problems solved · top 15% globally<br />
                <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer">view leetcode profile →</a>
              </div>
            </div>
          </div>
          <div className="achieve-card">
            <div className="achieve-card-title mono">✦ soft skills</div>
            <div className="soft-pills">
              {SOFT_SKILLS.map((s) => <span className="soft-pill" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
        <div className="achieve-card">
          <div className="achieve-card-title mono">📜 certifications</div>
          <div className="cert-list">
            {CERTIFICATIONS.map((c) => (
              <div className="cert-row" key={c.name}>
                <div className="cert-info">
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-issuer mono">{c.issuer}</span>
                </div>
                {c.url && (
                  <button className="cert-link" onClick={() => setActiveCert(c)}>
                    <Eye size={12} style={{ verticalAlign: "-2px", marginRight: 4 }} />
                    Preview
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {activeCert && (
        <PreviewModal
          title={activeCert.name}
          url={toPreviewUrl(activeCert.url)}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}