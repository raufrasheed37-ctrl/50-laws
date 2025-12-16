import React from "react";

export default function Footer() {
  return (
    <footer className="bg-section mt-8 text-muted">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        © {new Date().getFullYear()} Laws of Power Guide — Use knowledge responsibly.
      </div>
    </footer>
  );
}
