import React from 'react';
import { VEHICLES, ITINERARIES } from '../data/festivalData';

export const Logistics: React.FC = () => {
  return (
    <section id="logistica" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          Logística y transportes oficiales
        </p>
        <h2 className="section-title text-5xl text-white sm:text-6xl">Traslados y movilidad</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Vehicles specifications */}
        <div className="glass rounded-[2rem] p-6 shadow-glass">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Fichas técnicas</p>
          <div className="space-y-5">
            {VEHICLES.map((vehicle) => (
              <div key={vehicle.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                  <span
                    className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.2em] font-medium ${vehicle.tagStyle}`}
                  >
                    {vehicle.tag}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {vehicle.features.map((feat, idx) => (
                    <li key={idx}>• {feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Itineraries */}
        <div className="glass rounded-[2rem] p-6 shadow-glass">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Itinerarios completos</p>
          <div className="space-y-4">
            {ITINERARIES.map((item) => (
              <div key={item.date} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">{item.date}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.route}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
