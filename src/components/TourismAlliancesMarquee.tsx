import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface PartnerBrand {
  id: string;
  name: string;
  logoSvg: React.ReactNode;
}

const BRAND_LOGOS: PartnerBrand[] = [
  {
    id: 'jnto',
    name: 'JNTO - Japan National Tourism Organization',
    logoSvg: (
      <div className="flex items-center gap-2 font-cinzel font-black tracking-widest text-slate-800 text-lg sm:text-xl">
        <span className="w-4 h-4 bg-rose-600 rounded-full inline-block shrink-0" />
        <span>JNTO</span>
      </div>
    ),
  },
  {
    id: 'jr',
    name: 'JR Group - Japan Railways',
    logoSvg: (
      <div className="flex items-center gap-2 font-outfit font-black tracking-widest text-slate-900 text-lg sm:text-xl">
        <span className="text-emerald-600 font-extrabold">JR</span>
        <span className="text-xs font-normal tracking-normal text-slate-500 border-l border-slate-300 pl-2">EAST & WEST</span>
      </div>
    ),
  },
  {
    id: 'tokyo',
    name: 'Tokyo Metropolitan Tourism',
    logoSvg: (
      <div className="flex items-center gap-2 font-outfit font-black tracking-wider text-slate-800 text-base sm:text-lg">
        <span className="text-rose-500 font-kanji text-xl">東京</span>
        <span>TOKYO</span>
      </div>
    ),
  },
  {
    id: 'kyoto',
    name: 'Visit Kyoto Association',
    logoSvg: (
      <div className="flex items-center gap-2 font-cinzel font-bold text-slate-900 text-base sm:text-lg">
        <span className="text-amber-700 font-kanji text-xl">京都</span>
        <span>KYOTO</span>
      </div>
    ),
  },
  {
    id: 'jal',
    name: 'Japan Airlines',
    logoSvg: (
      <div className="flex items-center gap-2 font-outfit font-black tracking-widest text-red-700 text-lg sm:text-xl">
        <span className="w-3 h-3 bg-red-600 rotate-45 inline-block shrink-0" />
        <span>JAL</span>
      </div>
    ),
  },
  {
    id: 'ana',
    name: 'All Nippon Airways',
    logoSvg: (
      <div className="flex items-center gap-2 font-outfit font-black tracking-widest text-sky-700 text-lg sm:text-xl">
        <span>ANA</span>
        <span className="text-[10px] font-bold text-slate-400 tracking-normal">INSPIRATION OF JAPAN</span>
      </div>
    ),
  },
  {
    id: 'hokkaido',
    name: 'Visit Hokkaido',
    logoSvg: (
      <div className="flex items-center gap-2 font-cinzel font-bold tracking-widest text-slate-900 text-base sm:text-lg">
        <span className="text-slate-400 font-kanji text-xl">北海道</span>
        <span>HOKKAIDO</span>
      </div>
    ),
  },
  {
    id: 'kansai',
    name: 'Kansai Tourism Bureau',
    logoSvg: (
      <div className="flex items-center gap-2 font-outfit font-black tracking-widest text-indigo-900 text-base sm:text-lg">
        <span className="text-indigo-600 font-kanji text-xl">関西</span>
        <span>KANSAI</span>
      </div>
    ),
  },
];

export const TourismAlliancesMarquee: React.FC = () => {
  const marqueeItems = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-10 bg-[#FAF9F5] relative overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
          <span>Official Tourism Board Alliances</span>
        </div>
      </div>

      {/* Infinite Horizontal Moving Marquee with Pure Logos (Zero Container Boxes, Zero Extra Text) */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-16 w-max animate-marquee-horizontal py-2">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              title={brand.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer shrink-0 select-none grayscale hover:grayscale-0"
            >
              {brand.logoSvg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
