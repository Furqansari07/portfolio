import React from "react";
import { useInView } from "../hooks.js";

export default function Reveal({ children, className = "" }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div ref={ref} className={`reveal ${inView ? "reveal-in" : ""} ${className}`}>
      {children}
    </div>
  );
}
