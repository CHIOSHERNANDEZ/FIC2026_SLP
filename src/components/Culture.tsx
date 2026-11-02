import React from 'react';
import { CULTURAL_EVENTS } from '../data/festivalData';

export const Culture: React.FC = () => {
  return (
    <section id="cultura" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          Eventos culturales en San Luis Potosí
        </p>
        <h2 className="section-title text-5xl text-white sm:text-6xl">Más allá del festival</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {CULTURAL_EVENTS.map((event) => (
          <article key={event.title} className="glass rounded-[2rem] p-6 shadow-glass">
            <div
              className={`mb-4 inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em] font-medium ${event.tagColor}`}
            >
              {event.tag}
            </div>
            <h3 className="text-3xl font-bold text-white">{event.title}</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
