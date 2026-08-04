import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { SakuraIcon } from './SakuraIcon';

interface NavbarProps {
  currentCurrency: string;
  onCurrencyChange: (curr: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/packages', label: 'Tours' },
    { path: '/sakura-planner', label: 'Sakura 2027' },
    { path: '/guide', label: 'Guide & Culture' },
    { path: '/contact', label: 'Contact' },
  ];

  const headerBgClass = isScrolled
    ? 'glass-organic bg-white/80 shadow-lg border-b border-white/50 py-4'
    : isHome
    ? 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5 text-white'
    : 'glass-organic bg-white/70 py-4 text-[#0F172A] shadow-xs';

  const logoColorClass = isScrolled || !isHome ? 'text-[#0F172A]' : 'text-white';
  const navTextColorClass = isScrolled || !isHome ? 'text-slate-800' : 'text-slate-100';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <SakuraIcon size={26} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className={`font-outfit text-lg font-black tracking-widest uppercase ${logoColorClass}`}>
            RYOKŌ <span className="text-xs font-normal tracking-normal opacity-70 font-kanji ml-1">旅行</span>
          </span>
        </Link>

        {/* Desktop Nav Items with On-Hover Expanding Underline */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.18em] transition-colors relative py-1 cursor-pointer ${
                  navTextColorClass
                } ${
                  isActive
                    ? 'text-rose-500 font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:scale-x-100'
                    : 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-rose-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Pure Text Right Actions (No Boxes, On-Hover Animated Underlines) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Currency Switcher Dropdown (Pure Text) */}
          <div className="relative group">
            <button
              className={`relative py-1 flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase cursor-pointer transition-colors ${navTextColorClass} hover:text-rose-500 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
            >
              <span>{currentCurrency.split(' ')[0]}</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-32 glass-organic bg-white/95 text-[#0F172A] shadow-xl py-2 text-xs overflow-hidden z-50">
              {['USD ($)', 'EUR (€)', 'JPY (¥)', 'GBP (£)'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`w-full text-left px-4 py-2 hover:bg-rose-50 font-medium transition-colors cursor-pointer ${
                    currentCurrency === curr ? 'text-rose-600 font-bold bg-rose-50/50' : ''
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Plan Trip Pure Text Action (No Box, On-Hover Animated Underline) */}
          <button
            onClick={onOpenInquiry}
            className={`relative py-1 flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase cursor-pointer transition-colors ${navTextColorClass} hover:text-rose-500 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Plan Trip</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 ${
            isScrolled || !isHome ? 'text-slate-900' : 'text-white'
          }`}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-dark-fluid text-white px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium py-2 px-3 transition-all ${
                  isActive ? 'text-rose-400 font-bold' : 'hover:text-rose-300 text-slate-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Currency</span>
              <div className="flex gap-3">
                {['USD ($)', 'EUR (€)', 'JPY (¥)'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`text-xs ${
                      currentCurrency === curr ? 'text-rose-400 font-bold underline' : 'text-slate-300'
                    }`}
                  >
                    {curr.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-rose-400 hover:text-rose-300 py-2 text-center text-sm font-bold flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Plan Custom Trip</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
