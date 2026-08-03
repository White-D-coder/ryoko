import React, { useState, useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { TOUR_PACKAGES, type TourPackage } from '../data/japanData';

interface TourPackagesProps {
  activeRegionFilter?: string;
  onClearRegionFilter?: () => void;
  onViewItinerary: (pkg: TourPackage) => void;
  onQuickBook: (pkg: TourPackage) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({
  activeRegionFilter,
  onClearRegionFilter,
  onViewItinerary,
  onQuickBook: _,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedPackages = useMemo(() => {
    let filtered = TOUR_PACKAGES.filter((pkg) => {
      if (activeRegionFilter && pkg.regionId !== activeRegionFilter) {
        return false;
      }
      if (activeCategory !== 'all' && pkg.category !== activeCategory) {
        return false;
      }
      return true;
    });

    if (filtered.length < 3) {
      const remaining = TOUR_PACKAGES.filter((pkg) => !filtered.some((f) => f.id === pkg.id));
      filtered = [...filtered, ...remaining];
    }

    return filtered;
  }, [activeRegionFilter, activeCategory]);

  return (
    <section id="packages-section" className="py-16 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-1">
              Signature Travel Experiences • 特選旅行
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              CURATED JAPAN EXPEDITIONS
            </h2>
          </div>

          {activeRegionFilter && (
            <div className="flex items-center gap-3 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm border border-slate-200">
              <span>Region Filter: <strong className="text-rose-600">{activeRegionFilter.toUpperCase()}</strong></span>
              <button
                onClick={onClearRegionFilter}
                className="ml-1 text-slate-500 hover:text-black underline cursor-pointer"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 pb-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All Expeditions' },
            { id: 'sakura', label: 'Sakura Special 2027' },
            { id: 'golden', label: 'Golden Route' },
            { id: 'luxury', label: 'Luxury Ryokan' },
            { id: 'anime', label: 'Anime & Tech' },
            { id: 'culture', label: 'Art & Islands' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 text-xs font-bold transition-all whitespace-nowrap cursor-pointer rounded-none ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Minimalist 3-Column Grid (Hidden Price Badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onViewItinerary(pkg)}
              className="group relative h-[400px] sm:h-[440px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end cursor-pointer border-0 rounded-none bg-slate-900"
            >
              {/* Clean Full-Card Photography */}
              <img
                src={pkg.image}
                alt={pkg.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Protection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Overlaid Title & Location Tag ONLY (Price Hidden) */}
              <div className="relative z-10 p-6 text-white space-y-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between text-xs text-rose-300 font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{pkg.regionId.toUpperCase()} • JAPAN</span>
                  </div>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {pkg.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
