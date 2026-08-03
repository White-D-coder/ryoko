import React from 'react';
import { Sparkles } from 'lucide-react';

interface ChimeItem {
  char: string;
  romaji: string;
  bellType: 'temple' | 'glass' | 'cone' | 'hat' | 'cylinder' | 'dome';
  bellColor: string;
  rimColor: string;
  beadColor?: string;
  delayClass: string;
}

const BRIGHT_CHIMES: ChimeItem[] = [
  {
    char: '一',
    romaji: 'ICHI',
    bellType: 'hat',
    bellColor: '#E11D48', // Crimson Red
    rimColor: '#9F1239',
    beadColor: '#FBBF24',
    delayClass: 'animate-wind-sway',
  },
  {
    char: '期',
    romaji: 'GO',
    bellType: 'dome',
    bellColor: '#EA580C', // Sunset Orange
    rimColor: '#C2410C',
    beadColor: '#F59E0B',
    delayClass: 'animate-wind-sway-slow',
  },
  {
    char: '一',
    romaji: 'ICHI',
    bellType: 'glass',
    bellColor: '#F43F5E', // Sakura Pink
    rimColor: '#BE123C',
    beadColor: '#F472B6',
    delayClass: 'animate-wind-sway-fast',
  },
  {
    char: '会',
    romaji: 'E',
    bellType: 'cone',
    bellColor: '#059669', // Emerald Matcha
    rimColor: '#047857',
    beadColor: '#34D399',
    delayClass: 'animate-wind-sway',
  },
  {
    char: '旅',
    romaji: 'RYO',
    bellType: 'temple',
    bellColor: '#4F46E5', // Royal Indigo
    rimColor: '#3730A3',
    beadColor: '#818CF8',
    delayClass: 'animate-wind-sway-slow',
  },
  {
    char: '行',
    romaji: 'KŌ',
    bellType: 'cylinder',
    bellColor: '#D97706', // Amber Gold
    rimColor: '#B45309',
    beadColor: '#FBBF24',
    delayClass: 'animate-wind-sway-fast',
  },
];

export const JapaneseFurinChimes: React.FC = () => {
  return (
    <section className="py-14 bg-[#FAF9F5] relative overflow-hidden select-none border-y border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 text-center mb-6">
        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Fūrin Wind Chimes • 風鈴の音色</span>
        </div>
      </div>

      {/* Top Hanging Garland Cord */}
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="w-full h-1 bg-gradient-to-r from-rose-200 via-amber-300 to-rose-200 opacity-90 mb-2 shadow-xs" />

        {/* 6 Vibrant Fūrin Wind Chimes with Pure White Paper Streamers */}
        <div className="flex items-start justify-around relative pt-2">
          {BRIGHT_CHIMES.map((chime, index) => (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer group ${chime.delayClass}`}
            >
              {/* Top Hanging Cord */}
              <div className="w-0.5 h-10 sm:h-14 bg-slate-400 group-hover:bg-rose-500 transition-colors" />

              {/* Fūrin Bell Shapes */}
              <div className="relative flex items-center justify-center transform group-hover:scale-110 transition-transform">
                {/* Top Hanging Bead Accent */}
                {chime.beadColor && (
                  <div
                    className="absolute -top-3 w-2.5 h-2.5 rounded-full shadow-xs"
                    style={{ backgroundColor: chime.beadColor }}
                  />
                )}

                {chime.bellType === 'hat' && (
                  <svg width="46" height="34" viewBox="0 0 46 34">
                    <path d="M 6 30 Q 23 0 40 30 Z" fill={chime.bellColor} />
                    <ellipse cx="23" cy="28" rx="21" ry="4" fill={chime.rimColor} />
                  </svg>
                )}

                {chime.bellType === 'dome' && (
                  <svg width="40" height="36" viewBox="0 0 40 36">
                    <path d="M 4 32 Q 20 0 36 32 Z" fill={chime.bellColor} />
                    <circle cx="20" cy="30" r="3" fill={chime.rimColor} />
                  </svg>
                )}

                {chime.bellType === 'glass' && (
                  <svg width="38" height="38" viewBox="0 0 38 38">
                    <circle cx="19" cy="19" r="17" fill={chime.bellColor} opacity="0.9" />
                    <ellipse cx="19" cy="11" rx="11" ry="4" fill="#FFFFFF" opacity="0.4" />
                  </svg>
                )}

                {chime.bellType === 'cone' && (
                  <svg width="36" height="40" viewBox="0 0 36 40">
                    <polygon points="18,0 36,40 0,40" fill={chime.bellColor} />
                    <rect x="0" y="36" width="36" height="4" fill={chime.rimColor} />
                  </svg>
                )}

                {chime.bellType === 'temple' && (
                  <svg width="42" height="36" viewBox="0 0 42 36">
                    <path d="M 21 0 Q 32 10 40 32 L 2 32 Q 10 10 21 0 Z" fill={chime.bellColor} />
                    <rect x="2" y="30" width="38" height="4" fill={chime.rimColor} />
                  </svg>
                )}

                {chime.bellType === 'cylinder' && (
                  <svg width="34" height="38" viewBox="0 0 34 38">
                    <rect x="0" y="0" width="34" height="34" fill={chime.bellColor} />
                    <rect x="0" y="30" width="34" height="4" fill={chime.rimColor} />
                  </svg>
                )}

                {/* Chime Clapper Center String */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-400" />
              </div>

              {/* Tanzaku (短冊 - Pure White Vertical Japanese Paper Streamers) */}
              <div className="mt-6 w-11 sm:w-13 h-34 sm:h-40 bg-[#FFFDF9] border border-slate-300 shadow-md flex flex-col items-center justify-between p-2 relative group-hover:shadow-xl group-hover:border-rose-400 group-hover:scale-105 transition-all rounded-none">
                {/* Top Hole Ring */}
                <div className="w-2 h-2 rounded-full border border-slate-400 bg-slate-100" />

                {/* Vertical Japanese Kanji Character (Pure Dark Sumi Ink) */}
                <span className="font-kanji font-black text-xl sm:text-2xl text-[#0F172A] leading-none my-auto">
                  {chime.char}
                </span>

                {/* Romaji Text at Bottom */}
                <span className="text-[9px] font-extrabold text-slate-400 tracking-wider font-jakarta uppercase">
                  {chime.romaji}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
