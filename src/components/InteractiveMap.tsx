import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Train, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { REGIONS, SHINKANSEN_ROUTES, type RegionData } from '../data/japanData';

interface InteractiveMapProps {
  onSelectRegion: (regionId: string) => void;
  selectedRegionId?: string;
}

interface MapLocationPin {
  id: string;
  label: string;
  sublabel: string;
  kanji: string;
  regionId: string;
  top: string;
  left: string;
}

const MAP_LOCATION_PINS: MapLocationPin[] = [
  {
    id: 'tokyo',
    label: 'Tokyo Metropolis',
    sublabel: 'Shibuya, Shinjuku & Ginza',
    kanji: '東京',
    regionId: 'kanto',
    top: '56%',
    left: '68%',
  },
  {
    id: 'fuji',
    label: 'Mt. Fuji & Hakone',
    sublabel: 'Lake Kawaguchiko & Onsens',
    kanji: '富士山',
    regionId: 'kanto',
    top: '60%',
    left: '60%',
  },
  {
    id: 'kyoto',
    label: 'Kyoto Sanctuary',
    sublabel: 'Gion, Arashiyama & Torii',
    kanji: '京都',
    regionId: 'kansai',
    top: '63%',
    left: '48%',
  },
  {
    id: 'osaka',
    label: 'Osaka Gourmet',
    sublabel: 'Dotonbori & Food Alley',
    kanji: '大阪',
    regionId: 'kansai',
    top: '67%',
    left: '44%',
  },
  {
    id: 'hokkaido',
    label: 'Hokkaidō Snow',
    sublabel: 'Sapporo & Niseko Powder',
    kanji: '北海道',
    regionId: 'hokkaido',
    top: '22%',
    left: '78%',
  },
  {
    id: 'hiroshima',
    label: 'Hiroshima & Miyajima',
    sublabel: 'Floating Torii Shrine',
    kanji: '広島',
    regionId: 'chugoku_shikoku',
    top: '70%',
    left: '32%',
  },
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectRegion,
  selectedRegionId = 'kanto',
}) => {
  const navigate = useNavigate();
  const [activePinId, setActivePinId] = useState<string>('tokyo');
  const [activeRegionId, setActiveRegionId] = useState<string>(selectedRegionId);

  const activePin = MAP_LOCATION_PINS.find((p) => p.id === activePinId) || MAP_LOCATION_PINS[0];
  const activeRegion: RegionData =
    REGIONS.find((r) => r.id === activeRegionId) || REGIONS.find((r) => r.id === 'kanto') || REGIONS[0];

  const shinkansenRoute = SHINKANSEN_ROUTES.find(
    (route) => route.from.toLowerCase().includes(activeRegion.id) || route.to.toLowerCase().includes(activeRegion.id)
  ) || SHINKANSEN_ROUTES[0];

  const handlePinClick = (pin: MapLocationPin) => {
    setActivePinId(pin.id);
    setActiveRegionId(pin.regionId);
    onSelectRegion(pin.regionId);
    // Navigate directly to destination blog page for this location
    navigate(`/destination/${pin.id}`);
  };

  const handleRegionTabClick = (regionId: string) => {
    setActiveRegionId(regionId);
    const matchedPin = MAP_LOCATION_PINS.find((p) => p.regionId === regionId);
    if (matchedPin) {
      setActivePinId(matchedPin.id);
    }
    onSelectRegion(regionId);
  };

  return (
    <section id="map-section" className="py-16 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      {/* Subtle Background Kanji Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-kanji text-[30vw] font-black text-[#0F172A]">
          日本
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-1">
            Regional Expedition Directory • 日本地域
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            EXPLORE JAPAN BY REGION
          </h2>
        </div>

        {/* Region Selector Horizontal Text Tabs */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {REGIONS.map((reg) => {
            const isSelected = activeRegionId === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => handleRegionTabClick(reg.id)}
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

        {/* Main Grid: Clean Light Theme Vector Map (Floating Directly on Page, NO Box) + Region Overview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Pure Floating Vector Map with Highlighted Location Buttons (NO Inner Box Container) */}
          <div className="lg:col-span-7 relative min-h-[460px] flex items-center justify-center py-4">
            {/* Real Japan Map Image Floating Directly on Canvas */}
            <img
              src="/images/japan-real-vector-map.png"
              alt="Japan Tokyo Map Vector"
              className="w-full h-auto max-h-[480px] object-contain select-none filter drop-shadow-md"
            />

            {/* HIGHLIGHTED LOCATION PIN BUTTONS FLOATING OVER MAP */}
            {MAP_LOCATION_PINS.map((pin) => {
              const isSelected = activePinId === pin.id;

              return (
                <button
                  key={pin.id}
                  style={{ top: pin.top, left: pin.left }}
                  onClick={() => handlePinClick(pin)}
                  className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer group focus:outline-none`}
                >
                  <div className="relative flex items-center gap-2">
                    {/* Glowing Pulse Ring for Selected Location */}
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-md transition-transform group-hover:scale-125 ${
                          isSelected ? 'bg-rose-600 scale-110' : 'bg-slate-900'
                        }`}
                      />
                    </span>

                    {/* Highlighted Light-Theme Location Button Tag */}
                    <div
                      className={`px-3 py-1.5 backdrop-blur-md border text-xs font-mono font-bold shadow-lg transition-all flex items-center gap-1.5 whitespace-nowrap rounded-none ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 scale-105 shadow-xl'
                          : 'bg-white/95 text-slate-800 border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900'
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-rose-400' : 'text-rose-600'}`} />
                      <span>{pin.label}</span>
                      <span className="font-kanji font-normal text-[10px] opacity-75">{pin.kanji}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Region & Highlighted Destination Overview (Clean Borderless Layout) */}
          <div className="lg:col-span-5 space-y-5 pl-0 lg:pl-4">
            <div className="space-y-1 border-b border-slate-200/80 pb-4">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-rose-500 uppercase tracking-widest">
                <span>REGIONAL GUIDE OVERVIEW</span>
                <span className="text-slate-400 font-sans normal-case text-xs font-normal">
                  Location: <strong className="text-slate-900">{activePin.label}</strong>
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                {activeRegion.name} EXPEDITIONS
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-jakarta italic font-light pt-0.5">
                "{activeRegion.tagline}"
              </p>
            </div>

            {/* Shinkansen Route Box */}
            <div className="p-4 bg-white/80 border-l-4 border-rose-500 space-y-1 shadow-2xs border-y border-r border-slate-200/50">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase">
                <Train className="w-4 h-4 text-rose-600 shrink-0" />
                <span>SHINKANSEN BULLET TRAIN INCLUDED</span>
              </div>
              <p className="text-xs text-slate-600 font-jakarta">
                Route: <strong>{shinkansenRoute.from} ➔ {shinkansenRoute.to}</strong> ({shinkansenRoute.trainName} • {shinkansenRoute.time})
              </p>
            </div>

            {/* Top Regional Highlights in 2 Columns */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                TOP REGIONAL HIGHLIGHTS:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium font-jakarta">
                {activeRegion.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="truncate">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-500 font-mono">
                <strong className="text-rose-600 font-bold">{activeRegion.packageCount}</strong> Expeditions Available
              </div>

              <button
                onClick={() => navigate(`/destination/${activePin.id}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                <span>EXPLORE {activePin.label.toUpperCase()} BLOG GUIDE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};