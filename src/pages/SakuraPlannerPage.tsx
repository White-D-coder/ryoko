import React from 'react';
import { SakuraPlanner } from '../components/SakuraPlanner';
import { JapaneseEditorialGallery } from '../components/JapaneseEditorialGallery';
import { type TourPackage } from '../data/japanData';
import { Sparkles } from 'lucide-react';

interface SakuraPlannerPageProps {
  onSelectPackage: (pkg: TourPackage) => void;
}

export const SakuraPlannerPage: React.FC<SakuraPlannerPageProps> = ({ onSelectPackage }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-24 pb-20">
      {/* Authentic Japanese Bamboo Grove Hero Banner */}
      <section className="relative h-[480px] sm:h-[540px] w-full overflow-hidden mb-12">
        {/* Arashiyama Bamboo Forest Background Photograph */}
        <img
          src="/images/pexels-agustin-villalba-589020055-17258243.jpg"
          alt="Arashiyama Bamboo Grove & Sakura"
          className="w-full h-full object-cover"
        />

        {/* Dark Protection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30 opacity-95" />

        {/* Kanji Accent Watermark */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
          <span className="font-kanji text-[26vw] font-black text-emerald-100">
            竹林
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900/80 border border-emerald-400/40 text-emerald-200 text-xs font-bold uppercase tracking-widest rounded-none shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Arashiyama Bamboo & Hanami Forecast 2027</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              SAKURA & BAMBOO GROVE 2027
            </h1>

            <p className="font-jakarta text-slate-200 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Experience the tranquility of Kyoto's bamboo groves intertwined with peak cherry blossom Mankai across Japan's sacred mountain valleys.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sakura Planner Interactive Forecast Section */}
      <SakuraPlanner onSelectPackage={onSelectPackage} />

      {/* Authentic Japanese Editorial Gallery Section (Staggered Cards, Vertical Tags & Sumi-e Bamboo Art) */}
      <JapaneseEditorialGallery />
    </div>
  );
};
