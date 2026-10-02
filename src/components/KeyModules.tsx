import React from 'react';
import { 
  Calendar, 
  Send, 
  ShieldCheck, 
  Car, 
  Users, 
  ArrowRight, 
  Check, 
  Cpu
} from 'lucide-react';

interface KeyModulesProps {
  onSelectSimulatorTab?: (tab: 'whatsapp' | 'rar' | 'hoists') => void;
}

export const KeyModules: React.FC<KeyModulesProps> = ({ onSelectSimulatorTab }) => {
  const modules = [
    {
      id: 'calendar',
      index: '01',
      code: 'ATELIER',
      icon: Calendar,
      tag: 'GESTIUNE ELEVATOARE',
      title: 'Planificator Elevatoare & Mecanici',
      subtitle: 'Elimină timpii morți dintre programări și elevatoare neocupate.',
      desc: 'Alocă vizual intervențiile pe fiecare post de lucru și mecanic. Monitorizează durata efectivă în timp real, previne suprapunerile și garantează ora promisă de predare.',
      metricLabel: 'PRODUCTIVITATE',
      metricVal: '+42% MAȘINI FINALIZATE LA TIMP',
      features: [
        'Planificare drag-and-drop pe ore, zile și posturi specifice',
        'Alertă automată la depășirea timpului estimat de lucru',
        'Fișă digitală sincronizată pe tableta mecanicului'
      ],
      action: () => onSelectSimulatorTab && onSelectSimulatorTab('hoists'),
      actionText: 'SIMULEAZĂ PLANIFICATORUL'
    },
    {
      id: 'devize',
      index: '02',
      code: 'VÂNZĂRI',
      icon: Send,
      tag: 'CONVERSIE RAPIDĂ',
      title: 'Devize & Aprobare 1-Tap WhatsApp',
      subtitle: 'Clienții văd piesele, manopera și aprobă lucrarea în sub 60 de secunde.',
      desc: 'Transmite devizul interactiv direct pe telefonul clientului. Include dovezi foto/video din atelier și separare automată a operațiunilor de urgență vs. recomandate.',
      metricLabel: 'CONVERSIE',
      metricVal: '+35% CREȘTERE RATĂ APROBARE',
      features: [
        'Aprobare instantanee cu semnătură digitală pe mobil',
        'Atașare foto/video direct din constatarea consilierului',
        'Claritate totală pe piese OEM/AM și ore manoperă'
      ],
      action: () => onSelectSimulatorTab && onSelectSimulatorTab('whatsapp'),
      actionText: 'VEZI DEVIZUL INTERACTIV'
    },
    {
      id: 'rar',
      index: '03',
      code: 'LEGAL_RO',
      icon: Car,
      tag: 'CONFORMITATE OFICIALĂ',
      title: 'Gateway Direct RAR & Pașaport Tehnic',
      subtitle: 'Sincronizare cu Registrul Auto Român și emitere certificat de calitate.',
      desc: 'Interoghează baza RAR la introducerea numărului de înmatriculare sau VIN. Validezi odometrul oficial, istoricul ITP și generezi automat Pașaportul de Siguranță.',
      metricLabel: 'CONFORMITATE',
      metricVal: '100% CONFORMITATE LEGEA HG 152/2023',
      features: [
        'Interogare VIN cu istoric kilometraj și valabilitate ITP',
        'Emitere automată Certificat de Siguranță la predare',
        'Protecție legală și atestare reparații în service autorizat'
      ],
      action: () => onSelectSimulatorTab && onSelectSimulatorTab('rar'),
      actionText: 'SIMULEAZĂ INTEROGARE RAR'
    },
    {
      id: 'piese',
      index: '04',
      code: 'APROVIZIONARE',
      icon: ShieldCheck,
      tag: 'SECURITATE COMERCIALĂ',
      title: 'Protecție Cod Piese & Cataloage OEM',
      subtitle: 'Comenzi fără erori la distribuitori și protejarea marjei comerciale.',
      desc: 'Conectare directă cu cataloagele marilor distribuitori auto din România. Sistemul verifică compatibilitatea seriei de șasiu, protejează codurile interne și optimizează adaosul.',
      metricLabel: 'ACURATEȚE',
      metricVal: '0 RETURURI DE PIESE GREȘITE',
      features: [
        'Verificare compatibilitate VIN cu baze de date tehnice OEM',
        'Calcul automat al adaosului comercial optim per categorie',
        'Comandă directă fără căutări manuale în portaluri externe'
      ]
    },
    {
      id: 'crm',
      index: '05',
      code: 'RETENȚIE',
      icon: Users,
      tag: 'FIDELIZARE & PR',
      title: 'Smart PR & CRM Automatizat',
      subtitle: 'Transformă clienții ocazionali în parteneri pe termen lung.',
      desc: 'Notificări automate la fiecare etapă: intrarea pe elevator, finalizarea testelor, alerte de revizie/ITP și solicitare automată de recenzii de 5 stele pe Google Maps.',
      metricLabel: 'RETENȚIE',
      metricVal: '98% SATISFACȚIE CLIENȚI (CSAT)',
      features: [
        'Actualizări automate de status pe WhatsApp & SMS',
        'Alerte sezoniere: ITP, revizie ulei, anvelope iarnă/vară',
        'Creșterea organică a ratingului pe Google Maps'
      ]
    },
    {
      id: 'cloud',
      index: '06',
      code: 'INFRASTRUCTURĂ',
      icon: Cpu,
      tag: 'ARHITECTURĂ CLOUD',
      title: 'Cloud Native — Zero Instalare',
      subtitle: 'Acces securizat instant de pe laptop, tabletă mecanic sau telefon.',
      desc: 'Infrastructură distribuită georedundantă în centre de date europene conform ISO 27001 și GDPR. Actualizările se aplică automat în fundal fără întreruperea activității.',
      metricLabel: 'DISPONIBILITATE',
      metricVal: '99.98% UPTIME SERVICE LEVEL',
      features: [
        'Compatibil Windows, macOS, Android, iOS în browser',
        'Actualizări automate periodice incluse în abonament',
        'Copii de siguranță zilnice criptate pe noduri redundante'
      ]
    }
  ];

  return (
    <section id="module" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#030c1d] relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-500 border-t border-slate-200 dark:border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Styled like the rest of SAMpro */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 font-mono text-xs font-bold tracking-wider uppercase text-[#0066FF] dark:text-[#00D2FF] mb-5">
            <Cpu className="w-4 h-4" />
            <span>Arhitectură Modulară // SAMpro Suite</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[1.02] mb-6">
            Șase Module Structurale.<br />
            <span className="text-[#0066FF] dark:text-[#00D2FF]">Un Singur Flux Continuu.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
            Proiectat strict din perspectiva consilierului de service, a mecanicului și a managerului de atelier. Fără elemente decorative inutile. Doar viteză de execuție, trasabilitate tehnică și profitabilitate controlată.
          </p>
        </div>

        {/* Modular Grid: Styled like Date Atelier Auto (rounded-3xl, soft borders, modern typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((mod) => {
            const Icon = mod.icon;
            
            return (
              <div 
                key={mod.id}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#07172f]/90 border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-xs dark:shadow-xl hover:border-[#0066FF] dark:hover:border-[#00D2FF]/50 hover:shadow-xl dark:hover:shadow-[0_12px_36px_rgba(0,102,255,0.18)] transition-all duration-300 relative group"
              >
                <div>
                  {/* Card Header: Icon container + Category Pill */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#0066FF] dark:text-[#00D2FF] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          Modul {mod.index}
                        </div>
                        <div className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 uppercase">
                          {mod.code}
                        </div>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#0066FF] dark:text-[#00D2FF] bg-[#0066FF]/10 dark:bg-[#00D2FF]/10 border border-[#0066FF]/20 dark:border-[#00D2FF]/20">
                      {mod.tag}
                    </span>
                  </div>

                  {/* Title & Core Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-[#0066FF] dark:group-hover:text-[#00D2FF] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#0066FF] dark:text-[#00D2FF] mb-3 leading-snug">
                    {mod.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {mod.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                    {mod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer: Metric Tile & Action Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                  
                  {/* Metric Readout Tile */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {mod.metricLabel}:
                    </span>
                    <span className="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-[#00D2FF]">
                      {mod.metricVal}
                    </span>
                  </div>

                  {/* Action Button */}
                  {mod.action ? (
                    <button
                      onClick={mod.action}
                      className="w-full py-3.5 px-4 rounded-2xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-between shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:scale-[1.01] active:scale-95 cursor-pointer"
                    >
                      <span>{mod.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="py-3 px-4 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center justify-between">
                      <span>Integrat nativ în platformă</span>
                      <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-bold">
                        <span>Activ</span>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default KeyModules;
