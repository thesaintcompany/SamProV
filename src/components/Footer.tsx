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
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenLegal }) => {
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
                src="/assets/logo-dark.png"
                alt="SAMpro Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#00D2FF] tracking-wider uppercase">
                  by BUU.RO
                </span>
              </div>
              {/* Raccing Precision Parallelogram */}
              <div className="w-10 h-3 bg-[#0066FF] -skew-x-12 rounded-sm shadow-[0_0_12px_rgba(0,102,255,0.7)] ml-2"></div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              <strong>SAMpro (Service Auto Management Pro)</strong> este ecosistemul cloud enterprise dedicat atelierelor mecanice, vopsitoriilor, centrelor ITP și marilor rețele de service auto din România. Viteză de Raccing, comunicare transparentă pe WhatsApp și conformitate   RAR Autopass.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-rounded">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Conformitate cu RAR
              </span>
              <span>•</span>
              <span className="text-[#00D2FF]">Servere Cloud UE (București)</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigare Rapidă
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  Acasă
                </a>
              </li>
              <li>
                <a href="#module" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  Module &amp; Elevatoare
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  Simulator Live
                </a>
              </li>
              <li>
                <a href="#rar-autopass" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  Conexiune RAR
                </a>
              </li>
              <li>
                <a href="#performanta" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  Performanță SAM
                </a>
              </li>
              <li>
                <a href="#preturi" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#0066FF]" />
                  Planuri &amp; Prețuri
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
                <a href="https://www.buu.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono">
                  www.buu.ro
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href="mailto:contact@buu.ro" className="hover:text-white">
                  contact@buu.ro • suport@sampro.ro
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
            <span>Coolify Ready (Port 3043)</span>
            <span>•</span>
            <span>Cloud SLA 99.98%</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
