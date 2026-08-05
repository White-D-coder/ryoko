import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DESTINATION_GUIDES } from '../data/destinationsData';
import { TOUR_PACKAGES, type TourPackage } from '../data/japanData';
import { ArrowLeft, Train, CheckCircle2, ArrowRight, Snowflake, Mountain, Feather } from 'lucide-react';
import { SakuraPlanner } from '../components/SakuraPlanner';

interface DestinationDetailPageProps {
  onOpenBooking?: (pkg: TourPackage) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ onOpenBooking }) => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const navigate = useNavigate();

  const guide = DESTINATION_GUIDES[destinationId || 'tokyo'] || DESTINATION_GUIDES['tokyo'];

  // Match tour packages for this destination
  const matchedPackages = TOUR_PACKAGES.filter(
    (pkg) =>
      guide.packageIds.includes(pkg.id) ||
      pkg.citiesStay.toLowerCase().includes(guide.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F172A] font-jakarta pt-24 pb-28 relative overflow-hidden">
      
      {/* Global CSS for Authentic Japanese Editorial Styling */}
      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .japanese-calligraphy {
          font-family: var(--font-kanji, 'Noto Serif JP', 'Shippori Mincho', serif);
        }
        .editorial-title {
          font-family: var(--font-serif, 'Cinzel', 'Playfair Display', serif);
          font-size: clamp(2.8rem, 6.5vw, 6rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #0F172A;
          line-height: 1.02;
        }
        .washi-paper-bg {
          background-color: #FAF7F2;
          background-image: radial-gradient(#e5dfd5 0.75px, transparent 0.75px);
          background-size: 18px 18px;
        }
      `}</style>

      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative z-30">
        <button
          onClick={() => navigate('/destinations')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Destinations Directory</span>
        </button>
      </div>

      {/* =========================================================================
          1. TOKYO PAGE DESIGN (HEADER WITH DUAL LEFT/RIGHT WATERMARKS)
         ========================================================================= */}
      {guide.id === 'tokyo' && (
        <div className="space-y-20">
          <section className="relative py-10 washi-paper-bg overflow-hidden">
            {/* LEFT SIDE Sakura Lantern Photograph Watermark */}
            <div className="absolute left-0 top-0 w-80 h-96 opacity-15 pointer-events-none select-none overflow-hidden hidden md:block">
              <img
                src="/images/pexels-songhanphoto-10618962.jpg"
                alt="Sakura Blossom Watermark"
                className="w-full h-full object-cover filter mix-blend-multiply opacity-80"
              />
            </div>

            {/* RIGHT SIDE Tokyo Calligraphy Watermark */}
            <div className="absolute right-4 top-4 opacity-10 pointer-events-none select-none hidden lg:block">
              <span className="japanese-calligraphy text-9xl font-black text-rose-950 writing-vertical">
                桜・江戸・東京
              </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200/80 pb-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest block">
                    TOKYO METROPOLIS • 東京都
                  </span>
                  <h1 className="editorial-title text-slate-900">
                    {guide.name} <span className="japanese-calligraphy font-normal text-3xl sm:text-5xl text-rose-600 ml-2">{guide.kanji}</span>
                  </h1>
                </div>

                <div className="max-w-md space-y-2 text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-rose-500 pl-4 md:pl-0 md:pr-4">
                  <span className="text-xs font-mono font-bold text-rose-600 block uppercase tracking-widest">
                    EDO TRADITION x CYBER FUTURE
                  </span>
                  <p className="text-xs text-slate-600 font-light leading-relaxed italic">
                    "{guide.tagline}"
                  </p>
                </div>
              </div>

              {/* Asymmetric Staggered Photo Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                <div className="space-y-4 group">
                  <div className="relative h-[380px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={guide.landmarks[0]?.image || guide.heroImage}
                      alt={guide.landmarks[0]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                      {guide.verticalPillBadges[0]}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-widest block">
                      {guide.landmarks[0]?.tag}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-slate-900">{guide.landmarks[0]?.title}</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">{guide.landmarks[0]?.description}</p>
                  </div>
                </div>

                <div className="space-y-4 group md:translate-y-12">
                  <div className="relative h-[420px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={guide.landmarks[1]?.image || guide.heroImage}
                      alt={guide.landmarks[1]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                      {guide.verticalPillBadges[1]}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-widest block">
                      {guide.landmarks[1]?.tag}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-slate-900">{guide.landmarks[1]?.title}</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">{guide.landmarks[1]?.description}</p>
                  </div>
                </div>

                <div className="space-y-4 group md:-translate-y-4">
                  <div className="relative h-[360px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={guide.landmarks[2]?.image || guide.heroImage}
                      alt={guide.landmarks[2]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                      {guide.verticalPillBadges[2]}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-widest block">
                      {guide.landmarks[2]?.tag}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-slate-900">{guide.landmarks[2]?.title}</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">{guide.landmarks[2]?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DORAEMON THEMED TRANSIT & GASTRONOMY SECTION (DIRECT SECTION BACKGROUND WATERMARK, NO EXTRA OUTER DIV BOX) */}
          <section className="relative py-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Direct Section Background Doraemon Pattern Watermark (EXACTLY LIKE HERO SECTION BG) */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none mix-blend-multiply">
              <img
                src="/images/pexels-songhanphoto-10618962.jpg"
                alt="Doraemon Pattern Watermark"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>

            {/* Doraemon Sky-Blue Anywhere Door Transit Container */}
            <div className="bg-sky-50 border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-6 relative overflow-hidden">
              {/* Doraemon Anywhere Door & Bell Calligraphy Watermark */}
              <div className="absolute right-6 top-4 opacity-15 pointer-events-none select-none hidden sm:block">
                <span className="japanese-calligraphy text-8xl font-black text-sky-800 writing-vertical">
                  ドラえもん・どこでもドア
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-200 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Doraemon Yellow Bell Badge Motif */}
                  <div className="w-9 h-9 rounded-full bg-yellow-400 border-2 border-slate-900 flex items-center justify-center text-slate-900 font-bold text-xs shadow-xs">
                    🔔
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-800 block">
                      ANYWHERE DOOR (どこでもドア) TRANSIT
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-sky-950">
                      TRANSIT EXPRESS TO TOKYO METROPOLIS
                    </h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                  <span>Take-Copter Speed • 320 km/h</span>
                </div>
              </div>

              <div className="p-5 bg-white border border-sky-200 space-y-3 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-sky-900 flex-wrap gap-4">
                  <span>TOKYO (SHINAGAWA)</span>
                  <span className="text-rose-600 font-black">── 320 KM/H NOZOMI SHINKANSEN ──</span>
                  <span>TOKYO METROPOLIS STATION</span>
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Connected to all major Japanese cities via Tokyo & Shinagawa Shinkansen stations. Nozomi Shinkansen to Kyoto takes 2h 15m. Door-to-door luggage forwarding included.
                </p>
              </div>
            </div>

            {/* Doraemon Dorayaki & Tokyo Gastronomy Highlights */}
            <div className="space-y-8 relative z-10">
              <div className="border-b border-sky-200 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700 block mb-1">
                    Doraemon's Favorite Delicacies • 美味しい東京料理
                  </span>
                  <h2 className="font-cinzel text-3xl font-bold text-slate-900 tracking-tight">
                    GASTRONOMY HIGHLIGHTS IN TOKYO METROPOLIS
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white border border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
                  <div className="relative h-48 overflow-hidden bg-sky-50">
                    <img
                      src="/images/japanese-dorayaki.png"
                      alt="Tokyo Dorayaki"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-yellow-400 border border-slate-900 flex items-center justify-center text-slate-900 font-bold text-xs shadow-md">
                      01
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1">
                    <h3 className="font-cinzel text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Tokyo Dorayaki (どら焼き)</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Doraemon's beloved fluffy pancake sandwiches filled with sweet Azuki red bean paste from Asakusa bakeries.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
                  <div className="relative h-48 overflow-hidden bg-sky-50">
                    <img
                      src="/images/edomae-sushi.png"
                      alt="Edomae Sushi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 font-bold text-xs shadow-md">
                      02
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1">
                    <h3 className="font-cinzel text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Edomae Sushi in Ginza</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Master chefs slicing wild bluefin tuna and seasonal fish served on warm vinegared rice.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
                  <div className="relative h-48 overflow-hidden bg-sky-50">
                    <img
                      src="/images/omoide-yakitori.png"
                      alt="Omoide Yokocho Yakitori"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 font-bold text-xs shadow-md">
                      03
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1">
                    <h3 className="font-cinzel text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Omoide Yokocho Yakitori</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Smoky charcoal-grilled chicken skewers paired with local craft sake in Shinjuku alleys.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
                  <div className="relative h-48 overflow-hidden bg-sky-50">
                    <img
                      src="/images/japanese-ramen.png"
                      alt="Rich Tonkotsu & Shoyu Ramen"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 font-bold text-xs shadow-md">
                      04
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1">
                    <h3 className="font-cinzel text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Rich Tonkotsu & Shoyu Ramen</h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Slurping rich bone broth bowls in Golden Gai broth dispensaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          2. MT. FUJI PAGE DESIGN (BAMBOO & OLD SAMURAI BUSHIDO HERITAGE THEME)
         ========================================================================= */}
      {guide.id === 'fuji' && (
        <div className="space-y-24">
          <section className="relative py-12 washi-paper-bg overflow-hidden border-b border-amber-950/10">
            {/* Background Samurai Katana & Bamboo Watermark */}
            <div className="absolute right-6 top-8 opacity-10 pointer-events-none select-none hidden lg:block">
              <span className="japanese-calligraphy text-9xl font-black text-amber-950 writing-vertical">
                武士道・侍・竹林
              </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold uppercase tracking-widest">
                  <Feather className="w-3.5 h-3.5 text-amber-700" />
                  <span>OLD SAMURAI BUSHIDO & BAMBOO GROVES • 富士山</span>
                </div>
                <h1 className="editorial-title text-slate-900">
                  {guide.name} <span className="japanese-calligraphy font-normal text-3xl sm:text-5xl text-amber-800 ml-2">{guide.kanji}</span>
                </h1>
                <p className="japanese-calligraphy text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
                  「富士の静寂と武士の精神、竹林と温泉の温もりを巡る。」
                </p>
              </div>

              {/* Full Widescreen Ancient Samurai Pagoda & Fuji Banner */}
              <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden shadow-2xl group border border-amber-900/10">
                <img
                  src={guide.heroImage}
                  alt="Mt Fuji & Ancient Samurai Pagoda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2 drop-shadow-md">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-900/80 backdrop-blur-md text-amber-200 text-xs font-mono font-bold uppercase tracking-widest border border-amber-500/30">
                    <Mountain className="w-3.5 h-3.5 text-amber-300" />
                    <span>ANCIENT SENGOKU SAMURAI PASS & HAKONE RYOKANS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white">
                    Sacred Mount Fuji & Old Samurai Castle Trails
                  </h2>
                </div>
              </div>

              {/* 3 Samurai Bushido & Bamboo Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 border border-amber-900/10 shadow-md space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-800 block uppercase tracking-widest">
                    01 ── BUSHIDO HERITAGE
                  </span>
                  <h4 className="font-cinzel text-lg font-bold text-slate-900">Feudal Samurai Fortresses</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Explore ancient Edo samurai passways, sword-forging shrines, and Odawara castle moats.
                  </p>
                </div>

                <div className="bg-white p-8 border border-amber-900/10 shadow-md space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-800 block uppercase tracking-widest">
                    02 ── BAMBOO WATERFALLS
                  </span>
                  <h4 className="font-cinzel text-lg font-bold text-slate-900">Hakone Bamboo Groves</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Tranquil bamboo pathways leading to thermal spring waters and Lake Ashi torii gates.
                  </p>
                </div>

                <div className="bg-white p-8 border border-amber-900/10 shadow-md space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-800 block uppercase tracking-widest">
                    03 ── SACRED 3,776M PEAK
                  </span>
                  <h4 className="font-cinzel text-lg font-bold text-slate-900">Chureito Pagoda Panoramas</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Five-story pagoda overlooking Mount Fuji surrounded by ancient pine and cherry trees.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          3. KYOTO PAGE DESIGN (ZEN BAMBOO SANCTUARY LAYOUT WITH DUAL WATERMARKS)
         ========================================================================= */}
      {guide.id === 'kyoto' && (
        <div className="space-y-20">
          <section className="relative py-10 washi-paper-bg overflow-hidden">
            {/* LEFT SIDE Bamboo Grove Photograph Watermark */}
            <div className="absolute left-0 top-0 w-80 h-96 opacity-15 pointer-events-none select-none overflow-hidden hidden md:block">
              <img
                src="/images/pexels-agustin-villalba-589020055-17258243.jpg"
                alt="Bamboo Grove Watermark"
                className="w-full h-full object-cover filter mix-blend-multiply opacity-80"
              />
            </div>

            {/* RIGHT SIDE Kyoto Calligraphy Watermark */}
            <div className="absolute right-4 top-4 opacity-10 pointer-events-none select-none hidden lg:block">
              <span className="japanese-calligraphy text-9xl font-black text-rose-950 writing-vertical">
                竹林・古都・京都
              </span>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h1 className="editorial-title text-slate-900">
                  {guide.name} <span className="japanese-calligraphy font-normal text-3xl sm:text-5xl text-rose-600 ml-2">{guide.kanji}</span>
                </h1>

                <p className="japanese-calligraphy text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
                  「竹林と四季を味わう自然風な旅づくり。都市に住みながら、四季を感じる。」
                </p>
              </div>

              {/* Asymmetric Overlapping Photo Stack */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px] pt-4">
                <div className="lg:col-span-8 h-[460px] relative overflow-hidden shadow-2xl group">
                  <img
                    src={guide.landmarks[1]?.image || guide.heroImage}
                    alt="Arashiyama Bamboo Grove"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 text-slate-900 px-3 py-4 text-xs japanese-calligraphy font-bold shadow-md tracking-widest writing-vertical">
                    嵐山竹林の小径・京都
                  </div>
                </div>

                <div className="lg:col-span-4 relative flex flex-col justify-center space-y-4 bg-white p-8 border border-amber-900/10 shadow-xl">
                  <div className="h-56 overflow-hidden relative group">
                    <img
                      src={guide.landmarks[0]?.image || guide.heroImage}
                      alt="Fushimi Inari"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-cinzel text-base font-bold text-slate-900">Fushimi Inari Taisha</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          4. HOKKAIDO PAGE DESIGN (POWDER SNOW ALPINE WILDERNESS)
         ========================================================================= */}
      {guide.id === 'hokkaido' && (
        <div className="space-y-24">
          <section className="relative py-12 washi-paper-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">
                  <Snowflake className="w-4 h-4 text-sky-600" />
                  <span>HOKKAIDŌ ALPINE SNOW WILDERNESS • 北海道</span>
                </div>
                <h1 className="editorial-title text-slate-900">
                  {guide.name} <span className="japanese-calligraphy font-normal text-3xl sm:text-5xl text-sky-600 ml-2">{guide.kanji}</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-8 h-[440px] relative overflow-hidden shadow-2xl group">
                  <img
                    src={guide.landmarks[0]?.image || guide.heroImage}
                    alt="Niseko Powder Snow"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                  <div className="bg-white p-6 border border-slate-200 shadow-md space-y-2">
                    <h4 className="font-cinzel text-lg font-bold text-slate-900">Noboribetsu Jigokudani</h4>
                  </div>

                  <div className="bg-white p-6 border border-slate-200 shadow-md space-y-2">
                    <h4 className="font-cinzel text-lg font-bold text-slate-900">Otaru Port Canal</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          COMMON LOWER SECTION (TRANSIT TIMELINE, GASTRONOMY, EXPEDITIONS)
         ========================================================================= */}

      {guide.id !== 'tokyo' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-20">
          <section className="bg-white p-8 sm:p-12 border-y border-slate-200/80 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 uppercase tracking-widest">
                  <Train className="w-4 h-4 text-rose-600" />
                  <span>JAPAN RAIL BULLET SHINKANSEN ROUTE</span>
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900">
                  TRANSIT EXPRESS TO {guide.name.toUpperCase()}
                </h2>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Green Class First-Class Passes Supported</span>
              </div>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-900 flex-wrap gap-4">
                <span>TOKYO (SHINAGAWA)</span>
                <span className="text-rose-600">── 320 KM/H NOZOMI SHINKANSEN ──</span>
                <span>{guide.name.toUpperCase()} STATION</span>
              </div>

              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {guide.transitInfo} Door-to-door luggage forwarding service is automatically included with all expedition packages.
              </p>
            </div>
          </section>

          <section className="space-y-10">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600 block mb-1">
                  Culinary Exploration • 美味しい料理
                </span>
                <h2 className="font-cinzel text-3xl font-bold text-slate-900 tracking-tight">
                  GASTRONOMY HIGHLIGHTS IN {guide.name.toUpperCase()}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guide.culinary.map((food, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  {food.image && (
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={food.image}
                        alt={food.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                        GASTRONOMY 0{idx + 1}
                      </div>
                    </div>
                  )}
                  <div className="p-5 space-y-2 flex-1">
                    {!food.image && (
                      <span className="text-[10px] font-mono font-bold text-rose-600 block uppercase tracking-widest">
                        GASTRONOMY 0{idx + 1}
                      </span>
                    )}
                    <h3 className="font-cinzel text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {food.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* MATCHED TOUR PACKAGES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600 block mb-1">
                Hand-Crafted Expeditions • ツアー
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                FEATURED TOURS VISITING {guide.name.toUpperCase()}
              </h2>
            </div>

            <Link
              to="/packages"
              className="text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Expeditions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchedPackages.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => navigate(`/package/${pkg.id}`)}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900 px-2.5 py-1 text-[10px] font-mono font-bold text-white">
                      {pkg.durationDays} Days / {pkg.durationNights} Nights
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-widest">
                      {pkg.citiesStay}
                    </div>

                    <h3 className="font-cinzel text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light line-clamp-2">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-3 pt-4">
                  <div className="font-cinzel text-xl font-bold text-slate-900">
                    ${pkg.priceUSD.toLocaleString()}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenBooking) onOpenBooking(pkg);
                      else navigate(`/package/${pkg.id}`);
                    }}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-rose-600 text-white font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Details ➔
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* SAKURA BLOOM PLANNER 2027 COMPONENT */}
      <div className="mt-20">
        <SakuraPlanner
          onSelectPackage={(pkg) => {
            if (onOpenBooking) onOpenBooking(pkg);
            else navigate(`/package/${pkg.id}`);
          }}
        />
      </div>
    </div>
  );
};
