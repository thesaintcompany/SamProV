import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Calendar, 
  Tag, 
  ShieldCheck, 
  Car, 
  Users, 
  Activity
} from 'lucide-react';

const heroBgLight = '/assets/hero-bg-light.jpg';
const heroBgDark  = '/assets/hero-bg-dark.jpg';

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToSimulator: () => void;
  theme?: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToSimulator, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const bottomCards = [
    {
      index: '01',
      code: 'SCHED',
      title: 'Calendar',
      desc: 'Programează și urmărește intervențiile.',
      icon: Calendar,
      href: '#module'
    },
    {
      index: '02',
      code: 'OFFER',
      title: 'Oferte',
      desc: 'Generează devize rapide personalizate.',
      icon: Tag,
      href: '#module'
    },
    {
      index: '03',
      code: 'PARTS',
      title: 'Protecție Cod Piese',
      desc: 'Verifică și protejează codurile pieselor.',
      icon: ShieldCheck,
      href: '#module'
    },
    {
      index: '04',
      code: 'RAR',
      title: 'Integrare RAR Autopass',
      desc: 'Accesează istoricul și validează ITP.',
      icon: Car,
      href: '#rar-autopass'
    },
    {
      index: '05',
      code: 'CRM',
      title: 'Integrare Clienți CRM',
      desc: 'Gestionează relația cu clienții, simplu.',
      icon: Users,
      href: '#module'
    }
  ];

  return (
    <section className={`relative w-full overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#020b1b]' : 'bg-slate-50'}`}>
      
      {/* ─────────────────────────────────────────────────────────────
          1. UPPER CINEMATIC HERO STAGE (FULL-BLEED COVER)
      ────────────────────────────────────────────────────────────── */}
      <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden flex flex-col justify-between">
        
        {/* Full-bleed Background - cover with bottom alignment */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Light Mode Image */}
          <img
            src={heroBgLight}
            alt="SAMpro Formula 1 Speed Car Light"
            className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
              isDark ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Dark Mode Image */}
          <img
            src={heroBgDark}
            alt="SAMpro Formula 1 Speed Car Dark"
            className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
              isDark ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Left scrim for typography legibility */}
          <div 
            className={`absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[52%] pointer-events-none transition-colors duration-700 ${
              isDark 
                ? 'bg-gradient-to-r from-[#020b1b] via-[#020b1b]/80 to-transparent' 
                : 'bg-gradient-to-r from-white via-white/85 to-transparent'
            }`} 
          />
          {/* Bottom fade into card section */}
          <div 
            className={`absolute inset-x-0 bottom-0 h-28 pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-t from-[#020b1b] to-transparent' 
                : 'bg-gradient-to-t from-slate-50 to-transparent'
            }`} 
          />
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline, Value Proposition, CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-4 pt-2">
              
              {/* Technical Breadcrumb Label */}
              <div className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold tracking-widest uppercase ${
                isDark ? 'text-[#00D2FF]' : 'text-[#0066FF]'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#00D2FF]' : 'bg-[#0066FF]'} animate-pulse`} />
                MANAGEMENT INTELIGENT — 2026
              </div>

              {/* Main Headline */}
              <h1 className={`text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.05] transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Tot ce ai nevoie,<br />
                <span className={isDark ? 'text-[#2094f3]' : 'text-[#0066FF]'}>
                  într-un singur
                </span><br />
                loc.
              </h1>

              {/* Subtitle */}
              <p className={`text-xl sm:text-2xl font-extrabold tracking-tight pt-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Simplu. Rapid. Eficient.
              </p>

              {/* Description */}
              <p className={`text-sm sm:text-base leading-relaxed font-normal max-w-xl ${
                isDark ? 'text-slate-300/90' : 'text-slate-600'
              }`}>
                Platforma completă concepută pentru ateliere mecanice, vopsitorii și mari rețele de service. De la recepție și devize în 45 de secunde, la sincronizare directă RAR și comenzi piese.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-3 w-full sm:w-auto">
                
                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(0,102,255,0.35)] hover:shadow-[0_14px_30px_rgba(0,102,255,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group cursor-pointer"
                >
                  <span>Începe Acum Gratuit</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onScrollToSimulator}
                  className="inline-flex items-center gap-3 py-2 px-3 rounded-full hover:bg-white/10 transition-colors group text-left cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border group-hover:scale-110 transition-transform ${
                    isDark 
                      ? 'bg-[#182e56]/90 border-white/20' 
                      : 'bg-white border-slate-200'
                  }`}>
                    <Play className={`w-4 h-4 ml-0.5 fill-current ${isDark ? 'text-white' : 'text-[#0066FF]'}`} />
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Vezi demonstrația
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      2:18
                    </div>
                  </div>
                </button>

              </div>

            </div>

            {/* Right Column: Floating Widgets */}
            <div className="lg:col-span-6 relative h-full min-h-[300px] sm:min-h-[440px] pointer-events-none">
              
              {/* Top Widget: Productivity */}
              <div className="absolute top-2 sm:top-6 left-6 sm:left-16 lg:left-12 xl:left-20 z-20 flex flex-col items-center animate-in fade-in duration-500 pointer-events-auto">
                <div className={`backdrop-blur-xl border rounded-2xl px-4 py-2 sm:px-4 sm:py-2.5 shadow-xl flex items-center gap-3 ${
                  isDark 
                    ? 'bg-[#0c2246]/85 border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' 
                    : 'bg-white/90 border-slate-200/90 shadow-[0_12px_35px_rgba(0,102,255,0.08)]'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-[#1e3d75] text-white flex items-center justify-center shadow-md shrink-0">
                    <Activity className="w-5 h-5 text-[#00d2ff] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Mai multă productivitate
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
                      Procese automatizate. Timp economisit.
                    </div>
                  </div>
                </div>
                
                {/* Connector dot */}
                <div className="flex flex-col items-center -mt-0.5 pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-[#00d2ff] border-2 border-[#0066FF] shadow-xs"></div>
                  <svg className="w-20 h-9 -mt-0.5 text-blue-400/60 dark:text-[#00d2ff]/60" viewBox="0 0 80 36" fill="none">
                    <path d="M 40 0 C 40 18, 65 18, 70 34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>
              </div>

              {/* Bottom Badge: Efficiency */}
              <div className="absolute bottom-6 sm:bottom-10 right-2 sm:right-6 lg:right-0 z-20 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0a2044]/90 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-[#00e5ff] font-black text-xs sm:text-sm tracking-tight flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 4l-7 7h4v9h6v-9h4z"/>
                  </svg>
                  +37%
                </span>
                <span className="text-xs sm:text-[13px] font-medium text-white/95">
                  Eficiență operațională
                </span>
                <div className="flex items-end gap-[3px] h-3.5 pl-0.5">
                  <span className="w-1 h-1.5 bg-[#00e5ff] rounded-full"></span>
                  <span className="w-1 h-2.5 bg-[#00e5ff] rounded-full"></span>
                  <span className="w-1 h-3 bg-[#00e5ff] rounded-full"></span>
                  <span className="w-1 h-3.5 bg-[#00e5ff] rounded-full"></span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. SWISS PRECISION BOTTOM FEATURE DOCK
      ────────────────────────────────────────────────────────────── */}
      <div className={`w-full border-t transition-colors duration-500 ${
        isDark 
          ? 'bg-[#030c1d] border-white/10' 
          : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x lg:divide-x divide-slate-200 dark:divide-white/10">
            {bottomCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className={`group flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden transition-colors duration-200 cursor-pointer ${
                    isDark
                      ? 'hover:bg-white/[0.03]'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Top row: index + icon */}
                  <div className="flex items-start justify-between mb-5">
                    <span className={`font-mono text-[10px] font-bold tracking-widest ${
                      isDark ? 'text-white/20' : 'text-slate-300'
                    }`}>
                      {card.index}
                    </span>
                    <div className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${
                      isDark 
                        ? 'border-white/10 bg-white/[0.03] group-hover:border-[#00D2FF]/40 group-hover:bg-[#00D2FF]/5' 
                        : 'border-slate-200 bg-slate-50 group-hover:border-[#0066FF]/40 group-hover:bg-[#0066FF]/5'
                    }`}>
                      <Icon className={`w-4 h-4 transition-colors ${
                        isDark 
                          ? 'text-white/40 group-hover:text-[#00D2FF]' 
                          : 'text-slate-400 group-hover:text-[#0066FF]'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Code label */}
                    <span className={`font-mono text-[10px] font-semibold tracking-widest uppercase mb-1.5 block ${
                      isDark ? 'text-white/25' : 'text-slate-300'
                    }`}>
                      {card.code}
                    </span>

                    {/* Title */}
                    <h3 className={`font-black text-sm uppercase tracking-tight leading-snug mb-1.5 transition-colors ${
                      isDark 
                        ? 'text-white group-hover:text-[#00D2FF]' 
                        : 'text-slate-900 group-hover:text-[#0066FF]'
                    }`}>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-[11px] leading-relaxed font-normal ${
                      isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom: arrow CTA */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-current/10">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${
                      isDark ? 'text-white/20 group-hover:text-[#00D2FF]/60' : 'text-slate-300 group-hover:text-[#0066FF]/60'
                    } transition-colors`}>
                      ACCESEAZĂ
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-all group-hover:translate-x-0.5 ${
                      isDark 
                        ? 'text-white/20 group-hover:text-[#00D2FF]' 
                        : 'text-slate-300 group-hover:text-[#0066FF]'
                    }`} />
                  </div>

                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isDark ? 'bg-[#00D2FF]' : 'bg-[#0066FF]'
                  }`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
