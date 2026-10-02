import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  Award
} from 'lucide-react';

interface RarAutopassSectionProps {
  onScrollToSimulator: () => void;
  onOpenDemo: () => void;
}

export const RarAutopassSection: React.FC<RarAutopassSectionProps> = ({ onScrollToSimulator, onOpenDemo }) => {
  return (
    <section id="rar-autopass" className="py-24 sm:py-32 bg-[#020b1b] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Vision */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs font-mono font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              CONECTARE OFICIALĂ REGISTRUL AUTO ROMÂN
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Transformă Obligația Legală RAR într-un <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00D2FF]">
                Certificat de Încredere &amp; Siguranță
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Pentru multe ateliere, raportarea către RAR este o corvoadă birocratică. <strong>SAMpro transformă această cerință într-un avantaj competitiv uriaș</strong>: fiecare mașină care iese din service-ul tău primește un <strong>Pașaport Tehnic de Calitate și Siguranță</strong> oficial.
            </p>

            {/* Key Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#06152b] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Validare Instantă a Odometrului (Km Reali)</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Sistemul compară kilometrajul declarat la intrarea pe elevator cu istoricul înregistrat oficial la fiecare ITP anterior, alertând consilierul în cazul oricărei discrepanțe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#06152b] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#00D2FF] flex items-center justify-center shrink-0 font-bold">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Raportare Automată la Ieșirea din Service</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Datele intervenției și kilometrajul se transmit direct conform normativelor RAR Autopass, fără a fi nevoie de reintroducerea manuală a datelor în alte portaluri.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#06152b] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Păstrarea Valorii de Revânzare a Mașinii Clientului</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Clientul primește confirmarea certă că mașina sa este conformă la cele mai înalte standarde naționale, garantând istoricul real pentru viitorii cumpărători.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToSimulator}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all"
              >
                <span>Simulează o Căutare RAR Autopass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all"
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
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">CONFORMITATE OFICIALĂ</div>
                    <div className="font-bold text-white text-sm">Pașaport Tehnic &amp; Siguranță</div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                  VALIDAT 100%
                </span>
              </div>

              {/* Certificate Inner Preview */}
              <div className="py-4 space-y-3.5 text-xs">
                
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 font-mono">
                  <div className="text-[10px] text-slate-400">VEHICUL ASOCIAT:</div>
                  <div className="text-white font-bold text-sm">Audi A6 Avant 2.0 TDI (CJ 88 SAM)</div>
                  <div className="text-[11px] text-[#00D2FF]">VIN: WAUZZZ4G1EN049821</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-400 text-[10px] block">ODOMETRU CERTIFICAT</span>
                    <span className="text-white font-bold text-sm">142.850 KM</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-400 text-[10px] block">VALABILITATE ITP</span>
                    <span className="text-emerald-400 font-bold text-sm">14.11.2026</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] space-y-1">
                  <div className="font-bold text-slate-200">Lucrări Atestate în Registrul Național:</div>
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
