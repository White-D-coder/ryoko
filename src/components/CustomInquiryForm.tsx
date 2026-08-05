import React, { useState } from 'react';
import { Send, CheckCircle2, Plus, Minus } from 'lucide-react';

interface CityStay {
  id: string;
  name: string;
  kanji: string;
  selected: boolean;
  nights: number;
}

export const CustomInquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [tripDays, setTripDays] = useState<number>(10);
  
  const [cities, setCities] = useState<CityStay[]>([
    { id: 'tokyo', name: 'Tokyo Metropolis', kanji: '東京', selected: true, nights: 4 },
    { id: 'kyoto', name: 'Kyoto Sanctuary', kanji: '京都', selected: true, nights: 3 },
    { id: 'fuji', name: 'Mt. Fuji & Hakone', kanji: '富士山', selected: true, nights: 2 },
    { id: 'osaka', name: 'Osaka Gourmet', kanji: '大阪', selected: false, nights: 2 },
    { id: 'hokkaido', name: 'Hokkaidō Snow', kanji: '北海道', selected: false, nights: 3 },
    { id: 'hiroshima', name: 'Hiroshima & Miyajima', kanji: '広島', selected: false, nights: 1 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelMonth: 'March - May 2027 (Sakura)',
    guests: '2 Guests',
    accommodationStyle: 'Luxury Ryokan & 5-Star Hotel Mix',
    specialNotes: '',
  });

  const handleToggleCity = (id: string) => {
    setCities((prev) =>
      prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
    );
  };

  const handleUpdateNights = (id: string, delta: number) => {
    setCities((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const newNights = Math.max(1, c.nights + delta);
          return { ...c, nights: newNights };
        }
        return c;
      })
    );
  };

  const totalSelectedNights = cities
    .filter((c) => c.selected)
    .reduce((sum, c) => sum + c.nights, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-20 bg-[#FAF9F5] text-slate-900 relative overflow-hidden border-slate-200/50">
      {/* Background Kanji Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-kanji text-[30vw] font-black text-[#0F172A]">
          特注
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            BUILD YOUR CUSTOM JAPAN EXPEDITION
          </h2>

          <p className="font-jakarta text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Select your total trip duration, customize which cities you want to stay in, and set your desired nights per location. Our Kyoto travel curators will design your bespoke itinerary within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto py-12 text-center space-y-4 bg-white p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="w-16 h-16 bg-rose-50 border border-rose-200 rounded-full flex items-center justify-center text-rose-600 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900">
              ARIGATOU GOZAIMASU! • ありがとう
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-md mx-auto">
              Your custom trip proposal request has been logged. Our Kyoto travel curator will send your day-by-day customized itinerary to <strong>{formData.email || 'your email'}</strong> within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-600 transition-colors cursor-pointer"
            >
              Modify Custom Trip Plan
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* STEP 1: TRIP DURATION & CITY SELECTION (Clean Light Theme Cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Trip Duration Selector (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-1 border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-widest block">
                    STEP 1 • TRIP LENGTH
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-900">
                    Total Expedition Duration
                  </h3>
                </div>

                {/* Interactive Counter Stepper Control */}
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Adjust Duration (Days Counter):
                  </label>
                  <div className="flex items-center gap-3 bg-white border border-slate-300 p-2.5 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setTripDays((prev) => Math.max(3, prev - 1))}
                      className="w-10 h-10 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-900 font-extrabold text-base flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="flex-1 text-center font-mono font-black text-xl text-slate-900 flex items-center justify-center gap-1">
                      <input
                        type="number"
                        min={3}
                        max={60}
                        value={tripDays}
                        onChange={(e) => setTripDays(Math.max(3, parseInt(e.target.value) || 3))}
                        className="w-16 text-center font-mono font-black text-xl text-slate-900 bg-transparent focus:outline-none focus:bg-slate-50"
                      />
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">Days</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setTripDays((prev) => Math.min(60, prev + 1))}
                      className="w-10 h-10 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-900 font-extrabold text-base flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Select Chips */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Select:</span>
                    {[7, 10, 14, 21].map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setTripDays(d)}
                        className={`px-2.5 py-1 text-[11px] font-mono font-bold border transition-colors cursor-pointer ${
                          tripDays === d
                            ? 'bg-rose-600 text-white border-rose-600'
                            : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {d}D
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Trip Summary Banner */}
                <div className="p-4 bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-slate-500 uppercase">Configured Stay:</span>
                    <span className="text-rose-600 font-extrabold text-sm">{totalSelectedNights} Nights</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 overflow-hidden">
                    <div
                      className="bg-rose-500 h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (totalSelectedNights / tripDays) * 100)}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 font-jakarta italic">
                    {totalSelectedNights === tripDays
                      ? `✓ Exactly ${tripDays} days configured across selected cities.`
                      : `Selected cities total ${totalSelectedNights} nights out of your target ${tripDays} days.`}
                  </p>
                </div>
              </div>

              {/* Right Side: City Selection & Night Customization Grid (8 Cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-1 border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-widest block">
                    STEP 2 • DESTINATIONS & NIGHTS
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-900">
                    Select Cities & Customize Stay Duration
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cities.map((city) => (
                    <div
                      key={city.id}
                      className={`p-4 border transition-all ${
                        city.selected
                          ? 'bg-white border-slate-900 shadow-md'
                          : 'bg-white/60 border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => handleToggleCity(city.id)}
                          className="flex items-center gap-3 text-left cursor-pointer flex-1"
                        >
                          <div
                            className={`w-5 h-5 border flex items-center justify-center text-xs font-bold transition-colors ${
                              city.selected
                                ? 'bg-slate-900 border-slate-900 text-white'
                                : 'border-slate-300 bg-slate-50'
                            }`}
                          >
                            {city.selected && '✓'}
                          </div>
                          <div>
                            <div className="text-xs font-bold font-cinzel text-slate-900 flex items-center gap-1.5">
                              <span>{city.name}</span>
                              <span className="font-kanji font-normal text-[10px] text-slate-400">{city.kanji}</span>
                            </div>
                          </div>
                        </button>

                        {/* Night Counter Controls */}
                        {city.selected && (
                          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 text-xs font-mono font-bold">
                            <button
                              type="button"
                              onClick={() => handleUpdateNights(city.id, -1)}
                              className="p-1 hover:bg-slate-200 text-slate-700 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-slate-900">{city.nights}N</span>
                            <button
                              type="button"
                              onClick={() => handleUpdateNights(city.id, 1)}
                              className="p-1 hover:bg-slate-200 text-slate-700 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 3: TRAVEL DETAILS & INQUIRY FORM */}
            <div className="pt-2 border-slate-200 space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-widest block">
                  STEP 3 • CONTACT & PREFERENCES
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-slate-900">
                  Guest & Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Preferred Travel Window
                  </label>
                  <select
                    value={formData.travelMonth}
                    onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900 cursor-pointer"
                  >
                    <option>March - May 2027 (Spring Sakura)</option>
                    <option>October - November 2027 (Autumn Foliage)</option>
                    <option>December - February 2027 (Winter Onsen)</option>
                    <option>June - August 2027 (Summer Festivals)</option>
                    <option>Flexible Travel Dates</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900 cursor-pointer"
                  >
                    <option>1 Solo Traveler</option>
                    <option>2 Guests (Couple / Friends)</option>
                    <option>3 - 5 Guests (Family)</option>
                    <option>6+ Small Private Group</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Accommodation Style
                  </label>
                  <select
                    value={formData.accommodationStyle}
                    onChange={(e) => setFormData({ ...formData, accommodationStyle: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900 cursor-pointer"
                  >
                    <option>Luxury Ryokan & 5-Star Hotel Mix</option>
                    <option>Authentic Traditional Ryokans Only</option>
                    <option>Boutique 4-Star Western Hotels</option>
                    <option>Ultra-Luxury Private Sanctuary</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                  Special Customization Notes & Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about special occasions, dietary restrictions, preferred pace, or specific attractions you wish to include..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-white border border-slate-300 p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-colors cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>SUBMIT CUSTOM ITINERARY INQUIRY</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
