import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

export default function PreviewModal({ title, url, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="preview-modal-backdrop" onClick={onClose}>
      <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
        <div className="preview-modal-header">
          <span className="mono">{title}</span>
          <div className="preview-modal-actions">
            <a
              href={url.replace("/preview", "/view")}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-modal-open"
              aria-label="Open in new tab"
            >
              <ExternalLink size={15} />
            </a>
            <button onClick={onClose} className="preview-modal-close" aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </div>
        <iframe src={url} title={title} className="preview-modal-frame" />
      </div>
    </div>
  );
}