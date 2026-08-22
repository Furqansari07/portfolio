import React from "react";

export default function SectionLabel({ index, title }) {
  return (
    <div className="section-label">
      <span className="section-idx">{index}</span>
      <span className="section-title">{title}</span>
      <span className="section-rule" />
    </div>
  );
}
