import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Sparkles, ShieldCheck, ArrowLeft } from 'lucide-react';
import { SakuraPlannerPage } from './SakuraPlannerPage';

export interface JapanEvent {
  id: string;
  title: string;
  japaneseTitle: string;
  season: string;
  dates: string;
  location: string;
  heroImage: string;
  tagline: string;
  description: string;
  highlights: string[];
  tips: string[];
}

export const JAPAN_EVENTS: Record<string, JapanEvent> = {
  'sakura-2027': {
    id: 'sakura-2027',
    title: 'Sakura Cherry Blossom 2027',
    japaneseTitle: '桜満開まつり',
    season: 'Spring (Late March – Mid April)',
    dates: 'March 20, 2027 – April 18, 2027',
    location: 'Tokyo, Kyoto, Osaka & Mount Fuji',
    heroImage: '/images/pexels-songhanphoto-10618962.jpg',
    tagline: 'Experience Peak Somei Yoshino Cherry Blossom Canopies Across Ancient Sanctuaries',
    description: `The Sakura Cherry Blossom Festival is Japan’s most celebrated natural phenomenon. For three magical weeks, millions of delicate pale pink cherry blossoms envelope imperial gardens, historic temple moats, and riverbanks in a ethereal canopy of spring beauty.`,
    highlights: [
      'Night Hanami light-ups at Meguro River & Chidorigafuchi Moat in Tokyo',
      'Philosopher’s Path Sakura walk in Kyoto alongside canal side tea houses',
      'Mount Fuji & Chureito Pagoda framed by peak pink cherry blossoms',
      'Private Hanami picnic hampers prepared by Michelin-starred culinary chefs',
    ],
    tips: [
      'Book hotel accommodations 8 to 12 months in advance as peak Sakura dates sell out rapidly.',
      'Utilize our live Japan Meteorological Forecast tracker for real-time Mankai bloom dates.',
      'Visit popular Hanami parks before 7:30 AM for peaceful photography without crowds.',
    ],
  },
  'momiji-autumn': {
    id: 'momiji-autumn',
    title: 'Momiji Autumn Crimson Leaves Festival',
    japaneseTitle: '紅葉狩りまつり',
    season: 'Autumn (Late October – Late November)',
    dates: 'October 25, 2027 – November 30, 2027',
    location: 'Kyoto, Nikko, Hakone & Nara',
    heroImage: '/images/pexels-agustin-villalba-589020055-17258243.jpg',
    tagline: 'Fiery Maple Canopies, Crimson Zen Temple Reflections, and Crisp Mountain Air',
    description: `As autumn sweeps across the Japanese archipelago, Japan’s Japanese Maple (Momiji) and Ginkgo trees transform into brilliant hues of deep scarlet, fiery orange, and radiant gold. Temple gardens in Kyoto illuminate illuminated leaves against ancient dark wood architectures.`,
    highlights: [
      'Night-time autumn foliage illuminations at Kiyomizu-dera & Eikando Temples',
      'Scenic Sagano Romantic Train ride through autumn-colored Hozugawa Ravine',
      'Golden Ginkgo avenue walks at Meiji Jingu Gaien in Tokyo',
      'Onsen hot spring baths surrounded by falling crimson maple leaves',
    ],
    tips: [
      'Evening illuminated temple openings in Kyoto require advance timed entry passes.',
      'Pack warm layered clothing as evening temperatures drop significantly in mountain valleys.',
    ],
  },
  'gion-matsuri': {
    id: 'gion-matsuri',
    title: 'Kyoto Gion Matsuri Festival',
    japaneseTitle: '祇園祭',
    season: 'Summer (Entire Month of July)',
    dates: 'July 1, 2027 – July 31, 2027',
    location: 'Gion & Shijo District, Kyoto',
    heroImage: '/images/pexels-huy-phan-316220-34991523.jpg',
    tagline: 'A 1,100-Year-Old Festival of Grand Yamaboko Floats and Traditional Yukata Processions',
    description: `Dating back to 869 AD, Gion Matsuri is one of Japan’s most famous imperial festivals. Towering wooden Yamaboko floats—weighing up to 12 tons—are pulled through Kyoto streets without a single nail, accompanied by traditional Gion bayashi festival music and lantern-lit night markets.`,
    highlights: [
      'Yamaboko Junko grand float procession along Shijo-dori avenue',
      'Yoiyama evening street festivals with paper lanterns and traditional street food stalls',
      'Display of heirloom folding screens & treasures by historic Kyoto merchant families',
    ],
    tips: [
      'Reserve spectator grandstand seating tickets along Shijo-dori avenue early.',
      'Wear lightweight cotton Yukata robes to participate in Yoiyama evening street festivities.',
    ],
  },
  'sapporo-snow': {
    id: 'sapporo-snow',
    title: 'Sapporo International Snow & Ice Festival',
    japaneseTitle: 'さっぽろ雪まつり',
    season: 'Winter (Early February)',
    dates: 'February 4, 2027 – February 11, 2027',
    location: 'Odori Park & Susukino, Sapporo, Hokkaidō',
    heroImage: '/images/pexels-kuma-jio-2150949207-31416355.jpg',
    tagline: 'Giant Illuminated Ice Sculptures, International Snow Competitions & Hot Seafood',
    description: `Every winter, Sapporo turns into a snow wonderland. Over 200 massive snow and ice sculptures—representing world landmarks, anime icons, and mythic dragons—fill Odori Park, lit with laser projection light shows at night.`,
    highlights: [
      'Multi-story snow sculptures created by international master ice carvers',
      'Susukino Ice World featuring crystal-clear illuminated ice bars',
      'Sapporo Miso Butter Ramen tasting & fresh Hokkaido King Crab broth stalls',
    ],
    tips: [
      'Wear insulated waterproof boots with non-slip ice grips (spikes) for walking in Odori Park.',
      'Soak in nearby Jozankei or Noboribetsu snow-surrounded hot spring baths after viewing sculptures.',
    ],
  },
  'sumida-fireworks': {
    id: 'sumida-fireworks',
    title: 'Sumidagawa Fireworks & Yukata Festival',
    japaneseTitle: '隅田川花火大会',
    season: 'Summer (Late July)',
    dates: 'July 31, 2027',
    location: 'Asakusa & Sumida River, Tokyo',
    heroImage: '/images/pexels-sarmat-batagov-776392502-35139475.jpg',
    tagline: 'Over 20,000 Pyrotechnic Shells Bursting Above Tokyo Skytree & Sumida River',
    description: `Originating in 1733, the Sumidagawa Fireworks Festival is Tokyo’s oldest and grandest summer fireworks spectacle. Over 20,000 artisan fireworks burst overhead while crowds dressed in colorful summer Yukata line the Sumida riverbanks.`,
    highlights: [
      'Exclusive private Yakatabune roofed boat cruise on Sumida River during the show',
      'Spectacular views framing Tokyo Skytree illuminated against bursting fireworks',
      'Asakusa Nakamise evening street food celebrations',
    ],
    tips: [
      'Yakatabune boat tickets must be reserved 6 months in advance for guaranteed river views.',
    ],
  },
};

