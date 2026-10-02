import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Server, 
  Car, 
  CreditCard, 
  Cookie,
  Gavel
} from 'lucide-react';

interface GdprModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilter?: string;
}

export const GdprModal: React.FC<GdprModalProps> = ({ isOpen, onClose, initialFilter = 'all' }) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    sec1: true,
    sec2: false,
    sec3: true,
    sec4: false,
    sec5: false,
    sec6: false,
    sec7: false,
    sec8: false
  });

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      id: 'sec1',
      num: '1',
      icon: FileText,
      title: 'Termeni Generali & Natura Serviciului SaaS SAMpro',
      badge: 'TERMENI & CONDIȚII',
      summary: 'Platformă software furnizată ca serviciu (SaaS) de către BUU.RO pentru digitalizarea completă a service-urilor auto.',
      content: `Prezentul contract reglementează utilizarea soluției informatice Cloud SAMpro (Service Auto Management Pro), dezvoltată și operată de compania BUU.RO. SAMpro este un produs software de tip Cloud Native (SaaS - Software as a Service) accesibil prin conexiune securizată web browser pe desktop, tabletă și smartphone.

Accesul la serviciu se acordă pe bază de abonament lunar sau anual, fără a fi necesară instalarea de servere fizice la sediul atelierului. Utilizatorul beneficiază de actualizări periodice automate, asistență tehnică remote și stocare securizată a datelor operaționale.`
    },
    {
      id: 'sec2',
      num: '2',
      icon: ShieldCheck,
      title: 'Roluri, Conturi de Utilizator & Securitatea Accesului',
      badge: 'ROLURI & CONTURI',
      summary: 'Gestiune granulară a permisiunilor: consilier, mecanic, magazioner, contabil și administrator general.',
      content: `Service-ul auto beneficiază de structură multi-user cu roluri și permisiuni strict delimitate:
1. Administrator / Manager Service: acces complet la rapoarte financiare, marje, setări tarifare și configurare elevatoare.
2. Consilier Service / Recepție: emitere devize, comunicare WhatsApp clienți, programări calendar și verificare RAR Autopass.
3. Tehnician / Mecanic: vizualizare sarcini alocate pe elevator, fișă de constatare digitală și atașare dovezi foto/video.
4. Magazioner / Achiziții: verificare compatibilitate coduri piese și recepție marfă de la distribuitori.

Fiecare utilizator este responsabil pentru păstrarea confidențialității credențialelor de acces. Autentificarea beneficiază de opțiune 2FA (Two-Factor Authentication).`
    },
    {
      id: 'sec3',
      num: '3',
      icon: Lock,
      title: 'Conformitate GDPR & Prelucrarea Datelor de Contact ale Clienților',
      badge: 'GDPR (UE 2016/679)',
      summary: 'Service-ul este Operator de Date, iar SAMpro / BUU.RO acționează ca Împuternicit Autorizat conform Art. 28 GDPR.',
      content: `În relația dintre Părți:
- Service-ul Auto are calitatea de Operator de Date cu Privire la Datele Personale ale Proprietarilor de Vehicule (nume, număr telefon, număr înmatriculare, serie șasiu).
- BUU.RO (SAMpro) are calitatea de Persoană Împuternicită de Operator, conform Art. 28 din Regulamentul (UE) 2016/679 (GDPR).

BUU.RO se obligă solemn:
a) Să prelucreze datele exclusiv în scopul furnizării funcționalităților ERP/CRM (trimitere deviz WhatsApp, programare, notificare ITP).
b) Să nu comercializeze, să nu cedeze și să nu utilizeze datele atelierului sau ale clienților în scopuri de marketing propriu sau pentru terți.
c) Să asigure dreptul de ștergere, anonimizare și portabilitate totală a bazei de date oricând solicită atelierul.`
    },
    {
      id: 'sec4',
      num: '4',
      icon: Server,
      title: 'Securitate Tehnică Cloud, Criptare AES-256 & Servere UE',
      badge: 'SECURITATE TEHNICĂ',
      summary: 'Găzduire în centre de date ISO 27001 din București și Frankfurt, backup orar georedundant.',
      content: `Infrastructura SAMpro respectă cele mai exigente protocoale de securitate cibernetică:
- Criptare în tranzit prin TLS 1.3 (HTTPS) cu certificate SSL de grad înalt pe 256 de biți.
- Criptare în repaus (Data at Rest) prin standardul militar AES-256 pentru toate bazele de date și fișierele atașate (foto/video constatări).
- Servere georedundante amplasate strict pe teritoriul Uniunii Europene (centre de date Tier III+ în București și Frankfurt).
- Politică de backup automat la fiecare 60 de minute cu replicare multi-zonă, garantând recuperare rapidă (RTO < 15 min, RPO < 1 oră) în caz de forță majoră.
- SLA garantat contractual de 99.9% uptime.`
    },
    {
      id: 'sec5',
      num: '5',
      icon: Car,
      title: 'Conexiune RAR Autopass & Protecția Codurilor de Piese',
      badge: 'RAR AUTOPASS & PIESE',
      summary: 'Interogare etică conform protocoalelor oficiale RAR și protejarea algoritmilor comerciali ai atelierului.',
      content: `Interogarea bazei de date a Registrului Auto Român (RAR Autopass) prin SAMpro se efectuează conform normativelor legale naționale în vigoare, în baza consimțământului clientului la deschiderea ordinului de reparație. Informațiile despre kilometraj și valabilitate ITP sunt certificate și servesc la emiterea Pașaportului de Siguranță al mașinii.

Modulul de protecție a codurilor de piese criptează codurile interne de aprovizionare pe devizele transmise clientului, prevenind comenzile de piese contrafăcute sau comparările neconforme, asigurând păstrarea garanției legale a reparației oferite de service.`
    },
    {
      id: 'sec6',
      num: '6',
      icon: CreditCard,
      title: 'Tarife, Facturare, Garanții & Reziliere Fără Penalități',
      badge: 'TARIFE & REZILIERE',
      summary: 'Fără contracte restrictive de lungă durată. Schimbi sau anulezi abonamentul cu un simplu clic.',
      content: `Tarifele serviciului SAMpro sunt exprimate în RON (fără TVA) și sunt facturate lunar sau anual în funcție de opțiunea clientului.
- Migrare Gratuită: Asistență dedicată pentru preluarea clienților și a stocurilor din vechile programe.
- Fără Perioadă Minimă Obligatorie: Utilizatorul poate renunța oricând la abonament direct din panoul de administrare, fără penalități sau clauze abuzive.
- Export Gratuit al Datelor: La încetarea raporturilor contractuale, utilizatorul are dreptul de a descărca integral baza de date în format deschis (.CSV, .JSON, .PDF) în termen de 30 de zile.`
    },
    {
      id: 'sec7',
      num: '7',
      icon: Cookie,
      title: 'Politica de Module Cookie & Drepturile Persoanei Vizate',
      badge: 'COOKIE & DREPTURI',
      summary: 'Utilizăm doar cookie-uri strict tehnice necesare funcționării platformei Cloud.',
      content: `Platforma SAMpro utilizează exclusiv cookie-uri tehnice și de sesiune securizată, necesare menținerii autentificării consilierului și securității sesiunii de lucru. Nu utilizăm cookie-uri de urmărire trans-site (cross-site tracking) și nu vindem date de navigare rețelelor publicitare.

Proprietarii de vehicule înregistrați în baza de date a atelierului își pot exercita oricând drepturile prevăzute de GDPR: dreptul de acces la dosarul de reparații, rectificarea datelor de contact, ștergerea datelor (dreptul de a fi uitat) sau opoziția la primirea reminderelor SMS de ITP/revizie printr-un simplu răspuns cu textul STOP.`
    },
    {
      id: 'sec8',
      num: '8',
      icon: Gavel,
      title: 'Jurisdicție, ANPC & Legislație Aplicabilă',
      badge: 'LEGAL & LITIGII',
      summary: 'Contract guvernat de legislația din România. Respectare strictă a drepturilor consumatorilor.',
      content: `Prezentul cadru legal este guvernat de legislația în vigoare din România și de reglementările Uniunii Europene aplicabile comerțului electronic și protecției datelor cu caracter personal.

Orice neînțelegere se va soluționa pe cale amiabilă între părți în termen de 30 de zile de la notificare. În caz contrar, litigiile vor fi deduse spre soluționare instanțelor judecătorești competente de la sediul BUU.RO.
Link-uri utile: Autoritatea Națională pentru Protecția Consumatorilor (ANPC - www.anpc.ro) și Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP - www.dataprotection.ro).`
    }
  ];

  const filteredSections = activeFilter === 'all' 
    ? sections 
    : sections.filter(s => s.id === activeFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#07172f] border border-white/20 shadow-2xl text-white flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-white/10 flex items-start justify-between gap-4 shrink-0 bg-[#091f3e]/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              DOCUMENTAȚIE OFICIALĂ • BUU.RO
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Termeni, Condiții &amp; Politică GDPR
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Ultima actualizare: Octombrie 2026 • Conformitate strictă Regulament UE 2016/679 și normative RAR Autopass.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors shrink-0"
            aria-label="Închide fereastra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills Bar */}
        <div className="px-6 py-3 border-b border-white/10 bg-[#06152b] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all ${
              activeFilter === 'all' 
                ? 'bg-[#0066FF] text-white shadow-sm' 
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Toate (8 secțiuni)
          </button>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => {
                setActiveFilter(s.id);
                setOpenSections(prev => ({ ...prev, [s.id]: true }));
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all ${
                activeFilter === s.id 
                  ? 'bg-[#00D2FF] text-[#020b1b] shadow-sm' 
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {s.num}. {s.badge}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
          {filteredSections.map(sec => {
            const isOpen = openSections[sec.id] || activeFilter === sec.id;
            const Icon = sec.icon;

            return (
              <div
                key={sec.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-white/[0.04] transition-colors gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-[#00D2FF] flex items-center justify-center font-bold text-sm shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-[#00D2FF] font-bold">
                        SECȚIUNEA {sec.num} • {sec.badge}
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight truncate sm:whitespace-normal">
                        {sec.title}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 rounded-lg bg-white/5 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed space-y-3 border-t border-white/5 font-sans whitespace-pre-line">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20 text-[#00D2FF] font-medium text-[11px]">
                      💡 Rezumat: {sec.summary}
                    </div>
                    <div className="text-slate-300 font-normal leading-relaxed">
                      {sec.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 sm:px-8 border-t border-white/10 bg-[#06152b] flex items-center justify-between gap-4 text-xs font-mono text-slate-400 shrink-0">
          <span>© 2026 SAMpro by BUU.RO • Drepturi de proprietate intelectuală rezervate.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0066FF] hover:bg-[#0072ff] text-white font-bold transition-all shrink-0"
          >
            Am înțeles
          </button>
        </div>

      </div>
    </div>
  );
};
