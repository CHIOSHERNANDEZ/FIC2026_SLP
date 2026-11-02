import React from 'react';
import { BENEFITS } from '../data/festivalData';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          Beneficios y convenios locales
        </p>
        <h2 className="section-title text-5xl text-white sm:text-6xl">Cultura + experiencia local</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <article
            key={benefit.name}
            className="glass rounded-[1.75rem] p-5 shadow-glass transition hover:translate-y-[-2px] hover:border-white/20"
          >
            <div className="mb-4 text-3xl">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-white">{benefit.name}</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
