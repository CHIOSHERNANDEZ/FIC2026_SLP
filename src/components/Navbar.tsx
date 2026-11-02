import React, { useState } from 'react';
import { REGISTRATION_URL } from '../data/festivalData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Programa', href: '#programa' },
    { name: 'Competencia (51)', href: '#competencia' },
    { name: 'Destacados', href: '#destacados' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Invitados', href: '#invitados' },
    { name: 'Logística', href: '#logistica' },
    { name: 'Agradecimientos', href: '#agradecimientos' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 transition hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5ce1e6] via-[#48988e] to-[#7b5ea7] text-sm font-black text-slate-950 shadow-glow">
            FIC
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Festival</p>
            <p className="text-sm font-semibold tracking-[0.14em]">FIC 2026</p>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-gradient-to-r from-[#5ce1e6]/20 to-[#7b5ea7]/20 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:border-cyan-300/70"
          >
            Registro
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-gradient-to-r from-[#5ce1e6]/20 to-[#7b5ea7]/20 px-3 py-1.5 text-xs font-semibold text-white shadow-glow"
          >
            Registro
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
