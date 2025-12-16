import React from "react";

export default function Footer() {
  return (
    <footer className="bg-section mt-12 text-muted py-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} <span className="text-gold font-semibold">Laws of Power Guide</span> — Use knowledge responsibly.
        </p>
      </div>
    </footer>
  );
}
