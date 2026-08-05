import React, { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Train } from 'lucide-react';
import { TOUR_PACKAGES, type TourPackage } from '../data/japanData';
import { useCurrency } from '../context/CurrencyContext';

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
  const { formatPrice } = useCurrency();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Track tour type for each package (group vs private)
  const [tourTypeState, setTourTypeState] = useState<Record<string, 'group' | 'private'>>({});

  const getTourType = (pkgId: string) => tourTypeState[pkgId] || 'group';

  const setTourType = (pkgId: string, type: 'group' | 'private') => {
    setTourTypeState((prev) => ({ ...prev, [pkgId]: type }));
  };

  const getCalculatedPrice = (pkg: TourPackage) => {
    const type = getTourType(pkg.id);
    const baseUSD = pkg.priceUSD;
    // Group tour is 20% discounted
    return type === 'group' ? Math.round(baseUSD * 0.8) : baseUSD;
  };

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
          /* REGIONAL GUIDE OVERVIEW STYLE DETAILED TOUR CARD LIST LAYOUT */
          <div className="space-y-8">
            {displayedPackages.map((pkg) => {
              const currentTourType = getTourType(pkg.id);
              const priceUSD = getCalculatedPrice(pkg);
              return (
                <div
                  key={pkg.id}
                  onClick={() => onViewItinerary(pkg)}
                  className="bg-white rounded-none shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
                >
                  {/* Left Side Photography Container (5 Cols) */}
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[360px] overflow-hidden bg-slate-950 flex flex-col justify-between p-6">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Top-Right Flight Not Included Badge */}
                    <div className="relative z-10 self-end">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold rounded-none shadow-md">
                        <FlightCrossIcon className="w-3.5 h-3.5 text-slate-300" />
                        Flight Not Included
                      </span>
                    </div>

                    {/* Bottom Left Glowing Location Breakdown (NO SOLID BOX OVERLAY) */}
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-rose-300 font-bold uppercase tracking-widest font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{pkg.citiesStay}</span>
                      </div>

                      <div className="flex items-center justify-between gap-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight">
                          {pkg.title}
                        </h3>

                        <div className="bg-rose-600 text-white text-[11px] font-mono font-bold px-3 py-1 shrink-0 uppercase tracking-widest shadow-md">
                          {pkg.durationDays} DAYS • {pkg.citiesCount || 3} CITIES
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Overview Details (7 Cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-white">
                    <div>
                      {/* Pink Category Tag */}
                      <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-rose-500 mb-1">
                        <span>EXPEDITION GUIDE OVERVIEW</span>
                        <span className="text-slate-500 font-sans normal-case text-xs font-semibold">
                          ★ {pkg.rating} ({pkg.reviewsCount} reviews)
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight group-hover:text-rose-600 transition-colors">
                        {pkg.title}
                      </h3>

                      {/* Subtitle Quote */}
                      <p className="text-xs sm:text-sm text-slate-500 font-jakarta italic font-light mt-1">
                        "{pkg.subtitle}"
                      </p>

                      {/* Shinkansen Bullet Train Callout Box */}
                      <div className="mt-4 p-3.5 bg-slate-50 border-l-4 border-rose-500 flex items-start gap-3 rounded-none shadow-2xs">
                        <Train className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                            SHINKANSEN BULLET TRAIN INCLUDED
                          </div>
                          <div className="text-xs text-slate-600 font-jakarta">
                            Route: <strong>Tokyo ➔ Kyoto</strong> (Nozomi Shinkansen • 2h 15m) with reserved seats.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Group vs Private Interactive Selector & Pricing */}
                    <div className="pt-4 border-t border-slate-100 space-y-4">
                      {/* Group vs Private Tour Toggle */}
                      <div className="flex items-center justify-between gap-4 flex-wrap bg-slate-50 p-2.5 border border-slate-200/80">
                        <span className="text-xs font-mono font-bold uppercase text-slate-700">Tour Option:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setTourType(pkg.id, 'group');
                            }}
                            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              currentTourType === 'group'
                                ? 'bg-slate-900 text-white shadow-xs'
                                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            Group Tour (-20%)
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setTourType(pkg.id, 'private');
                            }}
                            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              currentTourType === 'private'
                                ? 'bg-slate-900 text-white shadow-xs'
                                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            Private Tour
                          </button>
                        </div>
                      </div>

                      {/* Price & Action */}
                      <div className="flex items-center justify-between gap-4">
                        <button
                          onClick={() => onViewItinerary(pkg)}
                          className="text-xs font-bold uppercase tracking-widest text-[#0F172A] group-hover:text-rose-600 flex items-center gap-2 transition-colors"
                        >
                          <span>EXPLORE EXPEDITION DETAILS</span>
                          <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-cinzel">
                            {formatPrice(priceUSD)}
                          </div>
                          <span className="text-[10px] text-slate-500 font-medium block uppercase tracking-wider">
                            per person ({currentTourType} tour)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* STANDARD 3-COLUMN FULL PHOTOGRAPHY CARDS (HOMEPAGE & TOURS GRID) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPackages.map((pkg) => {
              const currentTourType = getTourType(pkg.id);
              const priceUSD = getCalculatedPrice(pkg);

              return (
                <div
                  key={pkg.id}
                  onClick={() => onViewItinerary(pkg)}
                  className="group relative h-[480px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer border border-white/20 rounded-none bg-slate-950"
                >
                  {/* Full Background Photography */}
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Bar: Flight Not Included */}
                  <div className="relative z-10 p-5 flex items-start justify-end">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold rounded-none shadow-md">
                      <FlightCrossIcon className="w-3.5 h-3.5 text-slate-300" />
                      Flight Not Included
                    </span>
                  </div>

                  {/* Bottom Content & Interactive Group/Private Selector */}
                  <div className="relative z-10 p-6 text-white space-y-3">
                    {/* Glowing Location Breakdown (NO SOLID BOX) */}
                    <div className="flex items-center gap-1.5 text-xs text-rose-300 font-bold uppercase tracking-widest font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{pkg.citiesStay}</span>
                    </div>

                    <h3 className="font-cinzel text-2xl font-bold text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      {pkg.title}
                    </h3>

                    {/* Group vs Private Selector */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTourType(pkg.id, 'group');
                        }}
                        className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          currentTourType === 'group'
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-slate-950/80 text-slate-300 border border-white/20 hover:bg-slate-900'
                        }`}
                      >
                        Group Tour (-20%)
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTourType(pkg.id, 'private');
                        }}
                        className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          currentTourType === 'private'
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-slate-950/80 text-slate-300 border border-white/20 hover:bg-slate-900'
                        }`}
                      >
                        Private Tour
                      </button>
                    </div>

                    {/* Price Tag & Action */}
                    <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                      <div className="font-cinzel text-xl font-bold text-white">
                        {formatPrice(priceUSD)}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewItinerary(pkg);
                        }}
                        className="px-4 py-2 bg-white text-slate-900 hover:bg-rose-600 hover:text-white font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        View Details ➔
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
