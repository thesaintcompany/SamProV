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
    { index: '01', code: 'SCHED', title: 'Calendar',              desc: 'Programează și urmărește intervențiile.',   icon: Calendar,    href: '#module'       },
    { index: '02', code: 'OFFER', title: 'Oferte',                desc: 'Generează devize rapide personalizate.',   icon: Tag,         href: '#module'       },
    { index: '03', code: 'PARTS', title: 'Protecție Cod Piese',   desc: 'Verifică și protejează codurile pieselor.',icon: ShieldCheck, href: '#module'       },
    { index: '04', code: 'RAR',   title: 'Integrare RAR Autopass',desc: 'Accesează istoricul și validează ITP.',    icon: Car,         href: '#rar-autopass' },
    { index: '05', code: 'CRM',   title: 'Integrare Clienți CRM', desc: 'Gestionează relația cu clienții, simplu.',icon: Users,       href: '#module'       },
  ];

  /* ─── colours ─────────────────────────────────────────────────────────── */
  const bg      = isDark ? '#020b1b' : '#f8fafc';
  const accent  = isDark ? '#00D2FF' : '#0066FF';

  return (
    <section
      className="relative w-full overflow-hidden transition-colors duration-500"
      style={{ background: bg }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          1.  CINEMATIC HERO STAGE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden">

        {/* ── Background layer ─────────────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none select-none">

          {/* Center image zone — capped at 2560 px so ultrawide doesn't
              stretch the photo into oblivion. The outer section bg fills
              the remaining space. */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 overflow-hidden"
            style={{ width: 'min(100vw, 2560px)' }}
          >
            {/* Light bg */}
            <img
              src={heroBgLight}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ${isDark ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Dark bg */}
            <img
              src={heroBgDark}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ${isDark ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* ── Left text-column scrim ─────────────────────────────────── */}
          <div
            className="absolute inset-y-0 left-0 w-full md:w-[62%] lg:w-[54%] pointer-events-none transition-colors duration-700"
            style={{
              background: isDark
                ? 'linear-gradient(to right, #020b1b 0%, #020b1b 30%, rgba(2,11,27,0.82) 60%, transparent 100%)'
                : 'linear-gradient(to right, #f8fafc 0%, #f8fafc 30%, rgba(248,250,252,0.85) 60%, transparent 100%)',
            }}
          />

          {/* ── Bottom fade ───────────────────────────────────────────── */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${bg}, transparent)` }}
          />

          {/* ── ULTRAWIDE LATERAL WINGS ──────────────────────────────────
               Visible only when viewport > ~1920 px.
               We use the CSS calc trick: wing width = (100vw − 2560px) / 2.
               On ≤ 2560 px screens this resolves to ≤ 0 so wings are hidden.
          ─────────────────────────────────────────────────────────────── */}

          {/* Left wing */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none overflow-hidden"
            style={{ width: 'max(0px, calc((100vw - 2560px) / 2 + 120px))' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: isDark ? '#020b1b' : '#f8fafc' }}
            />
            {/* Tech-grid SVG decoration */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.06]"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="gridL" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={accent} strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridL)" />
              {/* Horizontal scan lines */}
              {[0.18, 0.36, 0.54, 0.72, 0.88].map((y, i) => (
                <line
                  key={i}
                  x1="0" y1={`${y * 100}%`}
                  x2="100%" y2={`${y * 100}%`}
                  stroke={accent} strokeWidth="0.8" strokeOpacity="0.4"
                  strokeDasharray="6 12"
                />
              ))}
            </svg>
            {/* Crosshair bottom-right corner of wing */}
            <svg
              className="absolute bottom-16 right-4 w-10 h-10 opacity-20"
              viewBox="0 0 40 40" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="8" stroke={accent} strokeWidth="1" />
              <line x1="20" y1="0" x2="20" y2="40" stroke={accent} strokeWidth="0.8" />
              <line x1="0" y1="20" x2="40" y2="20" stroke={accent} strokeWidth="0.8" />
            </svg>
            {/* Right-edge fade so wing blends into image */}
            <div
              className="absolute inset-y-0 right-0 w-24"
              style={{ background: `linear-gradient(to left, transparent, ${bg})` }}
            />
          </div>

          {/* Right wing */}
          <div
            className="absolute inset-y-0 right-0 pointer-events-none overflow-hidden"
            style={{ width: 'max(0px, calc((100vw - 2560px) / 2 + 120px))' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: isDark ? '#020b1b' : '#f8fafc' }}
            />
            {/* Speed-streak SVG accent */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.07]"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="gridR" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={accent} strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridR)" />
              {/* Diagonal speed streaks */}
              {[0.3, 0.45, 0.6, 0.75].map((pct, i) => (
                <line
                  key={i}
                  x1="0" y1={`${pct * 100}%`}
                  x2="100%" y2={`${(pct - 0.15) * 100}%`}
                  stroke={accent} strokeWidth="1" strokeOpacity="0.35"
                  strokeDasharray={`${8 + i * 6} ${20 + i * 4}`}
                />
              ))}
            </svg>
            {/* Telemetry data label */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 font-mono text-[9px] tracking-[0.3em] uppercase whitespace-nowrap opacity-15 select-none"
              style={{ color: accent }}
            >
              SAMPRO · TELEMETRIE · LIVE
            </div>
            {/* Left-edge fade so wing blends into image */}
            <div
              className="absolute inset-y-0 left-0 w-24"
              style={{ background: `linear-gradient(to right, transparent, ${bg})` }}
            />
          </div>
        </div>

        {/* ── Hero Content ─────────────────────────────────────────────── */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-4 pt-2">

              <div className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold tracking-widest uppercase ${isDark ? 'text-[#00D2FF]' : 'text-[#0066FF]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-[#00D2FF]' : 'bg-[#0066FF]'}`} />
                MANAGEMENT INTELIGENT — 2026
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.05] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Tot ce ai nevoie,<br />
                <span style={{ color: accent }}>într-un singur</span><br />
                loc.
              </h1>

              <p className={`text-xl sm:text-2xl font-extrabold tracking-tight pt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Simplu. Rapid. Eficient.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${isDark ? 'text-slate-300/90' : 'text-slate-600'}`}>
                Platforma completă concepută pentru ateliere mecanice, vopsitorii și mari rețele de service.
                De la recepție și devize în 45 de secunde, la sincronizare directă RAR și comenzi piese.
              </p>

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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border group-hover:scale-110 transition-transform ${isDark ? 'bg-[#182e56]/90 border-white/20' : 'bg-white border-slate-200'}`}>
                    <Play className={`w-4 h-4 ml-0.5 fill-current ${isDark ? 'text-white' : 'text-[#0066FF]'}`} />
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Vezi demonstrația
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">2:18</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: floating widgets */}
            <div className="lg:col-span-6 relative h-full min-h-[300px] sm:min-h-[440px] pointer-events-none">

              {/* Productivity widget */}
              <div className="absolute top-2 sm:top-6 left-6 sm:left-16 lg:left-12 xl:left-20 z-20 flex flex-col items-center animate-in fade-in duration-500 pointer-events-auto">
                <div className={`backdrop-blur-xl border rounded-2xl px-4 py-2 sm:py-2.5 shadow-xl flex items-center gap-3 ${isDark ? 'bg-[#0c2246]/85 border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' : 'bg-white/90 border-slate-200/90 shadow-[0_12px_35px_rgba(0,102,255,0.08)]'}`}>
                  <div className="w-9 h-9 rounded-xl bg-[#1e3d75] flex items-center justify-center shadow-md shrink-0">
                    <Activity className="w-5 h-5 text-[#00d2ff] stroke-[2.5]" />
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Mai multă productivitate
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Procese automatizate. Timp economisit.</div>
                  </div>
                </div>
                <div className="flex flex-col items-center -mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0066FF]" style={{ background: isDark ? '#00d2ff' : '#fff' }} />
                  <svg className="w-20 h-9 -mt-0.5 opacity-60" viewBox="0 0 80 36" fill="none" style={{ color: accent }}>
                    <path d="M 40 0 C 40 18, 65 18, 70 34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>
              </div>

              {/* Efficiency badge */}
              <div className="absolute bottom-6 sm:bottom-10 right-2 sm:right-6 lg:right-0 z-20 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0a2044]/90 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-[#00e5ff] font-black text-xs sm:text-sm tracking-tight flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 4l-7 7h4v9h6v-9h4z"/></svg>
                  +37%
                </span>
                <span className="text-xs sm:text-[13px] font-medium text-white/95">Eficiență operațională</span>
                <div className="flex items-end gap-[3px] h-3.5 pl-0.5">
                  {[1.5, 2.5, 3, 3.5].map((h, i) => (
                    <span key={i} className="w-1 bg-[#00e5ff] rounded-full" style={{ height: `${h * 4}px` }} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          2.  SWISS PRECISION FEATURE DOCK
      ═══════════════════════════════════════════════════════════════════ */}
      <div className={`w-full border-t transition-colors duration-500 ${isDark ? 'bg-[#030c1d] border-white/10' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x lg:divide-x divide-slate-200 dark:divide-white/10">
            {bottomCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className={`group flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden transition-colors duration-200 cursor-pointer ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-50'}`}
                >
                  {/* Index + icon */}
                  <div className="flex items-start justify-between mb-5">
                    <span className={`font-mono text-[10px] font-bold tracking-widest ${isDark ? 'text-white/20' : 'text-slate-300'}`}>
                      {card.index}
                    </span>
                    <div className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${isDark ? 'border-white/10 bg-white/[0.03] group-hover:border-[#00D2FF]/40 group-hover:bg-[#00D2FF]/5' : 'border-slate-200 bg-slate-50 group-hover:border-[#0066FF]/40 group-hover:bg-[#0066FF]/5'}`}>
                      <Icon className={`w-4 h-4 transition-colors ${isDark ? 'text-white/40 group-hover:text-[#00D2FF]' : 'text-slate-400 group-hover:text-[#0066FF]'}`} />
                    </div>
                  </div>

                  <div>
                    <span className={`font-mono text-[10px] font-semibold tracking-widest uppercase mb-1.5 block ${isDark ? 'text-white/25' : 'text-slate-300'}`}>
                      {card.code}
                    </span>
                    <h3 className={`font-black text-sm uppercase tracking-tight leading-snug mb-1.5 transition-colors ${isDark ? 'text-white group-hover:text-[#00D2FF]' : 'text-slate-900 group-hover:text-[#0066FF]'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-current/10">
                    <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${isDark ? 'text-white/20 group-hover:text-[#00D2FF]/60' : 'text-slate-300 group-hover:text-[#0066FF]/60'}`}>
                      ACCESEAZĂ
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-all group-hover:translate-x-0.5 ${isDark ? 'text-white/20 group-hover:text-[#00D2FF]' : 'text-slate-300 group-hover:text-[#0066FF]'}`} />
                  </div>

                  {/* Hover accent underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isDark ? 'bg-[#00D2FF]' : 'bg-[#0066FF]'}`} />
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
