import React from 'react';
import { 
  Calendar, 
  Send, 
  ShieldCheck, 
  Car, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Sparkles,
  Layers
} from 'lucide-react';

interface KeyModulesProps {
  onSelectSimulatorTab?: (tab: 'whatsapp' | 'rar' | 'hoists') => void;
}

export const KeyModules: React.FC<KeyModulesProps> = ({ onSelectSimulatorTab }) => {

  const modules = [
    {
      id: 'calendar',
      icon: Calendar,
      tag: 'GESTIUNE ATELIER',
      title: 'Calendar & Planificator Elevatoare',
      subtitle: 'Elimină complet timpii morți dintre programări și elevatoare goale.',
      desc: 'Alocă intervențiile vizual pe fiecare mecanic și elevator. Monitorizează durata lucrărilor în timp real, previne suprapunerile și asigură respectarea exactă a orei promise de predare către client.',
      stats: '+42% mai multe mașini finalizate la timp',
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      features: [
        'Vizualizare drag-and-drop pe ore, zile și posturi de lucru',
        'Notificare automată la depășirea timpului estimat per elevator',
        'Fișă de lucru digitală pe tableta mecanicului'
      ],
      action: () => onSelectSimulatorTab && onSelectSimulatorTab('hoists'),
      actionText: 'Testează Planificatorul în Simulator'
    },
    {
      id: 'devize',
      icon: Send,
      tag: 'TRANSFORMARE VÂNZĂRI',
      title: 'Devize Inteligente & Aprobare 1-Tap pe WhatsApp',
      subtitle: 'Clienții văd exact ce se schimbă și aprobă lucrarea în sub 60 de secunde.',
      desc: 'Trimite clientului pe WhatsApp sau SMS un deviz interactiv, clar și elegant. Cu dovezi foto/video atașate din atelier și separare pe intervenții „Critice de Siguranță” vs. „Recomandate”, elimini discuțiile tensionate și crești rata de aprobare.',
      stats: '+35% creștere rată aprobare devize',
      color: 'from-[#0066FF] to-[#00D2FF]',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
      features: [
        'Aprobare 1-tap pe ecranul telefonului clientului',
        'Atașare foto/video direct din constatarea consilierului',
        'Transparentizare totală a pieselor și manoperei calificate'
      ],
      action: () => onSelectSimulatorTab && onSelectSimulatorTab('whatsapp'),
      actionText: 'Vezi Devizul Interactiv WhatsApp'
    },
    {
      id: 'rar',
      icon: Car,
      tag: 'CONFORMITATE OFICIALĂ',
      title: 'Hub Etic RAR & RAR Autopass',
      subtitle: 'Sincronizare directă cu Registrul Auto Român și emitere Pașaport de Calitate.',
      desc: 'Interoghează baza oficială RAR dintr-un clic la introducerea numărului de înmatriculare sau a seriei de șasiu (VIN). Validezi automat odometrul (km reali), istoricul ITP și emiți automat un „Certificat de Calitate și Siguranță” la predarea mașinii.',
      stats: 'Conformitate legală 100% garantată',
      color: 'from-emerald-600 to-teal-600',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      features: [
        'Interogare VIN cu istoric kilometraj și valabilitate ITP',
        'Emitere Certificat de Siguranță SAMpro pentru client',
        'Protecție împotriva fraudelor și atestare reparații în service autorizat'
      ],
      action: () => onSelectSimulatorTab && onSelectSimulatorTab('rar'),
      actionText: 'Simulează Interogare RAR Autopass'
    },
    {
      id: 'piese',
      icon: ShieldCheck,
      tag: 'SECURITATE COMERCIALĂ',
      title: 'Protecție Cod Piese & Cataloage OEM',
      subtitle: 'Comenzi fără greșeli la distribuitori și protejarea adaosului comercial.',
      desc: 'Integrare automată cu cataloagele marilor distribuitori de piese auto din România. Sistemul verifică compatibilitatea seriei de șasiu, protejează codurile interne de aprovizionare și optimizează marjele fără bătăi de cap.',
      stats: '0 retururi de piese greșite la furnizori',
      color: 'from-amber-600 to-orange-600',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
      features: [
        'Verificare compatibilitate VIN cu baze de date OEM',
        'Calcul automat al adaosului comercial optim per categorie',
        'Evitarea pierderii de timp prin căutări în taburi multiple'
      ]
    },
    {
      id: 'crm',
      icon: Users,
      tag: 'FIDELIZARE & SMART PR',
      title: 'Smart PR & CRM Empatic pentru Clienți',
      subtitle: 'Transformă fiecare client ocazional într-un partener fidel pe viață.',
      desc: 'Fiecare pas este un exercițiu de Smart PR. De la mesajul cald „Mașina a intrat pe elevatorul 2”, la remindere automate pentru revizie, ITP sau schimb anvelope sezoniere și solicitare automată de recenzie Google de 5 stele.',
      stats: '98% scor de satisfacție a clienților (CSAT)',
      color: 'from-purple-600 to-pink-600',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      features: [
        'Notificări automate personalizate pe WhatsApp & SMS',
        'Remindere de sezon: verificare ITP, revizie, anvelope iarnă/vară',
        'Colectare organică de recenzii pozitive pe Google Maps'
      ]
    }
  ];

  return (
    <section id="module" className="py-24 sm:py-32 bg-[#041024] relative overflow-hidden text-white">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-[#00D2FF] mb-4">
            <Layers className="w-3.5 h-3.5" />
            ARHITECTURA ECOSISTEMULUI SAMPRO
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Cinci Module Puternice.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0066FF] to-blue-400">
              Un Singur Flux Continuu.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Creat din perspectiva consilierului de service, a mecanicului și a proprietarului de atelier din România. Fără funcții inutile. Doar viteză, claritate și profitabilitate.
          </p>
        </div>

        {/* 5-Module Bento Matrix Array */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isFeatured = idx === 1; // WhatsApp closing is featured
            
            return (
              <div 
                key={mod.id}
                className={`rounded-3xl p-7 transition-all duration-300 relative flex flex-col justify-between group ${
                  isFeatured 
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#071d3d] via-[#082855] to-[#04152e] border-2 border-[#00D2FF]/40 shadow-[0_15px_40px_rgba(0,102,255,0.25)]' 
                    : 'bg-[#07172f]/80 hover:bg-[#0c2347] border border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                      isFeatured 
                        ? 'bg-gradient-to-br from-[#0066FF] to-[#00D2FF] text-white' 
                        : 'bg-white/10 text-[#00D2FF]'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${mod.badgeColor}`}>
                      {mod.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00D2FF] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-sm font-semibold text-blue-200/90 mb-3">
                    {mod.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {mod.desc}
                  </p>

                  {/* Checkmark Bullets */}
                  <div className="space-y-2.5 mb-6">
                    {mod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Bar: Stats & Simulator Jump */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {mod.stats}
                  </div>

                  {mod.action && (
                    <button
                      onClick={mod.action}
                      className="inline-flex items-center text-xs font-bold text-[#00D2FF] hover:text-white transition-colors group/btn"
                    >
                      <span>{mod.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}

          {/* Quick Bonus Tile: Zero Complicat / Cloud Native */}
          <div className="rounded-3xl p-7 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-[#00D2FF]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                100% Cloud Web — Fără Instalare
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Rulează impecabil pe laptop la recepție, pe tableta mecanicilor în atelier sau pe telefonul managerului când este plecat din service.
              </p>

              <div className="space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Compatibil Windows, Mac, Android, iOS
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Actualizări automate periodice incluse
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Backup zilnic georedundant (ISO 27001)
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
              Asistență tehnică dedicată prin telefon și AnyDesk.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
