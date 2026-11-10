import React from 'react';
import { Mail, MessageSquare, Terminal, ArrowUp, Heart } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { navigationLinks } from '../../data/navigationData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      case 'Linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.4 10.24v-8.37H5.06v8.37z" />
          </svg>
        );
      case 'Github':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        );
      case 'MessageSquare':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient glow on top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          {/* Executive Company Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-100 tracking-tight">
                  {profileData.name}
                </h3>
                <p className="text-xs text-cyan-400 font-mono tracking-wider uppercase">
                  {profileData.company}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Senior Java Full Stack Developer & Angular Architect. Driving mission-critical enterprise engineering, resilient microservices, and modern digital ecosystems.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Enterprise Channels
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available for technical consulting, architecture audits, and high-impact enterprise collaborations.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with Saurabh Kumar via ${link.name}`}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-400 flex items-center justify-center transition-all duration-200"
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Status: Actively accepting RFPs & enterprise engineering leadership inquiries.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {profileData.name} ({profileData.company}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with precision <Heart className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500" /> & Enterprise Architecture
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
