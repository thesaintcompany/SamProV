import React, { useState } from 'react';
import { Zap } from 'lucide-react';

export const PerformanceDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2); // Default on WhatsApp closing

  const stages = [
    {
      num: '01',
      tag: 'INTAKE',
      title: 'Identificare & VIN',
      desc: 'Scanare număr înmatriculare și preluare automată date tehnice vehicul.',
      classic: { time: '~8 min', text: 'Tastare manuală talon, căutare serii de șasiu în programe deconectate.' },
      sampro: { time: '30 sec', text: 'Autocompletare RAR Autopass + istoric instantaneu pe ecran.' },
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
      title: 'Aprobare WhatsApp',
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
    <section id="performanta" className="py-24 sm:py-32 bg-[#020b1b] relative overflow-hidden text-white">
      
      {/* Halo Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Apple Style Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono font-bold text-[#00D2FF]">
            <Zap className="w-3.5 h-3.5" />
            IMPACT MĂSURAT PE CONSILIERI SERVICE &amp; VÂNZĂRI
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Viteza de Formula 1 Adusă în <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0066FF] to-blue-400">
              Performanța Consilierilor SAMpro
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Analiză comparativă pas cu pas: cum fluxul digital SAMpro transformă un consilier auto tradițional într-un top-performer de înaltă precizie.
          </p>
        </div>

        {/* F1 Car Benchmark Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#061833] via-[#08244c] to-[#041226] border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30 text-[#00D2FF] font-mono text-xs font-bold tracking-wider">
                BENCHMARK TELEMETRIE WORKSHOP 2026
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Timp redus cu 74% per deviz de reparație
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Prin scanarea rapidă a numărului de înmatriculare, preluarea oficială a istoricului RAR Autopass și aprobarea imediată pe WhatsApp direct de către client.
              </p>

              {/* Trio Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">Rată Acceptare</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">+24%</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">față de clasic</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">Oferte / Zi</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#00D2FF] mt-1 font-mono">3.2x</div>
                  <div className="text-[10px] text-blue-200">volum procesat</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">Timp Ofertă</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 font-mono">4 min</div>
                  <div className="text-[10px] text-slate-400">de la 25 min</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-[#00D2FF]/20 blur-2xl rounded-full scale-90 group-hover:scale-100 transition-all duration-700"></div>
                <img 
                  src="/assets/f1-car.png" 
                  alt="SAMpro F1 Speed Car" 
                  className="relative z-10 w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,102,255,0.4)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between w-full mt-2 px-3 text-[11px] font-mono text-slate-400 border-t border-white/10 pt-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.num}
                  onClick={() => setActiveStage(idx)}
                  className={`rounded-3xl p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#092347] to-[#05162f] border-[#00D2FF]/50 shadow-[0_10px_30px_rgba(0,102,255,0.3)]' 
                      : 'bg-[#06152b]/80 hover:bg-[#091f3d] border-white/10'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-mono ${
                        isActive ? 'bg-[#0066FF] text-white shadow-md' : 'bg-white/10 text-slate-400'
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
        </div>

        {/* Dynamic Keynote Accelerating SVG Graph */}
        <div className="rounded-3xl bg-[#06152b]/90 border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Curba de Accelerare a Vânzărilor (RON / Consilier / Lună)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Comparație pe 6 luni între un flux tradițional fragmentat și un service echipat cu SAMpro
              </p>
            </div>

            <div className="flex items-center gap-5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00D2FF]"></span>
                <span className="text-white font-bold">Consilier SAMpro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                <span className="text-slate-400">Consilier Tradițional</span>
              </div>
            </div>
          </div>

          {/* Native SVG Graph */}
          <div className="w-full overflow-hidden bg-black/50 rounded-2xl p-4 sm:p-6 border border-white/5">
            <svg viewBox="0 0 800 240" className="w-full h-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="samproGraphGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGlowG" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2997ff" />
                  <stop offset="50%" stopColor="#0066FF" />
                  <stop offset="100%" stopColor="#00D2FF" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid lines */}
              <line x1="50" y1="30" x2="780" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="50" y1="80" x2="780" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="50" y1="130" x2="780" y2="130" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="50" y1="180" x2="780" y2="180" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

              {/* Y-axis values */}
              <text x="40" y="34" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">180k</text>
              <text x="40" y="84" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">120k</text>
              <text x="40" y="134" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">70k</text>
              <text x="40" y="184" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">30k</text>

              {/* X-axis months */}
              <text x="70" y="225" fill="#64748b" fontSize="10" fontFamily="monospace">Luna 1</text>
              <text x="210" y="225" fill="#64748b" fontSize="10" fontFamily="monospace">Luna 2</text>
              <text x="350" y="225" fill="#64748b" fontSize="10" fontFamily="monospace">Luna 3</text>
              <text x="490" y="225" fill="#64748b" fontSize="10" fontFamily="monospace">Luna 4</text>
              <text x="630" y="225" fill="#64748b" fontSize="10" fontFamily="monospace">Luna 5</text>
              <text x="760" y="225" fill="#64748b" fontSize="10" fontFamily="monospace">Luna 6</text>

              {/* Baseline Traditional Flat Curve */}
              <path 
                d="M 70 170 Q 210 165 350 155 T 490 148 T 630 142 T 760 138" 
                stroke="#64748b" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                fill="none" 
                strokeDasharray="6 4" 
              />

              {/* SAMpro Area Fill */}
              <path 
                d="M 70 170 Q 210 135 350 90 T 490 60 T 630 40 T 760 25 L 760 210 L 70 210 Z" 
                fill="url(#samproGraphGradient)" 
              />

              {/* SAMpro Dynamic Curve */}
              <path 
                d="M 70 170 Q 210 135 350 90 T 490 60 T 630 40 T 760 25" 
                stroke="url(#lineGlowG)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none" 
              />

              {/* Nodes */}
              <circle cx="70" cy="170" r="4" fill="#00D2FF" />
              <circle cx="350" cy="90" r="5" fill="#00D2FF" stroke="#ffffff" strokeWidth="2" />
              <circle cx="760" cy="25" r="6" fill="#00D2FF" stroke="#ffffff" strokeWidth="2.5" />

              {/* Callout Annotation for Final Month */}
              <rect x="660" y="8" width="105" height="28" rx="6" fill="#0066FF" fillOpacity="0.9" />
              <text x="712" y="26" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">+145.000 lei</text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};
