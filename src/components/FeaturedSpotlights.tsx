import React, { useState } from 'react';
import { FEATURED_SPOTLIGHTS } from '../data/festivalData';

export const FeaturedSpotlights: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="destacados" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Contenido Especial & Masterclasses
          </p>
          <h2 className="section-title text-5xl text-white sm:text-6xl">Destacados del Festival</h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          Encuentros estelares con directores, la sesión especial de SONY y la exhibición de cortometrajes de animación de gran trascendencia.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {FEATURED_SPOTLIGHTS.map((item) => {
          const hasError = imageErrors[item.id];
          const showImage = item.image && !hasError;

          return (
            <article
              key={item.id}
              className="glass group flex flex-col overflow-hidden rounded-[2.2rem] p-6 shadow-glass transition duration-300 hover:border-cyan-300/40"
            >
              {/* Category tag */}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${item.categoryColor}`}
                >
                  {item.category}
                </span>
                {item.scheduleTime && (
                  <span className="text-xs font-medium text-slate-400">
                    {item.scheduleTime}
                  </span>
                )}
              </div>

              {/* Main Media Showcase */}
              <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 border border-white/10">
                {showImage ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(item.id)}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-400">
                    {item.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-200/90 drop-shadow">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Creator Bio Bar with Real Photo */}
              <div className="mb-5 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-cyan-300/30 bg-slate-800">
                  <img
                    src={item.creatorPhoto}
                    alt={item.creator}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{item.creator}</p>
                  <p className="text-xs text-slate-300">{item.creatorRole}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-slate-300 flex-1">
                {item.description}
              </p>

              {/* Tags / Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
