import React, { useState, useMemo } from "react";
import laws from "../data/laws";

export default function Laws({ onOpenLaw }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() =>
    laws.filter(l => (l.title + " " + l.short).toLowerCase().includes(q.toLowerCase())),
  [q]);

  return (
    <section className="max-w-5xl mx-auto mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">All Laws</h2>
        <input
          className="bg-section p-2 rounded text-sm"
          placeholder="Search laws..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(law => (
          <article key={law.id} className="bg-section p-4 rounded hover:ring-2 hover:ring-gold/30 cursor-pointer" onClick={() => onOpenLaw(law)}>
            <h3 className="font-semibold">{law.title}</h3>
            <p className="text-muted text-sm mt-1">{law.short}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
