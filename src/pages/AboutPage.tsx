import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Eye, 
  Quote, 
  Clock, 
  Heart, 
  MessageCircle, 
  Send, 
  Music, 
  Camera, 
  RotateCw 
} from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Art of Onsen Etiquette: A First-Timer’s Guide',
    category: 'Culture & Wellness',
    readTime: '3 min read',
    image: '/images/pexels-drkesu-12045314.jpg',
    excerpt: 'Essential customs, towel rituals, and hot spring traditions for an authentic bathhouse experience in Hakone & Ginzan Onsen.',
  },
  {
    id: 2,
    title: 'Sakura Forecast 2027: Peak Blooming Windows Across Japan',
    category: 'Spring Guide',
    readTime: '4 min read',
    image: '/images/mount-fuji-hero.png',
    excerpt: 'Detailed regional breakdown from Tokyo and Kyoto to Hokkaido snow peaks for perfect cherry blossom timing.',
  },
  {
    id: 3,
    title: 'Hidden Izakayas of Shinjuku: Beyond the Tourist Maps',
    category: 'Gastronomy',
    readTime: '3 min read',
    image: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
    excerpt: 'Stepping into 6-seat lantern-lit alleys in Omoide Yokocho and golden gai for authentic yakitori and craft sake.',
  },
];

const REELS_POOL = [
  {
    id: 1,
    title: 'First Class Bullet Train to Kyoto 🚅',
    views: '124.5K',
    likes: '14.2K',
    comments: '842',
    audio: 'Original Audio • Shinkansen Green Class',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-japan-street-with-neon-lights-at-night-42867-large.mp4',
    poster: '/images/pexels-musaortac-38410095.jpg',
  },
  {
    id: 2,
    title: 'Golden Hour at Fushimi Inari Torii ⛩️',
    views: '210.8K',
    likes: '28.9K',
    comments: '1.8K',
    audio: 'Kyoto Evening Ambience • Ryokō Sounds',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-tourists-walking-in-a-japanese-street-42868-large.mp4',
    poster: '/images/pexels-huy-phan-316220-34991523.jpg',
  },
  {
    id: 3,
    title: 'Traditional Uji Matcha Ceremony in Gion 🍵',
    views: '95.3K',
    likes: '11.4K',
    comments: '620',
    audio: 'Zen Garden Whispers • Tea Masters',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-japan-street-with-neon-lights-at-night-42867-large.mp4',
    poster: '/images/matcha-tea-ceremony.png',
  },
  {
    id: 4,
    title: 'Cherry Blossoms Floating in Meguro River 🌸',
    views: '340.1K',
    likes: '45.6K',
    comments: '3.2K',
    audio: 'Sakura Mankai Tokyo • Spring Melodies',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-tourists-walking-in-a-japanese-street-42868-large.mp4',
    poster: '/images/pexels-songhanphoto-10618962.jpg',
  },
];

