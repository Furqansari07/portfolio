import React from "react";
import { useCountUp } from "../hooks.js";

export default function StatCard({ stat, active, delay }) {
  const decimals = stat.value % 1 !== 0 ? 2 : 0;
  const display = useCountUp(stat.value, active, decimals);
  return (
    <div className="stat-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-value">
        {display}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}
