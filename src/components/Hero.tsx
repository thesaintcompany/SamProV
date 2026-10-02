import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Calendar, 
  Tag, 
  ShieldCheck, 
  Car, 
  Users, 
  Activity, 
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToSimulator: () => void;
  theme?: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToSimulator, theme = 'dark' }) => {
  const isDark = theme === 'dark' || (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));

  const bottomCards = [
    {
      title: 'Calendar',
      desc: 'Programează și urmărește ușor intervențiile.',
      icon: Calendar,
      iconBg: 'bg-[#0066FF]',
      href: '#module'
    },
    {
      title: 'Oferte',
      desc: 'Generează rapid oferte personalizate.',
      icon: Tag,
      iconBg: 'bg-[#7928ca]',
      href: '#module'
    },
    {
      title: 'Protecție Cod Piese',
      desc: 'Verifică și protejează codurile pieselor.',
      icon: ShieldCheck,
      iconBg: 'bg-[#00c985]',
      href: '#module'
    },
    {
      title: 'Integrare RAR Autopass',
      desc: 'Accesează datele istoricului și validează ITP.',
      icon: Car,
      iconBg: 'bg-[#ff7a00]',
      href: '#rar-autopass'
    },
    {
      title: 'Integrare Clienți CRM',
      desc: 'Gestionează relația cu clienții, simplu.',
      icon: Users,
      iconBg: 'bg-[#4318ff]',
      href: '#module'
    }
  ];

  return (
    <section className="relative w-full overflow-hidden transition-colors duration-500 bg-[#020b1b]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. UPPER CINEMATIC HERO STAGE (DAY & DARK BACKGROUND)
      ────────────────────────────────────────────────────────────── */}
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden flex flex-col justify-between">
        
        {/* Full-bleed F1 Race Car Background with Ultrawide Protection & Locked Overlays */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden -z-0">
          
          {/* F1 Car Image & Coordinate Anchor Container */}
          <div className="absolute bottom-0 right-0 h-full w-full md:w-[70%] lg:w-[62%] xl:w-[56%] pointer-events-none">
            {/* Day / Light Mode Image */}
            <img
              src="/assets/hero-bg-light.jpg"
              alt="SAMpro Formula 1 Speed Car Light"
              className={`absolute bottom-0 right-0 h-full w-full object-cover md:object-contain object-right-bottom transition-opacity duration-700 ease-in-out ${
                isDark ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Night / Dark Mode Image */}
            <img
              src="/assets/hero-bg-dark.jpg"
              alt="SAMpro Formula 1 Speed Car Dark"
              className={`absolute bottom-0 right-0 h-full w-full object-cover md:object-contain object-right-bottom transition-opacity duration-700 ease-in-out ${
                isDark ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Top Floating Glass Card: Locked directly above cockpit */}
            <div 
              className="hidden lg:flex absolute z-20 flex-col items-center pointer-events-auto"
              style={{ right: '35%', bottom: '48%' }}
            >
              <div className={`backdrop-blur-xl border rounded-2xl px-4 py-2 sm:px-4.5 sm:py-2.5 shadow-xl flex items-center gap-3 ${
                isDark 
                  ? 'bg-[#0c2246]/90 border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' 
                  : 'bg-white/95 border-slate-200/90 shadow-[0_12px_35px_rgba(0,102,255,0.08)]'
              }`}>
                <div className="w-9 h-9 rounded-xl bg-[#1e3d75] dark:bg-[#1a386b] text-white flex items-center justify-center shadow-md shrink-0">
                  <Activity className="w-4 h-4 text-[#00d2ff] stroke-[2.5]" />
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
              
              {/* Telemetry connector line pointing down to cockpit */}
              <div className="flex flex-col items-center -mt-0.5 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-[#00d2ff] border-2 border-[#0066FF] shadow-xs"></div>
                <svg className="w-20 h-9 -mt-0.5 text-blue-400/60 dark:text-[#00d2ff]/60" viewBox="0 0 80 36" fill="none">
                  <path d="M 40 0 C 40 18, 65 18, 70 34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>

            {/* Bottom Floating Pill Badge: Locked near the car */}
            <div 
              className="hidden sm:inline-flex absolute z-20 items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0a2044]/90 dark:bg-[#071b38]/90 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white pointer-events-auto"
              style={{ right: '12%', bottom: '26%' }}
            >
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

          {/* Left background shield & feathering gradient */}
          <div 
            className={`absolute inset-y-0 left-0 w-full md:w-[45%] lg:w-[48%] pointer-events-none transition-colors duration-700 ${
              isDark ? 'bg-[#020b1b]' : 'bg-white'
            }`} 
          />
          <div 
            className={`absolute inset-y-0 left-[35%] md:left-[42%] lg:left-[45%] w-32 sm:w-48 pointer-events-none transition-colors duration-700 ${
              isDark 
                ? 'bg-gradient-to-r from-[#020b1b] to-transparent' 
                : 'bg-gradient-to-r from-white to-transparent'
            }`} 
          />
        </div>

        {/* Hero Content Grid (Left text) */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline, Value Proposition, CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-4 pt-2">
              
              {/* Top Pill Badge: MANAGEMENT INTELIGENT 2026 */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-xs backdrop-blur-md transition-colors ${
                isDark 
                  ? 'bg-[#183668]/85 border-[#2b569b] text-white' 
                  : 'bg-blue-100/90 border-blue-200 text-[#0066FF]'
              }`}>
                <Sparkles className="w-3.5 h-3.5 fill-current text-blue-400" />
                <span>MANAGEMENT INTELIGENT 2026</span>
              </div>

              {/* Main Headline */}
              <h1 className={`text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.08] transition-colors ${
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

              {/* Description Paragraph */}
              <p className={`text-sm sm:text-base leading-relaxed font-normal max-w-xl ${
                isDark ? 'text-slate-300/90' : 'text-slate-600'
              }`}>
                Platforma completă concepută pentru ateliere mecanice, vopsitorii și mari rețele de service. De la recepție și devize în 45 de secunde, la sincronizare directă RAR și comenzi piese.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-3 w-full sm:w-auto">
                
                {/* Primary Action Button */}
                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(0,102,255,0.35)] hover:shadow-[0_14px_30px_rgba(0,102,255,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group cursor-pointer"
                >
                  <span>Începe Acum Gratuit</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Action: Video Demonstration */}
                <button
                  onClick={onScrollToSimulator}
                  className="inline-flex items-center gap-3 py-2 px-3 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors group text-left cursor-pointer"
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

            {/* Right Column Spacer for Grid balance */}
            <div className="hidden lg:block lg:col-span-6 min-h-[300px] pointer-events-none" />

          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BOTTOM FEATURE CARDS TRAY (100% MATCHED TO SCREENSHOT)
      ────────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white rounded-t-[36px] sm:rounded-t-[44px] -mt-6 sm:-mt-8 pt-8 sm:pt-10 pb-10 sm:pb-12 shadow-[0_-15px_45px_rgba(0,0,0,0.08)] border-t border-slate-100 relative z-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {bottomCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,102,255,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Squircle Colored Icon */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${card.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="font-extrabold text-slate-900 text-base mt-4 leading-tight group-hover:text-[#0066FF] transition-colors">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Circular Action Arrow */}
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-[#0066FF] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors self-end mt-4 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
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
