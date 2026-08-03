import React, { useState } from 'react';
import { Calendar, Thermometer, Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { SAKURA_FORECASTS, TOUR_PACKAGES, type TourPackage } from '../data/japanData';

interface SakuraPlannerProps {
  onSelectPackage: (pkg: TourPackage) => void;
}

export const SakuraPlanner: React.FC<SakuraPlannerProps> = ({ onSelectPackage }) => {
  const [selectedForecast, setSelectedForecast] = useState(SAKURA_FORECASTS[1]); // Kyoto/Osaka default

  const matchingPackage = TOUR_PACKAGES.find((p) => p.category === 'sakura') || TOUR_PACKAGES[0];

  return (
    <section id="sakura-section" className="py-16 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      {/* Background Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-kanji text-[28vw] font-black text-[#0F172A]">
          桜
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Minimalist Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            SAKURA BLOOM PLANNER 2027
          </h2>
          <p className="font-jakarta text-slate-600 text-xs sm:text-sm mt-2">
            Track peak cherry blossom dates across Japan to reserve your ideal travel window.
          </p>
        </div>

        {/* Region Selector Minimalist Horizontal Text Tabs */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {SAKURA_FORECASTS.map((item) => {
            const isSelected = selectedForecast.region === item.region;
            return (
              <button
                key={item.region}
                onClick={() => setSelectedForecast(item)}
                className={`relative py-1.5 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'text-rose-600 font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-600'
                    : 'text-slate-600 hover:text-rose-500 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
              >
                {item.region}
              </button>
            );
          })}
        </div>

        {/* Selected Region Showcase (Minimalist Photography + Stat Metrics Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-200/80 p-6 sm:p-8 bg-white shadow-xl rounded-none">
          {/* Left: Minimalist Photography Card (6 Cols) */}
          <div className="lg:col-span-6 relative h-[340px] sm:h-[380px] overflow-hidden shadow-md group rounded-none">
            <img
              src={selectedForecast.image}
              alt={selectedForecast.region}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between text-xs text-rose-300 font-bold tracking-widest uppercase">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{selectedForecast.city}</span>
                </div>
                <span className="font-kanji text-sm opacity-90 text-white">桜花情報</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                {selectedForecast.region}
              </h3>
            </div>
          </div>

          {/* Right: Minimalist Stat Metrics Grid (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase text-rose-600 tracking-widest block mb-1">
                Cherry Blossom Bloom Guide
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-[#0F172A]">
                {selectedForecast.city.toUpperCase()} FORECAST
              </h3>
            </div>

            {/* 3 Minimalist Stat Cards Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200 py-4">
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>First Kaika</span>
                </div>
                <div className="font-cinzel text-lg sm:text-xl font-bold text-[#0F172A]">
                  {selectedForecast.firstBloom}
                </div>
                <span className="text-[10px] text-slate-400 font-jakarta block">First Opening</span>
              </div>

              <div className="space-y-0.5 text-left border-x border-slate-200 px-3 sm:px-4">
                <div className="flex items-center gap-1 text-[11px] text-rose-600 font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-rose-500" />
                  <span>Full Mankai</span>
                </div>
                <div className="font-cinzel text-lg sm:text-xl font-bold text-rose-600">
                  {selectedForecast.fullBloom}
                </div>
                <span className="text-[10px] text-rose-500 font-extrabold block">Peak Bloom</span>
              </div>

              <div className="space-y-0.5 text-left pl-1 sm:pl-2">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                  <Thermometer className="w-3 h-3 text-sky-500" />
                  <span>Avg Temp</span>
                </div>
                <div className="font-cinzel text-lg sm:text-xl font-bold text-[#0F172A]">
                  {selectedForecast.tempAvg.split('/')[0]}
                </div>
                <span className="text-[10px] text-slate-400 font-jakarta block">Mild Spring</span>
              </div>
            </div>

            {/* Bloom Stage Indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="uppercase tracking-wider text-[10px] text-slate-500">Bloom Progression</span>
                <span className="text-rose-600 font-extrabold text-[11px]">Peak Mankai 100%</span>
              </div>
              <div className="w-full bg-slate-100 h-1 overflow-hidden rounded-none">
                <div className="bg-rose-600 h-full w-[95%]" />
              </div>
            </div>

            {/* Pure Typography Action Button */}
            <div className="pt-1">
              <button
                onClick={() => onSelectPackage(matchingPackage)}
                className="relative py-1 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0F172A] hover:text-rose-600 transition-colors cursor-pointer group after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                <span>Book Expedition During {selectedForecast.city} Bloom</span>
                <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
