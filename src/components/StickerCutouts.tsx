import React, { useState, useEffect } from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Flame, Compass, ArrowRight } from 'lucide-react';

interface BentoItem {
  id: string;
  title: string;
  kanji: string;
  subtitle: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
  initialSize: number;
}

const BENTO_DATA: BentoItem[] = [
  {
    id: 'omotenashi',
    title: 'OMOTENASHI',
    kanji: 'おもてなし',
    subtitle: 'Mindful Hospitality',
    desc: 'Wholehearted care without pretense. Private ryokan hosts, tea masters, and 24/7 Tokyo concierge.',
    image: '/images/pexels-songhanphoto-10618962.jpg',
    icon: <HeartHandshake className="w-5 h-5 text-rose-400" />,
    initialSize: 2,
  },
  {
    id: 'matcha',
    title: 'UJI MATCHA RITUAL',
    kanji: '抹茶',
    subtitle: 'Zen Tea Ceremony',
    desc: 'Authentic stone-ground Uji green tea whisked by Zen tea masters in historic Kyoto gardens.',
    image: '/images/matcha-tea-ceremony.png',
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    initialSize: 1,
  },
  {
    id: 'kaiseki',
    title: 'KAISEKI DINING',
    kanji: '懐石料理',
    subtitle: 'Culinary Masterpieces',
    desc: 'Multi-course seasonal dining curated by Michelin-starred chefs and authentic local izakayas.',
    image: '/images/pexels-satoshi-1325837.jpg',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    initialSize: 1,
  },
  {
    id: 'onsen',
    title: 'ONSEN SANCTUARY',
    kanji: '温泉',
    subtitle: 'Volcanic Hot Springs',
    desc: 'Mineral-rich thermal baths nestled in ancient cedar forests and snow peaks.',
    image: '/images/pexels-drkesu-12045314.jpg',
    icon: <Flame className="w-5 h-5 text-sky-400" />,
    initialSize: 2,
  },
  {
    id: 'sakura',
    title: 'SAKURA EXPEDITIONS',
    kanji: '桜花',
    subtitle: 'Peak Bloom Timing',
    desc: 'Chasing peak Mankai cherry blossoms from Tokyo waterways to Hokkaido mountains.',
    image: '/images/pexels-imageriesnap-14055275.jpg',
    icon: <Compass className="w-5 h-5 text-pink-400" />,
    initialSize: 1,
  },
];

export const StickerCutouts: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [items, setItems] = useState<BentoItem[]>(BENTO_DATA);

  // Shuffle initial sizes on page load / refresh
  useEffect(() => {
    const shuffled = [...BENTO_DATA].sort(() => Math.random() - 0.5);
    const randomized = shuffled.map((item, idx) => ({
      ...item,
      initialSize: idx % 2 === 0 ? 2 : 1,
    }));
    setItems(randomized);
  }, []);

  return (
    <section className="py-24 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      {/* Background Watermark */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-kanji text-[30vw] font-black text-[#0F172A]">
          体験
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (Clean Luxury Typography, No Red Subtitle) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
              ESSENCE OF JAPANESE TRAVEL
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm font-jakarta max-w-md">
            Explore the core pillars of bespoke Japanese travel — from omotenashi hospitality to Shinkansen Green Class transit and Michelin kaiseki dining.
          </p>
        </div>

        {/* Dynamic Expanding Bento Accordion Layout */}
        <div className="flex flex-col lg:flex-row gap-4 min-h-[500px] h-[540px] mb-12">
          {items.map((item) => {
            const isHovered = hoveredId === item.id;
            const isAnyHovered = hoveredId !== null;

            // Compute dynamic flex grow
            let flexStyle = 'flex-1';
            if (isHovered) {
              flexStyle = 'lg:flex-[3.2] flex-[2.8]';
            } else if (isAnyHovered) {
              flexStyle = 'lg:flex-[0.7] flex-[0.6]';
            } else {
              flexStyle = item.initialSize === 2 ? 'lg:flex-[1.8] flex-1' : 'flex-1';
            }

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer flex flex-col justify-end border border-white/20 rounded-none ${flexStyle}`}
              >
                {/* Full Card Photography */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                />

                {/* Dark Protection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* COLLAPSED STATE: Vertical Calligraphic Japanese Brush Kanji (when not hovered) */}
                <div
                  className={`absolute inset-0 p-8 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
                    isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <div
                    style={{ writingMode: 'vertical-rl' }}
                    className="font-kanji font-black text-3xl sm:text-4xl text-white tracking-[0.3em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] select-none text-rose-100"
                  >
                    {item.kanji}
                  </div>
                </div>

                {/* EXPANDED STATE: Full English Details (revealed smoothly on hover) */}
                <div
                  className={`relative z-10 p-7 text-white space-y-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] transition-all duration-500 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-rose-300 font-bold tracking-widest uppercase">
                    <span className="font-kanji font-normal text-base text-white/90">
                      {item.kanji}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-jakarta leading-relaxed opacity-90 font-light mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pure Typography Action Link */}
        <div className="text-center">
          <a
            href="#packages-section"
            className="relative py-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0F172A] hover:text-rose-600 transition-colors cursor-pointer group after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            <span>EXPLORE JAPAN OMOTENASHI EXPEDITIONS</span>
            <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
