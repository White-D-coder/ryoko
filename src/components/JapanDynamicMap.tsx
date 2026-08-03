import React, { useState } from 'react';
import { MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { REGIONS, type RegionData } from '../data/japanData';

interface JapanDynamicMapProps {
  onSelectRegion: (regionId: string) => void;
  selectedRegionId?: string;
}

interface RegionHotspot {
  id: string;
  label: string;
  kanji: string;
  top: string;
  left: string;
}

const REGION_HOTSPOTS: RegionHotspot[] = [
  { id: 'hokkaido', label: 'HOKKAIDŌ', kanji: '北海道', top: '22%', left: '60%' },
  { id: 'tohoku', label: 'TOHOKU', kanji: '東北', top: '48%', left: '58%' },
  { id: 'kanto', label: 'KANTO (TOKYO)', kanji: '関東', top: '60%', left: '55%' },
  { id: 'kansai', label: 'KANSAI (KYOTO)', kanji: '関西', top: '64%', left: '44%' },
  { id: 'chugoku_shikoku', label: 'CHŪGOKU & SHIKOKU', kanji: '中国・四国', top: '69%', left: '38%' },
  { id: 'kyushu_okinawa', label: 'KYŪSHŪ & OKINAWA', kanji: '九州・沖縄', top: '76%', left: '28%' },
];

export const JapanDynamicMap: React.FC<JapanDynamicMapProps> = ({
  onSelectRegion,
  selectedRegionId = 'kanto',
}) => {
  const [activeRegionId, setActiveRegionId] = useState<string>(selectedRegionId);

  const activeRegion: RegionData =
    REGIONS.find((r) => r.id === activeRegionId) || REGIONS.find((r) => r.id === 'kanto') || REGIONS[0];

  const handleRegionClick = (regionId: string) => {
    setActiveRegionId(regionId);
    onSelectRegion(regionId);
  };

  return (
    <div className="w-full relative py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Authentic Japan Map floating cleanly without container boxes (7 Cols) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px]">
          {/* Real Japan Map Image Floating Directly on Canvas */}
          <img
            src="/images/japan-real-vector-map.png"
            alt="Authentic Japan Vector Map"
            className="w-full h-auto max-h-[520px] object-contain select-none filter drop-shadow-lg"
          />

          {/* Interactive Floating Hotspots (NO Black Boxes, Pure Minimalist Typography & Pulse Dots) */}
          {REGION_HOTSPOTS.map((spot) => {
            const isSelected = activeRegionId === spot.id;

            return (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                onClick={() => handleRegionClick(spot.id)}
                className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  {/* Pulse Dot Marker */}
                  <span className="relative flex h-4 w-4 shrink-0">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-85" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-md transition-transform group-hover:scale-125 ${
                        isSelected ? 'bg-rose-600' : 'bg-slate-900'
                      }`}
                    />
                  </span>

                  {/* Clean Floating Typography Tag (No Black Box Background) */}
                  <div className="flex items-center gap-1.5 whitespace-nowrap drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
                    <span
                      className={`text-xs font-bold font-outfit uppercase tracking-wider transition-colors ${
                        isSelected ? 'text-rose-600 font-extrabold text-sm' : 'text-slate-900 hover:text-rose-600'
                      }`}
                    >
                      {spot.label}
                    </span>
                    <span className="font-kanji font-normal text-[10px] text-slate-500">
                      {spot.kanji}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Region Inspector (Pure Borderless Typography Layout, NO White Boxes) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-6">
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-widest block">
                  Active Region Overview
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
                  {activeRegion.name} <span className="font-kanji font-normal opacity-60 text-xl">{activeRegion.kanji}</span>
                </h3>
              </div>

              <span className="text-xs font-extrabold uppercase text-rose-600 tracking-wider">
                {activeRegion.packageCount} Expeditions
              </span>
            </div>

            {/* Clean Region Photography Showcase */}
            <div className="relative h-56 overflow-hidden shadow-xl group border border-white/20">
              <img
                src={activeRegion.heroImage}
                alt={activeRegion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow-md">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{activeRegion.english}</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm font-jakarta italic leading-relaxed">
              "{activeRegion.tagline}"
            </p>

            {/* Regional Highlights (Clean Text List, NO White Card Boxes) */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-widest block">
                Top Regional Highlights:
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-800 font-medium">
                {activeRegion.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pure Typography Action Button (NO Black Box Button) */}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => onSelectRegion(activeRegion.id)}
                className="relative py-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0F172A] hover:text-rose-600 transition-colors cursor-pointer group after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                <span>Explore {activeRegion.name} Expeditions</span>
                <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