export const EventsPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const [activeEventId, setActiveEventId] = useState<string>(eventId || 'sakura-2027');

  const currentEvent = JAPAN_EVENTS[activeEventId] || JAPAN_EVENTS['sakura-2027'];

  if (activeEventId === 'sakura-2027' && (!eventId || eventId === 'sakura-2027')) {
    return <SakuraPlannerPage onSelectPackage={(pkg) => navigate(`/package/${pkg.id}`)} />;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F172A] font-jakarta pt-24 pb-28 relative overflow-hidden">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Events Selector Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {Object.values(JAPAN_EVENTS).map((evt) => (
            <button
              key={evt.id}
              onClick={() => {
                setActiveEventId(evt.id);
                navigate(`/events/${evt.id}`);
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeEventId === evt.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {evt.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Event Page Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden shadow-2xl group border border-slate-200">
          <img
            src={currentEvent.heroImage}
            alt={currentEvent.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentEvent.season} • {currentEvent.dates}</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-white">
              {currentEvent.title} <span className="font-kanji font-normal text-2xl sm:text-4xl text-rose-300 ml-2">{currentEvent.japaneseTitle}</span>
            </h1>

            <p className="text-xs sm:text-sm font-light text-slate-200 italic max-w-xl">
              "{currentEvent.tagline}"
            </p>
          </div>
        </div>

        {/* Overview & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 uppercase tracking-widest border-b border-slate-100 pb-3">
              <Sparkles className="w-4 h-4" />
              <span>EVENT OVERVIEW & CULTURAL SIGNIFICANCE</span>
            </div>

            <h2 className="font-cinzel text-2xl font-bold text-slate-900">
              About {currentEvent.title}
            </h2>

            <p className="text-xs text-slate-600 font-light leading-relaxed">
              {currentEvent.description}
            </p>

            <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-700 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Primary Location: <strong>{currentEvent.location}</strong></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span>TRAVEL CONCIERGE ADVICE</span>
            </div>

            <ul className="space-y-3 pt-1 text-xs text-slate-600 font-light">
              {currentEvent.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest block mb-1">
              CURATED FESTIVAL HIGHLIGHTS
            </span>
            <h2 className="font-cinzel text-2xl font-bold text-slate-900">
              SIGNATURE EXPERIENCES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentEvent.highlights.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#FAF7F2] border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-mono font-bold text-rose-600 block uppercase">
                  HIGHLIGHT 0{idx + 1}
                </span>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
