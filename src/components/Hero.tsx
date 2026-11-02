import React from 'react';
import { REGISTRATION_URL, FESTIVAL_INFO } from '../data/festivalData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-[#5ce1e6]/20 blur-3xl"></div>
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#7b5ea7]/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#d97b5d]/15 blur-3xl"></div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        {/* Left column */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100/90">
            <span className="h-2 w-2 rounded-full bg-[#5ce1e6] shadow-[0_0_14px_rgba(92,225,230,0.8)]"></span>
            {FESTIVAL_INFO.edition}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-black leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
              <span className="font-display italic text-[#f6e2b5]">{FESTIVAL_INFO.name}</span>
              <span className="mt-4 block text-white">{FESTIVAL_INFO.dates}</span>
            </h1>

            <p className="text-lg font-medium text-slate-200 sm:text-xl">
              {FESTIVAL_INFO.location}
            </p>

            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              {FESTIVAL_INFO.tagline} {FESTIVAL_INFO.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5ce1e6] via-[#48988e] to-[#7b5ea7] px-6 py-3 text-base font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              Registrarme al festival
            </a>
            <a
              href="#programa"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Ver programa
            </a>
          </div>

          {/* Venues tags */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {FESTIVAL_INFO.venues.map((venue) => (
              <span key={venue} className="tag rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
                {venue}
              </span>
            ))}
          </div>

          {/* Institutional cards */}
          <div className="grid max-w-xl gap-4 sm:grid-cols-2">
            <div className="glass rounded-2xl p-4 shadow-glass">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Institución</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-teal-600 text-sm font-black text-slate-950">
                  Tec
                </div>
                <div>
                  <p className="text-lg font-bold">Tecnológico de Monterrey</p>
                  <p className="text-xs text-slate-300">Campus San Luis Potosí</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-4 shadow-glass">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Escuela</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d97b5d] to-[#f3c8b4] text-sm font-black text-slate-950">
                  EHE
                </div>
                <div>
                  <p className="text-lg font-bold">Escuela de Humanidades</p>
                  <p className="text-xs text-slate-300">y Educación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Card */}
        <div className="relative">
          <div className="film-card relative overflow-hidden rounded-[2rem] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#48988e]/20 via-transparent to-[#7b5ea7]/18"></div>

            <div className="relative">
              <div className="glass rounded-[1.5rem] p-4">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300">
                  <span>Festival</span>
                  <span>2026</span>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(92,225,230,0.14),transparent_35%),radial-gradient(circle_at_top_right,_rgba(123,94,167,0.15),transparent_30%)]"></div>

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">FIC</div>
                      <div className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2 py-1 text-[10px] font-semibold tracking-[0.2em] text-cyan-100">
                        SLP
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-5xl font-black leading-none text-white">06</div>
                      <div className="font-display text-3xl italic text-[#f6e2b5]">Cine que inspira</div>
                      <p className="text-sm leading-6 text-slate-300">
                        Proyecciones, conversatorios, workshops y encuentros con artistas del cortometraje contemporáneo.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {FESTIVAL_INFO.stats.map((stat, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center">
                          <div className={`text-lg sm:text-xl font-black ${stat.color}`}>{stat.value}</div>
                          <div className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-tight mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
