import React from 'react';
import {
  Globe,
  Mail,
  ShieldCheck,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenLegal: (filter?: string) => void;
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenLegal, onOpenCookieSettings }) => {
  return (
    <footer className="w-full bg-[#010814] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">

      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#0066FF]/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">

          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo-white-full.png"
                alt="SAMpro Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#00D2FF] tracking-wider uppercase">
                  by BUU.RO
                </span>
              </div>
              {/* Racing Precision Parallelogram */}
              <div className="w-10 h-3 bg-[#0066FF] -skew-x-12 rounded-sm shadow-[0_0_12px_rgba(0,102,255,0.7)] ml-2"></div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              <strong>SAMpro (Service Auto Management Pro)</strong> este ecosistemul cloud enterprise dedicat atelierelor mecanice, vopsitoriilor, centrelor ITP și marilor rețele de service auto din România. Viteză de Racing, comunicare transparentă și conformitate RAR Autopass.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-rounded">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Conformitate cu RAR
              </span>
              <span>•</span>
              <span className="text-[#00D2FF]">Servere Cloud UE </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Urmărește SAMpro
              </div>
              <div className="flex items-center gap-2.5">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@SAMproCRM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SAMpro pe YouTube"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.35)] group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/samprocrm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SAMpro pe Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-slate-400 hover:text-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.35)] group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@samprocrm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SAMpro pe TikTok"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2fe]/50 hover:bg-[#00f2fe]/10 text-slate-400 hover:text-[#00f2fe] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,242,254,0.35)] group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.77 1.34-.03 2.56-.89 2.98-2.16.21-.52.28-1.08.28-1.64.02-5.46.01-10.92.01-16.38z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/samprocrm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SAMpro pe Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 text-slate-400 hover:text-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(24,119,242,0.35)] group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/samprocrm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SAMpro pe LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 text-slate-400 hover:text-[#0A66C2] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(10,102,194,0.35)] group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigare Rapidă
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#0066FF] shrink-0" />
                  <span>Acasă</span>
                </a>
              </li>
              <li>
                <a href="#module" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#0066FF] shrink-0" />
                  <span>Module &amp; Elevatoare</span>
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#0066FF] shrink-0" />
                  <span>Simulator Live</span>
                </a>
              </li>
              <li>
                <a href="#rar-autopass" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#0066FF] shrink-0" />
                  <span>Conexiune RAR</span>
                </a>
              </li>
              <li>
                <a href="#performanta" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#0066FF] shrink-0" />
                  <span>Performanță SAM</span>
                </a>
              </li>
              <li>
                <a href="#preturi" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#0066FF] shrink-0" />
                  <span>Planuri &amp; Prețuri</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Legal &amp; Securitate
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegal('sec1')}
                  className="hover:text-[#00D2FF] transition-colors text-left"
                >
                  Termeni &amp; Condiții
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('sec3')}
                  className="hover:text-[#00D2FF] transition-colors text-left"
                >
                  Politica GDPR (UE 2016/679)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('sec4')}
                  className="hover:text-[#00D2FF] transition-colors text-left"
                >
                  Securitate Cloud &amp; AES-256
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('sec5')}
                  className="hover:text-[#00D2FF] transition-colors text-left"
                >
                  Reglementări RAR Autopass
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('sec7')}
                  className="hover:text-[#00D2FF] transition-colors text-left"
                >
                  Politica de Cookie-uri
                </button>
              </li>
              {onOpenCookieSettings && (
                <li>
                  <button
                    onClick={onOpenCookieSettings}
                    className="hover:text-[#00D2FF] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>Preferințe Cookie-uri</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#00D2FF]">
                      GDPR
                    </span>
                  </button>
                </li>
              )}
              <li>
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D2FF] transition-colors flex items-center gap-1"
                >
                  <span>ANPC</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Asistență &amp; Contact
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <a href="https://sampro.buu.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono">
                  sampro.buu.ro
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href="mailto:contact@buu.ro" className="hover:text-white">
                  contact@buu.ro
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Luni - Vineri: 08:30 - 18:00 (Suport RO)</span>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="mt-3 w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all text-center"
            >
              Cere Prezentare Dedicată
            </button>
          </div>

        </div>

        {/* Micro Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 SAMpro by BUU.RO. Toate drepturile rezervate. Dezvoltat cu mândrie pentru service-urile auto din România.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Cloud SLA 99.98%</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
