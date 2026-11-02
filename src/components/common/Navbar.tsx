import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import { navigationLinks } from '../../data/navigationData';

export interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Executive Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-500 p-0.5 shadow-glow-cyan group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-sm sm:text-base text-slate-100 tracking-tight flex items-center gap-2">
                <span>Saurabh Kumar</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              </div>
              <span className="text-[10px] sm:text-[11px] text-cyan-400 font-mono font-semibold tracking-wider uppercase">
                Tech Bihar Innovations
              </span>
            </div>
          </a>

          {/* Desktop Central Navigation Pill Bar */}
          <nav className="hidden lg:flex items-center gap-1 bg-obsidian-950/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-xl shadow-card-glass">
            {navigationLinks.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              if (item.isAction) return null;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-200 bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_16px_rgba(6,182,212,0.2)] font-semibold'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono tracking-tight bg-slate-800 text-cyan-300 border border-slate-700/80">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('#inquiry')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-obsidian-950 hover:brightness-110 shadow-glow-cyan hover:shadow-cyan-400/40 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>Direct Connect</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-obsidian-950/95 border border-slate-800 backdrop-blur-2xl shadow-2xl space-y-2 animate-fadeIn">
            {navigationLinks.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => handleNavClick('#inquiry')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-obsidian-950 shadow-glow-cyan"
              >
                <span>Direct Connect & RFP</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
