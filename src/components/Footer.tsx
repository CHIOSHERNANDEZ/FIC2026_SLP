import React from 'react';
import { FESTIVAL_INFO, REGISTRATION_URL } from '../data/festivalData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-bold text-white">{FESTIVAL_INFO.name}</p>
          <p className="text-slate-400">{FESTIVAL_INFO.fullName}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#programa" className="transition hover:text-cyan-300">
            Programa
          </a>
          <a href="#competencia" className="transition hover:text-cyan-300">
            Competencia (51)
          </a>
          <a href="#destacados" className="transition hover:text-cyan-300">
            Destacados
          </a>
          <a href="#sedes" className="transition hover:text-cyan-300">
            Sedes
          </a>
          <a href="#invitados" className="transition hover:text-cyan-300">
            Invitados
          </a>
          <a href="#logistica" className="transition hover:text-cyan-300">
            Logística
          </a>
          <a href="#agradecimientos" className="transition hover:text-cyan-300">
            Agradecimientos
          </a>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-200 hover:text-cyan-100"
          >
            Registro oficial
          </a>
        </div>
      </div>
    </footer>
  );
};
