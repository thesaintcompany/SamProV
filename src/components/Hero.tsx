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
  BarChart2, 
  ArrowUp,
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
      color: 'bg-[#2563eb]',
      shadow: 'shadow-blue-500/25',
      href: '#module'
    },
    {
      title: 'Oferte',
      desc: 'Generează rapid oferte personalizate.',
      icon: Tag,
      color: 'bg-[#8b5cf6]',
      shadow: 'shadow-purple-500/25',
      href: '#module'
    },
    {
      title: 'Protecție Cod Piese',
      desc: 'Verifică și protejează codurile pieselor.',
      icon: ShieldCheck,
      color: 'bg-[#10b981]',
      shadow: 'shadow-emerald-500/25',
      href: '#module'
    },
    {
      title: 'Integrare RAR Autopass',
      desc: 'Accesează datele istoricului și validează ITP.',
      icon: Car,
      color: 'bg-[#f59e0b]',
      shadow: 'shadow-amber-500/25',
      href: '#rar-autopass'
    },
    {
      title: 'Integrare Clienți CRM',
      desc: 'Gestionează relația cu clienții, simplu.',
      icon: Users,
      color: 'bg-[#6366f1]',
      shadow: 'shadow-indigo-500/25',
      href: '#module'
    }
  ];

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#f2f7ff] via-white to-[#f8faff] dark:from-[#020b1b] dark:via-[#04132b] dark:to-[#020b1b] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Dynamic Ambient Background Studio Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-blue-400/10 dark:bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-cyan-400/10 dark:bg-[#00D2FF]/10 rounded-full blur-[130px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Headlines, Value Proposition, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf3ff] dark:bg-blue-500/15 border border-[#d0e3ff] dark:border-blue-400/25 text-[#0066FF] dark:text-[#00D2FF] text-[11px] font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 fill-[#0066FF] text-[#0066FF] dark:fill-[#00D2FF] dark:text-[#00D2FF]" />
              <span>MANAGEMENT INTELIGENT 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
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
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(0,102,255,0.35)] hover:shadow-[0_14px_30px_rgba(0,102,255,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
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

          {/* Right Column: F1 Car Composition with Floating Telemetry Badges */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
            
            {/* Top Floating Glass Card: Mai multă productivitate */}
            <div className="absolute top-2 sm:top-6 right-2 sm:right-6 z-20 bg-white/95 dark:bg-[#0a1528]/90 backdrop-blur-xl border border-white/80 dark:border-white/15 rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-in fade-in duration-500">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D2FF] text-white shadow-sm shadow-blue-500/30">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  Mai multă productivitate
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Procese automatizate. Timp economisit.
                </div>
              </div>
            </div>

            {/* Center Asset: F1 Race Car */}
            <div className="relative w-full z-10 select-none py-6">
              <img
                src="/assets/f1-car.png"
                alt="SAMpro Formula 1 Speed Car"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,102,255,0.25)] dark:drop-shadow-[0_25px_45px_rgba(0,102,255,0.45)] transform hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Studio floor reflection shadow */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent blur-xl rounded-full pointer-events-none"></div>
            </div>

            {/* Bottom Floating Pill Badge: +37% Eficiență operațională */}
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-6 z-20 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0095ff] text-white shadow-[0_10px_25px_rgba(0,102,255,0.4)] animate-in fade-in duration-700">
              <div className="flex items-center gap-1 font-black text-xs sm:text-sm">
                <ArrowUp className="w-3.5 h-3.5 stroke-[3]" />
                <span>+37%</span>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-white/95">
                Eficiență operațională
              </span>
              <BarChart2 className="w-3.5 h-3.5 opacity-90" />
            </div>

          </div>

        </div>

        {/* Bottom Feature Cards (Bento row under the Hero) */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {bottomCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className="bg-white dark:bg-[#07162c] rounded-2xl p-5 border border-slate-100 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_12px_30px_rgba(0,102,255,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${card.color} ${card.shadow} shadow-md text-white flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-4 leading-tight group-hover:text-[#0066FF] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 group-hover:bg-[#0066FF] text-slate-400 group-hover:text-white flex items-center justify-center transition-colors self-end mt-4">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>

    </section>
  );
};
