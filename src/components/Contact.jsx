import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Code2, MapPin, Copy, Check } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { CONTACT } from "../data.js";

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  return (
    <section className="block" id="contact">
      <Reveal>
        <div className="contact-block">
          <div className="contact-eyebrow mono">07 · $ contact --init</div>
          <h2 className="contact-title display">Let's build something<br />that performs.</h2>
          <p className="contact-sub">
            Open to Software Engineer & Full Stack Developer roles · {CONTACT.location} · Immediate Available
          </p>
          <div className="contact-actions">
            <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
              <Mail size={15} /> Email me
            </a>
            <button onClick={() => copyToClipboard(CONTACT.email, "email")} className="btn btn-ghost">
              {copied === "email" ? <Check size={15} /> : <Copy size={15} />}
              {copied === "email" ? "Copied!" : "Copy email"}
            </button>
            <a href={`tel:${CONTACT.phone}`} className="btn btn-ghost">
              <Phone size={15} /> Call
            </a>
            <button onClick={() => copyToClipboard(CONTACT.phoneDisplay, "phone")} className="btn btn-ghost">
              {copied === "phone" ? <Check size={15} /> : <Copy size={15} />}
              {copied === "phone" ? "Copied!" : "Copy number"}
            </button>
          </div>
          <div className="contact-links mono">
            <a href="#" target="_blank" rel="noopener noreferrer"><Github size={14} /> {CONTACT.github}</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> {CONTACT.linkedin}</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Code2 size={14} /> leetcode profile</a>
            <span><MapPin size={14} style={{ display: "inline", marginRight: 4 }} />{CONTACT.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
