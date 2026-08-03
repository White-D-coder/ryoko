import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Compass, ArrowRight } from 'lucide-react';
import { SakuraCanvas } from './SakuraCanvas';

interface HeroProps {
  onSearch: (filters: { season: string; duration: string; style: string }) => void;
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

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState('Spring/Sakura');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [selectedStyle, setSelectedStyle] = useState('All Styles');

  // Automatic Hero Carousel Image Rotation (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      season: selectedSeason,
      duration: selectedDuration,
      style: selectedStyle,
    });

    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full bg-black/50 border border-white/20 px-3 py-2.5 text-xs font-semibold text-white focus:outline-none rounded-none"
              >
                <option value="Spring/Sakura" className="bg-slate-900 text-white">Spring / Sakura (Mar–May)</option>
                <option value="Autumn Foliage" className="bg-slate-900 text-white">Autumn Foliage (Sep–Nov)</option>
                <option value="Winter Snow" className="bg-slate-900 text-white">Winter / Snow (Dec–Feb)</option>
                <option value="Summer Festivals" className="bg-slate-900 text-white">Summer Festivals (Jun–Aug)</option>
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
                <option value="All Durations" className="bg-slate-900 text-white">All Durations</option>
                <option value="7 Days" className="bg-slate-900 text-white">7 Days (Express Route)</option>
                <option value="10 Days" className="bg-slate-900 text-white">10 Days (Golden Route)</option>
                <option value="14+ Days" className="bg-slate-900 text-white">14+ Days (Grand Explorer)</option>
              </select>
            </div>

            <div className="flex flex-col text-left space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                <Compass className="w-3 h-3 text-slate-300" />
                Travel Style
              </label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full bg-black/50 border border-white/20 px-3 py-2.5 text-xs font-semibold text-white focus:outline-none rounded-none"
              >
                <option value="All Styles" className="bg-slate-900 text-white">All Styles</option>
                <option value="Golden Route" className="bg-slate-900 text-white">Golden Route (Classic)</option>
                <option value="Luxury Onsen" className="bg-slate-900 text-white">Luxury Onsen Ryokan</option>
                <option value="Anime & Tech" className="bg-slate-900 text-white">Anime & Tech Culture</option>
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
