import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SakuraCanvas } from './SakuraCanvas';

interface HeroProps {
  onSearch: (filters: { season: string; duration: string; departureMonth: string }) => void;
}

const HERO_SLIDES = [
  {
    image: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
    title: 'Hakone Torii Gate & Mt. Fuji',
    number: '01',
  },
  {
    image: '/images/pexels-songhanphoto-10618962.jpg',
    title: 'Kyoto Arashiyama & Shrines',
    number: '02',
  },
  {
    image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
    title: 'Tokyo Neon & Ginza Lights',
    number: '03',
  },
];

const DEPARTURE_MONTHS_BY_SEASON: Record<string, { label: string; value: string }[]> = {
  'Spring/Sakura': [
    { label: 'All Spring Months', value: 'All Spring' },
    { label: 'March 2026', value: 'March 2026' },
    { label: 'April 2026', value: 'April 2026' },
    { label: 'May 2026', value: 'May 2026' },
    { label: 'March 2027 (Peak Sakura)', value: 'March 2027' },
    { label: 'April 2027 (Peak Sakura)', value: 'April 2027' },
    { label: 'May 2027', value: 'May 2027' },
  ],
  'Autumn Foliage': [
    { label: 'All Autumn Months', value: 'All Autumn' },
    { label: 'September 2026', value: 'September 2026' },
    { label: 'October 2026', value: 'October 2026' },
    { label: 'November 2026 (Peak Foliage)', value: 'November 2026' },
    { label: 'September 2027', value: 'September 2027' },
    { label: 'October 2027', value: 'October 2027' },
    { label: 'November 2027', value: 'November 2027' },
  ],
  'Winter Snow': [
    { label: 'All Winter Months', value: 'All Winter' },
    { label: 'December 2026', value: 'December 2026' },
    { label: 'January 2027 (Peak Snow)', value: 'January 2027' },
    { label: 'February 2027 (Snow Festival)', value: 'February 2027' },
    { label: 'December 2027', value: 'December 2027' },
  ],
  'Summer Festivals': [
    { label: 'All Summer Months', value: 'All Summer' },
    { label: 'June 2026', value: 'June 2026' },
    { label: 'July 2026 (Gion Matsuri)', value: 'July 2026' },
    { label: 'August 2026 (Nebuta Festival)', value: 'August 2026' },
    { label: 'June 2027', value: 'June 2027' },
    { label: 'July 2027', value: 'July 2027' },
    { label: 'August 2027', value: 'August 2027' },
  ],
  'All Seasons': [
    { label: 'All Departure Months', value: 'All Months' },
    { label: 'August 2026', value: 'August 2026' },
    { label: 'September 2026', value: 'September 2026' },
    { label: 'October 2026', value: 'October 2026' },
    { label: 'November 2026', value: 'November 2026' },
    { label: 'December 2026', value: 'December 2026' },
    { label: 'January 2027', value: 'January 2027' },
    { label: 'February 2027', value: 'February 2027' },
    { label: 'March 2027', value: 'March 2027' },
    { label: 'April 2027', value: 'April 2027' },
    { label: 'May 2027', value: 'May 2027' },
    { label: 'June 2027', value: 'June 2027' },
    { label: 'July 2027', value: 'July 2027' },
    { label: 'August 2027', value: 'August 2027' },
  ],
};

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState('Spring/Sakura');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [selectedDepartureMonth, setSelectedDepartureMonth] = useState('All Spring');

  // Automatic Hero Carousel Image Rotation (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSeasonChange = (season: string) => {
    setSelectedSeason(season);
    const months = DEPARTURE_MONTHS_BY_SEASON[season] || DEPARTURE_MONTHS_BY_SEASON['Spring/Sakura'];
    setSelectedDepartureMonth(months[0].value);
  };

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      season: selectedSeason,
      duration: selectedDuration,
      departureMonth: selectedDepartureMonth,
    });

    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeDepartureMonths =
    DEPARTURE_MONTHS_BY_SEASON[selectedSeason] || DEPARTURE_MONTHS_BY_SEASON['Spring/Sakura'];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-10">
      {/* Background Image with Crossfade & Atmospheric Vignette */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              activeSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />
      </div>

      {/* Floating Petal HTML5 Canvas */}
      <SakuraCanvas />

      {/* Main Content Area */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 w-full flex-1 flex flex-col justify-end pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Giant Bold Condensed "VISIT JAPAN" Editorial Title */}
          <div className="lg:col-span-10 text-left">
            <h1 className="font-outfit font-black text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] tracking-tight uppercase leading-[0.82] text-white drop-shadow-2xl select-none">
              VISIT <br />
              JAPAN
            </h1>
            <p className="font-jakarta text-xs sm:text-sm font-medium tracking-wider text-slate-300 mt-4 max-w-md">
              Welcome to Japan National Tourism • Bespoke Expeditions
            </p>
          </div>

          {/* Right Column: Shifted Vertical Slide Counter (01, 02 —, 03) */}
          <div className="lg:col-span-2 flex justify-end pb-4 pr-2 sm:pr-4">
            <div className="flex flex-col items-end gap-3 text-xs font-mono font-bold tracking-widest text-white/60 select-none translate-x-4 sm:translate-x-6">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`flex items-center gap-2 transition-all cursor-pointer ${
                    activeSlide === idx
                      ? 'text-white text-base font-extrabold font-outfit'
                      : 'hover:text-white opacity-60'
                  }`}
                >
                  <span>{slide.number}</span>
                  {activeSlide === idx && <span className="w-5 h-[2px] bg-white inline-block" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Search & Proof Bar (Zero Border-Radius) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 shadow-2xl text-white rounded-none">
          <form onSubmit={handleFinderSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
            <div className="flex flex-col text-left space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-300" />
                When Traveling?
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => handleSeasonChange(e.target.value)}
                className="w-full bg-black/50 border border-white/20 px-3 py-2.5 text-xs font-semibold text-white focus:outline-none rounded-none"
              >
                <option value="Spring/Sakura" className="bg-slate-900 text-white">Spring / Sakura (Mar–May)</option>
                <option value="Autumn Foliage" className="bg-slate-900 text-white">Autumn Foliage (Sep–Nov)</option>
                <option value="Winter Snow" className="bg-slate-900 text-white">Winter / Snow (Dec–Feb)</option>
                <option value="Summer Festivals" className="bg-slate-900 text-white">Summer Festivals (Jun–Aug)</option>
                <option value="All Seasons" className="bg-slate-900 text-white">All Seasons / Anytime</option>
              </select>
            </div>

            <div className="flex flex-col text-left space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-300" />
                Trip Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-black/50 border border-white/20 px-3 py-2.5 text-xs font-semibold text-white focus:outline-none rounded-none"
              >
                <option value="Any Duration" className="bg-slate-900 text-white">Any Duration</option>
                <option value="1 night" className="bg-slate-900 text-white">1 night</option>
                <option value="2 nights" className="bg-slate-900 text-white">2 nights</option>
                <option value="3 nights" className="bg-slate-900 text-white">3 nights</option>
                <option value="4 nights" className="bg-slate-900 text-white">4 nights</option>
                <option value="5 - 6 nights" className="bg-slate-900 text-white">5 - 6 nights</option>
                <option value="7 - 9 nights" className="bg-slate-900 text-white">7 - 9 nights</option>
                <option value="10 - 13 nights" className="bg-slate-900 text-white">10 - 13 nights</option>
                <option value="14 - 17 nights" className="bg-slate-900 text-white">14 - 17 nights</option>
                <option value="18 - 20 nights" className="bg-slate-900 text-white">18 - 20 nights</option>
                <option value="21 - 24 nights" className="bg-slate-900 text-white">21 - 24 nights</option>
              </select>
            </div>

            <div className="flex flex-col text-left space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-300" />
                Departure Month
              </label>
              <select
                value={selectedDepartureMonth}
                onChange={(e) => setSelectedDepartureMonth(e.target.value)}
                className="w-full bg-black/50 border border-white/20 px-3 py-2.5 text-xs font-semibold text-white focus:outline-none rounded-none"
              >
                {activeDepartureMonths.map((m) => (
                  <option key={m.value} value={m.value} className="bg-slate-900 text-white">
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-rose-600 hover:text-white text-[#121212] font-bold py-2.5 px-4 shadow-md transition-all flex items-center justify-center gap-2 group text-xs uppercase tracking-wider cursor-pointer rounded-none"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
