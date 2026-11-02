import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Program } from './components/Program';
import { CompetitionAndJury } from './components/CompetitionAndJury';
import { FeaturedSpotlights } from './components/FeaturedSpotlights';
import { OfficialVenues } from './components/OfficialVenues';
import { GuestsAndPartners } from './components/GuestsAndPartners';
import { Logistics } from './components/Logistics';
import { Benefits } from './components/Benefits';
import { Culture } from './components/Culture';
import { InstitutionalThanks } from './components/InstitutionalThanks';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen text-[#edf7f8] antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Program />
        <CompetitionAndJury />
        <FeaturedSpotlights />
        <OfficialVenues />
        <GuestsAndPartners />
        <Logistics />
        <Benefits />
        <Culture />
        <InstitutionalThanks />
      </main>
      <Footer />
    </div>
  );
};

export default App;
