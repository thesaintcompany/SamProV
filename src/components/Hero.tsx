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
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToSimulator }) => {
  const bottomCards = [
    {
      title: 'Calendar',
      desc: 'Programează și urmărește ușor intervențiile.',
      icon: Calendar,
      gradient: 'bg-gradient-to-b from-[#2575fc] to-[#0052cc]',
      href: '#module'
    },
    {
      title: 'Oferte',
      desc: 'Generează rapid oferte personalizate.',
      icon: Tag,
      gradient: 'bg-gradient-to-b from-[#9030ea] to-[#6a11cb]',
      href: '#module'
    },
    {
      title: 'Protecție Cod Piese',
      desc: 'Verifică și protejează codurile pieselor.',
      icon: ShieldCheck,
      gradient: 'bg-gradient-to-b from-[#00c985] to-[#00a86b]',
      href: '#module'
    },
    {
      title: 'Integrare RAR Autopass',
      desc: 'Accesează datele istoricului și validează ITP.',
      icon: Car,
      gradient: 'bg-gradient-to-b from-[#ff8c00] to-[#e65100]',
      href: '#rar-autopass'
    },
    {
      title: 'Integrare Clienți CRM',
      desc: 'Gestionează relația cu clienții, simplu.',
      icon: Users,
      gradient: 'bg-gradient-to-b from-[#6941eb] to-[#4318ff]',
      href: '#module'
    }
  ];

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#edf4ff] via-white to-[#f7faff] dark:from-[#020b1b] dark:via-[#04132b] dark:to-[#020b1b] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Studio Lighting Ambient Glows */}
      <div className="absolute top-0 right-0 w-[650px] h-[550px] bg-gradient-to-bl from-[#0066FF]/20 via-[#00D2FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-blue-300/10 dark:bg-[#0066FF]/10 rounded-full blur-[130px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Headlines, Value Proposition, CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf3ff] dark:bg-blue-500/15 border border-[#d0e3ff] dark:border-blue-400/25 text-[#0066FF] dark:text-[#00D2FF] text-[11px] font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 fill-[#0066FF] text-[#0066FF] dark:fill-[#00D2FF] dark:text-[#00D2FF]" />
              <span>MANAGEMENT INTELIGENT 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Tot ce ai nevoie,<br />
              <span className="text-[#0066FF]">
                într-un singur
              </span><br />
              loc.
            </h1>

            {/* Subtitle & Accent Line */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-500 dark:text-slate-400 tracking-tight">
                Simplu. Rapid. Eficient.
              </p>
              <div className="h-1.5 w-14 bg-[#0066FF] rounded-full shadow-xs"></div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
              Platforma completă concepută pentru ateliere mecanice, vopsitorii și mari rețele de service. De la recepție și devize în 45 de secunde, la sincronizare directă RAR și comenzi piese.
            </p>

            {/* CTAs Group */}
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
                className="inline-flex items-center gap-3 py-2 px-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-slate-200/80 dark:border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-[#0066FF] text-[#0066FF] ml-0.5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white group-hover:text-[#0066FF] transition-colors leading-tight">
                    Vezi demonstrația
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    2:18
                  </div>
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: F1 Car Composition with 100% Matched Widgets */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]">
            
            {/* Top Floating Glass Card: Mai multă productivitate (100% matched to reference) */}
            <div className="absolute top-0 sm:top-2 right-4 sm:right-16 z-20 flex flex-col items-center animate-in fade-in duration-500">
              <div className="bg-white/85 dark:bg-[#07162c]/85 backdrop-blur-xl border border-white/90 dark:border-white/15 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-[#0077ff] to-[#0055dd] text-white flex items-center justify-center shadow-md shrink-0">
                  <Activity className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    Mai multă productivitate
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-normal">
                    Procese automatizate. Timp economisit.
                  </div>
                </div>
              </div>
              
              {/* Telemetry connector dot & curved line pointing to car cockpit */}
              <div className="flex flex-col items-center -mt-0.5 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-slate-900 border-2 border-[#0066FF] shadow-xs"></div>
                <svg className="w-24 h-10 -mt-0.5 text-blue-400/50 dark:text-blue-400/40" viewBox="0 0 96 40" fill="none">
                  <path d="M 48 0 C 48 20, 85 20, 92 38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>

            {/* Center Asset: F1 Race Car Extracted with Studio Reflection */}
            <div className="relative w-full z-10 select-none pt-12 pb-6 transform scale-105 sm:scale-110 lg:scale-[1.12]">
              <img
                src="/assets/f1-car.png"
                alt="SAMpro Formula 1 Speed Car"
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_35px_rgba(0,102,255,0.22)] dark:drop-shadow-[0_25px_45px_rgba(0,102,255,0.45)] transition-transform duration-700 hover:scale-[1.01]"
              />
              {/* Studio floor glossy reflection */}
              <div className="absolute top-[82%] left-0 right-0 w-full overflow-hidden h-28 pointer-events-none opacity-30 dark:opacity-20 scale-y-[-1] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.65)_0%,transparent_75%)] blur-[0.5px]">
                <img
                  src="/assets/f1-car.png"
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Contact floor ambient shadow */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-gradient-to-r from-transparent via-slate-900/35 dark:via-blue-500/30 to-transparent blur-md rounded-full pointer-events-none"></div>
            </div>

            {/* Bottom Floating Pill Badge: +37% Eficiență operațională (100% matched to reference) */}
            <div className="absolute bottom-0 sm:bottom-2 right-2 sm:right-8 z-20 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1b6fe8]/90 dark:bg-[#0066ff]/85 backdrop-blur-md border border-white/35 shadow-[0_10px_30px_rgba(27,111,232,0.4)] text-white animate-in fade-in duration-700">
              <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm">
                <span className="text-[#22d3ee] flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 4l-7 7h4v9h6v-9h4z"/>
                  </svg>
                </span>
                <span className="tracking-tight">+37%</span>
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-white/95">
                Eficiență operațională
              </span>
              <div className="flex items-end gap-[3px] h-3.5 pl-0.5">
                <span className="w-1 h-1.5 bg-[#22d3ee] rounded-full"></span>
                <span className="w-1 h-2.5 bg-[#22d3ee] rounded-full"></span>
                <span className="w-1 h-3 bg-[#22d3ee] rounded-full"></span>
                <span className="w-1 h-3.5 bg-[#22d3ee] rounded-full"></span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Feature Cards (100% matched container & cards from screenshot) */}
        <div className="mt-14 sm:mt-16 bg-white/70 dark:bg-[#07162c]/70 backdrop-blur-2xl rounded-3xl p-3 sm:p-4 lg:p-5 border border-white/80 dark:border-white/10 shadow-[0_15px_45px_rgba(0,102,255,0.06)] dark:shadow-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {bottomCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="bg-white dark:bg-[#0b1b33] rounded-2xl p-5 border border-slate-100/80 dark:border-white/5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,102,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${card.gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base mt-4 leading-tight group-hover:text-[#0066FF] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:bg-[#0066FF] text-[#0066FF] dark:text-cyan-400 group-hover:text-white flex items-center justify-center transition-colors self-end mt-4 shadow-2xs">
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
