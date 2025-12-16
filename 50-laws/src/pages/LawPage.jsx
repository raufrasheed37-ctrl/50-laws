import React from "react";

export default function LawPage({ law, onBack }) {
  if (!law) return <div className="max-w-4xl mx-auto mt-8">No law selected.</div>;

  return (
    <section className="max-w-4xl mx-auto mt-6">
      <button className="text-muted underline mb-4" onClick={onBack}>← Back to all laws</button>

      <article className="bg-section p-6 rounded">
        <h2 className="text-2xl font-bold mb-3">{law.title}</h2>
        <p className="text-muted mb-4">{law.short}</p>

        <div className="mt-4 text-sm text-muted">
          <p>{law.long}</p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Examples</h4>
          <ul className="list-disc list-inside text-muted">
            {law.examples?.map((ex, i) => <li key={i}>{ex}</li>)}
          </ul>
        </div>

        <div className="mt-6 text-sm text-amber-200">
          <h4 className="font-semibold">Warning</h4>
          <p className="text-muted">{law.warning}</p>
        </div>
      </article>
    </section>
  );
}
