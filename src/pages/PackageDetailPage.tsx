import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOUR_PACKAGES, type TourPackage } from '../data/japanData';
import { Calendar, Users, Star, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, MapPin, Sparkles, Utensils, Hotel, Train } from 'lucide-react';

interface PackageDetailPageProps {
  onOpenBooking: (pkg: TourPackage) => void;
}

const DAY_KANJI = ['一日目', '二日目', '三日目', '四日目', '五日目', '六日目', '七日目', '八日目', '九日目', '十日目'];

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenBooking }) => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();

  const pkg: TourPackage = TOUR_PACKAGES.find((p) => p.id === packageId) || TOUR_PACKAGES[0];

  const [activeTab, setActiveTab] = useState<'itinerary' | 'route' | 'highlights'>('itinerary');
  const [selectedMonth, setSelectedMonth] = useState('March 2027 (Sakura Mankai)');
  const [guestCount, setGuestCount] = useState(2);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-24 pb-24 relative">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-700 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Expeditions</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 border border-rose-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Only 3 Spots Left for 2027 Peak Bloom</span>
        </div>
      </div>

      {/* Hero Photography Banner */}
      <section className="relative h-[480px] sm:h-[540px] w-full overflow-hidden mb-12">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20 opacity-95" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-600 text-white text-xs font-extrabold uppercase tracking-widest rounded-none shadow-lg">
              <MapPin className="w-3.5 h-3.5" />
              <span>{pkg.regionId.toUpperCase()} • JAPAN EXPEDITION</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              {pkg.title}
            </h1>

            <p className="font-jakarta text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              {pkg.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 flex items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-white flex-wrap">
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 border border-white/20">
                <Calendar className="w-4 h-4 text-rose-400" />
                <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 border border-white/20">
                <Users className="w-4 h-4 text-rose-400" />
                <span>{pkg.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 border border-white/20">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>★ {pkg.rating} ({pkg.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Content Navigation Tabs */}
        <div className="flex items-center gap-6 border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors border-b-2 ${
              activeTab === 'itinerary'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Day-by-Day Schedule ({pkg.durationDays} Days)
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`py-3 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors border-b-2 ${
              activeTab === 'highlights'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Inclusions & Ryokan Privileges
          </button>
          <button
            onClick={() => setActiveTab('route')}
            className={`py-3 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors border-b-2 ${
              activeTab === 'route'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Shinkansen Bullet Train Route
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* TAB 1: Day-by-Day Interactive Schedule */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    EXPEDITION TIMELINE
                  </h2>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Click day to expand
                  </span>
                </div>

                <div className="space-y-4">
                  {pkg.itinerary.map((day, idx) => {
                    const isExpanded = expandedDay === day.day;
                    return (
                      <div
                        key={day.day}
                        onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                        className="bg-white border border-slate-200/90 shadow-md cursor-pointer transition-all hover:border-rose-400 rounded-none overflow-hidden"
                      >
                        <div className="p-6 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <span className="font-kanji font-black text-2xl text-rose-600 shrink-0">
                              {DAY_KANJI[idx] || `第${day.day}日`}
                            </span>
                            <div>
                              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                                DAY {day.day} • EXPEDITION STAGE
                              </div>
                              <h3 className="font-outfit text-lg font-bold text-[#0F172A]">
                                {day.title}
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                            <span className="hidden sm:flex items-center gap-1">
                              <Utensils className="w-3.5 h-3.5 text-rose-500" />
                              {day.meals}
                            </span>
                            <span className="text-rose-600">{isExpanded ? '−' : '+'}</span>
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                            <p className="text-slate-600 text-xs sm:text-sm font-jakarta leading-relaxed font-light">
                              {day.description}
                            </p>

                            <div className="flex items-center gap-6 text-xs text-slate-700 font-semibold pt-2 border-t border-slate-200">
                              <div className="flex items-center gap-1.5">
                                <Utensils className="w-4 h-4 text-rose-500" />
                                <span>Meals: <strong>{day.meals}</strong></span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Hotel className="w-4 h-4 text-emerald-600" />
                                <span>Stay: <strong>{day.accommodation}</strong></span>
                              </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 border border-slate-200/80 shadow-lg rounded-none">
                  <div className="space-y-4">
                    <h3 className="font-cinzel text-xl font-bold text-[#0F172A] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-rose-500" />
                      <span>HIGHLIGHT EXPERIENCES</span>
                    </h3>
                    <ul className="space-y-3">
                      {pkg.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-cinzel text-xl font-bold text-[#0F172A] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>INCLUDED PRIVILEGES</span>
                    </h3>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Shinkansen Route */}
            {activeTab === 'route' && (
              <div className="p-8 bg-white border border-slate-200 shadow-lg space-y-6 rounded-none">
                <div className="flex items-center gap-3">
                  <Train className="w-6 h-6 text-rose-600" />
                  <div>
                    <h3 className="font-cinzel text-2xl font-bold text-[#0F172A]">
                      JAPAN RAIL BULLET EXPRESS ROUTE
                    </h3>
                    <p className="text-xs text-slate-500 font-jakarta">
                      Reserved first-class Green Car seats with hands-free luggage forwarding.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 text-white space-y-4 border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-rose-400">
                    <span>TOKYO (SHINAGAWA)</span>
                    <span className="animate-pulse">➔ 2h 15m ➔</span>
                    <span>KYOTO STATION</span>
                  </div>
                  <div className="text-xs text-slate-300 font-jakarta leading-relaxed">
                    Enjoy speeds up to 320 km/h with Mt. Fuji views out your window while enjoying complimentary Japanese bento dining onboard.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Booking Sidebar (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white p-8 border border-slate-200/90 shadow-2xl space-y-6 rounded-none">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">
                  Bespoke Expedition
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#0F172A] mt-1">
                  RESERVE YOUR SPOT
                </h3>
              </div>

              {/* Month Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Select 2027 Departure:
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-rose-500 rounded-none cursor-pointer"
                >
                  <option value="March 2027 (Sakura Mankai)">March 2027 (Sakura Mankai)</option>
                  <option value="April 2027 (Peak Spring)">April 2027 (Peak Spring)</option>
                  <option value="May 2027 (Late Blossom)">May 2027 (Late Blossom)</option>
                  <option value="October 2027 (Autumn Foliage)">October 2027 (Autumn Foliage)</option>
                  <option value="November 2027 (Momiji Foliage)">November 2027 (Momiji Foliage)</option>
                </select>
              </div>

              {/* Guest Counter */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Number of Travelers:
                </label>
                <div className="flex items-center justify-between border border-slate-300 p-2 bg-slate-50">
                  <button
                    onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-slate-800">{guestCount} Guests</span>
                  <button
                    onClick={() => setGuestCount((prev) => prev + 1)}
                    className="w-8 h-8 bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Booking CTA Button */}
              <button
                onClick={() => onOpenBooking(pkg)}
                className="w-full bg-slate-900 hover:bg-rose-600 text-white font-bold py-4 text-xs uppercase tracking-widest shadow-xl transition-colors cursor-pointer flex items-center justify-center gap-2 group rounded-none"
              >
                <span>Reserve Expedition Deposit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Guarantees */}
              <div className="pt-2 space-y-2 text-[11px] text-slate-500 font-medium border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Refundable Deposit up to 60 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Guaranteed Small Group (Max 12 Guests)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Quick-Book Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md text-white py-3.5 px-6 border-t border-white/20 shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-cinzel text-base font-bold hidden sm:inline">{pkg.title}</span>
          <span className="text-xs text-rose-300 font-bold">{guestCount} Travelers Reserved</span>
        </div>
        <button
          onClick={() => onOpenBooking(pkg)}
          className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-extrabold uppercase tracking-widest px-6 py-2.5 transition-colors cursor-pointer"
        >
          Reserve Expedition ➔
        </button>
      </div>
    </div>
  );
};
