import React, { useState } from 'react';
import { OFFICIAL_VENUES } from '../data/festivalData';

export const OfficialVenues: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section id="sedes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Espacios del Festival
          </p>
          <h2 className="section-title text-5xl text-white sm:text-6xl">Sedes Oficiales</h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          Fotografías reales de los recintos de San Luis Potosí que albergan las actividades, proyecciones y eventos del FIC 2026.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {OFFICIAL_VENUES.map((venue) => {
          const hasError = imageErrors[venue.name];
          const showImage = venue.image && !hasError;

          return (
            <article
              key={venue.name}
              className="group glass flex flex-col overflow-hidden rounded-[2rem] p-4 shadow-glass transition duration-300 hover:translate-y-[-4px] hover:border-cyan-300/40"
            >
              {/* Venue Real Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 border border-white/10">
                {showImage ? (
                  <img
                    src={venue.image}
                    alt={venue.name}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(venue.name)}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#48988e]/20 to-[#7b5ea7]/20 p-4 text-center text-sm font-semibold text-slate-300">
                    {venue.name}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute top-3 right-3 rounded-full border border-cyan-300/30 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                  {venue.tag}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-200/90 font-medium">Sede Oficial</span>
                  <h3 className="text-lg font-bold text-white drop-shadow-md leading-tight">{venue.name}</h3>
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-col justify-between p-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-200/90">
                    {venue.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {venue.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Acceso con Acreditación
                  </span>
                  <span>SLP</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
