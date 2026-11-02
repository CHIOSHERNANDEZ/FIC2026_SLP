import React, { useState } from 'react';
import { PROGRAM_DAYS, REGISTRATION_URL } from '../data/festivalData';

export const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jueves' | 'viernes' | 'sabado'>('jueves');

  const currentDay = PROGRAM_DAYS.find((d) => d.id === activeTab) || PROGRAM_DAYS[0];

  const getBadgeStyle = (accent: 'cyan' | 'terracotta' | 'violet') => {
    switch (accent) {
      case 'cyan':
        return 'bg-gradient-to-br from-[#5ce1e6]/25 to-[#48988e]/25 text-cyan-100 border border-cyan-300/30';
      case 'terracotta':
        return 'bg-gradient-to-br from-[#d97b5d]/25 to-[#f7c7ad]/25 text-[#ffd2bb] border border-[#d97b5d]/30';
      case 'violet':
        return 'bg-gradient-to-br from-[#7b5ea7]/25 to-[#c2b2f0]/25 text-violet-100 border border-violet-400/30';
    }
  };

  const getAsideGradient = (id: string) => {
    switch (id) {
      case 'jueves':
        return 'border-cyan-300/20 bg-gradient-to-br from-[#5ce1e6]/10 via-[#48988e]/10 to-[#7b5ea7]/10';
      case 'viernes':
        return 'border-cyan-300/20 bg-gradient-to-br from-[#48988e]/10 via-[#7b5ea7]/10 to-[#5ce1e6]/10';
      case 'sabado':
        return 'border-cyan-300/20 bg-gradient-to-br from-[#7b5ea7]/10 via-[#d97b5d]/10 to-[#5ce1e6]/10';
      default:
        return 'border-cyan-300/20 bg-white/5';
    }
  };

  const dotColors = ['bg-[#5ce1e6]', 'bg-[#d97b5d]', 'bg-[#bca5ed]'];

  return (
    <section id="programa" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Agenda Oficial del Festival
          </p>
          <h2 className="section-title text-5xl text-white sm:text-6xl">Programa General</h2>
        </div>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
        >
          Inscribirme al festival
        </a>
      </div>

      <div className="glass rounded-[2rem] p-3 sm:p-6 shadow-glass">
        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-3">
          {PROGRAM_DAYS.map((day) => {
            const isActive = activeTab === day.id;
            return (
              <button
                key={day.id}
                type="button"
                onClick={() => setActiveTab(day.id)}
                className={`tab-btn rounded-full border px-5 py-3 text-sm font-semibold transition md:px-6 ${
                  isActive
                    ? 'active border-cyan-300/40 text-white shadow-glow'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                {day.dateLabel}
              </button>
            );
          })}
        </div>

        {/* Panel Content with fadeUp animation */}
        <div key={currentDay.id} className="program-panel">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Events column */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="mb-6 border-b border-white/10 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    {currentDay.title}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {currentDay.subtitle}
                  </h3>
                </div>

                <div className="space-y-4">
                  {currentDay.events.map((evt, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition duration-200 hover:border-white/20 hover:bg-slate-900/70"
                    >
                      {/* Time pill */}
                      <div
                        className={`flex h-12 sm:h-14 sm:w-28 shrink-0 items-center justify-center rounded-2xl px-3 text-center text-xs sm:text-sm font-black ${getBadgeStyle(
                          evt.accent
                        )}`}
                      >
                        {evt.time}
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            {evt.title}
                          </h4>
                        </div>

                        {/* Venue badge */}
                        <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-950/40 px-2.5 py-0.5 text-xs text-cyan-200">
                          <span className="text-cyan-400">📍</span>
                          <span>{evt.venue}</span>
                        </div>

                        {evt.description && (
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {evt.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Aside column */}
            <div className="space-y-5">
              <aside className={`rounded-3xl border p-6 ${getAsideGradient(currentDay.id)}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
                  {currentDay.highlightsTitle}
                </p>
                <ul className="mt-5 space-y-4 text-sm text-slate-200">
                  {currentDay.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${dotColors[idx % dotColors.length]}`}></span>
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Direct addresses card */}
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-xs text-slate-300 space-y-3">
                <p className="font-semibold uppercase tracking-wider text-cyan-200/90 text-[11px]">
                  Direcciones oficiales de las sedes
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-bold text-white block">Campus San Luis Potosí:</span>
                    <span>Av. Eugenio Garza Sada 300, Lomas del Tecnológico.</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Teatro Polivalente:</span>
                    <span>Calzada de Guadalupe 705, San Juan de Guadalupe, Santuario.</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Cinépolis Plaza San Luis:</span>
                    <span>Sala 3, Plaza San Luis, Sierra Vista Poniente No. 1010.</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Museo del Virreinato:</span>
                    <span>Villerías 115, Centro Histórico.</span>
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
