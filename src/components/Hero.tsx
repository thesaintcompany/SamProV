import React from 'react';
import { 
  Rocket, 
  Play, 
  Shield, 
  CheckCircle, 
  Clock, 
  Wrench, 
  Check, 
  Sparkles,
  TrendingUp,
  FileCheck
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToSimulator }) => {
  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-32 overflow-hidden bg-gradient-to-b from-[#020b1b] via-[#04132b] to-[#020b1b] text-white">
      
      {/* Dynamic Ambient Blur Glows */}
      <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-[#0066FF]/20 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-10 w-[600px] h-[450px] bg-[#00D2FF]/15 rounded-full blur-[130px] pointer-events-none -z-0"></div>
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 grid-matrix opacity-25 pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Notification Announcement */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping"></span>
            <span className="font-bold text-[#00D2FF]">SAMpro Cloud 3.4</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Viteză de Formula 1 pentru Service-ul Tău</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Conectare Oficială RAR Autopass Activă</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Proposition, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#00D2FF] font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#00D2FF]" />
                SISTEMUL CLOUD ERP / CRM PENTRU MANAGEMENTUL SERVICE-URILOR AUTO
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-black tracking-tight leading-[1.06] text-white">
                Tot ce ai nevoie,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#74b3ff] to-[#00D2FF]">
                  într-un singur loc.
                </span>
              </h1>

              <p className="text-2xl sm:text-3xl font-extrabold text-[#00D2FF] tracking-tight">
                Simplu. Rapid. Eficient. Uman.
              </p>
            </div>

            {/* Cyan Speed Line Accent */}
            <div className="h-1.5 w-28 bg-gradient-to-r from-[#00D2FF] to-[#0066FF] rounded-full shadow-[0_0_15px_rgba(0,210,255,0.7)]"></div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              Platforma inteligentă care combină <strong>viteza și precizia Formulei 1</strong> cu încrederea totală a clienților. Devize aprobate în 45 de secunde direct pe WhatsApp, sincronizare securizată cu <strong>Registrul Auto Român (RAR Autopass)</strong> și gestiune completă de la elevator la factură.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#0050cb] hover:from-[#0072ff] hover:to-[#005ce6] text-white font-bold text-base rounded-full shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(0,210,255,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 group border border-blue-300/30"
              >
                <Rocket className="w-5 h-5 mr-2.5 text-[#00D2FF] group-hover:rotate-12 transition-transform" />
                <span>Încearcă Gratuit 14 Zile</span>
              </button>

              <button
                onClick={onScrollToSimulator}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 hover:border-[#00D2FF]/50 backdrop-blur-md transition-all duration-300 active:scale-95 group"
              >
                <div className="w-7 h-7 rounded-full bg-[#0066FF]/30 border border-[#00D2FF]/40 flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-[#00D2FF] text-[#00D2FF] ml-0.5" />
                </div>
                <span>Vezi Simulator Live</span>
              </button>
            </div>

            {/* Live Benchmarks Trio */}
            <div className="pt-4 grid grid-cols-3 gap-3 w-full border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <Clock className="w-3 h-3 text-[#00D2FF]" />
                  Timp Deviz
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5 font-tabular">4 min</div>
                <div className="text-[10px] text-emerald-400 font-semibold">-74% vs clasic</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  Aprobare WhatsApp
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#00D2FF] mt-0.5 font-tabular">+35%</div>
                <div className="text-[10px] text-slate-400">închidere 1-tap</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <Shield className="w-3 h-3 text-blue-400" />
                  Erori Piese
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5 font-tabular">0</div>
                <div className="text-[10px] text-slate-400">verificare OEM</div>
              </div>
            </div>

          </div>

          {/* Right Column: F1 Car Composition + Interactive Mobile Overlay Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[560px]">
            
            {/* Speed Light Streak Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 via-[#00D2FF]/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>

            {/* F1 Car Machine Asset */}
            <div className="relative w-full z-10 select-none">
              <img
                src="/assets/f1-car.png"
                alt="SAMpro Formula 1 Speed Car"
                className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,102,255,0.45)] transform hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-[#0066FF]/30 blur-xl rounded-full pointer-events-none"></div>
            </div>

            {/* Live Mobile Telemetry Device Floating Preview */}
            <div className="relative lg:absolute lg:top-4 lg:right-2 z-20 w-full max-w-[280px] sm:max-w-[310px] rounded-[32px] p-4 bg-[#0a1528]/90 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_25px_rgba(0,102,255,0.3)] mt-6 lg:mt-0">
              
              {/* Device Dynamic Pill Notch */}
              <div className="w-24 h-4 bg-black/80 rounded-full mx-auto mb-3 flex items-center justify-between px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse"></span>
                <span className="text-[9px] font-mono text-slate-400">SAMpro</span>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center font-bold text-xs text-white">
                    SP
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Service Auto Expert</div>
                    <div className="text-xs font-bold text-white">București Hub #1</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  8 Elevatoare
                </span>
              </div>

              {/* Metric Card */}
              <div className="my-2.5 p-3 rounded-xl bg-gradient-to-r from-[#0066FF]/40 to-[#00D2FF]/20 border border-blue-400/30">
                <div className="flex items-center justify-between text-[11px] text-blue-200">
                  <span>Încasări Estimate Azi</span>
                  <span className="text-emerald-400 font-bold font-mono">+28%</span>
                </div>
                <div className="text-xl font-black text-white font-tabular mt-0.5">
                  18.420 RON
                </div>
                <div className="text-[10px] text-slate-300">12 mașini pe flux • 0 întârzieri</div>
              </div>

              {/* Live Queue Cards */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0066FF]/20 text-[#00D2FF] flex items-center justify-center font-bold">
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white font-mono text-[11px]">B 123 PRO (BMW G30)</div>
                      <div className="text-[10px] text-slate-400">Distribuție + Pompă apă</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    Aprobat WhatsApp
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center font-bold">
                      <FileCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white font-mono text-[11px]">CJ 88 SAM (Audi A6)</div>
                      <div className="text-[10px] text-slate-400">Verificare RAR Autopass</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[#00D2FF] text-[10px] font-bold">
                    Validat RAR
                  </span>
                </div>
              </div>

              {/* Action button in phone */}
              <button 
                onClick={onScrollToSimulator}
                className="mt-3 w-full py-2 rounded-xl bg-[#0066FF] hover:bg-[#0072ff] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Deschide Simulatorul Interactiv</span>
                <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Speed Wave Transition Curve to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg 
          className="relative block w-full h-8 sm:h-16 text-[#041024]" 
          viewBox="0 0 1440 80" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>

    </section>
  );
};
