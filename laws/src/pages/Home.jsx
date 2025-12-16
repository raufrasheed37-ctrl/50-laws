import React from "react";

export default function Home({ goTo }) {
  return (
    <section className="max-w-4xl mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-3">50 Laws of Power</h1>
      <p className="text-muted mb-6">A modern guide to understanding influence and protecting yourself — presented with clarity and ethics.</p>
      <div className="flex justify-center gap-4">
        <button className="bg-gold text-black px-5 py-2 rounded shadow" onClick={() => goTo?.("laws")}>Explore Laws</button>
        <button className="border border-muted px-4 py-2 rounded" onClick={() => goTo?.("about")}>About</button>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-section p-4 rounded">
            <h3 className="font-semibold">Learn</h3>
            <p className="text-muted text-sm mt-2">Clear summaries and examples.</p>
          </div>
          <div className="bg-section p-4 rounded">
            <h3 className="font-semibold">Protect</h3>
            <p className="text-muted text-sm mt-2">Recognise manipulation and defend yourself.</p>
          </div>
          <div className="bg-section p-4 rounded">
            <h3 className="font-semibold">Apply Ethically</h3>
            <p className="text-muted text-sm mt-2">Use principles responsibly and honourably.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
