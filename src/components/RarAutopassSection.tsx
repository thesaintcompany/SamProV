import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Award,
  Send,
  MousePointerClick
} from 'lucide-react';

interface RarAutopassSectionProps {
  onScrollToSimulator: () => void;
  onOpenDemo: () => void;
}

export const RarAutopassSection: React.FC<RarAutopassSectionProps> = ({ onScrollToSimulator, onOpenDemo }) => {
  return (
    <section id="rar-autopass" className="py-24 sm:py-32 bg-white dark:bg-[#020b1b] relative overflow-hidden text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Vision */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-400/30 text-xs font-rounded font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              CONFORMITATE RAR AUTOPASS. DIN PRIMUL CLIC.
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Tu Decizi Când și Pentru Ce Mașină <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-[#0066FF] dark:from-emerald-400 dark:via-teal-300 dark:to-[#00D2FF]">
                Se Trimite Raportul RAR.
              </span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              RAR Autopass este obligatoriu pentru fiecare service autorizat. Dar obligația nu trebuie să însemne haos. <strong>SAMpro îți dă controlul complet</strong>: la finalul lucrării, cu <strong>un singur clic</strong>, trimiți raportul de kilometraj și intervenție pentru <strong>mașina pe care o alegi tu</strong> — fără să intri în alte portaluri, fără reintroducere de date, fără să aștepți.
            </p>

            {/* Key Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#06152b] border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                  <MousePointerClick className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Un Clic. O Mașină. Raport Trimis.</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    La finalul lucrării, consilierul selectează mașina din listă și apasă <strong>Trimite la RAR</strong>. Sistemul preia automat kilometrajul, lucrările efectuate și datele vehiculului — și le transmite conform normativelor în vigoare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#06152b] border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-[#0066FF] dark:text-[#00D2FF] flex items-center justify-center shrink-0 font-bold">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Tu Ești în Control. Nu Sistemul.</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Nu se trimite nimic automat, fără știrea ta. Fiecare raport pleacă doar când decizi tu și doar pentru mașina pe care o selectezi. Ai libertatea de a alege momentul potrivit, fără presiune și fără erori.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#06152b] border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Conformitate Totală. Liniște Deplină.</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Toate raportările sunt înregistrate, trasabile și conforme cu cerințele RAR Autopass. La un control, totul este la locul lui — pentru că sistemul lucrează pentru tine, nu împotriva ta.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToSimulator}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <span>Simulează Trimiterea la RAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-white/15 transition-all cursor-pointer"
              >
                Solicită Integrarea în Service
              </button>
            </div>

          </div>

          {/* Right Column: Visual Certificate / Autopass Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#071d3d] via-[#061c38] to-[#041226] border-2 border-emerald-400/40 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-sm">
                    RAR
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">RAPORTARE AUTOPASS</div>
                    <div className="font-bold text-white text-sm">Confirmare Trimitere</div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                  TRIMIS CU SUCCES
                </span>
              </div>

              {/* Certificate Inner Preview */}
              <div className="py-4 space-y-3.5 text-xs">
                
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 font-mono">
                  <div className="text-[10px] text-slate-400">VEHICUL SELECTAT PENTRU RAPORTARE:</div>
                  <div className="text-white font-bold text-sm">Audi A6 Avant 2.0 TDI (CJ 88 SAM)</div>
                  <div className="text-[11px] text-[#00D2FF]">VIN: WAUZZZ4G1EN049821</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-400 text-[10px] block">ODOMETRU RAPORTAT</span>
                    <span className="text-white font-bold text-sm">142.850 KM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-400 text-[10px] block">DATA TRIMITERII</span>
                    <span className="text-emerald-400 font-bold text-sm">03.10.2026</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] space-y-1">
                  <div className="font-bold text-slate-200">Lucrări Incluse în Raport:</div>
                  <div className="text-slate-400">• Kit distribuție + pompă apă (Garanție 24 luni)</div>
                  <div className="text-slate-400">• Sistem frânare punte față verificat și conform</div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10">
                  <span>Generat automat de SAMpro</span>
                  <span className="text-emerald-400">Semnătură Digitală Securizată</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};