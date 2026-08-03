import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelers: '2 Travelers',
    season: 'Spring (Sakura 2027)',
    interests: 'Luxury Ryokan, Golden Route, Culture',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is included in Ryokō Japan Tour Packages?',
      a: 'All tour packages include boutique hotel or ryokan accommodation, daily breakfast & select kaiseki dinners, JR Shinkansen bullet train passes, private airport transfers, and licensed English-speaking local guides.',
    },
    {
      q: 'When is the best time to book for the 2027 Sakura Season?',
      a: 'We strongly recommend reserving 6 to 9 months in advance. Kyoto ryokans and luxury Tokyo hotels fill up very fast during peak bloom weeks (late March to early April).',
    },
    {
      q: 'Can itineraries be customized for private groups or families?',
      a: 'Yes! Over 60% of our clients request bespoke itineraries. We can tailor pace, hotel selections, dietary requirements, and specific activities like private geisha dinners or anime studio visits.',
    },
    {
      q: 'Are JR Passes and luggage forwarding included?',
      a: 'Yes! We arrange hands-free luggage transfer between Tokyo and Kyoto hotels so you can travel on the bullet train unencumbered.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-28 pb-20">
      {/* Header */}
      <section className="relative py-14 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0F172A] text-white overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-widest mb-4 border border-rose-500/30">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Omotenashi Concierge Support</span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white">
            PLAN YOUR JAPAN EXPEDITION
          </h1>
          <p className="font-jakarta text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
            Have questions or want a custom private itinerary? Get in touch with our Tokyo & Kyoto travel concierge team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Contact Info & Office Locations (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-2">
                Our Japan Offices
              </span>
              <h2 className="font-cinzel text-3xl font-bold text-[#0F172A]">
                GET IN TOUCH WITH OUR TEAM
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-jakarta mt-3 leading-relaxed">
                Our bilingual travel specialists in Ginza, Tokyo and Gion, Kyoto are available 24/7 during your journey.
              </p>
            </div>

            {/* Office Cards */}
            <div className="glass-organic bg-white/80 p-6 rounded-[2rem] shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-rose-500 font-bold text-sm">
                <MapPin className="w-5 h-5" />
                <span>Tokyo Headquarters</span>
              </div>
              <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                Ginza 6-Chome, Chuo-ku, Tokyo 104-0061, Japan
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-100">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>+81 3 5555 0192</span>
              </div>
            </div>

            <div className="glass-organic bg-white/80 p-6 rounded-[2rem] shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-rose-500 font-bold text-sm">
                <MapPin className="w-5 h-5" />
                <span>Kyoto Heritage Office</span>
              </div>
              <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                Hanamikoji-dori, Gion, Higashiyama-ku, Kyoto 605-0074, Japan
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-100">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>concierge@ryoko-japan.com</span>
              </div>
            </div>
          </div>

          {/* Interactive Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 glass-organic bg-white/90 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-[#0F172A]">
                  INQUIRY RECEIVED (ARIGATOU!)
                </h3>
                <p className="text-xs text-slate-600 font-jakarta max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A Ryokō travel concierge will review your travel preferences and respond within 12 hours with a custom itinerary quote.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-rose-600 transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-[#0F172A]">
                    REQUEST CUSTOM TRIP CONSULTATION
                  </h3>
                  <p className="text-slate-500 text-xs font-jakarta mt-1">
                    Fill out your preferences for a custom tailored Japanese vacation proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Group Size</label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
                    >
                      <option>Solo Traveler</option>
                      <option>2 Travelers (Couple)</option>
                      <option>Family (3-5 Guests)</option>
                      <option>Small Group (6+ Guests)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Travel Season</label>
                    <select
                      value={formData.season}
                      onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
                    >
                      <option>Spring (Sakura 2027)</option>
                      <option>Autumn Leaves (Momiji 2026/2027)</option>
                      <option>Winter Snow & Onsen</option>
                      <option>Summer Festivals</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Trip Details & Wishes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about destinations you'd like to visit, ryokan preferences, dietary requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Custom Itinerary Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <section className="py-12 border-t border-slate-200">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-2">
              Common Questions
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-[#0F172A]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-organic bg-white/80 rounded-3xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between font-outfit font-bold text-sm text-[#0F172A] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-rose-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs text-slate-600 font-jakarta leading-relaxed border-t border-slate-100/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
