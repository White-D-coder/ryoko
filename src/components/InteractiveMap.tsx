import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface InteractiveMapProps {
  onSelectRegion?: (regionId: string) => void;
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

// ONLY 2 ACTIVE DESTINATION POINTERS: TOKYO & KYOTO
const ACTIVE_LOCATION_PINS: MapLocationPin[] = [
  {
    id: 'tokyo',
    label: 'Tokyo Metropolis',
    sublabel: 'Shibuya, Shinjuku & Ginza',
    kanji: '東京',
    regionId: 'kanto',
    top: '56%',
    left: '56%',
  },
  {
    id: 'kyoto',
    label: 'Kyoto Sanctuary',
    sublabel: 'Gion, Arashiyama & Torii',
    kanji: '京都',
    regionId: 'kansai',
    top: '62%',
    left: '40%',
  },
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectRegion }) => {
  const navigate = useNavigate();
  const [activePinId, setActivePinId] = useState<string>('tokyo');

  const handlePinClick = (pin: MapLocationPin) => {
    setActivePinId(pin.id);
    if (onSelectRegion) onSelectRegion(pin.regionId);
    navigate(`/destination/${pin.id}`);
  };

  return (
    <section id="map-section" className="py-16 bg-[#FAF9F5] relative overflow-hidden flex items-center justify-center">
      {/* Background Imperial Palace Bridge Image Watermark */}
      <img
        src="images/pexels-halil-fatih-cetin-460308764-27164587.jpg"
        alt="Imperial Palace Watermark"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.5] filter grayscale mix-blend-multiply pointer-events-none select-none"
      />

      {/* Subtle Background Kanji Watermark */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-kanji text-[30vw] font-black text-[#0F172A]">
          日本
        </span>
      </div>

      {/* Pure Floating Vector Map Container (NO Inner Box, NO Top/Side Text, Centered Map Graphic) */}
      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center py-4 px-4 z-10">
        <div className="relative w-full max-w-[620px] flex items-center justify-center">
          {/* Real Japan Map Image Floating Directly on Page Canvas */}
          <img
            src="/images/japan-real-vector-map.png"
            alt="Japan Map Vector"
            className="w-full h-auto max-h-[580px] object-contain select-none filter drop-shadow-md"
          />

          {/* ONLY 2 ACTIVE LOCATION PIN BUTTONS (TOKYO & KYOTO) */}
          {ACTIVE_LOCATION_PINS.map((pin) => {
            const isSelected = activePinId === pin.id;

            return (
              <button
                key={pin.id}
                style={{ top: pin.top, left: pin.left }}
                onClick={() => handlePinClick(pin)}
                className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer group focus:outline-none"
              >
                <div className="relative flex items-center gap-1.5">
                  {/* Glowing Pulse Ring */}
                  <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-white shadow-md transition-transform group-hover:scale-125 ${
                        isSelected ? 'bg-rose-600 scale-110' : 'bg-slate-900'
                      }`}
                    />
                  </span>

                  {/* Sleek Light Location Tag */}
                  <div
                    className={`px-3 py-1.5 backdrop-blur-md border text-xs font-mono font-bold shadow-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
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
      </div>
    </section>
  );
};