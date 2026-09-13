import React, { useState } from "react";
import {
  Mail, Phone, Github, Linkedin, Code2, MapPin, Copy, Check,
  Paperclip, Send, Loader2, CheckCircle2, AlertCircle, X,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import { CONTACT, CONTACT_FORM_ENDPOINT, LEETCODE_URL } from "../data.js";

const MAX_FILE_MB = 8;

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File is too large — keep it under ${MAX_FILE_MB}MB.`);
      setFile(null);
      e.target.value = "";
      return;
    }
    setFileError("");
    setFile(f);
  };

  const removeFile = () => {
    setFile(null);
    setFileError("");
  };

  const isConfigured = !CONTACT_FORM_ENDPOINT.includes("YOUR_FORM_ID");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("subject", form.subject || `Portfolio message from ${form.name}`);
    data.append("message", form.message);
    if (file) data.append("attachment", file);

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setFile(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            <a href="https://www.github.com/Furqansari07" target="_blank" rel="noopener noreferrer"><Github size={14} /> {CONTACT.github}</a>
            <a href="https://www.linkedin.com/in/furqansari07" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> {CONTACT.linkedin}</a>
            <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer"><Code2 size={14} /> leetcode profile</a>
            <span><MapPin size={14} style={{ display: "inline", marginRight: 4 }} />{CONTACT.location}</span>
          </div>

          <div className="contact-divider">
            <span className="mono">or send a message directly</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label className="mono" htmlFor="cf-name">name *</label>
                <input
                  id="cf-name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="contact-field">
                <label className="mono" htmlFor="cf-email">your email *</label>
                <input
                  id="cf-email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="contact-field">
              <label className="mono" htmlFor="cf-subject">subject</label>
              <input
                id="cf-subject" name="subject" type="text"
                value={form.subject} onChange={handleChange}
                placeholder="What's this about? (optional)"
              />
            </div>

            <div className="contact-field">
              <label className="mono" htmlFor="cf-message">message *</label>
              <textarea
                id="cf-message" name="message" required rows={5}
                value={form.message} onChange={handleChange}
                placeholder="Tell me a bit about the role, project, or what's on your mind..."
              />
            </div>

            <div className="contact-field">
              <label className="mono" htmlFor="cf-file">attachment <span className="contact-optional">(optional — resume request, brief, etc.)</span></label>
              {!file ? (
                <label htmlFor="cf-file" className="contact-file-drop mono">
                  <Paperclip size={14} /> Attach a file <span className="contact-optional">· max {MAX_FILE_MB}MB</span>
                </label>
              ) : (
                <div className="contact-file-chip mono">
                  <Paperclip size={13} />
                  <span className="contact-file-name">{file.name}</span>
                  <button type="button" onClick={removeFile} aria-label="Remove file">
                    <X size={13} />
                  </button>
                </div>
              )}
              <input id="cf-file" type="file" onChange={handleFile} style={{ display: "none" }} />
              {fileError && <div className="contact-file-error mono">{fileError}</div>}
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={status === "sending"}>
              {status === "sending" ? (
                <><Loader2 size={15} className="spin" /> Sending...</>
              ) : (
                <><Send size={15} /> Send message</>
              )}
            </button>

            {status === "sent" && (
              <div className="contact-status contact-status-ok mono">
                <CheckCircle2 size={14} /> Message sent — thanks! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="contact-status contact-status-err mono">
                <AlertCircle size={14} />
                {isConfigured
                  ? "Something went wrong — please try emailing me directly instead."
                  : "Contact form isn't wired up yet — email me directly for now."}
              </div>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}