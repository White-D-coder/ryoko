import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, DollarSign } from 'lucide-react';
import { SakuraIcon } from './SakuraIcon';
import { useCurrency, type Currency } from '../context/CurrencyContext';

interface NavbarProps {
  currentCurrency?: string;
  onCurrencyChange?: (curr: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const { currency, setCurrency } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const [activeLang, setActiveLang] = useState<'EN' | 'JA' | 'HI'>('EN');

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgClass = isScrolled
    ? 'glass-organic bg-white/80 shadow-lg border-b border-white/50 py-4'
    : isHome
    ? 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5 text-white'
    : 'glass-organic bg-white/70 py-4 text-[#0F172A] shadow-xs';

  const logoColorClass = isScrolled || !isHome ? 'text-[#0F172A]' : 'text-white';
  const navTextColorClass = isScrolled || !isHome ? 'text-slate-800' : 'text-slate-100';

  const eventItems = [
    { path: '/events/sakura-2027', label: 'Sakura 2027', active: true },
    { path: '#', label: 'Momiji Autumn (Coming Soon)', active: false },
    { path: '#', label: 'Gion Matsuri (Coming Soon)', active: false },
    { path: '#', label: 'Sapporo Snow Festival (Coming Soon)', active: false },
    { path: '#', label: 'Sumidagawa Fireworks (Coming Soon)', active: false },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      {/* Styles for Signature Underline Hover Animation */}
      <style>{`
        .nav-link-underline {
          position: relative;
          padding-bottom: 4px;
          display: inline-flex;
          align-items: center;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #E11D48;
          transition: width 0.3s ease-in-out;
        }
        .nav-link-underline:hover::after,
        .nav-link-underline-active::after {
          width: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <SakuraIcon size={26} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className={`font-outfit text-lg font-black tracking-widest uppercase ${logoColorClass}`}>
            RYOKŌ <span className="text-xs font-normal tracking-normal opacity-70 font-kanji ml-1">旅行</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link-underline text-xs font-bold uppercase tracking-wider transition-colors hover:text-rose-500 ${navTextColorClass} ${
                isActive ? 'text-rose-600 font-black nav-link-underline-active' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link-underline text-xs font-bold uppercase tracking-wider transition-colors hover:text-rose-500 ${navTextColorClass} ${
                isActive ? 'text-rose-600 font-black nav-link-underline-active' : ''
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              `nav-link-underline text-xs font-bold uppercase tracking-wider transition-colors hover:text-rose-500 ${navTextColorClass} ${
                isActive ? 'text-rose-600 font-black nav-link-underline-active' : ''
              }`
            }
          >
            Destinations
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `nav-link-underline text-xs font-bold uppercase tracking-wider transition-colors hover:text-rose-500 ${navTextColorClass} ${
                isActive ? 'text-rose-600 font-black nav-link-underline-active' : ''
              }`
            }
          >
            Tours
          </NavLink>

          {/* EVENTS DROPDOWN (ONLY SAKURA 2027 IS ACTIVE) */}
          <div
            className="relative flex items-center py-2"
            onMouseEnter={() => setEventsDropdownOpen(true)}
            onMouseLeave={() => setEventsDropdownOpen(false)}
          >
            <button
              onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
              className={`nav-link-underline inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer hover:text-rose-500 ${navTextColorClass}`}
            >
              <span>Events</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {eventsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-2xl py-2 z-50 rounded-none">
                {eventItems.map((evt) =>
                  evt.active ? (
                    <Link
                      key={evt.label}
                      to={evt.path}
                      onClick={() => setEventsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      {evt.label}
                    </Link>
                  ) : (
                    <div
                      key={evt.label}
                      className="block px-4 py-2.5 text-xs font-bold text-slate-400 cursor-default bg-slate-50/50"
                    >
                      {evt.label}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link-underline text-xs font-bold uppercase tracking-wider transition-colors hover:text-rose-500 ${navTextColorClass} ${
                isActive ? 'text-rose-600 font-black nav-link-underline-active' : ''
              }`
            }
          >
            Contact
          </NavLink>

          {/* CURRENCY SELECTOR DROPDOWN */}
          <div className="relative flex items-center py-2">
            <button
              onClick={() => {
                setCurrencyDropdownOpen(!currencyDropdownOpen);
                setLangDropdownOpen(false);
                setEventsDropdownOpen(false);
              }}
              className={`nav-link-underline inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer hover:text-rose-500 ${navTextColorClass}`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute top-full right-0 w-36 bg-white border border-slate-200 shadow-xl py-1 z-50 text-slate-900 text-xs font-mono">
                {(['USD', 'INR', 'JPY', 'EUR'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 font-bold hover:bg-rose-50 hover:text-rose-600 cursor-pointer ${
                      currency === curr ? 'bg-rose-50 text-rose-600' : ''
                    }`}
                  >
                    {curr} ({curr === 'USD' ? '$' : curr === 'INR' ? '₹' : curr === 'JPY' ? '¥' : '€'})
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* LANGUAGE SELECTOR DROPDOWN */}
          <div className="relative flex items-center py-2">
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setCurrencyDropdownOpen(false);
                setEventsDropdownOpen(false);
              }}
              className={`nav-link-underline inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer hover:text-rose-500 ${navTextColorClass}`}
            >
              <Globe className="w-3.5 h-3.5 text-rose-500" />
              <span>{activeLang}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 w-36 bg-white border border-slate-200 shadow-xl py-1 z-50 text-slate-900 text-xs font-mono">
                <button
                  onClick={() => {
                    setActiveLang('EN');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 font-bold hover:bg-rose-50 hover:text-rose-600 cursor-pointer"
                >
                  English (EN)
                </button>
                <button
                  onClick={() => {
                    setActiveLang('JA');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 font-bold hover:bg-rose-50 hover:text-rose-600 cursor-pointer"
                >
                  日本語 (JA)
                </button>
                <button
                  onClick={() => {
                    setActiveLang('HI');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 font-bold hover:bg-rose-50 hover:text-rose-600 cursor-pointer"
                >
                  हिन्दी (HI)
                </button>
              </div>
            )}
          </div>

          {/* Plan Expedition CTA Link */}
          <button
            onClick={onOpenInquiry}
            className={`nav-link-underline text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer hover:text-rose-500 ${navTextColorClass}`}
          >
            Plan Expedition ➔
          </button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${logoColorClass}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-[#0F172A] border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-jakarta font-bold text-xs uppercase tracking-wider">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</Link>
            <Link to="/packages" onClick={() => setMobileMenuOpen(false)}>Tours</Link>
            <Link to="/events/sakura-2027" onClick={() => setMobileMenuOpen(false)}>Events (Sakura 2027)</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex gap-2">
              {(['USD', 'INR', 'JPY', 'EUR'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold border ${
                    currency === curr ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 border-slate-300'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="px-4 py-2 bg-rose-600 text-white font-bold text-xs uppercase"
            >
              Plan Expedition
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
