import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  tourName: string;
  avatar: string;
  rating: number;
  review: string;
  type: 'avatar-top' | 'quote-top' | 'review-first' | 'minimal';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah & David Jenkins',
    location: 'London, UK',
    tourName: 'Eternal Sakura Golden Route',
    avatar: '/images/pexels-songhanphoto-10618962.jpg',
    rating: 5,
    review:
      'Our 10-day Eternal Sakura Golden Route was seamless. The private Geisha tea ceremony in Gion and Hakone open-air onsen were memories we will cherish forever.',
    type: 'avatar-top',
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    location: 'San Francisco, USA',
    tourName: 'Luxury Ryokan Sanctuary',
    avatar: '/images/pexels-drkesu-12045314.jpg',
    rating: 5,
    review:
      'Ryokō arranged our Green Class JR passes, hands-free luggage forwarding between Tokyo and Kyoto, and Michelin-starred Kaiseki reservations flawlessly.',
    type: 'quote-top',
  },
  {
    id: 't3',
    name: 'Elena & Nikolai Rostova',
    location: 'Sydney, Australia',
    tourName: 'Sakura 2027 Special',
    avatar: '/images/pexels-huy-phan-316220-34991523.jpg',
    rating: 5,
    review:
      'Seeing peak cherry blossoms along Meguro River and staying at a 100-year-old wooden ryokan in Ginzan Onsen was absolute magic.',
    type: 'review-first',
  },
  {
    id: 't4',
    name: 'Kazuya & Mei Lin',
    location: 'Toronto, Canada',
    tourName: 'Otaku Anime & Tech Odyssey',
    avatar: '/images/pexels-markus-winkler-1430818-19867354.jpg',
    rating: 5,
    review:
      'Super Nintendo World express passes and Akihabara retro gaming tours were organized perfectly. Our family had an incredible time in Tokyo!',
    type: 'minimal',
  },
  {
    id: 't5',
    name: 'Julian Thorne',
    location: 'Zurich, Switzerland',
    tourName: 'Art & Heritage Islands',
    avatar: '/images/pexels-imageriesnap-14055275.jpg',
    rating: 5,
    review:
      'Naoshima art island ferry logistics and Miyajima floating torii gate sunset views made this the trip of a lifetime. Highly recommended!',
    type: 'quote-top',
  },
  {
    id: 't6',
    name: 'Chloe & Thomas Sterling',
    location: 'New York, USA',
    tourName: 'Hokkaido Powder & Snow',
    avatar: '/images/pexels-kuma-jio-2150949207-31416355.jpg',
    rating: 5,
    review:
      'The Hokkaido powder snow in Niseko and volcanic hot springs in Noboribetsu exceeded all our expectations. Exceptional service!',
    type: 'avatar-top',
  },
];

export const TestimonialsMarquee: React.FC = () => {
  const col1Items = [TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[4]];
  const col2Items = [TESTIMONIALS[2], TESTIMONIALS[3], TESTIMONIALS[5]];

  const col1Repeated = [...col1Items, ...col1Items, ...col1Items];
  const col2Repeated = [...col2Items, ...col2Items, ...col2Items];

  const renderCard = (item: Testimonial, key: string) => {
    if (item.type === 'avatar-top') {
      return (
        <div
          key={key}
          className="bg-white p-6 sm:p-7 border border-slate-200/80 shadow-md space-y-4 hover:border-slate-400 transition-all rounded-none"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h4 className="font-outfit text-sm font-bold text-[#0F172A] leading-tight">
                {item.name}
              </h4>
              <span className="text-[11px] text-slate-500 font-jakarta block">
                {item.location}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 font-jakarta leading-relaxed italic">
            "{item.review}"
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-rose-600 font-mono font-bold flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {item.tourName}
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.type === 'quote-top') {
      return (
        <div
          key={key}
          className="bg-white p-6 sm:p-7 border border-slate-200/80 shadow-md space-y-4 hover:border-slate-400 transition-all rounded-none"
        >
          <Quote className="w-7 h-7 text-rose-500/40" />

          <p className="text-xs sm:text-sm text-slate-700 font-jakarta leading-relaxed italic">
            "{item.review}"
          </p>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h4 className="font-outfit text-xs font-bold text-[#0F172A]">
                  {item.name}
                </h4>
                <span className="text-[10px] text-slate-400 font-jakarta block">
                  {item.location}
                </span>
              </div>
            </div>

            <span className="text-[10px] text-slate-500 font-mono font-semibold">
              {item.tourName}
            </span>
          </div>
        </div>
      );
    }

    if (item.type === 'review-first') {
      return (
        <div
          key={key}
          className="bg-white p-6 sm:p-7 border border-slate-200/80 shadow-md space-y-4 hover:border-slate-400 transition-all rounded-none"
        >
          <p className="text-xs sm:text-sm text-slate-700 font-jakarta leading-relaxed italic">
            "{item.review}"
          </p>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h4 className="font-outfit text-xs font-bold text-[#0F172A]">
                  {item.name}
                </h4>
                <span className="text-[10px] text-slate-400 font-jakarta block">
                  {item.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        key={key}
        className="bg-white p-6 sm:p-7 border border-slate-200/80 shadow-md space-y-4 hover:border-slate-400 transition-all rounded-none"
      >
        <Quote className="w-7 h-7 text-slate-400" />

        <p className="text-xs sm:text-sm text-slate-700 font-jakarta leading-relaxed italic">
          "{item.review}"
        </p>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <h4 className="font-outfit text-xs font-bold text-[#0F172A]">
              {item.name}
            </h4>
          </div>

          <span className="text-[10px] text-rose-600 font-mono font-bold">
            {item.tourName}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (Pill Tag, Heading & Subtitle) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            <span className="inline-block px-3.5 py-1 bg-rose-50 text-rose-600 border border-rose-200 text-xs font-mono font-bold tracking-wider rounded-full">
              / Testimonial • 感想
            </span>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              WHAT OUR GUESTS ARE SAYING
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-jakarta font-light leading-relaxed">
              Authentic stories and heartfelt memories shared by travelers who explored Japan's cherry blossoms, luxury ryokans, and high-speed bullet train routes with us.
            </p>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-slate-700 font-mono ml-2">4.98 / 5.0 (18,500+ Happy Guests)</span>
            </div>
          </div>

          {/* Right Column: 2 Vertical Infinite Scroll Columns with Gradient Fades */}
          <div className="lg:col-span-8 relative h-[520px] sm:h-[560px] overflow-hidden">
            {/* Top and Bottom Smooth Fade Overlays */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {/* Column 1 - Upward Infinite Vertical Scroll */}
              <div className="overflow-hidden relative h-full">
                <div className="animate-marquee-vertical space-y-6">
                  {col1Repeated.map((item, idx) => renderCard(item, `col1-${idx}`))}
                </div>
              </div>

              {/* Column 2 - Downward Infinite Vertical Scroll */}
              <div className="hidden sm:block overflow-hidden relative h-full">
                <div className="animate-marquee-vertical-reverse space-y-6">
                  {col2Repeated.map((item, idx) => renderCard(item, `col2-${idx}`))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
