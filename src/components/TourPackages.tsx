import React, { useState, useMemo } from 'react';
import { MapPin, Sparkles, Users } from 'lucide-react';
import { TOUR_PACKAGES, type TourPackage } from '../data/japanData';

const FlightCrossIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-1.1.4l-.4.6 4.3 3.6-2.6 2.6-2.2-.4-.8.8 3.2 2.2 2.2 3.2.8-.8-.4-2.2 2.6-2.6 3.6 4.3.6-.4a1 1 0 0 0 .4-1.1Z" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

interface TourPackagesProps {
  activeRegionFilter?: string;
  onClearRegionFilter?: () => void;
  onViewItinerary: (pkg: TourPackage) => void;
  onQuickBook: (pkg: TourPackage) => void;
  isDetailedView?: boolean;
}

export const TourPackages: React.FC<TourPackagesProps> = ({
  activeRegionFilter,
  onClearRegionFilter,
  onViewItinerary,
  onQuickBook: _,
  isDetailedView = false,
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
    <section id="packages-section" className="py-10 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
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

        {/* Conditional Layout Rendering */}
        {isDetailedView ? (
          /* COMPACT, ULTRA-SLEEK DETAILED CARD LIST LAYOUT */
          <div className="space-y-4">
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/90 overflow-hidden flex flex-col md:flex-row group"
              >
                {/* Compact Left Photography Container */}
                <div className="relative w-full md:w-[260px] lg:w-[280px] h-[180px] md:h-auto shrink-0 overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Duration & Cities Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-bold text-white rounded-md shadow-md border border-white/20">
                    {pkg.durationDays} days · {pkg.citiesCount || 3} cities
                  </div>
                </div>

                {/* Middle Info Content (Tight & Well Spaced) */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center space-y-2.5">
                  {/* Header Row: Title & Top-Right Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                      {pkg.title}
                    </h3>

                    {/* Flight Not Included & Group Badges */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold rounded-md">
                        <FlightCrossIcon className="w-3.5 h-3.5 text-slate-500" />
                        Flight not included
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-900 text-white text-[11px] font-bold rounded-md">
                        <Users className="w-3 h-3 text-slate-300" />
                        Group
                      </span>
                    </div>
                  </div>

                  {/* Combined Stay Badge & Inclusions Bar */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 bg-[#0F172A] text-slate-100 text-[11px] font-mono font-semibold uppercase tracking-wider rounded-md">
                      {pkg.citiesStay}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-medium">
                      <strong className="text-slate-900 font-bold">{pkg.hotelsCount || 3}</strong> Hotels
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-medium">
                      <strong className="text-slate-900 font-bold">{pkg.transfersCount || 5}</strong> Transfers
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-medium">
                      <strong className="text-slate-900 font-bold">{pkg.activitiesCount || 10}</strong> Activities
                    </span>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1 text-xs text-slate-600 font-jakarta pt-0.5">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-rose-500 shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Compact Pricing Box */}
                <div className="p-4 sm:p-5 md:w-[180px] shrink-0 border-t md:border-t-0 md:border-l border-slate-200/80 bg-slate-50/50 flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-2">
                  <div className="text-[10px] font-extrabold font-mono text-amber-900 bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 rounded-md">
                    {pkg.hotelRating || '4★ Hotel'}
                  </div>

                  <div>
                    <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-cinzel">
                      ${pkg.priceUSD.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium block">per person</span>
                  </div>

                  <button
                    onClick={() => onViewItinerary(pkg)}
                    className="w-full py-2 px-4 bg-slate-900 hover:bg-rose-600 text-white font-bold text-[11px] uppercase tracking-widest rounded-md shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 3-COLUMN GRID LAYOUT (HOME PAGE) */
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

                {/* Top-Right "Flight Not Included" Icon-Only Badge (Highly Visible) */}
                <div
                  title="Flight Not Included"
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/85 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/30 hover:scale-110 transition-transform"
                >
                  <FlightCrossIcon className="w-5 h-5 text-white" />
                </div>

                {/* Overlaid Title & Location Tag */}
                <div className="relative z-10 p-6 text-white space-y-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                  <div className="flex items-center justify-between text-xs text-rose-300 font-bold tracking-widest uppercase">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{pkg.citiesStay}</span>
                    </div>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewItinerary(pkg);
                      }}
                      className="text-xs font-semibold text-white/90 hover:text-white transition-all cursor-pointer relative hover:underline underline-offset-4 decoration-rose-400"
                    >
                      Group Tour
                    </button>
                    <span className="text-white/40 text-xs">•</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewItinerary(pkg);
                      }}
                      className="text-xs font-semibold text-white/90 hover:text-white transition-all cursor-pointer relative hover:underline underline-offset-4 decoration-rose-400"
                    >
                      Private Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
