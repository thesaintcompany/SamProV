import React from 'react';
import { 
  Calendar, 
  Send, 
  ShieldCheck, 
  Car, 
  Users, 
  ArrowRight, 
  Check, 
  Terminal,
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
      
      {/* Precision grid backdrop lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Swiss Grotesk & Technical Metadata */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[11px] font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300 mb-5">
            <Terminal className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
            <span>ARHITECTURA DE PRECIZIE // SAMPRO SUITE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.98] mb-6">
            Șase Module Structurale.<br />
            <span className="text-[#0066FF] dark:text-[#00D2FF]">Un Singur Flux Continuu.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
            Proiectat strict din perspectiva consilierului de service, a mecanicului și a managerului de atelier. Fără elemente decorative inutile. Doar viteză de execuție, trasabilitate tehnică și profitabilitate controlată.
          </p>
        </div>

        {/* Swiss Precision Modular Matrix (Rigid 3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            
            return (
              <div 
                key={mod.id}
                className="bg-white dark:bg-[#051124] border border-slate-200 dark:border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#0066FF] dark:hover:border-[#00D2FF]/60 transition-colors duration-300 relative group shadow-[0_2px_12px_rgba(0,0,0,0.02)] dark:shadow-none"
              >
                {/* Structural Crosshair in Top-Right Corner */}
                <div className="absolute top-3 right-3 font-mono text-slate-300 dark:text-white/20 text-xs select-none pointer-events-none">
                  +
                </div>

                <div>
                  {/* Card Header: Monospace Index & Sector Tag */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF] dark:text-[#00D2FF]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                        [{mod.index} // {mod.code}]
                      </span>
                    </div>

                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-2.5 py-1 border border-slate-200/80 dark:border-white/5">
                      {mod.tag}
                    </span>
                  </div>

                  {/* Title & Core Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-snug mb-2 group-hover:text-[#0066FF] dark:group-hover:text-[#00D2FF] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#0066FF] dark:text-slate-300 mb-3 tracking-wide">
                    {mod.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                    {mod.desc}
                  </p>

                  {/* Technical Spec List */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100 dark:border-white/5">
                    {mod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <span className="text-[#0066FF] dark:text-[#00D2FF] shrink-0 font-mono font-bold">
                          —
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer: Data Readout & Simulator Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-col gap-3">
                  
                  {/* Monospaced Metric Badge */}
                  <div className="flex items-center justify-between font-mono text-[11px] bg-slate-50 dark:bg-white/[0.03] p-2 border border-slate-200/60 dark:border-white/5">
                    <span className="text-slate-400 dark:text-slate-500 text-[10px]">{mod.metricLabel}:</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {mod.metricVal}
                    </span>
                  </div>

                  {/* Action Link (if simulator available) */}
                  {mod.action ? (
                    <button
                      onClick={mod.action}
                      className="w-full py-2.5 px-3 bg-slate-100 hover:bg-[#0066FF] text-slate-900 hover:text-white dark:bg-white/5 dark:hover:bg-[#0066FF] dark:text-white font-mono text-[11px] font-bold tracking-wider uppercase flex items-center justify-between transition-colors cursor-pointer border border-slate-200 dark:border-white/10"
                    >
                      <span>{mod.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="py-2.5 px-3 font-mono text-[11px] text-slate-400 dark:text-slate-600 uppercase tracking-wider flex items-center justify-between">
                      <span>INTEGRAT ÎN NUCLEUL SAMPRO</span>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
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
