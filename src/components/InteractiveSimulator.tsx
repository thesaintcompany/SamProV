import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Smartphone, 
  Car, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Send, 
  Check, 
  Search, 
  Download, 
  Clock, 
  User, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface InteractiveSimulatorProps {
  initialTab?: 'whatsapp' | 'rar' | 'hoists';
}

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({ initialTab = 'whatsapp' }) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'rar' | 'hoists'>(initialTab);

  // --- STATE FOR TAB 1: WHATSAPP DEVIZ SIMULATOR ---
  const [quoteItems, setQuoteItems] = useState([
    {
      id: 'item-1',
      name: 'Kit Distribuție + Pompă Apă (ContiTech)',
      code: 'CT1139WP6',
      type: 'piesa',
      category: 'critical',
      price: 1180,
      selected: true,
      warranty: '24 luni'
    },
    {
      id: 'item-2',
      name: 'Manoperă Înlocuire Distribuție + Aerisire Circuit',
      type: 'manopera',
      category: 'critical',
      price: 550,
      selected: true,
      warranty: '12 luni'
    },
    {
      id: 'item-3',
      name: 'Set Plăcuțe Frână Față (ATE Original)',
      code: '13.0460-7280.2',
      type: 'piesa',
      category: 'critical',
      price: 420,
      selected: true,
      warranty: '24 luni'
    },
    {
      id: 'item-4',
      name: 'Manoperă Înlocuire Plăcuțe Față',
      type: 'manopera',
      category: 'critical',
      price: 180,
      selected: true,
      warranty: '12 luni'
    },
    {
      id: 'item-5',
      name: 'Filtru Polen Carbon Activ + Ozonizare Climă',
      code: 'CUK2939',
      type: 'piesa',
      category: 'recommended',
      price: 260,
      selected: false,
      warranty: '12 luni'
    },
    {
      id: 'item-6',
      name: 'Geometrie Roți Computerizată 3D',
      type: 'manopera',
      category: 'recommended',
      price: 200,
      selected: false,
      warranty: '3 luni'
    }
  ]);

  const [devizApproved, setDevizApproved] = useState(false);

  const toggleItem = (id: string) => {
    if (devizApproved) return;
    setQuoteItems(prev => prev.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const totalPrice = quoteItems
    .filter(i => i.selected)
    .reduce((sum, i) => sum + i.price, 0);

  const criticalCount = quoteItems.filter(i => i.category === 'critical' && i.selected).length;
  const recommendedCount = quoteItems.filter(i => i.category === 'recommended' && i.selected).length;

  const handleApproveDeviz = () => {
    setDevizApproved(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetDeviz = () => {
    setDevizApproved(false);
  };

  // --- STATE FOR TAB 2: RAR AUTOPASS SIMULATOR ---
  const sampleVehicles = [
    {
      plate: 'CJ 88 SAM',
      vin: 'WAUZZZ4G1EN049821',
      make: 'Audi A6 Avant 2.0 TDI',
      year: 2021,
      power: '204 CP / 150 kW',
      fuel: 'Diesel Euro 6d',
      odometer: 142850,
      itpExpiry: '14.11.2026',
      itpStatus: 'VALID',
      damageHistory: 'Fără Daune Majore Înregistrate',
      history: [
        { date: '14.11.2024', km: 142850, note: 'ITP Valabil - Stația Cluj-Napoca #12' },
        { date: '18.11.2022', km: 98400, note: 'ITP Valabil - Stația București #04' },
        { date: '12.01.2021', km: 15, note: 'Prima Înmatriculare România' }
      ]
    },
    {
      plate: 'B 123 PRO',
      vin: 'WBA5A71020G193820',
      make: 'BMW Seria 5 520d xDrive',
      year: 2019,
      power: '190 CP / 140 kW',
      fuel: 'Diesel Euro 6c',
      odometer: 189200,
      itpExpiry: '22.06.2025',
      itpStatus: 'VALID',
      damageHistory: '1 Notă Tehnică Caroserie (Reparație Autorizată)',
      history: [
        { date: '22.06.2023', km: 189200, note: 'ITP Valabil - Stația Ilfov #08' },
        { date: '20.06.2021', km: 122100, note: 'ITP Valabil - Stația Ilfov #08' },
        { date: '15.03.2019', km: 10, note: 'Prima Înmatriculare' }
      ]
    },
    {
      plate: 'TM 07 PIT',
      vin: 'WDD2050041F839211',
      make: 'Mercedes-Benz C220d BlueTEC',
      year: 2020,
      power: '194 CP / 143 kW',
      fuel: 'Diesel Euro 6',
      odometer: 115400,
      itpExpiry: '08.09.2026',
      itpStatus: 'VALID',
      damageHistory: 'Zero Daune Structurale',
      history: [
        { date: '08.09.2024', km: 115400, note: 'ITP Valabil - Stația Timișoara #01' },
        { date: '05.09.2022', km: 64100, note: 'ITP Valabil - Stația Arad #03' },
        { date: '10.02.2020', km: 25, note: 'Prima Înmatriculare' }
      ]
    }
  ];

  const [selectedVehicleIdx, setSelectedVehicleIdx] = useState(0);
  const [isSearchingRar, setIsSearchingRar] = useState(false);
  const [rarSearchInput, setRarSearchInput] = useState('CJ 88 SAM');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleRarSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchingRar(true);
    setTimeout(() => {
      setIsSearchingRar(false);
    }, 600);
  };

  const currentVehicle = sampleVehicles[selectedVehicleIdx];

  // --- STATE FOR TAB 3: HOIST SCHEDULER ---
  const [hoists, setHoists] = useState([
    {
      id: 1,
      name: 'Elevator 1 (2 Coloane - 4.5T)',
      mechanic: 'Ionuț Dumitrescu',
      car: 'BMW Seria 5 (B 123 PRO)',
      operation: 'Înlocuire Distribuție + Pompă Apă',
      progress: 75,
      status: 'in_progress', // 'in_progress' | 'waiting_parts' | 'completed' | 'free'
      timeEst: '1h 15m rămas'
    },
    {
      id: 2,
      name: 'Elevator 2 (4 Coloane - Geometrie)',
      mechanic: 'Andrei Vasilescu',
      car: 'Audi A6 (CJ 88 SAM)',
      operation: 'Înlocuire Plăcuțe + Geometrie 3D',
      progress: 35,
      status: 'in_progress',
      timeEst: '45m rămas'
    },
    {
      id: 3,
      name: 'Elevator 3 (Foarfecă Îngropată)',
      mechanic: 'Mihai Popa',
      car: 'Dacia Duster 1.5 dCi (B 440 DAC)',
      operation: 'Revizie Completă Filtre + Ulei',
      progress: 100,
      status: 'completed',
      timeEst: 'Gata de predare'
    },
    {
      id: 4,
      name: 'Elevator 4 (Post Diagnoză & Mecanică)',
      mechanic: 'Liber / Programat',
      car: 'Rezervat: Mercedes C220 (TM 07 PIT)',
      operation: 'Diagnoză computerizată + ITP',
      progress: 0,
      status: 'free',
      timeEst: 'Programat: 15:30'
    }
  ]);

  const advanceHoistStatus = (hoistId: number) => {
    setHoists(prev => prev.map(h => {
      if (h.id !== hoistId) return h;
      if (h.status === 'in_progress') {
        return { ...h, status: 'completed', progress: 100, timeEst: 'Gata de predare' };
      } else if (h.status === 'completed') {
        return { ...h, status: 'free', car: 'Liber pentru alocare', operation: 'Fără mașină pe elevator', progress: 0, timeEst: 'Disponibil' };
      } else {
        return { ...h, status: 'in_progress', car: 'Volkswagen Golf 8 (B 990 SAM)', operation: 'Schimb ambreiaj + volanță', progress: 25, timeEst: '2h 30m' };
      }
    }));
  };

  return (
    <section id="simulator" className="py-24 sm:py-32 bg-[#020b1b] relative overflow-hidden text-white border-y border-white/10">
      
      {/* Background accents */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#00D2FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono font-bold text-[#00D2FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            SIMULATOR INTERACTIV LIVE
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Experimentează SAMpro.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0066FF] to-blue-400">
              Interacționează cu Interfața Reală.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Alege un scenariu mai jos și testează cum interacționează un proprietar de mașină pe WhatsApp, cum se verifică seria de șasiu în baza oficială RAR și cum organizezi elevatoarele.
          </p>

          {/* Navigation Tabs Pill Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#07172f] border border-white/15 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'whatsapp'
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>1. Deviz WhatsApp (Client)</span>
            </button>

            <button
              onClick={() => setActiveTab('rar')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'rar'
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>2. Interogare RAR Autopass</span>
            </button>

            <button
              onClick={() => setActiveTab('hoists')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'hoists'
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>3. Gestiune Elevatoare</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE WHATSAPP DEVIZ PORTAL */}
        {activeTab === 'whatsapp' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            
            {/* Context Left Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-[#07172f]/80 border border-white/10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  SMART PR &amp; WHATSAPP CLOSING
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Ce vede clientul tău pe telefon?
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Fără PDF-uri indescifrabile și fără presiune la telefon. Proprietarul primește un link securizat WhatsApp cu devizul împărțit clar pe <strong>Intervenții de Siguranță</strong> vs <strong>Recomandări Preventive</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
                  <div className="text-slate-400 font-semibold uppercase font-mono text-[10px]">
                    Instrucțiuni Interacțiune:
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                    Bifează / debifează piesele opționale pe telefon.
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Apasă butonul „Aprobă pe WhatsApp” pentru simularea acceptanței.
                  </div>
                </div>

                {devizApproved && (
                  <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs space-y-2">
                    <div className="font-bold flex items-center gap-2 text-sm text-white">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      Deviz Aprobat cu Succes!
                    </div>
                    <p>
                      Comanda de piese a fost transmisă automat către furnizori, iar mecanicul a primit notificarea pe tabletă!
                    </p>
                    <button
                      onClick={handleResetDeviz}
                      className="text-xs text-white font-bold underline hover:text-emerald-200 pt-1 block"
                    >
                      Resetează devizul pentru a retesta
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Phone Simulation */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[390px] rounded-[44px] p-4 bg-[#0a1528] border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,102,255,0.35)] relative overflow-hidden">
                
                {/* Phone Speaker & Camera Pill */}
                <div className="w-28 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white/10"></div>
                </div>

                {/* Inner Web Page Screen */}
                <div className="bg-[#0f1d33] rounded-[32px] p-4 text-white text-xs space-y-3.5 border border-white/10">
                  
                  {/* Service Branding Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D2FF] flex items-center justify-center font-bold text-xs text-white">
                        SP
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">Service Auto Expert</div>
                        <div className="text-[10px] text-slate-400 font-mono">Deviz #SP-8429 • Audi A6</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[#00D2FF] font-mono font-bold text-[10px]">
                      CJ 88 SAM
                    </span>
                  </div>

                  {/* Vehicle Greeting Banner */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-900/40 to-slate-900/60 border border-white/10">
                    <div className="text-[11px] text-blue-200">Bună ziua, <strong>Andrei Popescu</strong>!</div>
                    <div className="text-[10px] text-slate-300 mt-0.5">
                      Constatarea tehnică a fost finalizată. Te rugăm să verifici intervențiile recomandate pentru Audi A6 2.0 TDI (142.850 km).
                    </div>
                  </div>

                  {/* Inspection Photo Carousel Thumbnail */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    <div className="shrink-0 w-24 h-16 rounded-xl bg-slate-800 border border-white/10 overflow-hidden relative group">
                      <img 
                        src="/assets/service-workshop.png" 
                        alt="Constatare placute" 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1 rounded bg-black/70 text-[8px] font-mono text-white">
                        Frâne 80% uzură
                      </span>
                    </div>
                    <div className="shrink-0 w-24 h-16 rounded-xl bg-slate-800 border border-white/10 overflow-hidden relative">
                      <img 
                        src="/assets/telemetry-speed.png" 
                        alt="Constatare curea" 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1 rounded bg-black/70 text-[8px] font-mono text-white">
                        Fisură curea
                      </span>
                    </div>
                  </div>

                  {/* Critical Repairs Section */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                      <span className="flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        1. Intervenții Critice de Siguranță
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 font-normal">
                        ({criticalCount} selectate)
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {quoteItems.filter(i => i.category === 'critical').map(item => (
                        <div
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            item.selected 
                              ? 'bg-blue-600/20 border-blue-400/50 text-white' 
                              : 'bg-white/[0.02] border-white/5 text-slate-400'
                          }`}
                        >
                          <div className="flex items-start gap-2 max-w-[75%]">
                            <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                              item.selected ? 'bg-[#0066FF] border-[#0066FF] text-white' : 'border-slate-500'
                            }`}>
                              {item.selected && <Check className="w-3 h-3" />}
                            </div>
                            <div>
                              <div className="font-semibold text-xs leading-tight text-white">{item.name}</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">
                                Garanție {item.warranty} {item.code && `• Cod: ${item.code}`}
                              </div>
                            </div>
                          </div>

                          <div className="font-bold font-mono text-xs text-white">
                            {item.price} lei
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Preventive Section */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#00D2FF] uppercase tracking-wide">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        2. Recomandări Preventive (Opțional)
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 font-normal">
                        ({recommendedCount} selectate)
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {quoteItems.filter(i => i.category === 'recommended').map(item => (
                        <div
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            item.selected 
                              ? 'bg-cyan-600/20 border-cyan-400/50 text-white' 
                              : 'bg-white/[0.02] border-white/5 text-slate-400'
                          }`}
                        >
                          <div className="flex items-start gap-2 max-w-[75%]">
                            <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                              item.selected ? 'bg-[#00D2FF] border-[#00D2FF] text-[#020b1b]' : 'border-slate-500'
                            }`}>
                              {item.selected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="font-semibold text-xs leading-tight text-white">{item.name}</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">
                                Garanție {item.warranty}
                              </div>
                            </div>
                          </div>

                          <div className="font-bold font-mono text-xs text-white">
                            {item.price} lei
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Total & 1-Tap Approval Button */}
                  <div className="pt-2 border-t border-white/10 space-y-2.5">
                    <div className="flex items-baseline justify-between px-1">
                      <span className="text-slate-400 font-mono text-xs">Total Estimativ cu TVA:</span>
                      <span className="text-lg font-black text-white font-mono">
                        {totalPrice} RON
                      </span>
                    </div>

                    {devizApproved ? (
                      <div className="w-full py-3 rounded-2xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>Aprobat de Andrei Popescu • Trimis în Atelier</span>
                      </div>
                    ) : (
                      <button
                        onClick={handleApproveDeviz}
                        className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>Aprobă Devizul pe WhatsApp (1-Tap)</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: INTERACTIVE RAR AUTOPASS SIMULATOR */}
        {activeTab === 'rar' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* Quick Vehicle Selector Bar */}
            <div className="p-4 sm:p-6 rounded-3xl bg-[#07172f] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#00D2FF] flex items-center justify-center font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Selectează un Vehicul din Simulator</h3>
                  <p className="text-xs text-slate-400">Sau introdu numărul de înmatriculare pentru căutare directă în baza RAR</p>
                </div>
              </div>

              {/* Sample Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {sampleVehicles.map((veh, idx) => (
                  <button
                    key={veh.plate}
                    onClick={() => {
                      setSelectedVehicleIdx(idx);
                      setRarSearchInput(veh.plate);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedVehicleIdx === idx
                        ? 'bg-[#0066FF] text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {veh.plate}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleRarSearch} className="flex gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={rarSearchInput}
                  onChange={(e) => setRarSearchInput(e.target.value)}
                  placeholder="ex. B 123 PRO sau serie șasiu (VIN)"
                  className="w-full h-12 pl-11 pr-4 rounded-full bg-[#0a1b38] border border-white/15 text-white font-mono text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#00D2FF] transition-all"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                disabled={isSearchingRar}
                className="h-12 px-6 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white font-bold text-sm flex items-center gap-2 hover:opacity-95 transition-all shadow-md shrink-0"
              >
                {isSearchingRar ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Conectare RAR...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Interogare RAR</span>
                  </>
                )}
              </button>
            </form>

            {/* Official Report Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#07172f]/90 border border-white/15 shadow-xl space-y-6">
              
              {/* Header Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-400/30 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      CERTIFICAT OFICIAL RAR AUTOPASS
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Sincronizat 2026</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    {currentVehicle.make}
                  </h4>
                  <div className="text-xs text-slate-300 font-mono mt-1">
                    VIN: <span className="text-[#00D2FF] font-bold">{currentVehicle.vin}</span> • An: {currentVehicle.year} • {currentVehicle.power}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setDownloadSuccess(true);
                      setTimeout(() => setDownloadSuccess(false), 2500);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all"
                  >
                    <Download className="w-4 h-4 text-[#00D2FF]" />
                    <span>{downloadSuccess ? 'Pașaport Descărcat!' : 'Exportă Pașaport Tehnic PDF'}</span>
                  </button>
                </div>
              </div>

              {/* Data Grid: Status, Odometer, ITP, Daune */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-slate-400 font-mono uppercase">Statut ITP</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{currentVehicle.itpStatus}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Expiră la: {currentVehicle.itpExpiry}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-slate-400 font-mono uppercase">Kilometraj Certificat</div>
                  <div className="text-xl font-black text-white mt-1 font-mono">
                    {currentVehicle.odometer.toLocaleString('ro-RO')} km
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-semibold">100% Istoric fără anomalii</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-slate-400 font-mono uppercase">Istoric Daune RAR</div>
                  <div className="text-sm font-bold text-white mt-1">
                    {currentVehicle.damageHistory}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Bază date națională asiguratori</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-slate-400 font-mono uppercase">Conformitate Normativă</div>
                  <div className="text-sm font-bold text-[#00D2FF] mt-1">
                    Directiva RAR 2026
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Raportare automată la ieșire service</div>
                </div>

              </div>

              {/* Verified Odometer Timeline Chart */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00D2FF]" />
                  Istoricul Înregistrărilor Kilometrajului la ITP
                </div>

                <div className="space-y-2">
                  {currentVehicle.history.map((h, i) => (
                    <div 
                      key={i} 
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#00D2FF]"></span>
                        <span className="font-bold text-white">{h.date}</span>
                        <span className="text-slate-400">{h.note}</span>
                      </div>
                      <span className="text-emerald-400 font-bold sm:text-right">
                        {h.km.toLocaleString('ro-RO')} km
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: HOIST SCHEDULER */}
        {activeTab === 'hoists' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Panou Live Atelier &amp; Elevatoare (Service Auto Expert)
                </h3>
                <p className="text-xs text-slate-400">
                  Apasă pe un elevator pentru a avansa stadiul lucrării sau a elibera postul
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> În Lucru
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Finalizat
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-500"></span> Liber
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hoists.map((hoist) => (
                <div
                  key={hoist.id}
                  onClick={() => advanceHoistStatus(hoist.id)}
                  className="p-5 rounded-2xl bg-[#07172f]/80 hover:bg-[#0c244b] border border-white/10 hover:border-[#00D2FF]/40 transition-all cursor-pointer flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-3">
                    
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#00D2FF]">
                        {hoist.name}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                        hoist.status === 'in_progress' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                        hoist.status === 'completed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' :
                        'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                      }`}>
                        {hoist.status === 'in_progress' ? 'În Lucru' : hoist.status === 'completed' ? 'Finalizat' : 'Liber / Rezervat'}
                      </span>
                    </div>

                    <div>
                      <div className="font-bold text-white text-base">
                        {hoist.car}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        {hoist.operation}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-slate-400">
                        <span>Progres Lucrare</span>
                        <span>{hoist.progress}%</span>
                      </div>
                      <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            hoist.status === 'completed' ? 'bg-emerald-400' : 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF]'
                          }`}
                          style={{ width: `${hoist.progress}%` }}
                        ></div>
                      </div>
                    </div>

                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#00D2FF]" />
                      {hoist.mechanic}
                    </span>
                    <span className="font-mono font-bold text-white">
                      {hoist.timeEst}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-400">
                💡 Sincronizare automată în timp real cu panoul de recepție și WhatsApp-ul clientului.
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