const JAPANESE_QUOTES = [
  {
    kanji: '一期一会',
    romaji: 'Ichigo Ichie',
    quote: 'Treasure every unrepeatable encounter, for it will never recur in your lifetime.',
    author: 'Sen no Rikyū',
    role: 'Kyoto Tea Master (16th Century)',
    avatar: '/images/matcha-tea-ceremony.png',
  },
  {
    kanji: '温故知新',
    romaji: 'Onko Chishin',
    quote: 'Discovering new truths and wisdom through the deep study of ancient traditions.',
    author: 'Classical Proverb',
    role: 'Japanese Cultural Heritage',
    avatar: '/images/pexels-satoshi-1325837.jpg',
  },
  {
    kanji: '花鳥風月',
    romaji: 'Kachō Fūgetsu',
    quote: 'Experience the beauty of nature—the flowers, birds, wind, and moon—and find peace within.',
    author: 'Heian Poetry',
    role: 'Aesthetic Philosophy',
    avatar: '/images/pexels-songhanphoto-10618962.jpg',
  },
  {
    kanji: '七転八起',
    romaji: 'Nana Korobi Ya Oki',
    quote: 'Fall seven times, stand up eight. Resilience and grace through every journey.',
    author: 'Traditional Maxim',
    role: 'Zen Way of Life',
    avatar: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
  },
];

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [reelOffset, setReelOffset] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const reelsSectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleRefreshReels = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setReelOffset((prev) => (prev + 2) % REELS_POOL.length);
      setIsRefreshing(false);
    }, 300);
  };

  const activeReels = [
    REELS_POOL[reelOffset],
    REELS_POOL[(reelOffset + 1) % REELS_POOL.length],
  ];

  useEffect(() => {
    const currentRef = reelsSectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        videoRefs.current.forEach((video) => {
          if (video) {
            if (entry.isIntersecting) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Autoplay error prevention
                });
              }
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [reelOffset]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-24 pb-24 text-[#0F172A]">
      {/* 1. HERO BANNER */}
      <section className="relative h-[460px] sm:h-[500px] w-full overflow-hidden mb-16 bg-slate-950">
        <img
          src="/images/pexels-songhanphoto-10618962.jpg"
          alt="Japan Kyoto Pagoda"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-slate-950/40 to-slate-950/70" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-600/90 text-white text-xs font-bold uppercase tracking-widest rounded-none shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Konnichiwa & Welcome • こんにちは</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              CRAFTING BESPOKE JOURNEYS TO JAPAN
            </h1>

            <p className="font-jakarta text-slate-200 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              We connect curious global travelers with authentic Japanese culture, ancient luxury ryokans, private Geisha tea rituals, and bullet train expeditions.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. WHO WE ARE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block">
                The Story Behind Ryokō • 創業者
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                WHO WE ARE & OUR PASSION FOR JAPAN
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Hello! I'm <strong className="text-slate-900 font-semibold">Kenji Takahashi</strong>, founder and lead travel curator at Ryokō Expeditions. Raised in Kyoto surrounded by 400-year-old wooden temples, my life has been shaped by the art of Japanese hospitality.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed font-light">
              We started Ryokō to create something rare in modern travel: intimate, non-rushed itineraries that grant private access to master tea ceremonies in Gion, Michelin Kaiseki dining, and reserved Green Class bullet train seats. Every trip is hand-crafted with heart and reverence for Japan's living heritage.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigate('/packages')}
                className="px-6 py-3 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2 group rounded-none"
              >
                <span>View Expeditions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-[260px] sm:h-[300px] overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/images/matcha-tea-ceremony.png"
                alt="Kyoto Tea Ceremony"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[10px] text-white font-mono font-bold">
                Kyoto Tea Ceremony
              </div>
            </div>

            <div className="relative h-[260px] sm:h-[300px] overflow-hidden shadow-lg border border-slate-200 mt-6">
              <img
                src="/images/pexels-agustin-villalba-589020055-17258243.jpg"
                alt="Mt. Fuji Sanctuary"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[10px] text-white font-mono font-bold">
                Fuji Sanctuary
              </div>
            </div>
          </div>
        </section>

        {/* 3. INSTAGRAM REELS SECTION */}
        <section ref={reelsSectionRef} className="py-6 space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-rose-600">
                  Live Feed • インスタグラム
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                INSTAGRAM REELS EXPERIENCE
              </h2>
            </div>

            <button
              onClick={handleRefreshReels}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-rose-500/25 transition-all duration-300 cursor-pointer active:scale-95 group"
            >
              <RotateCw className={`w-4 h-4 transition-transform duration-500 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'}`} />
              <span>Refresh Reels</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto pt-2 items-center justify-center">
            {activeReels.map((reel, index) => (
              <div
                key={reel.id}
                className={`relative w-full max-w-[320px] h-[580px] mx-auto bg-slate-950 rounded-[50px] p-2.5 shadow-2xl border border-slate-800/80 group transition-all duration-500 hover:-translate-y-2 hover:shadow-rose-500/15 ${
                  isRefreshing ? 'opacity-30 scale-95 blur-sm' : 'opacity-100 scale-100'
                }`}
              >
                <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-slate-900 flex flex-col justify-between">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-950 rounded-full z-40 flex items-center justify-end px-2.5 gap-1.5 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-indigo-950" />
                    </div>
                  </div>

                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={reel.video}
                    poster={reel.poster}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 pointer-events-none" />

                  <div className="relative z-30 pt-8 px-5 flex items-center justify-between text-white">
                    <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider drop-shadow-md">
                      Reels <Camera className="w-3.5 h-3.5 text-rose-400" />
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium bg-black/40 backdrop-blur-xl px-3 py-1 rounded-full border border-white/15 shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-rose-400" />
                      <span>{reel.views}</span>
                    </div>
                  </div>

                  <div className="relative z-30 flex items-center justify-center my-auto pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute right-4 bottom-20 z-30 flex flex-col items-center gap-4 text-white">
                    <button className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover/btn:bg-rose-600 group-hover/btn:border-rose-500 transition-all shadow-lg">
                        <Heart className="w-4 h-4 fill-rose-500 text-rose-500 group-hover/btn:fill-white group-hover/btn:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono font-bold drop-shadow">{reel.likes}</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover/btn:bg-white/20 transition-all shadow-lg">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[10px] font-mono font-bold drop-shadow">{reel.comments}</span>
                    </button>

                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-white/20 transition-all shadow-lg cursor-pointer">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <div className="relative z-30 p-5 space-y-2.5 text-white text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
                        <img src="/images/matcha-tea-ceremony.png" alt="Profile" className="w-full h-full rounded-full object-cover border border-black" />
                      </div>
                      <span className="text-xs font-bold tracking-tight drop-shadow">ryoko.japan</span>
                      <button className="text-[10px] font-bold bg-white/15 hover:bg-rose-600 border border-white/20 px-2.5 py-0.5 rounded-full transition-colors backdrop-blur-sm cursor-pointer">
                        Follow
                      </button>
                    </div>

                    <p className="text-xs font-medium line-clamp-2 leading-relaxed drop-shadow-md pr-12 text-slate-100">
                      {reel.title}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full w-fit max-w-[80%] border border-white/10">
                      <Music className="w-3 h-3 text-rose-400 animate-spin" />
                      <span className="truncate">{reel.audio}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TRAVEL JOURNAL */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-1">
                Travel Journal & Insights • 記事
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                CULTURAL TRAVEL JOURNAL
              </h2>
            </div>
            <button
              onClick={() => navigate('/guide')}
              className="text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-slate-900 cursor-pointer flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate('/guide')}
                className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-white">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-cinzel text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 text-xs font-bold text-rose-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. JAPANESE PHILOSOPHY */}
        <section className="bg-white p-8 sm:p-12 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
              <span className="inline-block px-3 py-1 bg-rose-50 text-rose-600 border border-rose-200 text-xs font-mono font-bold tracking-wider rounded-full">
                / Japanese Philosophy • 名言
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                WISDOM OF THE LAND OF THE RISING SUN
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                Timeless proverbs and reflections that guide our mindful approach to travel, presence, and hospitality across every Japanese expedition.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="space-y-6">
                <div className="bg-[#FAF9F5] p-6 border border-slate-200/80 space-y-4 hover:border-slate-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <img
                      src={JAPANESE_QUOTES[0].avatar}
                      alt={JAPANESE_QUOTES[0].author}
                      className="w-10 h-10 rounded-full object-cover border border-slate-300"
                    />
                    <div>
                      <div className="font-cinzel text-sm font-bold text-slate-900">
                        {JAPANESE_QUOTES[0].kanji} ({JAPANESE_QUOTES[0].romaji})
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">{JAPANESE_QUOTES[0].role}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 font-jakarta leading-relaxed italic">
                    "{JAPANESE_QUOTES[0].quote}"
                  </p>
                </div>

                <div className="bg-[#FAF9F5] p-6 border border-slate-200/80 space-y-4 hover:border-slate-400 transition-colors">
                  <Quote className="w-7 h-7 text-rose-500/40" />

                  <div className="space-y-1">
                    <span className="font-kanji font-black text-2xl text-slate-900 block">
                      {JAPANESE_QUOTES[1].kanji}
                    </span>
                    <span className="text-xs font-mono font-bold text-rose-600 block">
                      {JAPANESE_QUOTES[1].romaji}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 font-jakarta leading-relaxed italic">
                    "{JAPANESE_QUOTES[1].quote}"
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2.5">
                    <img
                      src={JAPANESE_QUOTES[1].avatar}
                      alt={JAPANESE_QUOTES[1].author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-[11px] text-slate-600 font-semibold font-mono">
                      {JAPANESE_QUOTES[1].author}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#FAF9F5] p-6 border border-slate-200/80 space-y-4 hover:border-slate-400 transition-colors">
                  <p className="text-xs sm:text-sm text-slate-800 font-jakarta leading-relaxed italic font-medium">
                    "{JAPANESE_QUOTES[2].quote}"
                  </p>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center gap-3">
                    <img
                      src={JAPANESE_QUOTES[2].avatar}
                      alt={JAPANESE_QUOTES[2].author}
                      className="w-9 h-9 rounded-full object-cover border border-slate-300"
                    />
                    <div>
                      <div className="font-cinzel text-xs font-bold text-slate-900">
                        {JAPANESE_QUOTES[2].kanji} • {JAPANESE_QUOTES[2].author}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">{JAPANESE_QUOTES[2].role}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAF9F5] p-6 border border-slate-200/80 space-y-4 hover:border-slate-400 transition-colors">
                  <Quote className="w-7 h-7 text-slate-400" />

                  <p className="text-xs text-slate-700 font-jakarta leading-relaxed italic">
                    "{JAPANESE_QUOTES[3].quote}"
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-900 pt-2 border-t border-slate-200/60">
                    <span>{JAPANESE_QUOTES[3].kanji} ({JAPANESE_QUOTES[3].romaji})</span>
                    <span className="text-[10px] text-slate-500 font-normal">{JAPANESE_QUOTES[3].author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};