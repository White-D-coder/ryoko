import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOUR_PACKAGES, type TourPackage } from '../data/japanData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const DAY_KANJI = ['一日目', '二日目', '三日目', '四日目', '五日目', '六日目', '七日目', '八日目', '九日目', '十日目'];

interface PackageDetailPageProps {
  onOpenBooking: (pkg: TourPackage) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenBooking }) => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();

  const pkg: TourPackage = TOUR_PACKAGES.find((p) => p.id === packageId) || TOUR_PACKAGES[0];

  const [activeTab, setActiveTab] = useState<'itinerary' | 'highlights' | 'route'>('itinerary');
  const [selectedMonth, setSelectedMonth] = useState('March 2027 (Sakura Mankai)');
  const [guestCount, setGuestCount] = useState(2);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-24 pb-24 text-slate-900">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate('/packages')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Expeditions</span>
        </button>
      </div>

      {/* Editorial Hero Photography Banner */}
      <section className="relative h-[440px] sm:h-[500px] w-full overflow-hidden mb-12 bg-slate-950">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4 relative z-10">
            {/* City Stay Badge */}
            <div className="inline-block px-3.5 py-1 bg-white/10 border border-white/20 text-slate-100 text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md">
              {pkg.citiesStay}
            </div>

            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {pkg.title}
            </h1>

            <p className="font-jakarta text-slate-300 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              {pkg.subtitle}
            </p>

            {/* Clean Spec Metrics Row (No Icon Clutter) */}
            <div className="pt-2 flex items-center justify-center gap-6 text-xs font-mono text-slate-300 flex-wrap">
              <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
              <span>•</span>
              <span>{pkg.groupSize}</span>
              <span>•</span>
              <span>★ {pkg.rating} ({pkg.reviewsCount} Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200 mb-10 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors border-b-2 ${
              activeTab === 'itinerary'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Daily Schedule ({pkg.durationDays} Days)
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`py-3 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors border-b-2 ${
              activeTab === 'highlights'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Inclusions & Privileges
          </button>
          <button
            onClick={() => setActiveTab('route')}
            className={`py-3 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors border-b-2 ${
              activeTab === 'route'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Bullet Train Transit
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* TAB 1: Day-by-Day Timeline */}
            {activeTab === 'itinerary' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900">
                    EXPEDITION TIMELINE
                  </h2>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Select day to view itinerary
                  </span>
                </div>

                <div className="space-y-3">
                  {pkg.itinerary.map((day, idx) => {
                    const isExpanded = expandedDay === day.day;
                    return (
                      <div
                        key={day.day}
                        onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                        className="bg-white border border-slate-200 shadow-xs cursor-pointer transition-all hover:border-slate-400"
                      >
                        <div className="p-5 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <span className="font-kanji font-black text-xl text-slate-400 shrink-0">
                              {DAY_KANJI[idx] || `Day ${day.day}`}
                            </span>
                            <div>
                              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                                DAY {day.day}
                              </div>
                              <h3 className="font-cinzel text-base font-bold text-slate-900">
                                {day.title}
                              </h3>
                            </div>
                          </div>

                          <div className="text-xs font-mono text-slate-500 font-bold shrink-0">
                            {isExpanded ? '−' : '+'}
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50 space-y-3">
                            <p className="text-slate-600 text-xs sm:text-sm font-jakarta leading-relaxed font-light">
                              {day.description}
                            </p>

                            <div className="flex items-center gap-6 text-xs text-slate-700 font-mono pt-3 border-t border-slate-200/60 flex-wrap">
                              <span>Meals: <strong className="text-slate-900">{day.meals}</strong></span>
                              <span>Stay: <strong className="text-slate-900">{day.accommodation}</strong></span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: Highlights & Inclusions */}
            {activeTab === 'highlights' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 border border-slate-200 shadow-sm">
                  <div className="space-y-4">
                    <h3 className="font-cinzel text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                      HIGHLIGHT EXPERIENCES
                    </h3>
                    <ul className="space-y-3">
                      {pkg.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-cinzel text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                      INCLUDED PRIVILEGES
                    </h3>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Bullet Train Route */}
            {activeTab === 'route' && (
              <div className="p-8 bg-white border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-slate-900">
                    SHINKANSEN BULLET EXPRESS TRANSIT
                  </h3>
                  <p className="text-xs text-slate-500 font-jakarta mt-1">
                    First-class Green Car reserved seating with door-to-door luggage forwarding.
                  </p>
                </div>

                <div className="p-6 bg-slate-900 text-white space-y-3 border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-rose-400">
                    <span>TOKYO (SHINAGAWA)</span>
                    <span>── 320 km/h ──</span>
                    <span>KYOTO STATION</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Speeds up to 320 km/h with Mt. Fuji panoramas and complimentary Japanese bento dining onboard.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Clean Sticky Booking Sidebar (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  Expedition Pricing
                </span>
                <div className="text-3xl font-extrabold text-slate-900 font-cinzel">
                  ${pkg.priceUSD.toLocaleString()}
                </div>
                <span className="text-xs text-slate-500 font-light">per guest (double occupancy)</span>
              </div>

              {/* Month Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Select Departure Month:
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                >
                  <option value="March 2027 (Sakura Mankai)">March 2027 (Sakura Mankai)</option>
                  <option value="April 2027 (Peak Spring)">April 2027 (Peak Spring)</option>
                  <option value="May 2027 (Late Blossom)">May 2027 (Late Blossom)</option>
                  <option value="October 2027 (Autumn Foliage)">October 2027 (Autumn Foliage)</option>
                  <option value="November 2027 (Momiji Foliage)">November 2027 (Momiji Foliage)</option>
                </select>
              </div>

              {/* Guests Count Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Travelers:
                </label>
                <div className="flex items-center justify-between border border-slate-300 p-2 bg-slate-50">
                  <button
                    onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-xs text-slate-900">{guestCount} Guests</span>
                  <button
                    onClick={() => setGuestCount((prev) => prev + 1)}
                    className="w-8 h-8 bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => onOpenBooking(pkg)}
                className="w-full bg-slate-900 hover:bg-rose-600 text-white font-bold py-3.5 px-4 text-xs uppercase tracking-widest shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Reserve Expedition</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Minimal Policy Note */}
              <div className="pt-2 text-[11px] text-slate-500 font-mono space-y-1 text-center border-t border-slate-200">
                <p>✓ 100% Refundable up to 60 days prior</p>
                <p>✓ Guaranteed Small Group (Max 12 Guests)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
