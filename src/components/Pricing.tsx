import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface PricingProps {
  onOpenDemo: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'start',
      name: 'Plan Start',
      badge: 'ATELIER MIC',
      target: 'Service-uri cu 1-2 mecanici sau posturi de lucru',
      monthlyPrice: 690,
      annualPrice: 552, // 20% off
      popular: false,
      features: [
        'Până la 2 elevatoare / posturi de lucru',
        'Devize și oferte rapide nelimitate',
        'Calendar programări pe mecanic',
        'Generare deviz în format PDF cu siglă service',
        'Securitate Cloud & backup zilnic automat',
        'Suport tehnic dedicat prin email și telefon'
      ],
      ctaText: 'Alege Plan Start'
    },
    {
      id: 'pro',
      name: 'Plan Pro',
      badge: 'CEL MAI POPULAR',
      target: 'Ateliere complete, service-uri multimarcă & ITP',
      monthlyPrice: 1289,
      annualPrice: 1031, // 20% off
      popular: true,
      features: [
        'Tot din Planul Start inclus',
        'Până la 8 elevatoare & mecanici simultan',
        'Conectare oficială RAR Autopass inclusă',
        'Aprobare interactivă 1-tap pe WhatsApp pentru clienți',
        'Protecție coduri piese & verificare compatibilitate VIN',
        'Modul Smart PR: notificări de status și remindere ITP',
        'Raportare avansată timpi de lucru & eficiență mecanic',
        'Migrarea poate fi asistată de echipa SAMpro'
      ],
      ctaText: 'Alege Plan Pro (Recomandat)'
    },
    {
      id: 'enterprise',
      name: 'Plan Enterprise',
      badge: 'REȚEA & FLOTE',
      target: 'Mari rețele de service, dealer-ship-uri și flote',
      monthlyPrice: 0,
      annualPrice: 0,
      isCustom: true,
      popular: false,
      features: [
        'Elevatoare și posturi de lucru nelimitate',
        'Multi-locație (gestiune centralizată puncte de lucru)',
        'Integrare API ERP & Contabilitate (Saga, SmartBill etc.)',
        'Server Cloud dedicat cu izolare totală a datelor',
        'SLA garantat de intervenție sub 30 de minute',
        'Manager de cont dedicat & training la sediul atelierului',
        'Dezvoltare de funcționalități personalizate la cerere'
      ],
      ctaText: 'Contactează Vânzările'
    }
  ];

  return (
    <section id="preturi" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#020b1b] relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/5 dark:bg-[#0066FF]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-rounded font-bold tracking-wider text-[#0066FF] dark:text-[#00D2FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            ABONAMENTE TRANSPARENTE
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Alege Pachetul Potrivit pentru Service-ul Tău
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Fără costuri ascunse. Fără perioade minime obligatorii de contract. Schimbi sau anulezi abonamentul oricând dorești.
          </p>

          {/* Billing Interval Toggle (Monthly / Annual) */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200/70 dark:bg-[#07172f] border border-slate-300/80 dark:border-white/15">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual 
                  ? 'bg-[#0066FF] text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Facturare Lunară
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual 
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Facturare Anuală</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-black uppercase">
                -20% Reducere
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#09254d] via-[#082245] to-[#05162d] text-white border-2 border-[#0066FF] dark:border-[#00D2FF] shadow-[0_20px_50px_rgba(0,102,255,0.35)] scale-105 z-10'
                    : 'bg-white dark:bg-[#06152b]/90 hover:bg-slate-50 dark:hover:bg-[#091f3d] border border-slate-200 dark:border-white/10 shadow-xs dark:shadow-none'
                }`}
              >
                {/* Popular Ribbon Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white font-mono text-[11px] font-black uppercase tracking-wider shadow-md">
                    Cel Mai Recomandat
                  </div>
                )}

                <div>
                  
                  {/* Card Title & Target */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {plan.name}
                    </h3>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      plan.popular ? 'bg-white/10 text-slate-300' : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  <p className={`text-xs mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    {plan.target}
                  </p>

                  {/* Price */}
                  <div className={`mb-6 pb-6 border-b ${plan.popular ? 'border-white/10' : 'border-slate-100 dark:border-white/10'}`}>
                    {plan.isCustom ? (
                      <div>
                        <div className={`text-3xl font-black ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Ofertă Dedicată</div>
                        <div className={`text-xs mt-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>în funcție de numărul de locații</div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-4xl sm:text-5xl font-black font-mono ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                            {price}
                          </span>
                          <span className={`text-sm font-semibold ${plan.popular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                            lei / lună
                          </span>
                        </div>
                        <div className={`text-[11px] mt-1 font-mono ${plan.popular ? 'text-[#00D2FF]' : 'text-emerald-600 dark:text-[#00D2FF]'}`}>
                          {isAnnual ? 'Facturat anual (economisești 2 luni)' : 'Fără angajament pe termen lung'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${plan.popular ? 'text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>
                      Ce include:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className={`flex items-start gap-2.5 text-xs ${plan.popular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? 'text-[#00D2FF]' : 'text-[#0066FF] dark:text-emerald-400'
                        }`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenDemo(plan.name)}
                  className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF] hover:from-[#0072ff] hover:to-[#00d8ff] text-white shadow-lg shadow-blue-500/40 hover:scale-[1.02]'
                      : 'bg-slate-100 hover:bg-[#0066FF] hover:text-white dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white border border-slate-200/80 dark:border-white/15'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-[#06152b] border border-slate-200 dark:border-white/10 shadow-xs dark:shadow-none max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Migrarea poate fi asistată de echipa SAMpro</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Îți importăm baza de date cu clienți, vehicule și istoric fără nicio întrerupere a fluxului de service.
              </div>
            </div>
          </div>
          <button
            onClick={() => onOpenDemo('Migrare Asistată')}
            className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white text-xs font-bold whitespace-nowrap border border-slate-200 dark:border-white/15 transition-all cursor-pointer"
          >
            Află detalii migrare
          </button>
        </div>

      </div>
    </section>
  );
};
