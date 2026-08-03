import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGIONS, type RegionData } from '../data/japanData';
import { MapPin, ArrowRight, Train, Sun, CheckCircle2, Compass } from 'lucide-react';

interface DestinationsPageProps {
  onSelectRegionFilter: (regionId: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onSelectRegionFilter }) => {
  const navigate = useNavigate();
  const [activeRegionTab, setActiveRegionTab] = useState(REGIONS[0].id);

  const currentRegion: RegionData = REGIONS.find((r: RegionData) => r.id === activeRegionTab) || REGIONS[0];

  const handleExplorePackages = (regionId: string) => {
    onSelectRegionFilter(regionId);
    navigate('/packages');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-24 pb-20">
      {/* Hero Photography Banner */}
      <section className="relative h-[440px] sm:h-[500px] w-full overflow-hidden mb-12">
        <img
          src="/images/pexels-kuma-jio-2150949207-31416355.jpg"
          alt="Mt. Fuji & Chureito Pagoda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 opacity-95" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-none">
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>Regional Travel Directory</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              JAPAN'S REGIONAL SANCTUARIES
            </h1>

            <p className="font-jakarta text-slate-200 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              From neon-lit skyscrapers in Tokyo to ancient bamboo groves in Kyoto and volcanic hot springs in Kyushu.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Attractions & Deep Dive Guide */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-1">
            Deep Dive Into Japan's Islands
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A]">
            REGIONAL ATTRACTIONS & GUIDES
          </h2>
        </div>

        {/* Pure Typography Region Selector Tabs */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {REGIONS.map((reg: RegionData) => {
            const isSelected = activeRegionTab === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => setActiveRegionTab(reg.id)}
                className={`relative py-1.5 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'text-rose-600 font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-600'
                    : 'text-slate-600 hover:text-rose-500 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
              >
                {reg.name} ({reg.english.split('&')[0].trim()})
              </button>
            );
          })}
        </div>

        {/* Selected Region Detailed Card Showcase (Zero Border-Radius, Lag-Free) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-200/80 p-6 sm:p-10 bg-white shadow-xl rounded-none">
          {/* Left Imagery Stack */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[400px] overflow-hidden shadow-lg group rounded-none">
            <img
              src={currentRegion.heroImage}
              alt={currentRegion.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-extrabold uppercase text-rose-300 tracking-widest block">
                {currentRegion.english}
              </span>
              <h3 className="font-cinzel text-3xl font-bold">
                {currentRegion.name} <span className="font-kanji font-normal opacity-70 text-xl ml-2">{currentRegion.kanji}</span>
              </h3>
            </div>
          </div>

          {/* Right Region Information */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Featured Highlights</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#0F172A]">
                {currentRegion.name} EXPEDITIONS
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-jakarta mt-2 italic leading-relaxed">
                "{currentRegion.tagline}"
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-widest block">
                Top Regional Experiences:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentRegion.highlights.map((h: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 text-slate-800 font-medium border border-slate-100 rounded-none">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Info */}
            <div className="flex flex-wrap gap-4 text-xs pt-1">
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Best Season: <strong>Spring & Autumn</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Train className="w-4 h-4 text-sky-500" />
                <span>Shinkansen Bullet Connected</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => handleExplorePackages(currentRegion.id)}
                className="w-full sm:w-auto bg-slate-900 hover:bg-rose-600 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-widest shadow-xl transition-colors cursor-pointer flex items-center justify-center gap-2 rounded-none group"
              >
                <span>View {currentRegion.name} Tour Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Full Regional Photography Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REGIONS.map((reg: RegionData) => (
            <div
              key={reg.id}
              onClick={() => handleExplorePackages(reg.id)}
              className="group relative h-[380px] sm:h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end cursor-pointer border border-white/20 rounded-none"
            >
              <img
                src={reg.heroImage}
                alt={reg.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="relative z-10 p-7 text-white space-y-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between text-xs text-rose-300 font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{reg.english}</span>
                  </div>
                  <span className="font-kanji font-normal text-sm text-white/90">{reg.kanji}</span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  {reg.name}
                </h3>

                <div className="pt-1 flex items-center text-xs font-bold text-rose-300 gap-1 uppercase tracking-wider">
                  <span>Explore {reg.packageCount} Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
