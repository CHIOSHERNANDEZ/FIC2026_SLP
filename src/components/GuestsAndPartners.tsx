import React, { useState } from 'react';
import { GUESTS, PARTNERS } from '../data/festivalData';

export const GuestsAndPartners: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section id="invitados" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          Invitados especiales y aliados
        </p>
        <h2 className="section-title text-5xl text-white sm:text-6xl">Mirada internacional</h2>
      </div>

      {/* Guests grid with real photos */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {GUESTS.map((guest) => {
          const hasError = imageErrors[guest.name];
          const showImage = guest.image && !hasError;

          return (
            <article
              key={guest.name}
              className="group glass flex flex-col overflow-hidden rounded-[1.75rem] p-5 shadow-glass transition duration-300 hover:translate-y-[-3px] hover:border-cyan-300/30"
            >
              {/* Guest Photo Container */}
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-2xl bg-slate-900 border border-white/10">
                {showImage ? (
                  <img
                    src={guest.image}
                    alt={guest.name}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(guest.name)}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${guest.gradient} text-3xl font-black text-white`}
                  >
                    {guest.initials}
                  </div>
                )}
                {/* Real photo attribution badge */}
                <div className="absolute bottom-2.5 left-2.5 rounded-full border border-white/15 bg-slate-950/75 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-cyan-200 backdrop-blur-md">
                  Fotografía Oficial
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                {guest.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan-100/80">{guest.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300 flex-1">{guest.bio}</p>
            </article>
          );
        })}
      </div>

      {/* Allies / Partners */}
      <div className="mt-14">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Aliados</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="glass flex min-h-[100px] items-center justify-center rounded-2xl p-4 text-center font-bold tracking-[0.12em] text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
