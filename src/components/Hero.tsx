import React, { useState, useRef } from 'react';
import { 
  Play, 
  ArrowRight, 
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

/* ─── RESPONSIVE HERO ARTWORK ──────────────────────────────────────────────
   Fiecare breakpoint are propria imagine (light + dark). Pune fișierele finale în
   /public/assets/hero/ și actualizează căile din HERO_IMAGES, la rezoluțiile:
     • mobile    1080 × 1920  (9:16)   — < 640px
     • tablet    2048 × 1536  (4:3)    — 640px – 1023px
     • desktop   2880 × 1620  (16:9)   — 1024px – 1919px
     • ultrawide 5120 × 2160  (21:9)   — ≥ 1920px și raport ≥ 2:1
   Până la livrarea imaginilor finale, toate variantele folosesc artwork-ul existent.
─────────────────────────────────────────────────────────────────────────── */
type HeroVariant = { mobile: string; tablet: string; desktop: string; ultrawide: string };

const HERO_IMAGES: Record<'light' | 'dark', HeroVariant> = {
  dark: {
    mobile:    '/assets/hero/hero-dark-mobile.webp',
    tablet:    '/assets/hero/hero-dark-tablet.webp',
    desktop:   '/assets/hero/hero-dark-desktop.webp',
    ultrawide: '/assets/hero/hero-dark-ultrawide.webp',
  },
  light: {
    mobile:    '/assets/hero/hero-light-mobile.webp',
    tablet:    '/assets/hero/hero-light-tablet.webp',
    desktop:   '/assets/hero/hero-light-desktop.webp',
    ultrawide: '/assets/hero/hero-light-ultrawide.webp',
  },
};

const HeroPicture: React.FC<{ variant: HeroVariant; visible: boolean; priority?: boolean }> = ({ variant, visible, priority }) => (
  <picture
    className={`absolute inset-0 block transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    aria-hidden="true"
  >
    <source media="(min-width: 1920px) and (min-aspect-ratio: 2/1)" srcSet={variant.ultrawide} />
    <source media="(min-width: 1024px)" srcSet={variant.desktop} />
    <source media="(min-width: 640px)" srcSet={variant.tablet} />
    <img
      src={variant.mobile}
      alt=""
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
      className="hero-art w-full h-full object-cover"
    />
  </picture>
);

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToSimulator: () => void;
  theme?: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToSimulator, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [activeHeroCard, setActiveHeroCard] = useState(0);
  const heroCardsRef = useRef<HTMLDivElement>(null);

  const scrollToHeroCard = (idx: number) => {
    const clampedIdx = Math.max(0, Math.min(idx, 5));
    setActiveHeroCard(clampedIdx);
    if (heroCardsRef.current) {
      const cardWidth = heroCardsRef.current.offsetWidth * 0.82;
      heroCardsRef.current.scrollTo({
        left: clampedIdx * (cardWidth + 14),
        behavior: 'smooth'
      });
    }
  };

  const featureCards = [
    {
      index: '01',
      titlePrefix: 'Gestionare rapidă ',
      titleHighlight: 'a ofertelor',
      desc: 'Creezi și trimiți oferte în câteva clickuri.',
      accentColor: 'text-[#0066FF] dark:text-[#00D2FF]',
      href: '#module',
    },
    {
      index: '02',
      titlePrefix: 'Istoric complet ',
      titleHighlight: 'al clienților',
      desc: 'Toate interacțiunile, într-un singur loc.',
      accentColor: 'text-[#6366F1] dark:text-[#818CF8]',
      href: '#module',
    },
    {
      index: '03',
      titlePrefix: 'Transparență ',
      titleHighlight: '& încredere',
      desc: 'Comunicare clară și proces bine definit.',
      accentColor: 'text-[#059669] dark:text-[#34D399]',
      href: '#module',
    },
    {
      index: '04',
      titlePrefix: 'Creșterea ratei ',
      titleHighlight: 'de acceptare',
      desc: 'Oferte mai clare, clienți mai mulțumiți.',
      accentColor: 'text-[#D97706] dark:text-[#FBBF24]',
      href: '#module',
    },
    {
      index: '05',
      titlePrefix: 'Eficiență ',
      titleHighlight: 'operațională',
      desc: 'Reduci timpul de lucru și elimini erorile manuale.',
      accentColor: 'text-[#7C3AED] dark:text-[#A78BFA]',
      href: '#module',
    },
    {
      index: '06',
      titlePrefix: 'Acces ',
      titleHighlight: 'de oriunde',
      desc: 'Lucrezi de pe orice dispozitiv, în timp real.',
      accentColor: 'text-[#0891B2] dark:text-[#22D3EE]',
      href: '#module',
    },
  ];

  /* ─── colours ─────────────────────────────────────────────────────────── */
  const bg      = isDark ? '#020b1b' : '#f8fafc';
  const bgRgb   = isDark ? '2,11,27' : '248,250,252';
  const accent  = isDark ? '#00D2FF' : '#0066FF';

  return (
    <section
      className="relative w-full overflow-hidden transition-colors duration-500"
      style={{ background: bg }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          1.  CINEMATIC HERO STAGE
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[700px] sm:min-h-[760px] lg:min-h-[min(92vh,880px)] 2xl:min-h-[min(88vh,980px)] pt-24 sm:pt-36 pb-12 sm:pb-20 flex flex-col justify-start sm:justify-between overflow-hidden">

        {/* ── Background Stage: full-bleed, anchored bottom-right ─────────── */}
        <div className="absolute inset-0 pointer-events-none select-none">

          {/* 1. Responsive artwork (mobile / tablet / desktop / ultrawide) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <HeroPicture variant={HERO_IMAGES.light} visible={!isDark} priority={!isDark} />
            <HeroPicture variant={HERO_IMAGES.dark} visible={isDark} priority={isDark} />
          </div>

          {/* 2. Accent glow behind the car (depth) */}
          <div
            className="hidden lg:block absolute z-[1] right-[8%] bottom-[6%] w-[46vw] h-[40vh] rounded-full blur-[120px] opacity-60"
            style={{ background: isDark ? 'radial-gradient(closest-side, rgba(0,102,255,0.35), transparent)' : 'radial-gradient(closest-side, rgba(0,102,255,0.14), transparent)' }}
          />

          {/* 3. Readability scrims — per breakpoint */}
          {/* Mobile: No white filter overlay so mobile artwork stays crisp and vibrant */}
          
          {/* Tablet: text top, car bottom */}
          <div
            className="hidden sm:block lg:hidden absolute inset-0 z-[2]"
            style={{
              background: `linear-gradient(to bottom, ${bg} 0%, rgba(${bgRgb},0.9) 30%, rgba(${bgRgb},0.35) 55%, transparent 72%)`,
            }}
          />
          {/* Desktop & ultrawide: anchored to the centered text column, so the car stays fully visible on the right */}
          <div
            className="hidden lg:block absolute inset-0 z-[2]"
            style={{
              background: `linear-gradient(90deg, ${bg} 0%, ${bg} calc(50% - 120px), rgba(${bgRgb},0.82) calc(50% + 40px), rgba(${bgRgb},0.35) calc(50% + 260px), transparent calc(50% + 560px))`,
            }}
          />
          {/* Top scrim: keeps the transparent navbar legible over the artwork on desktop/tablet */}
          <div
            className="hidden sm:block absolute inset-x-0 top-0 h-36 z-[2]"
            style={{ background: `linear-gradient(to bottom, rgba(${bgRgb},0.85), transparent)` }}
          />
          {/* Bottom fade into the cards section (desktop/tablet full fade, subtle on mobile) */}
          <div
            className="hidden sm:block absolute inset-x-0 bottom-0 h-40 z-[2]"
            style={{ background: `linear-gradient(to top, ${bg}, transparent)` }}
          />
          <div
            className="sm:hidden absolute inset-x-0 bottom-0 h-14 z-[2]"
            style={{ background: `linear-gradient(to top, ${bg}, transparent)` }}
          />
          {/* Subtle vignette for a cinematic finish on desktop */}
          <div
            className="hidden lg:block absolute inset-0 z-[2]"
            style={{ background: `radial-gradient(ellipse 120% 90% at 70% 60%, transparent 55%, rgba(${bgRgb},0.55) 100%)` }}
          />

          {/* 4. Tracking widgets (desktop+) — positioned over the car area */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 2xl:w-[46%] z-[3]">
            {/* ── TRACKING WIDGET 1: Mai multă productivitate ── */}
            <div className="absolute top-[30%] left-[22%] z-20 flex flex-col items-center pointer-events-auto hero-float">
              <div className={`backdrop-blur-xl border rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3 ${isDark ? 'bg-[#0c2246]/80 border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' : 'bg-white/90 border-slate-200/90 shadow-[0_12px_35px_rgba(0,102,255,0.10)]'}`}>
                <div className="w-9 h-9 rounded-xl bg-[#1e3d75] flex items-center justify-center shadow-md shrink-0">
                  <Activity className="w-5 h-5 text-[#00d2ff] stroke-[2.5]" />
                </div>
                <div>
                  <div className={`text-sm font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Mai multă productivitate
                  </div>
                  <div className={`text-[11px] mt-0.5 whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Procese automatizate. Timp economisit.</div>
                </div>
              </div>
              <div className="flex flex-col items-center -mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0066FF]" style={{ background: isDark ? '#00d2ff' : '#fff' }} />
                <svg className="w-20 h-9 -mt-0.5 opacity-60" viewBox="0 0 80 36" fill="none" style={{ color: accent }}>
                  <path d="M 40 0 C 40 18, 65 18, 70 34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>

            {/* ── TRACKING WIDGET 2: Eficiență operațională ── */}
            <div className="absolute bottom-[14%] left-[38%] z-20 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0a2044]/90 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white pointer-events-auto hero-float [animation-delay:1.2s]">
              <span className="text-[#00e5ff] font-black text-sm tracking-tight flex items-center gap-1">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 4l-7 7h4v9h6v-9h4z"/></svg>
                +37%
              </span>
              <span className="text-[13px] font-medium text-white/95 whitespace-nowrap">Eficiență operațională</span>
              <div className="flex items-end gap-[3px] h-3.5 pl-0.5">
                {[1.5, 2.5, 3, 3.5].map((h, i) => (
                  <span key={i} className="w-1 bg-[#00e5ff] rounded-full" style={{ height: `${h * 4}px` }} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Hero Content ─────────────────────────────────────────────── */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-3 sm:pt-0 sm:my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column */}
            <div className="lg:col-span-6 max-w-xl lg:max-w-none flex flex-col items-start space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">

              <div className={`inline-flex items-center gap-2.5 font-rounded text-[11px] font-bold tracking-wider uppercase ${isDark ? 'text-[#00D2FF]' : 'text-[#0066FF]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-[#00D2FF]' : 'bg-[#0066FF]'}`} />
                MANAGEMENT INTELIGENT — 2026
              </div>

              <h1 className={`text-[34px] xs:text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.08] sm:leading-[1.05] ${isDark ? 'text-white' : 'text-slate-900'}`}>
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

              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 sm:pt-3 w-full sm:w-auto">
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

            {/* Right Column: spacer for layout grid */}
            <div className="lg:col-span-6 min-h-[220px] xs:min-h-[260px] sm:min-h-[320px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          2.  PREMIUM FLOATING BENEFIT CARDS (Matches uploaded UI/UX sample)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className={`w-full py-12 sm:py-16 border-t relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#020b1b] border-white/10' : 'bg-gradient-to-b from-[#f8fafc] via-[#edf5ff] to-white border-slate-200/80'}`}>
        
        {/* Subtle Background Futuristic Light Streaks (matches example image background) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
          <div className="absolute -top-32 right-1/4 w-[700px] h-[350px] bg-gradient-to-bl from-blue-400/15 via-cyan-400/5 to-transparent rotate-12 blur-3xl" />
          <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-20 right-10 w-[600px] h-[300px] bg-gradient-to-tl from-cyan-400/10 to-transparent blur-3xl" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1680px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={heroCardsRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardWidth = el.offsetWidth * 0.82;
              const idx = Math.round(el.scrollLeft / cardWidth);
              if (idx !== activeHeroCard && idx >= 0 && idx < featureCards.length) {
                setActiveHeroCard(idx);
              }
            }}
            className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none gap-3.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {featureCards.map((card) => {
              return (
                <a
                  key={card.index}
                  href={card.href}
                  className={`w-[82vw] xs:w-[75vw] sm:w-auto shrink-0 sm:shrink snap-center group flex flex-col justify-between p-5 sm:p-5.5 rounded-[22px] relative overflow-hidden transition-all duration-300 cursor-pointer
                    ${isDark 
                      ? 'bg-[#06142a]/90 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.45)] hover:border-[#00D2FF]/40 hover:bg-[#091b38] hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,210,255,0.18)]' 
                      : 'bg-white/95 backdrop-blur-xl border border-blue-100/90 shadow-[0_15px_35px_rgba(0,102,255,0.06)] hover:border-blue-300 hover:shadow-[0_22px_45px_rgba(0,102,255,0.14)] hover:-translate-y-2'
                    }`}
                >
                  {/* Top-Right Futuristic Corner Streaks (matches uploaded screenshot) */}
                  <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none overflow-hidden">
                    <div className={`absolute -top-6 -right-6 w-20 h-20 rotate-45 transform pointer-events-none transition-opacity duration-300 ${isDark ? 'bg-gradient-to-bl from-[#00D2FF]/15 via-blue-500/5 to-transparent' : 'bg-gradient-to-bl from-blue-400/25 via-cyan-400/10 to-transparent'}`} />
                    <div className={`absolute top-2 right-2 w-1 h-12 rotate-45 transform origin-top pointer-events-none ${isDark ? 'bg-gradient-to-b from-[#00D2FF]/30 to-transparent' : 'bg-gradient-to-b from-blue-400/35 to-transparent'}`} />
                    <div className={`absolute top-1 right-5 w-0.5 h-10 rotate-45 transform origin-top pointer-events-none ${isDark ? 'bg-gradient-to-b from-blue-400/20 to-transparent' : 'bg-gradient-to-b from-cyan-400/30 to-transparent'}`} />
                  </div>

                  {/* Bottom-Left Soft Glow */}
                  <div className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-full blur-xl pointer-events-none ${isDark ? 'bg-[#00D2FF]/5' : 'bg-blue-400/10'}`} />

                  {/* Top: Index + Underline Bar */}
                  <div className="relative z-10 mb-4">
                    <span className="font-rounded font-bold text-xs sm:text-sm text-[#0066FF] dark:text-[#00D2FF]">
                      {card.index}
                    </span>
                    <div className="w-4 h-0.5 bg-[#0066FF] dark:bg-[#00D2FF] rounded-full mt-1" />
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 flex-1 flex flex-col justify-start mb-5">
                    <h3 className="font-rounded font-black text-[15px] sm:text-base text-slate-900 dark:text-white leading-snug tracking-tight mb-1.5">
                      {card.titlePrefix}
                      <span className={card.accentColor}>{card.titleHighlight}</span>
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom: Accent Line & Circular Arrow Button */}
                  <div className="relative z-10 flex items-center justify-between pt-1">
                    <div className="w-6 h-0.5 bg-[#0066FF] dark:bg-[#00D2FF] rounded-full" />
                    
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shadow-xs
                      ${isDark
                        ? 'border-white/10 bg-white/5 text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-slate-950 group-hover:border-[#00D2FF] group-hover:scale-110'
                        : 'border-blue-100 bg-blue-50/80 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] group-hover:scale-110'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Mobile Carousel Controls & Indicators (< sm) */}
          <div className="sm:hidden flex items-center justify-between pt-4 px-1">
            <button
              type="button"
              onClick={() => scrollToHeroCard(activeHeroCard - 1)}
              disabled={activeHeroCard === 0}
              className="p-1.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-white disabled:opacity-30 transition-all cursor-pointer"
              aria-label="Card anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {featureCards.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToHeroCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeHeroCard === idx
                      ? 'w-6 bg-[#0066FF] dark:bg-[#00D2FF]'
                      : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                  }`}
                  aria-label={`Sari la cardul ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToHeroCard(activeHeroCard + 1)}
              disabled={activeHeroCard === featureCards.length - 1}
              className="p-1.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-white disabled:opacity-30 transition-all cursor-pointer"
              aria-label="Card următor"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
