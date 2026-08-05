import React from 'react';
import { JapaneseEditorialGallery } from '../components/JapaneseEditorialGallery';
import { type TourPackage } from '../data/japanData';

interface SakuraPlannerPageProps {
  onSelectPackage?: (pkg: TourPackage) => void;
}

export const SakuraPlannerPage: React.FC<SakuraPlannerPageProps> = () => {
  return (
    <div className="bg-[#FAF9F5]">
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
            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              SAKURA & BAMBOO GROVE 2027
            </h1>

            <p className="font-jakarta text-slate-200 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Experience the tranquility of Kyoto's bamboo groves intertwined with peak cherry blossom Mankai across Japan's sacred mountain valleys.
            </p>
          </div>
        </div>
      </section>

      {/* Authentic Japanese Editorial Gallery Section */}
      <JapaneseEditorialGallery />
    </div>
  );
};
