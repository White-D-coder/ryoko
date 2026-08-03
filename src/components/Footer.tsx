import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { SakuraIcon } from './SakuraIcon';

interface FooterProps {
  onOpenLeadMagnet: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadMagnet, onOpenInquiry: _ }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenLeadMagnet();
  };

  return (
    <footer className="relative bg-[#FAF9F5] text-[#0F172A] border-t border-slate-200/80 overflow-hidden">
      {/* Background Japan Photography with Light Overlay */}
      <div className="absolute inset-0 z-0 opacity-90">
        <img
          src="/images/pexels-saul-siguenza-355267816-38140667.jpg"
          alt="Japan Background"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-[#FAF9F5]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        {/* Top Slim Row: Brand, Newsletter Input & Direct Contact */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200/80">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-4">
            <SakuraIcon size={30} />
            <div>
              <span className="font-outfit text-xl font-black tracking-widest uppercase text-[#0F172A]">
                RYOKŌ <span className="text-xs font-normal tracking-normal text-slate-500 font-kanji ml-1">旅行</span>
              </span>
              <p className="text-slate-500 text-xs font-jakarta">
                Bespoke Luxury Expeditions & Sakura Journeys
              </p>
            </div>
          </div>

          {/* Slim Newsletter Download Bar */}
          <div className="w-full lg:w-auto">
            <form onSubmit={handleNewsletter} className="flex items-center gap-2 max-w-md w-full">
              <input
                type="email"
                required
                placeholder="Enter email for 2027 Japan Guide PDF..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-white border border-slate-300 px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-none shrink min-w-[240px]"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-rose-600 text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest shadow-sm transition-colors cursor-pointer rounded-none whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Free Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Compact Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 text-xs">
          <div>
            <h5 className="font-outfit font-bold text-xs text-slate-900 uppercase tracking-widest mb-3">
              Explore Japan
            </h5>
            <ul className="space-y-2 text-slate-600 font-jakarta">
              <li><Link to="/" className="hover:text-rose-600 transition-colors">Home Page</Link></li>
              <li><Link to="/destinations" className="hover:text-rose-600 transition-colors">Destinations & Regions</Link></li>
              <li><Link to="/packages" className="hover:text-rose-600 transition-colors">Tour Expeditions</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-outfit font-bold text-xs text-slate-900 uppercase tracking-widest mb-3">
              Specialists
            </h5>
            <ul className="space-y-2 text-slate-600 font-jakarta">
              <li><Link to="/sakura-planner" className="hover:text-rose-600 transition-colors">Sakura 2027 Forecast</Link></li>
              <li><Link to="/guide" className="hover:text-rose-600 transition-colors">Culture & Etiquette Guide</Link></li>
              <li><Link to="/contact" className="hover:text-rose-600 transition-colors">Tailor-Made Concierge</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-outfit font-bold text-xs text-slate-900 uppercase tracking-widest mb-3">
              Signature Routes
            </h5>
            <ul className="space-y-2 text-slate-600 font-jakarta">
              <li><Link to="/packages" className="hover:text-rose-600 transition-colors">Golden Route (Tokyo & Kyoto)</Link></li>
              <li><Link to="/packages" className="hover:text-rose-600 transition-colors">Luxury Ryokan & Onsen</Link></li>
              <li><Link to="/packages" className="hover:text-rose-600 transition-colors">Otaku Anime & Tech Odyssey</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-outfit font-bold text-xs text-slate-900 uppercase tracking-widest mb-3">
              Tokyo Office
            </h5>
            <div className="space-y-2 text-slate-600 font-jakarta">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Ginza 6-Chome, Tokyo 104-0061</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>concierge@ryoko-japan.com</span>
              </p>
              <p className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Official JR Pass Partner
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Minimal Copyright Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2027 Ryokō Japan Tourism Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">JR Pass Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
