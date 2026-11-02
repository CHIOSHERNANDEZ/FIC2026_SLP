import React from 'react';
import { INSTITUTIONAL_THANKS } from '../data/festivalData';

export const InstitutionalThanks: React.FC = () => {
  const governmentAndCulture = INSTITUTIONAL_THANKS.filter(
    (item) => item.category === 'gobierno' || item.category === 'cultura'
  );
  const nightlifeAndLocal = INSTITUTIONAL_THANKS.filter(
    (item) => item.category === 'musica_visuales' || item.category === 'cerveza'
  );

  return (
    <section id="agradecimientos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Institutional Thanks Section */}
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Alianzas Estratégicas y Reconocimientos
          </p>
          <h2 className="section-title text-5xl text-white sm:text-6xl">Agradecimientos Oficiales</h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          Un agradecimiento profundo a las instituciones públicas, organismos culturales y marcas que hacen posible la realización del V Festival Internacional de Cortometrajes FIC 2026.
        </p>
      </div>

      {/* Government & Cultural Institutions Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {governmentAndCulture.map((item) => (
          <article
            key={item.name}
            className="glass group flex flex-col justify-between rounded-3xl p-6 shadow-glass transition duration-300 hover:translate-y-[-3px] hover:border-cyan-300/30"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${item.tagColor}`}
                >
                  {item.badge}
                </span>
                <span className="text-xs text-slate-400">SLP</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                {item.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-200/90">
                {item.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Aliado Institucional
              </span>
              <span>FIC 2026</span>
            </div>
          </article>
        ))}
      </div>

      {/* Visuales, DJ Sr. Crisis & Cervecerías Locales Banner */}
      <div className="mt-16">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Ambiente, Arte Digital & Tradición Local
            </p>
            <h3 className="section-title text-3xl sm:text-4xl text-white mt-1">
              Visuales, DJ & Cerveza Potosina
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Presentes en el Brindis de Premiación (Teatro Polivalente) y Convivencia (Museo del Virreinato)
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {nightlifeAndLocal.map((item) => (
            <article
              key={item.name}
              className="glass group flex flex-col justify-between rounded-3xl p-6 shadow-glass border border-white/10 transition duration-300 hover:border-amber-300/40"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${item.tagColor}`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-lg">
                    {item.category === 'musica_visuales' ? '🎛️' : '🍺'}
                  </span>
                </div>
                <h4 className="text-xl font-black text-white group-hover:text-amber-200 transition-colors">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs font-medium text-amber-200/80">
                  {item.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-300/90 font-medium">
                <span>San Luis Potosí</span>
                <span>Experiencia Exclusiva</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
