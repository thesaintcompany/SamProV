import React, { useState, useRef } from 'react';
import {
  Zap,
  Target,
  ShieldCheck,
  ArrowRight,
  Check,
  X,
  PhoneCall,
  Calendar,
  ClipboardCheck,
  Wrench,
  FileSpreadsheet,
  Send,
  CreditCard,
  BarChart3,
  Clock,
  Coins,
  Lock,
  Building2,
  Scale,
  Quote,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface KeyModulesProps {
  onSelectSimulatorTab?: (tab: 'whatsapp' | 'mechanic' | 'rar' | 'hoists') => void;
}

export const KeyModules: React.FC<KeyModulesProps> = ({ onSelectSimulatorTab }) => {
  const [activeStep, setActiveStep] = useState<number>(4); // Default highlighted step on WhatsApp deviz

  // Mobile carousel states for Optimizare & Siguranta
  const [activeOptimizareIndex, setActiveOptimizareIndex] = useState(0);
  const optimizareRef = useRef<HTMLDivElement>(null);

  const scrollToOptimizareCard = (idx: number) => {
    const clampedIdx = Math.max(0, Math.min(idx, 2));
    setActiveOptimizareIndex(clampedIdx);
    if (optimizareRef.current) {
      const cardWidth = optimizareRef.current.offsetWidth * 0.86;
      optimizareRef.current.scrollTo({
        left: clampedIdx * (cardWidth + 16),
        behavior: 'smooth'
      });
    }
  };

  const [activeSigurantaIndex, setActiveSigurantaIndex] = useState(0);
  const sigurantaRef = useRef<HTMLDivElement>(null);

  const scrollToSigurantaCard = (idx: number) => {
    const clampedIdx = Math.max(0, Math.min(idx, 2));
    setActiveSigurantaIndex(clampedIdx);
    if (sigurantaRef.current) {
      const cardWidth = sigurantaRef.current.offsetWidth * 0.86;
      sigurantaRef.current.scrollTo({
        left: clampedIdx * (cardWidth + 16),
        behavior: 'smooth'
      });
    }
  };

  const flowSteps = [
    { id: 1, label: 'Client sună', sub: 'Înregistrare apel', icon: PhoneCall },
    { id: 2, label: 'Programare', sub: 'Dispatch mecanic', icon: Calendar },
    { id: 3, label: 'Recepție digitală', sub: 'Scanare VIN / RAR', icon: ClipboardCheck },
    { id: 4, label: 'Diagnostic', sub: 'Constatare pe tabletă', icon: Wrench },
    { id: 5, label: 'Deviz automat', sub: 'Normare & piese OEM', icon: FileSpreadsheet },
    { id: 6, label: 'Aprobare 1-Tap', sub: 'Direct pe WhatsApp', icon: Send },
    { id: 7, label: 'Reparație', sub: 'Cronometru manoperă', icon: Clock },
    { id: 8, label: 'Factură & Follow-up', sub: 'e-Factura & recenzii', icon: CreditCard }
  ];

  const comparisonRows = [
    {
      problem: 'Date împrăștiate în 5 locuri diferite (Excel, agendă, caiete, WhatsApp privat, soft de facturare)',
      solution: 'Un singur sistem centralizat: comenzi, devize, stocuri și contabilitate conectate fără cusur.'
    },
    {
      problem: 'Telefoane pierdute, clienți uitați și apeluri la care nu mai răspunde nimeni',
      solution: 'Fiecare client este preluat automat, cu istoric complet și memento-uri programate.'
    },
    {
      problem: 'Hârtii rătăcite prin atelier, fișe murdare de ulei și devize scrise de mână indescifrabile',
      solution: 'Recepție 100% digitală pe tabletă, poze doveditoare din atelier și trasabilitate totală.'
    },
    {
      problem: 'Angajați care „uită” procedurile sau improvizează după cum știe fiecare',
      solution: 'Procese standardizate pas cu pas: mecanicul știe exact ce are de făcut, în ordinea optimă.'
    },
    {
      problem: 'Nu știi ce profit net ai la sfârșit de lună până nu calculează contabilul cu întârziere',
      solution: 'Rapoarte live în timp real: rentabilitate per mecanic, per elevator și per lucrare.'
    },
    {
      problem: 'Clienți ocazionali care vin o singură dată și nu mai revin niciodată la revizie',
      solution: 'CRM automat: notificări WhatsApp la expirarea ITP-ului, schimbului de ulei sau anvelopelor.'
    },
    {
      problem: 'Haos și telefoane de urgență de fiecare dată când patronul lipsește din service',
      solution: 'Service-ul funcționează predictibil, ca un mecanism autonom, chiar și când ești în concediu.'
    },
    {
      problem: 'Frica de controale ANAF, amenzi RAR sau certuri cu clienții care susțin că nu au fost de acord',
      solution: 'Conformitate legală automată: e-Factura, HG 152/2023, RAR Autopass și semnătură digitală pe mobil.'
    },
    {
      problem: 'Afacere dependentă exclusiv de memoria și prezența fizică a câtorva oameni',
      solution: 'Afacere scalabilă, structurată pe proceduri clare, pregătită pentru deschiderea de noi filiale.'
    }
  ];

  return (
    <section id="module" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#030c1d] relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-500 border-t border-slate-200 dark:border-white/10">

      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#0066FF]/10 via-[#00D2FF]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* ════════════════════════════════════════════════════════════════════════
            1. SECTION HERO & BUSINESS VALUE PROPOSITION
        ════════════════════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-4xl mx-auto space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm font-bold tracking-wide text-[#0066FF] dark:text-[#00D2FF]">
            <Sparkles className="w-4 h-4" />
            <span>SAMPRO CA BOOST PENTRU BUSINESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            SAMPRO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00A3FF] to-[#00D2FF]">
              Accelereaza afacere ta cu un sistem optimizat..
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            SAMPRO nu este doar un software de gestiune. Este platforma care conectează tot ce se întâmplă în service — de la primul telefon al clientului până la factura finală și follow-up.
            <span className="font-semibold text-slate-900 dark:text-white"> Și o face fără întreruperi, fără reintroducere de date, fără haos.</span>
          </p>

          {/* Quick value badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs">
              <Zap className="w-4 h-4 text-[#0066FF] dark:text-[#00D2FF]" />
              <span>⚡ Accelerează fluxul</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs">
              <Target className="w-4 h-4 text-emerald-500" />
              <span>🎯 Optimizează resursele</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
              <span>🛡️ Protejează afacerea</span>
            </div>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════════
            2. THE 3 CORE PILLARS OF WORKSHOP DOMINANCE
        ════════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-12">

          {/* ─────────────────────────────────────────────────────────────────
              PILONUL 1: ACCELERARE
          ───────────────────────────────────────────────────────────────── */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#07172f]/90 border border-slate-200 dark:border-white/10 shadow-xl space-y-8 relative overflow-hidden group hover:border-[#0066FF]/60 dark:hover:border-[#00D2FF]/50 transition-all duration-300">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 dark:bg-[#00D2FF]/10 border border-[#0066FF]/20 dark:border-[#00D2FF]/20 text-[#0066FF] dark:text-[#00D2FF] flex items-center justify-center shrink-0 shadow-md">
                  <Zap className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0066FF] dark:text-[#00D2FF] mb-1">
                    PILONUL 01 // VITEZĂ OPERAȚIONALĂ
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    ACCELERARE <br />
                    <span className="text-lg sm:text-2xl font-bold text-slate-600 dark:text-slate-300">
                      Faci mai mult, în mai puțin timp
                    </span>
                  </h3>
                </div>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-xs sm:text-sm font-bold text-[#0066FF] dark:text-[#00D2FF] self-start lg:self-center">
                ⏱️ Un singur sistem, nu 5 tool-uri separate
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  Unul dintre cele mai mari avantaje ale SAMPRO este că <strong>nu mai sari între programe</strong>. Dispatch, comenzi de lucru, devize, facturare și inventar — toate funcționează sincronizat în același loc.
                </p>

                {/* What actually happens */}
                <div className="space-y-3.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Ce se întâmplă concret în service:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-1.5">
                      <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3]" />
                        <span>Programări &amp; Dispatch Automat</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Tehnicienii primesc sarcinile direct pe telefon sau tabletă, cu specificații tehnice complete.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-1.5">
                      <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3]" />
                        <span>Devize Generate Instant</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Create automat pe baza istoricului real al mașinii, seriilor de șasiu și cataloagelor OEM.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-1.5">
                      <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3]" />
                        <span>Facturare Instantanee</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Devizul final aprobat devine factură fiscală și e-Factura fără să mai tastezi din nou datele.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-1.5">
                      <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3]" />
                        <span>Notificări Automate WhatsApp</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Clientul știe exact în ce etapă este mașina, eliminând zecile de telefoane de verificare.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote callout */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#0066FF] dark:text-[#00D2FF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    „SAMPRO este o soluție cuprinzătoare care permite tuturor departamentelor noastre să lucreze împreună. Este cu adevărat o singură aplicație — spre deosebire de alte soluții care sunt lipite din API-uri.”
                  </p>
                </div>
              </div>

              {/* Visual Flow Timeline Box */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900 dark:bg-[#040f21] border border-slate-800 dark:border-white/10 text-white space-y-5 shadow-2xl">

                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Fluxul Continuu SAMpro
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Zero Timpi Morți
                  </span>
                </div>

                <div className="space-y-2.5">
                  {flowSteps.map((step) => {
                    const StepIcon = step.icon;
                    const isSelected = activeStep === step.id;
                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${isSelected
                          ? 'bg-[#0066FF] border-[#00D2FF] shadow-lg shadow-blue-500/30'
                          : 'bg-white/[0.04] border-white/5 hover:bg-white/[0.08] hover:border-white/20'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-white text-[#0066FF]' : 'bg-white/10 text-white'
                            }`}>
                            {step.id}
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-tight">{step.label}</div>
                            <div className="text-[10px] text-slate-300">{step.sub}</div>
                          </div>
                        </div>
                        <StepIcon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                      </div>
                    );
                  })}
                </div>

                {/* Comparison summary */}
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs space-y-1">
                  <div className="text-red-400 font-semibold flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" /> Fără SAMPRO: hârtii, telefoane pierdute, reintroducere de date.
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Cu SAMPRO: totul curge prin același sistem, fără pierderi.
                  </div>
                </div>

                {onSelectSimulatorTab && (
                  <button
                    onClick={() => onSelectSimulatorTab('whatsapp')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D2FF] hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Simulează Aprobarea pe WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

              </div>

            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────────
              PILONUL 2: OPTIMIZARE
          ───────────────────────────────────────────────────────────────── */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#07172f]/90 border border-slate-200 dark:border-white/10 shadow-xl space-y-8 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 shadow-md">
                  <Target className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">
                    PILONUL 02 // EFICIENȚĂ &amp; CONTROL
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    OPTIMIZARE <br />
                    <span className="text-lg sm:text-2xl font-bold text-slate-600 dark:text-slate-300">
                      Mai puțin haos, mai multă eficiență
                    </span>
                  </h3>
                </div>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 self-start lg:self-center">
                🎯 Resursele sunt folosite inteligent
              </div>
            </div>

            <div
              ref={optimizareRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const cardWidth = el.offsetWidth * 0.86;
                const idx = Math.round(el.scrollLeft / cardWidth);
                if (idx !== activeOptimizareIndex && idx >= 0 && idx < 3) {
                  setActiveOptimizareIndex(idx);
                }
              }}
              className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none gap-4 md:gap-6 pb-2 -mx-2 px-2 md:mx-0 md:px-0 md:grid-cols-3"
            >

              {/* Feature Box 1: Resurse */}
              <div className="w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Planificare Automată Atelier
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Mecanicul primește lucrarea potrivită pe elevatorul liber, în ordinea optimă de lucru.
                  </p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 pt-2 border-t border-slate-200 dark:border-white/5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Inventar sincronizat pe raft și depozit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Job costing automat (piese + manoperă)
                    </li>
                  </ul>
                </div>
                <div className="pt-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  Rezultat: Eliminarea orelor moarte
                </div>
              </div>

              {/* Feature Box 2: Decizii pe date */}
              <div className="w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-[#0066FF] dark:text-[#00D2FF] flex items-center justify-center font-bold">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Decizii Bazate pe Date Reale
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Rapoarte live care îți arată clar ce tip de reparații aduce profit și ce intervenții pierd bani.
                  </p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 pt-2 border-t border-slate-200 dark:border-white/5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] dark:bg-[#00D2FF]" />
                      Productivitatea fiecărui mecanic
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] dark:bg-[#00D2FF]" />
                      Rentabilitatea fiecărui deviz emis
                    </li>
                  </ul>
                </div>
                <div className="pt-2 text-[11px] font-bold text-[#0066FF] dark:text-[#00D2FF]">
                  Rezultat: Zero presupuneri manageriale
                </div>
              </div>

              {/* Feature Box 3: Costurile scad */}
              <div className="w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center font-bold">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Scăderea Directă a Costurilor
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Datele curg automat și nu se mai tastează de două ori, prevenind greșelile costisitoare.
                  </p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 pt-2 border-t border-slate-200 dark:border-white/5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Mai puține piese greșite sau returnate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Mai puțin timp pe hârtii, mai mult la mecanică
                    </li>
                  </ul>
                </div>
                <div className="pt-2 text-[11px] font-bold text-amber-500">
                  Rezultat: Profit net suplimentar garantat
                </div>
              </div>

            </div>

            {/* Mobile Carousel Indicators for Optimizare (< md) */}
            <div className="md:hidden flex items-center justify-between pt-2 px-1">
              <button
                type="button"
                onClick={() => scrollToOptimizareCard(activeOptimizareIndex - 1)}
                disabled={activeOptimizareIndex === 0}
                className="p-1.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-white disabled:opacity-30 transition-all cursor-pointer"
                aria-label="Card anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToOptimizareCard(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeOptimizareIndex === idx
                      ? 'w-6 bg-emerald-500'
                      : 'w-2 bg-slate-300 dark:bg-white/20'
                      }`}
                    aria-label={`Sari la cardul ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToOptimizareCard(activeOptimizareIndex + 1)}
                disabled={activeOptimizareIndex === 2}
                className="p-1.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-white disabled:opacity-30 transition-all cursor-pointer"
                aria-label="Card următor"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {onSelectSimulatorTab && (
              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => onSelectSimulatorTab('mechanic')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-50 hover:bg-[#0066FF] text-[#0066FF] hover:text-white dark:bg-blue-500/10 dark:hover:bg-[#0066FF] dark:text-[#00D2FF] dark:hover:text-white font-bold text-xs tracking-wide transition-all border border-blue-200 dark:border-blue-400/20 cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Simulează App Mecanici &amp; Comunicare Internă</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSimulatorTab('hoists')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-emerald-600 text-slate-900 hover:text-white dark:bg-white/10 dark:hover:bg-emerald-600 dark:text-white font-bold text-xs tracking-wide transition-all cursor-pointer"
                >
                  <span>Simulează Planificatorul de Elevatoare</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* ─────────────────────────────────────────────────────────────────
              PILONUL 3: SIGURANȚĂ
          ───────────────────────────────────────────────────────────────── */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#07172f]/90 border border-slate-200 dark:border-white/10 shadow-xl space-y-8 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">
                    PILONUL 03 // SCUTUL AFACERII TALE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    SIGURANȚĂ <br />
                    <span className="text-lg sm:text-2xl font-bold text-slate-600 dark:text-slate-300">
                      Afacerea devine previzibilă și protejată
                    </span>
                  </h3>
                </div>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 self-start lg:self-center">
                🔒 Nimic nu se pierde, totul este securizat
              </div>
            </div>

            <div
              ref={sigurantaRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const cardWidth = el.offsetWidth * 0.86;
                const idx = Math.round(el.scrollLeft / cardWidth);
                if (idx !== activeSigurantaIndex && idx >= 0 && idx < 3) {
                  setActiveSigurantaIndex(idx);
                }
              }}
              className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none gap-4 md:gap-6 pb-2 -mx-2 px-2 md:mx-0 md:px-0 md:grid-cols-3"
            >

              {/* Pillar 3 Item 1 */}
              <div className="w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-500 flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Date Centralizate &amp; Backup
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Dacă pleacă un angajat, istoricul clienților și devizele rămân în SAMPRO. Nu pe un caiet sau pe un telefon personal.
                  </p>
                </div>
                <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium pt-2 border-t border-slate-200 dark:border-white/5">
                  • Trasabilitate totală pe fiecare semnătură
                </div>
              </div>

              {/* Pillar 3 Item 2 */}
              <div className="w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-[#0066FF] dark:text-[#00D2FF] flex items-center justify-center font-bold">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Protecție Legală &amp; Financiară
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Devize semnate electronic și procese-verbale de predare foto. Nu mai apar discuții de tip „nu am fost de acord cu reparația”.
                  </p>
                </div>
                <div className="text-[11px] text-[#0066FF] dark:text-[#00D2FF] font-medium pt-2 border-t border-slate-200 dark:border-white/5">
                  • Conformitate fiscală &amp; Legea HG 152/2023
                </div>
              </div>

              {/* Pillar 3 Item 3 */}
              <div className="w-[86vw] xs:w-[80vw] md:w-auto shrink-0 md:shrink snap-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Continuitatea Afacerii &amp; Scalare
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Poți delega fără teamă și poți deschide un al doilea atelier fără haos. Echipa lucrează după procese clare, nu după „cum știe Ion”.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium pt-2 border-t border-slate-200 dark:border-white/5">
                  • Construit pentru service-uri care se extind
                </div>
              </div>

            </div>

            {/* Mobile Carousel Indicators for Siguranță (< md) */}
            <div className="md:hidden flex items-center justify-between pt-2 px-1">
              <button
                type="button"
                onClick={() => scrollToSigurantaCard(activeSigurantaIndex - 1)}
                disabled={activeSigurantaIndex === 0}
                className="p-1.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-white disabled:opacity-30 transition-all cursor-pointer"
                aria-label="Card anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToSigurantaCard(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeSigurantaIndex === idx
                      ? 'w-6 bg-indigo-500'
                      : 'w-2 bg-slate-300 dark:bg-white/20'
                      }`}
                    aria-label={`Sari la cardul ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToSigurantaCard(activeSigurantaIndex + 1)}
                disabled={activeSigurantaIndex === 2}
                className="p-1.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-white disabled:opacity-30 transition-all cursor-pointer"
                aria-label="Card următor"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {onSelectSimulatorTab && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onSelectSimulatorTab('rar')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-indigo-600 text-slate-900 hover:text-white dark:bg-white/10 dark:hover:bg-indigo-600 dark:text-white font-bold text-xs tracking-wide transition-all"
                >
                  <span>Simulează Protecția RAR &amp; Pașaport Tehnic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════════
            3. REZULTATUL FINAL — CE SIMTE PATRONUL (COMPARISON SPLIT MATRIX)
        ════════════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-[#071d3d] border-2 border-[#0066FF]/30 dark:border-[#00D2FF]/40 text-white shadow-2xl space-y-8 relative overflow-hidden">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-rounded font-bold tracking-wider text-[#00D2FF] uppercase">
              TRANSFORMAREA CONCRETĂ A WORKSHOP-ULUI
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              Rezultatul Final <br />
              <span className="text-xl sm:text-3xl font-bold text-slate-300">
                Ce Simte Patronul
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Diferența dintre o afacere măcinată de haosul zilnic și un service auto condus pe pilot automat:
            </p>
          </div>

          {/* Side by side comparison rows */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2 border-b border-white/10 text-xs font-rounded font-bold uppercase tracking-wider text-slate-400">
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <X className="w-4 h-4" />
                <span>Fără SAMPRO (Haos &amp; Riscuri)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Check className="w-4 h-4" />
                <span>Cu SAMPRO (Control &amp; Viteză)</span>
              </div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/5 transition-colors"
              >
                {/* Without SAMpro */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-rounded text-xs font-bold">
                    ✕
                  </span>
                  <span className="leading-snug">{row.problem}</span>
                </div>

                {/* With SAMpro */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="leading-snug">{row.solution}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════════
            4. ÎN ESENȚĂ — CONCLUZIA DE CONVERSIE
        ════════════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-900/40 via-[#07172f] to-[#040f21] border border-[#0066FF]/40 dark:border-[#00D2FF]/30 shadow-2xl relative overflow-hidden text-center space-y-6">

          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-rounded font-bold uppercase tracking-widest text-[#00D2FF]">
              CONCLUZIA PENTRU MANAGEMENTUL SERVICE-ULUI TĂU
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              SAMPRO nu este un cost. <br className="hidden sm:inline" />
              Este investiția care îți transformă afacerea într-un ceas elvețian.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#00D2FF]" />
                  <span>⚡ Accelerează</span>
                </div>
                <p className="text-xs text-slate-300">Un singur flux continuu, fără întreruperi și fără retastare de date.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>🎯 Optimizează</span>
                </div>
                <p className="text-xs text-slate-300">Resurse utilizate inteligent, decizii bazate pe date financiare reale.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-1">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>🛡️ Protejează</span>
                </div>
                <p className="text-xs text-slate-300">Datele, banii, reputația și viitorul pe termen lung al afacerii tale.</p>
              </div>
            </div>

            <div className="pt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto italic">
              „Un service fără SAMPRO depinde de noroc și de memoria oamenilor. <br />
              <strong className="text-white not-italic font-bold">Un service cu SAMPRO funcționează de la sine ca un ceas elvețian.</strong>”
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KeyModules;
