import React from "react";

export default function SectionLabel({ index, title, icon }) {
  return (
    <div className="section-label">
      <span className="section-idx">{index}</span>
      <span className="section-title">
        {icon && <span className="section-icon">{icon}</span>}
        {title}
      </span>
      <span className="section-rule" />
    </div>
  );
}