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
  },
  {
    id: 't3',
    name: 'Elena & Nikolai Rostova',
    location: 'Sydney, Australia',
    tourName: 'Sakura 2027 Special',
    avatar: '/images/pexels-[#121212]-316220-34991523.jpg',
    rating: 5,
    review:
      'Seeing peak cherry blossoms along Meguro River and staying at a 100-year-old wooden ryokan in Ginzan Onsen was absolute magic.',
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
  },
];

export const TestimonialsMarquee: React.FC = () => {
  const col1Testimonials = [...TESTIMONIALS, ...TESTIMONIALS];
  const col2Testimonials = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section className="py-24 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-2">
            Real Traveler Reviews
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            WHAT OUR GUESTS SAY
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-jakarta mt-2">
            Authentic stories from travelers who explored Japan's sakura, luxury ryokans, and bullet train routes.
          </p>
        </div>

        {/* Dual Column Vertical Marquee Wrapper */}
        <div className="relative h-[560px] overflow-hidden">
          {/* Top and Bottom Gradient Overlay Fades for Smooth Entrance/Exit */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5]/70 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/70 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Column 1 - Forward Vertical Scroll */}
            <div className="overflow-hidden relative h-full">
              <div className="animate-marquee-vertical space-y-6">
                {col1Testimonials.map((item, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="glass-organic bg-white/90 p-7 shadow-lg border border-white/60 space-y-4 rounded-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-rose-300" />
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm font-jakarta leading-relaxed italic">
                      "{item.review}"
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <h4 className="font-outfit font-bold text-[#0F172A]">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-jakarta block">
                          {item.location}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-rose-500 font-extrabold uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.tourName}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Reverse Vertical Scroll */}
            <div className="hidden md:block overflow-hidden relative h-full">
              <div className="animate-marquee-vertical-reverse space-y-6">
                {col2Testimonials.map((item, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="glass-organic bg-white/90 p-7 shadow-lg border border-white/60 space-y-4 rounded-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-rose-300" />
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm font-jakarta leading-relaxed italic">
                      "{item.review}"
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <h4 className="font-outfit font-bold text-[#0F172A]">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-jakarta block">
                          {item.location}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-rose-500 font-extrabold uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.tourName}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
