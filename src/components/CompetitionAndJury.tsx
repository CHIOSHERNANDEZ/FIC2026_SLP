import React, { useState } from 'react';
import { COMPETITION_CATEGORIES, JURY_DATA } from '../data/festivalData';

export const CompetitionAndJury: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>(COMPETITION_CATEGORIES[0].id);

  const activeCategory =
    COMPETITION_CATEGORIES.find((c) => c.id === selectedCat) || COMPETITION_CATEGORIES[0];

  return (
    <section id="competencia" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Selección Oficial 2026
          </div>
          <h2 className="section-title text-5xl text-white sm:text-6xl mt-2">
            51 Cortometrajes Nominados
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300 leading-relaxed">
          Obras desarrolladas a lo largo de las materias principales de producción audiovisual de la carrera de <strong>LC (Comunicación)</strong> con el talento sonoro de alumnos de <strong>LTM (Producción Musical)</strong>.
        </p>
      </div>

      {/* 5 Categories Grid / Selector */}
      <div className="glass rounded-[2.2rem] p-6 sm:p-8 shadow-glass mb-12">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
              Categorías en Competencia
            </p>
            <h3 className="text-2xl font-bold text-white mt-1">5 Ejes de Premiación</h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Calificados por 49 jueces y especialistas de industria
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {COMPETITION_CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition ${
                  isSelected
                    ? 'border border-cyan-300 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 text-white shadow-glow'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Card */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeCategory.icon}</span>
                <div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${activeCategory.tagColor}`}
                  >
                    Categoría Oficial
                  </span>
                  <h4 className="text-2xl font-black text-white mt-1">
                    {activeCategory.name}
                  </h4>
                </div>
              </div>

              <p className="text-base text-slate-200 leading-relaxed">
                {activeCategory.shortDesc}
              </p>

              <div className="pt-2 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                    Criterio & Enfoque
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    {activeCategory.focus}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Sinergia Curricular
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    {activeCategory.careers}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="w-full md:w-64 shrink-0 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-950/40 via-slate-900/40 to-violet-950/40 p-5 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
                Resumen de Selección
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Total en Competencia:</span>
                  <span className="font-bold text-white">51 cortos</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Jueces Evaluadores:</span>
                  <span className="font-bold text-white">49 jueces</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Regiones Tec:</span>
                  <span className="font-bold text-white">4 regiones</span>
                </div>
                <div className="flex justify-between">
                  <span>Premios de Industria:</span>
                  <span className="font-bold text-cyan-300">Sony & Harman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 49 Juries & Academic Collaboration Block */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] mb-12">
        {/* Jury Details */}
        <div className="glass rounded-[2rem] p-6 sm:p-8 shadow-glass">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-200">
            Colegio Calificador
          </div>
          <h3 className="section-title text-3xl sm:text-4xl text-white">
            49 Jueces de las 4 Regiones
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {JURY_DATA.description}
          </p>

          {/* Regions Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {JURY_DATA.regions.map((reg) => (
              <span
                key={reg}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
              >
                📍 {reg}
              </span>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
              <span className="font-bold text-white block">Área Audiovisual:</span>
              <span>Cineastas, directores de fotografía, animadores y productores en activo.</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
              <span className="font-bold text-white block">Humanidades & Crítica:</span>
              <span>Académicos y humanistas externos que enriquecen la deliberación temática.</span>
            </div>
          </div>
        </div>

        {/* Academic Synergy: LC + LTM */}
        <div className="glass rounded-[2rem] p-6 sm:p-8 shadow-glass flex flex-col justify-between border border-cyan-400/20 bg-gradient-to-br from-[#5ce1e6]/10 via-[#48988e]/10 to-[#7b5ea7]/10">
          <div>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200">
              Colaboración Interdisciplinaria
            </span>
            <h4 className="text-2xl font-black text-white mt-4">
              {JURY_DATA.academicAlliance.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {JURY_DATA.academicAlliance.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-cyan-100 font-medium">
            <span>Tecnológico de Monterrey</span>
            <span>Campus San Luis Potosí</span>
          </div>
        </div>
      </div>

      {/* Special Industry Awards: Sony & Harman Pro */}
      <div className="rounded-[2.2rem] border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-glass">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Evaluación Técnica Especializada
            </p>
            <h3 className="section-title text-3xl sm:text-4xl text-white mt-1">
              Premios Especiales de Industria
            </h3>
          </div>
          <span className="text-xs text-amber-200/90 font-medium">
            Otorgados en la Ceremonia de Premiación del Teatro Polivalente
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {JURY_DATA.industryAwards.map((award) => (
            <div
              key={award.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-300/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${award.color}`}
                >
                  {award.badge}
                </span>
                <span className="text-sm font-black text-white tracking-widest">{award.partner}</span>
              </div>

              <h4 className="text-2xl font-bold text-white">{award.name}</h4>
              <p className="mt-1 text-xs font-medium text-cyan-200">
                Califican: {award.evaluator}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {award.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
