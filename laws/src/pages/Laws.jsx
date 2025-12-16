import React, { useState, useMemo } from "react";
import laws from "../data/laws";

export default function Laws({ onOpenLaw }) {
  const [q,setQ] = useState("");
  const filtered = useMemo(() => 
    laws.filter(l => (l.title + " " + l.short).toLowerCase().includes(q.toLowerCase())),
  [q]);

  return (
    <section className="max-w-5xl mx-auto mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif text-gold font-bold">All Laws</h2>
        <input
          className="bg-section text-muted p-2 rounded placeholder-gold text-sm"
          placeholder="Search laws..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(law => (
          <article
            key={law.id}
            className="bg-section p-5 rounded shadow hover:ring-2 hover:ring-gold/40 cursor-pointer transition"
            onClick={() => onOpenLaw(law)}
          >
            <h3 className="font-semibold text-gold">{law.title}</h3>
            <p className="text-muted mt-1 text-sm">{law.short}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
