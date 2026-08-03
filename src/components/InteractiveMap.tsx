import React, { useState } from 'react';
import { MapPin, Train, Sparkles, ArrowRight } from 'lucide-react';
import { REGIONS, SHINKANSEN_ROUTES, type RegionData } from '../data/japanData';

interface InteractiveMapProps {
  onSelectRegion: (regionId: string) => void;
  selectedRegionId?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectRegion,
  selectedRegionId = 'kanto',
}) => {
  const [activeRegionId, setActiveRegionId] = useState<string>(selectedRegionId);

  const activeRegion: RegionData =
    REGIONS.find((r) => r.id === activeRegionId) || REGIONS.find((r) => r.id === 'kanto') || REGIONS[0];

  const shinkansenRoute = SHINKANSEN_ROUTES.find(
    (route) => route.from.toLowerCase().includes(activeRegion.id) || route.to.toLowerCase().includes(activeRegion.id)
  ) || SHINKANSEN_ROUTES[0];

  const handleRegionClick = (regionId: string) => {
    setActiveRegionId(regionId);
    onSelectRegion(regionId);
  };

  return (
    <section id="map-section" className="py-10 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      {/* Background Kanji Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-kanji text-[30vw] font-black text-[#0F172A]">
          日本
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (Compact Vertical Spacing) */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-1">
            Regional Expedition Directory • 日本地域
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            EXPLORE JAPAN BY REGION
          </h2>
        </div>

        {/* Region Selector Horizontal Text Tabs */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 overflow-x-auto pb-2 no-scrollbar">
          {REGIONS.map((reg) => {
            const isSelected = activeRegionId === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => handleRegionClick(reg.id)}
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

        {/* Selected Region Showcase (Tight Grid Gap & Compact Card Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Compact Hero Regional Photography Card (7 Cols) */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[360px] overflow-hidden shadow-xl border border-white/40 group">
            <img
              src={activeRegion.heroImage}
              alt={activeRegion.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between text-xs text-rose-300 font-bold tracking-widest uppercase">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{activeRegion.english}</span>
                </div>
                <span className="bg-rose-600 px-3 py-1 text-[10px] text-white font-extrabold">
                  {activeRegion.packageCount} EXPEDITIONS
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                {activeRegion.name} <span className="font-kanji font-normal opacity-70 text-xl ml-2">{activeRegion.kanji}</span>
              </h3>
            </div>
          </div>

          {/* Right: Compact Borderless Editorial Region Breakdown (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold uppercase text-rose-500 tracking-widest block">
                Regional Guide Overview
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-[#0F172A]">
                {activeRegion.name} EXPEDITIONS
              </h3>
            </div>

            <p className="text-slate-600 text-xs font-jakarta italic leading-relaxed">
              "{activeRegion.tagline}"
            </p>

            {/* Shinkansen Route Information */}
            <div className="p-3 bg-slate-100/70 border-l-2 border-rose-500 space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Train className="w-3.5 h-3.5 text-rose-600" />
                <span>Shinkansen Bullet Train Included</span>
              </div>
              <p className="text-[11px] text-slate-600 font-jakarta">
                Route: <strong>{shinkansenRoute.from} ➔ {shinkansenRoute.to}</strong> ({shinkansenRoute.trainName} • {shinkansenRoute.time})
              </p>
            </div>

            {/* Top Regional Highlights */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-widest block">
                Top Regional Highlights:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                {activeRegion.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-rose-500 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pure Typography Action Button */}
            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => onSelectRegion(activeRegion.id)}
                className="relative py-1 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0F172A] hover:text-rose-600 transition-colors cursor-pointer group after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                <span>Explore {activeRegion.name} Tour Packages</span>
                <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};