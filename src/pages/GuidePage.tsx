import React from 'react';
import { StickerCutouts } from '../components/StickerCutouts';
import { Sparkles, FileText, ArrowRight, Train, Coins } from 'lucide-react';

interface GuidePageProps {
  onOpenLeadMagnet: () => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({ onOpenLeadMagnet }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-28 pb-20">
      {/* Page Header */}
      <section className="relative py-14 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0F172A] text-white overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Essential Japan Travel Handbook</span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white">
            JAPAN TRAVEL & CULTURE GUIDE
          </h1>
          <p className="font-jakarta text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
            Everything you need to know before visiting Japan: etiquette tips, bullet train navigation, currency advice, and cultural insights.
          </p>
        </div>
      </section>

      {/* Cultural Graphic Cutouts & Stamps */}
      <StickerCutouts />

      {/* Essential Travel Tips Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-2">
            First-Timer Tips
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-[#0F172A]">
            JAPAN TRAVEL ESSENTIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-organic bg-white/80 p-8 rounded-[2.2rem] shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Train className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-[#0F172A]">
              JR Shinkansen Bullet Pass
            </h3>
            <p className="text-slate-600 text-xs font-jakarta leading-relaxed">
              Travel seamlessly between Tokyo, Kyoto, Hiroshima, and Kanazawa at 320 km/h with reserved seat tickets included in all Ryokō tours.
            </p>
          </div>

          <div className="glass-organic bg-white/80 p-8 rounded-[2.2rem] shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-[#0F172A]">
              Onsen Bathing Etiquette
            </h3>
            <p className="text-slate-600 text-xs font-jakarta leading-relaxed">
              Rinse thoroughly before entering hot spring baths, keep towels out of the water, and enjoy pure volcanic mineral rejuvenation.
            </p>
          </div>

          <div className="glass-organic bg-white/80 p-8 rounded-[2.2rem] shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-[#0F172A]">
              Cash & IC Transport Cards
            </h3>
            <p className="text-slate-600 text-xs font-jakarta leading-relaxed">
              While credit cards are widely accepted, carry Yen for temple entrance fees and local ramen shops. Tap Suica or Pasmo cards for subways.
            </p>
          </div>
        </div>
      </section>

      {/* Download PDF Lead Magnet Callout */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-rose-950/50 to-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase text-rose-300 tracking-widest block">
              Free Downloadable PDF
            </span>
            <h3 className="font-cinzel text-3xl font-bold">
              GET THE COMPLETE 2027 JAPAN TRAVEL GUIDE
            </h3>
            <p className="text-slate-300 text-xs font-jakarta leading-relaxed">
              Includes full regional sakura timetables, subway map cheatsheets, ryokan packing lists, and essential Japanese phrases.
            </p>
          </div>
          <button
            onClick={onOpenLeadMagnet}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            <span>Download Free PDF Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
