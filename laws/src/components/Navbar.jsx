import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-section/90 backdrop-blur-md z-30 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("home")}>
          <div className="w-10 h-10 rounded-md bg-gold flex items-center justify-center text-black font-bold">50</div>
          <div>
            <div className="text-lg font-semibold text-gold">Laws of Power</div>
            <div className="text-xs text-muted">Understand · Protect · Apply</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          {["home","laws","about","contact"].map(p => (
            <button key={p} className="hover:text-gold transition-colors" onClick={() => onNavigate(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <select className="bg-section text-muted p-2 rounded text-sm" onChange={e => onNavigate(e.target.value)}>
            <option value="home">Home</option>
            <option value="laws">Laws</option>
            <option value="about">About</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </div>
    </header>
  );
}
