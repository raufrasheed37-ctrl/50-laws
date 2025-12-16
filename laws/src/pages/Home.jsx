import React from "react";

export default function Home({ goTo }) {
  return (
    <section className="max-w-4xl mx-auto mt-8 text-center">
      <h1 className="text-5xl font-serif font-bold mb-4 text-gold">50 Laws of Power</h1>
      <p className="text-muted mb-6 text-lg">A modern guide to understanding influence and protecting yourself — ethically.</p>

      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-gold text-black px-6 py-3 rounded shadow hover:bg-amber-400" onClick={() => goTo("laws")}>Explore Laws</button>
        <button className="border border-muted px-6 py-3 rounded hover:border-gold hover:text-gold" onClick={() => goTo("about")}>About</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Learn','Protect','Apply Ethically'].map((title,i) => (
          <div key={i} className="bg-section p-6 rounded shadow hover:ring-2 hover:ring-gold/40 transition">
            <h3 className="font-semibold text-gold">{title}</h3>
            <p className="text-muted mt-2 text-sm">
              {title === 'Learn' && 'Clear summaries and examples.'}
              {title === 'Protect' && 'Recognize manipulation and defend yourself.'}
              {title === 'Apply Ethically' && 'Use principles responsibly and honorably.'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
