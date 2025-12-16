import React from "react";

export default function LawPage({ law, onBack }) {
  if (!law) return <div className="max-w-4xl mx-auto mt-8 text-muted">No law selected.</div>;

  return (
    <section className="max-w-4xl mx-auto mt-6">
      <button className="text-muted underline mb-4" onClick={onBack}>← Back to all laws</button>

      <article className="bg-section p-6 rounded shadow transition hover:shadow-lg">
        <h2 className="text-3xl font-serif font-bold mb-3 text-gold">{law.title}</h2>
        <p className="text-muted mb-4">{law.short}</p>

        <div className="mt-4 text-muted text-sm">
          <p>{law.long}</p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2 text-gold">Examples</h4>
          <ul className="list-disc list-inside text-muted">
            {law.examples?.map((ex,i) => <li key={i}>{ex}</li>)}
          </ul>
        </div>

        <div className="mt-6 text-sm text-warning">
          <h4 className="font-semibold">Warning</h4>
          <p>{law.warning}</p>
        </div>
      </article>
    </section>
  );
}
