import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  ArrowRight
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [hoists, setHoists] = useState<number>(4);
  const [dailyQuotes, setDailyQuotes] = useState<number>(12);
  const [avgTicket, setAvgTicket] = useState<number>(1400); // RON

  // Calculations based on PRD KPIs:
  // - 21 min saved per quote (from 25 to 4 min)
  // - Working days / month: 22
  // - Total quotes / month = dailyQuotes * 22
  const totalQuotesMonth = dailyQuotes * 22;
  const hoursSavedMonth = Math.round((totalQuotesMonth * 21) / 60);

  // Conversion increase: conservative +20% on quotes that would have been rejected/abandoned
  const additionalQuotesApproved = Math.round(totalQuotesMonth * 0.20);
  const additionalRevenueMonth = additionalQuotesApproved * avgTicket;

  // Approximate SAMpro Pro plan cost = 1289 RON
  const estimatedSoftwareCost = hoists <= 2 ? 690 : 1289;
  const netProfitMonth = additionalRevenueMonth - estimatedSoftwareCost;
  const roiMultiplier = (additionalRevenueMonth / estimatedSoftwareCost).toFixed(1);

  return (
    <section id="calculator-roi" className="py-24 sm:py-32 bg-white dark:bg-[#041024] relative overflow-hidden text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 dark:bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 dark:bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-rounded font-bold tracking-wider text-[#0066FF] dark:text-[#00D2FF] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            CALCULATOR RENTABILITATE &amp; ORE ECONOMISITE
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Cât Câștigă Service-ul Tău cu SAMpro?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Reglează parametrii atelierului tău pentru a vedea numărul de ore economisite la recepție și veniturile suplimentare generate prin aprobarea 1-tap a devizelor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#07172f]/90 border border-slate-200 dark:border-white/10 space-y-6 shadow-xs dark:shadow-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <span className="font-bold text-slate-900 dark:text-white text-base">Date Atelier Auto</span>
              <span className="text-xs font-mono text-[#0066FF] dark:text-[#00D2FF] font-semibold">Parametri Ajustabili</span>
            </div>

            {/* Slider 1: Elevatoare */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-700 dark:text-slate-300 font-medium">Număr Elevatoare / Posturi:</label>
                <span className="font-mono font-black text-slate-900 dark:text-white text-lg px-3 py-0.5 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-transparent shadow-xs">
                  {hoists} {hoists === 1 ? 'post' : 'elevatoare'}
                </span>
              </div>
              <input 
                type="range" 
                min={1} 
                max={15} 
                value={hoists} 
                onChange={(e) => setHoists(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF] dark:accent-[#00D2FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>1 elevator</span>
                <span>8 mediu</span>
                <span>15+ flotă</span>
              </div>
            </div>

            {/* Slider 2: Devize / zi */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-700 dark:text-slate-300 font-medium">Devize / Oferte emise pe zi:</label>
                <span className="font-mono font-black text-[#0066FF] dark:text-[#00D2FF] text-lg px-3 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-transparent">
                  {dailyQuotes} devize/zi
                </span>
              </div>
              <input 
                type="range" 
                min={2} 
                max={40} 
                value={dailyQuotes} 
                onChange={(e) => setDailyQuotes(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF] dark:accent-[#00D2FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2/zi</span>
                <span>15/zi</span>
                <span>40/zi</span>
              </div>
            </div>

            {/* Slider 3: Valoare medie deviz */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-700 dark:text-slate-300 font-medium">Valoare medie deviz (Piese + Manoperă):</label>
                <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 text-lg px-3 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-transparent">
                  {avgTicket.toLocaleString('ro-RO')} lei
                </span>
              </div>
              <input 
                type="range" 
                min={400} 
                max={4500} 
                step={50}
                value={avgTicket} 
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 dark:accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>400 lei</span>
                <span>1.400 lei</span>
                <span>4.500 lei</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-white">Calcul bazat pe date reale din service-uri:</div>
              <div>• 21 minute economisite per deviz prin autocompletare RAR și coduri piese.</div>
              <div>• +20% creștere a acceptanței devizelor prin aprobare direct pe WhatsApp.</div>
            </div>

          </div>

          {/* Results Right Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#071d3d] via-[#082a58] to-[#051833] border-2 border-[#00D2FF]/40 space-y-6 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-gradient-to-l from-emerald-500 to-teal-500 text-white font-mono font-bold text-xs uppercase tracking-wider">
              {roiMultiplier}x ROI Estimat
            </div>

            <div>
              <span className="text-xs uppercase font-mono font-bold text-[#00D2FF]">
                REZULTAT ESTIMAT LUNAR PENTRU ATELIERUL TĂU
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Performanță Multiplicată
              </h3>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <Clock className="w-4 h-4 text-[#00D2FF]" />
                  Timp Economisit
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1 font-mono">
                  {hoursSavedMonth} ore
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  echivalentul a {(hoursSavedMonth / 8).toFixed(1)} zile de lucru consilier
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Devize Suplimentare
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 font-mono">
                  +{additionalQuotesApproved}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  aprobate din cele trimise pe WhatsApp
                </div>
              </div>

            </div>

            {/* Big Cash Card */}
            <div className="p-5 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 space-y-1">
              <div className="text-xs font-mono uppercase text-emerald-300 font-bold flex items-center justify-between">
                <span>Venit Suplimentar Generat / Lună:</span>
                <span className="text-white bg-emerald-600/40 px-2 py-0.5 rounded text-[10px]">Net Atelier</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                +{additionalRevenueMonth.toLocaleString('ro-RO')} RON
              </div>
              <div className="text-xs text-emerald-200/80 pt-1">
                După scăderea abonamentului SAMpro ({estimatedSoftwareCost} lei/lună), rămâi cu un profit net suplimentar de <strong>+{netProfitMonth.toLocaleString('ro-RO')} lei/lună</strong>.
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] hover:from-[#0072ff] hover:to-[#00d8ff] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Vreau aceste rezultate în service-ul meu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
