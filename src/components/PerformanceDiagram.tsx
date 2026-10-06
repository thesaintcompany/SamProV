import React, { useState, useRef } from 'react';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export const PerformanceDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2); // Default on WhatsApp closing
  const pipelineRef = useRef<HTMLDivElement>(null);

  const scrollToPipelineStage = (idx: number) => {
    const clampedIdx = Math.max(0, Math.min(idx, 3));
    setActiveStage(clampedIdx);
    if (pipelineRef.current) {
      const cardWidth = pipelineRef.current.offsetWidth * 0.86;
      pipelineRef.current.scrollTo({
        left: clampedIdx * (cardWidth + 16),
        behavior: 'smooth'
      });
    }
  };

  const stages = [
    {
      num: '01',
      tag: 'INTAKE',
      title: 'Identificare & VIN',
      desc: 'Identificare rapidă a mașinii și preluare automată a datelor tehnice.',
      classic: { time: '~8 min', text: 'Tastare manuală talon, căutare serii de șasiu în programe deconectate.' },
      sampro: { time: '30 sec', text: 'Identificare instantanee a vehiculului + date tehnice afișate pe ecran.' },
      metric: '+94% viteză'
    },
    {
      num: '02',
      tag: 'PRICING',
      title: 'Deviz & Coduri Piese',
      desc: 'Selectare piese din cataloage furnizori și normare orară automată a manoperei.',
      classic: { time: '~15 min', text: 'Comparație tab-uri multiple, apeluri la furnizori, nesiguranță adaos.' },
      sampro: { time: '2 min', text: 'Protecție cod piese, adaos inteligent preconfigurat, discounturi directe.' },
      metric: '+18% marjă'
    },
    {
      num: '03',
      tag: 'CLOSING',
      title: '  Aprobare Client',
      desc: 'Deviz interactiv trimis direct pe telefonul proprietarului cu foto/video atașate.',
      classic: { time: '~4 ore', text: 'Sunat clienți, mesaje vocale, ezitări repetate și refuzuri din lipsă de încredere.' },
      sampro: { time: '8 min', text: 'Acceptare printr-un singur tap securizat de pe mobil cu transparență totală.' },
      metric: '+35% aprobări'
    },
    {
      num: '04',
      tag: 'FULFILLMENT',
      title: 'Elevator & Facturare',
      desc: 'Planificare pe mecanic în calendar și emitere automată factură/bon fiscal.',
      classic: { time: '~12 min', text: 'Agendă hârtie, reintroducere manuală în soft de facturare separat.' },
      sampro: { time: 'Instant', text: 'Sincronizare 1-click cu elevatorul, depozitul și registrul de casă.' },
      metric: '100% automat'
    }
  ];

  return (
    <section id="performanta" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#020b1b] relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">

      {/* Halo Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-500/5 dark:bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-cyan-500/5 dark:bg-[#00D2FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Apple Style Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-rounded font-bold tracking-wider text-[#0066FF] dark:text-[#00D2FF]">
            <Zap className="w-3.5 h-3.5" />
            IMPACT MĂSURAT PE CONSILIERI SERVICE &amp; VÂNZĂRI
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Viteza de Raccing Adusă în <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-cyan-500 dark:from-[#00D2FF] dark:via-[#0066FF] dark:to-blue-400">
              Performanța Consilierilor de Service
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Analiză comparativă pas cu pas: cum fluxul digital SAMpro transformă un consilier auto tradițional într-un top-performer de înaltă precizie.
          </p>
        </div>

        {/* F1 Car Benchmark Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl min-h-[340px]">

          {/* ── Full-Bleed Cinematic Background — car visible bottom-right ── */}
          <img
            src="/assets/hero-bg-dark.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[center_bottom] pointer-events-none select-none"
          />

          {/* ── Contrast scrims ─────────────────────────────────────────── */}
          {/* Subtle all-over darkener */}
          <div className="absolute inset-0 bg-[#020b1b]/45 pointer-events-none" />
          {/* Strong left-to-right: keeps left text zone fully readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1b]/98 via-[#020b1b]/70 to-transparent pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020b1b]/55 to-transparent pointer-events-none" />

          {/* ── Content — spans full width, text on left, car visible right ── */}
          <div className="relative z-10 p-6 sm:p-10">
            <div className="max-w-2xl space-y-4">

              <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30 text-[#00D2FF] font-mono text-xs font-bold tracking-wider">
                BENCHMARK TELEMETRIE WORKSHOP 2026
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Timp redus cu 74% per deviz de reparație
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Prin identificarea ușoară a mașinii, completarea automată a datelor tehnice
                și aprobarea imediată direct de către client pe telefon.
              </p>

              {/* Trio Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">Rată Acceptare</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">+24%</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">față de clasic</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">Oferte / Zi</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#00D2FF] mt-1 font-mono">3.2x</div>
                  <div className="text-[10px] text-blue-200">volum procesat</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">Timp Ofertă</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 font-mono">4 min</div>
                  <div className="text-[10px] text-slate-400">de la 25 min</div>
                </div>
              </div>

              {/* Chassis label row */}
              <div className="flex items-center gap-4 pt-2 text-[11px] font-mono text-slate-500 border-t border-white/10">
                <span>CHASSIS: SPEEDFLOW V3</span>
                <span className="text-[#00D2FF] font-bold">ZERO FRICTION PIPELINE</span>
              </div>

            </div>
          </div>

        </div>


        {/* 4 Stages Comparative Cards Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Arhitectura Fluxului Comparativ</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-400">
                PIPELINE 4 ETAPE
              </span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Fiecare etapă elimină blocajele din service
            </span>
          </div>

          <div
            ref={pipelineRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardWidth = el.offsetWidth * 0.86;
              const idx = Math.round(el.scrollLeft / cardWidth);
              if (idx !== activeStage && idx >= 0 && idx < stages.length) {
                setActiveStage(idx);
              }
            }}
            className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none gap-4 pb-2 -mx-2 px-2 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-4"
          >
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.num}
                  onClick={() => scrollToPipelineStage(idx)}
                  className={`w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center rounded-3xl p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${isActive
                    ? 'bg-gradient-to-b from-[#092347] to-[#05162f] border-[#00D2FF]/50 shadow-[0_10px_30px_rgba(0,102,255,0.3)]'
                    : 'bg-[#06152b]/80 hover:bg-[#091f3d] border-white/10'
                    }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-mono ${isActive ? 'bg-[#0066FF] text-white shadow-md' : 'bg-white/10 text-slate-400'
                        }`}>
                        {stage.num}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                        {stage.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {stage.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stage.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {/* Classic */}
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                        <div className="text-[10px] text-red-400 font-mono flex items-center justify-between font-semibold">
                          <span>METODĂ CLASICĂ</span>
                          <span>{stage.classic.time}</span>
                        </div>
                        <div className="text-slate-400 mt-1 text-[11px] leading-tight">
                          {stage.classic.text}
                        </div>
                      </div>

                      {/* SAMpro Cloud */}
                      <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/30 text-xs">
                        <div className="text-[10px] text-[#00D2FF] font-mono flex items-center justify-between font-bold">
                          <span>SAMPRO CLOUD</span>
                          <span>{stage.sampro.time}</span>
                        </div>
                        <div className="text-slate-100 mt-1 text-[11px] leading-tight font-medium">
                          {stage.sampro.text}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Impact</span>
                    <span className="text-emerald-400 font-mono font-bold">{stage.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel Indicators for Pipeline 4 Etape (< md) */}
          <div className="md:hidden flex items-center justify-between pt-2 px-1">
            <button
              type="button"
              onClick={() => scrollToPipelineStage(activeStage - 1)}
              disabled={activeStage === 0}
              className="p-1.5 rounded-full bg-white/10 text-white disabled:opacity-30 transition-all cursor-pointer"
              aria-label="Etapa anterioară"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {stages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToPipelineStage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeStage === idx
                    ? 'w-6 bg-[#00D2FF]'
                    : 'w-2 bg-white/20'
                    }`}
                  aria-label={`Sari la etapa ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToPipelineStage(activeStage + 1)}
              disabled={activeStage === stages.length - 1}
              className="p-1.5 rounded-full bg-white/10 text-white disabled:opacity-30 transition-all cursor-pointer"
              aria-label="Etapa următoare"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Keynote Accelerating SVG Graph */}
        <div className="rounded-3xl bg-[#06152b]/90 border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Curba de Accelerare a Vânzărilor (RON / Consilier / Lună)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Cum accelerează SAMpro performanța unui consilier în primele 6 luni
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#00D2FF] relative flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] absolute shadow-[0_0_8px_#00D2FF]"></span>
                </span>
                <span className="text-white font-semibold">Consilier asistat de SAMpro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-0.5 border-t border-dashed border-slate-400 relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-slate-400 absolute"></span>
                </span>
                <span className="text-slate-400">Consilier tradițional</span>
              </div>
            </div>
          </div>

          {/* Native High-Fidelity SVG Graph */}
          <div className="w-full overflow-x-auto bg-black/40 rounded-2xl p-4 sm:p-6 border border-white/5">
            <svg viewBox="0 0 920 380" className="w-full min-w-[700px] h-auto overflow-visible select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="samproGraphGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#00D2FF" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGlowG" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="35%" stopColor="#0080ff" />
                  <stop offset="100%" stopColor="#00D2FF" />
                </linearGradient>
                <filter id="badgeShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#10b981" floodOpacity="0.3" />
                </filter>
                <filter id="pointGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00D2FF" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* Grid Lines */}
              <line x1="85" y1="50" x2="840" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="85" y1="105" x2="840" y2="105" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="85" y1="160" x2="840" y2="160" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="85" y1="215" x2="840" y2="215" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="85" y1="270" x2="840" y2="270" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              
              {/* X Axis Base Line */}
              <line x1="85" y1="325" x2="840" y2="325" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />

              {/* Y-axis Labels */}
              <text x="75" y="54" fill="#94a3b8" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">220k lei</text>
              <text x="75" y="109" fill="#94a3b8" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">200k lei</text>
              <text x="75" y="164" fill="#94a3b8" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">160k lei</text>
              <text x="75" y="219" fill="#94a3b8" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">120k lei</text>
              <text x="75" y="274" fill="#94a3b8" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">80k lei</text>
              <text x="75" y="329" fill="#94a3b8" fontSize="12" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">40k lei</text>
              <text x="75" y="342" fill="#64748b" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="end">0</text>

              {/* X-axis Labels */}
              <text x="135" y="352" fill="#94a3b8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">Luna 1</text>
              <text x="260" y="352" fill="#94a3b8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">Luna 2</text>
              <text x="385" y="352" fill="#94a3b8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">Luna 3</text>
              <text x="510" y="352" fill="#94a3b8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">Luna 4</text>
              <text x="635" y="352" fill="#94a3b8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">Luna 5</text>
              <text x="760" y="352" fill="#94a3b8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">Luna 6</text>

              {/* Bracket / reference line at Month 6 for difference */}
              <path d="M 770 94 Q 782 94 782 104 L 782 183 Q 782 193 792 193 Q 782 193 782 203 L 782 283 Q 782 293 770 293" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Traditional Line & Dots */}
              <path
                d="M 135 327 L 260 320 L 385 313 L 510 307 L 635 300 L 760 293"
                stroke="#64748b"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                fill="none"
              />

              {/* SAMpro Area Fill */}
              <path
                d="M 135 327 C 195 327 220 305 260 294 C 310 280 345 245 385 235 C 430 224 470 205 510 198 C 555 190 595 170 635 162 C 685 152 720 115 760 92 L 760 325 L 135 325 Z"
                fill="url(#samproGraphGradient)"
              />

              {/* SAMpro Curved Path */}
              <path
                d="M 135 327 C 195 327 220 305 260 294 C 310 280 345 245 385 235 C 430 224 470 205 510 198 C 555 190 595 170 635 162 C 685 152 720 115 760 92"
                stroke="url(#lineGlowG)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Traditional Dots & Text Labels (below dots) */}
              {/* Luna 1: 38.000 lei */}
              <circle cx="135" cy="327" r="4.5" fill="#64748b" stroke="#0a192f" strokeWidth="2" />
              <text x="135" y="344" fill="#94a3b8" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle">38.000 lei</text>

              {/* Luna 2: 43.000 lei */}
              <circle cx="260" cy="320" r="4.5" fill="#64748b" stroke="#0a192f" strokeWidth="2" />
              <text x="260" y="338" fill="#94a3b8" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle">43.000 lei</text>

              {/* Luna 3: 48.000 lei */}
              <circle cx="385" cy="313" r="4.5" fill="#64748b" stroke="#0a192f" strokeWidth="2" />
              <text x="385" y="331" fill="#94a3b8" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle">48.000 lei</text>

              {/* Luna 4: 53.000 lei */}
              <circle cx="510" cy="307" r="4.5" fill="#64748b" stroke="#0a192f" strokeWidth="2" />
              <text x="510" y="325" fill="#94a3b8" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle">53.000 lei</text>

              {/* Luna 5: 58.000 lei */}
              <circle cx="635" cy="300" r="4.5" fill="#64748b" stroke="#0a192f" strokeWidth="2" />
              <text x="635" y="318" fill="#94a3b8" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle">58.000 lei</text>

              {/* Luna 6: 63.000 lei */}
              <circle cx="760" cy="293" r="4.5" fill="#64748b" stroke="#0a192f" strokeWidth="2" />
              <text x="760" y="312" fill="#94a3b8" fontSize="11" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle">63.000 lei</text>

              {/* SAMpro Dots & Text Labels (above dots) */}
              {/* Luna 1: 38.000 lei */}
              <circle cx="135" cy="327" r="5" fill="#00D2FF" stroke="#ffffff" strokeWidth="2" filter="url(#pointGlow)" />
              <text x="135" y="312" fill="#ffffff" fontSize="11.5" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">38.000 lei</text>

              {/* Luna 2: 62.000 lei */}
              <circle cx="260" cy="294" r="5" fill="#00D2FF" stroke="#ffffff" strokeWidth="2" filter="url(#pointGlow)" />
              <text x="260" y="278" fill="#ffffff" fontSize="11.5" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">62.000 lei</text>

              {/* Luna 3: 105.000 lei */}
              <circle cx="385" cy="235" r="5" fill="#00D2FF" stroke="#ffffff" strokeWidth="2" filter="url(#pointGlow)" />
              <text x="385" y="220" fill="#ffffff" fontSize="11.5" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">105.000 lei</text>

              {/* Luna 4: 132.000 lei */}
              <circle cx="510" cy="198" r="5" fill="#00D2FF" stroke="#ffffff" strokeWidth="2" filter="url(#pointGlow)" />
              <text x="510" y="183" fill="#ffffff" fontSize="11.5" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">132.000 lei</text>

              {/* Luna 5: 158.000 lei */}
              <circle cx="635" cy="162" r="5" fill="#00D2FF" stroke="#ffffff" strokeWidth="2" filter="url(#pointGlow)" />
              <text x="635" y="147" fill="#ffffff" fontSize="11.5" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">158.000 lei</text>

              {/* Luna 6: 208.000 lei */}
              <circle cx="760" cy="92" r="6" fill="#00D2FF" stroke="#ffffff" strokeWidth="2.5" filter="url(#pointGlow)" />
              <text x="760" y="73" fill="#ffffff" fontSize="12.5" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle">208.000 lei</text>

              {/* Delta Callout Badge: +145.000 lei / lună */}
              <g transform="translate(710, 172)" filter="url(#badgeShadow)">
                <rect x="0" y="0" width="186" height="38" rx="8" fill="#10b981" />
                <path d="M 16 23 L 26 13 M 26 13 L 20 13 M 26 13 L 26 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="34" y="24" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="system-ui, sans-serif">+145.000 lei / lună</text>
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};
