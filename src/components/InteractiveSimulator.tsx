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
  Download, 
  Clock, 
  User,
  Sparkles,
  RefreshCw,
  UploadCloud,
  CheckCheck,
  FileText,
  Lock,
  ArrowRight
} from 'lucide-react';

interface InteractiveSimulatorProps {
  initialTab?: 'whatsapp' | 'rar' | 'hoists';
}

interface VehicleTransmission {
  id: string;
  plate: string;
  vin: string;
  make: string;
  year: number;
  km: number;
  devizNr: string;
  devizTotal: number;
  completedAt: string;
  mechanic: string;
  operations: string[];
  rarStatus: 'pending' | 'transmitting' | 'transmitted';
  protocolId?: string;
  transmissionTimestamp?: string;
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

  // --- STATE FOR TAB 2: 1-CLICK RAR AUTOPASS TRANSMISSION SIMULATOR ---
  const initialVehicles: VehicleTransmission[] = [
    {
      id: 'veh-1',
      plate: 'CJ 88 SAM',
      vin: 'WAUZZZ4G1EN049821',
      make: 'Audi A6 Avant 2.0 TDI',
      year: 2021,
      km: 142850,
      devizNr: 'SP-8429',
      devizTotal: 2150,
      completedAt: 'Azi, 11:30',
      mechanic: 'Ionuț Dumitrescu',
      operations: [
        'Kit Distribuție + Pompă Apă (ContiTech)',
        'Set Plăcuțe Frână Față (ATE)',
        'Aerisire Circuit & Verificare Tehnică'
      ],
      rarStatus: 'pending'
    },
    {
      id: 'veh-2',
      plate: 'B 123 PRO',
      vin: 'WBA5A71020G193820',
      make: 'BMW Seria 5 520d xDrive',
      year: 2019,
      km: 189200,
      devizNr: 'SP-8430',
      devizTotal: 1840,
      completedAt: 'Azi, 10:15',
      mechanic: 'Andrei Vasilescu',
      operations: [
        'Revizie Filtre + Ulei Motor LongLife 5W30',
        'Înlocuire Amortizoare Spate',
        'Test Geometrie Computerizată 3D'
      ],
      rarStatus: 'pending'
    },
    {
      id: 'veh-3',
      plate: 'TM 07 PIT',
      vin: 'WDD2050041F839211',
      make: 'Mercedes-Benz C220d BlueTEC',
      year: 2020,
      km: 115400,
      devizNr: 'SP-8431',
      devizTotal: 1450,
      completedAt: 'Azi, 09:40',
      mechanic: 'Mihai Popa',
      operations: [
        'Diagnoză Computerizată Sisteme Frânare',
        'Înlocuire Brațe Suspensie Față',
        'Calibrare Senzori Direcție & Unghi Fuga'
      ],
      rarStatus: 'pending'
    }
  ];

  const [vehicles, setVehicles] = useState<VehicleTransmission[]>(initialVehicles);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('veh-1');
  const [transmittingStep, setTransmittingStep] = useState<number>(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const currentVehicle = vehicles.find(v => v.id === selectedVehicleId) || vehicles[0];

  const handleTransmitToRar = (vehicleId: string) => {
    setVehicles(prev => prev.map(v => v.id === vehicleId ? { ...v, rarStatus: 'transmitting' } : v));
    setTransmittingStep(1);

    setTimeout(() => {
      setTransmittingStep(2);
    }, 700);

    setTimeout(() => {
      setTransmittingStep(3);
    }, 1400);

    setTimeout(() => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const protocolNumber = `RAR-PASS-2026-${Math.floor(100000 + Math.random() * 900000)}`;

      setVehicles(prev => prev.map(v => v.id === vehicleId ? { 
        ...v, 
        rarStatus: 'transmitted',
        protocolId: protocolNumber,
        transmissionTimestamp: timeStr
      } : v));
      setTransmittingStep(0);

      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    }, 2200);
  };

  const handleResetTransmission = (vehicleId: string) => {
    setVehicles(prev => prev.map(v => v.id === vehicleId ? { 
      ...v, 
      rarStatus: 'pending',
      protocolId: undefined,
      transmissionTimestamp: undefined
    } : v));
  };

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
    <section id="simulator" className="py-24 sm:py-32 bg-slate-100/70 dark:bg-[#020b1b] relative overflow-hidden text-slate-900 dark:text-white border-y border-slate-200 dark:border-white/10 transition-colors duration-300">
      
      {/* Background accents */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-[#00D2FF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-mono font-bold text-[#0066FF] dark:text-[#00D2FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            SIMULATOR INTERACTIV LIVE
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Experimentează SAMpro.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-cyan-500 dark:from-[#00D2FF] dark:via-[#0066FF] dark:to-blue-400">
              Interacționează cu Interfața Reală.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Alege un scenariu mai jos și testează cum aprobă clientul devizul pe WhatsApp, cum transmiți datele și devizul cu 1-click către RAR AutoPass și cum organizezi elevatoarele din atelier.
          </p>

          {/* Navigation Tabs Pill Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-[#07172f] border border-slate-300/80 dark:border-white/15 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>1. Deviz WhatsApp (Client)</span>
            </button>

            <button
              onClick={() => setActiveTab('rar')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'rar'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>2. Transmitere Date RAR AutoPass (1-Click)</span>
            </button>

            <button
              onClick={() => setActiveTab('hoists')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'hoists'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>3. Gestiune Elevatoare Atelier</span>
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

        {/* TAB 2: INTERACTIVE 1-CLICK RAR AUTOPASS TRANSMISSION SIMULATOR */}
        {activeTab === 'rar' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* Header info banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#07172f] border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-400/20 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CONFORMITATE LEGALĂ RAR AUTOPASS 2026
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Transmitere Automată Deviz la RAR AutoPass (1-Click)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Service-ul finalizează devizul de lucru, iar printr-un <strong>singur click pe automobil</strong>, kilometrajul și piesele montate sunt transmise automat prin API oficial direct în registrul RAR AutoPass.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                  Service Autorizat:
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-mono font-bold text-[#0066FF] dark:text-[#00D2FF]">
                  Autorizație RAR #B-0428
                </span>
              </div>
            </div>

            {/* 1. Interactive Vehicle Cards Grid: Click pe automobil */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Selectează un automobil cu deviz finalizat în atelier:
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {vehicles.filter(v => v.rarStatus === 'transmitted').length} din {vehicles.length} transmise
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {vehicles.map((veh) => {
                  const isSelected = veh.id === selectedVehicleId;
                  const isTransmitted = veh.rarStatus === 'transmitted';
                  const isTransmitting = veh.rarStatus === 'transmitting';

                  return (
                    <div
                      key={veh.id}
                      onClick={() => setSelectedVehicleId(veh.id)}
                      className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-blue-50/70 dark:bg-[#0c2246] border-[#0066FF] dark:border-[#00D2FF] shadow-lg shadow-blue-500/10 dark:shadow-[0_10px_30px_rgba(0,102,255,0.25)] ring-2 ring-[#0066FF] dark:ring-[#00D2FF]' 
                          : 'bg-white dark:bg-[#07172f]/80 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/[0.03]'
                      }`}
                    >
                      {/* Top Plate & Status Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center border border-slate-300 dark:border-white/20 rounded-md overflow-hidden text-xs font-mono font-black shadow-xs">
                          <span className="bg-[#003399] text-white px-1.5 py-0.5 text-[9px] flex items-center justify-center font-sans font-bold">
                            RO
                          </span>
                          <span className="px-2 py-0.5 bg-white text-slate-950 font-bold tracking-wider">
                            {veh.plate}
                          </span>
                        </div>

                        {isTransmitted ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold font-mono border border-emerald-400/30">
                            <CheckCheck className="w-3 h-3" />
                            Transmis RAR
                          </span>
                        ) : isTransmitting ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 text-[#0066FF] dark:text-[#00D2FF] text-[10px] font-bold font-mono border border-blue-400/30">
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            Se transmite...
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-bold font-mono border border-amber-400/30">
                            <Clock className="w-3 h-3" />
                            Așteaptă Transmitere
                          </span>
                        )}
                      </div>

                      {/* Vehicle Model & Deviz summary */}
                      <div className="space-y-1 mb-4">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                          {veh.make}
                        </h4>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          Deviz #{veh.devizNr} • {veh.devizTotal} lei
                        </div>
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 pt-1">
                          <span className="text-slate-400 font-normal">Bord:</span>
                          <span className="font-mono font-bold text-[#0066FF] dark:text-[#00D2FF]">
                            {veh.km.toLocaleString('ro-RO')} km
                          </span>
                        </div>
                      </div>

                      {/* 1-Click Transmit Button on Card */}
                      <div>
                        {isTransmitted ? (
                          <div className="w-full py-2 px-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-400/30 text-xs font-bold font-mono text-center flex items-center justify-center gap-1.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>Protocol: {veh.protocolId?.slice(-6)}</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            disabled={isTransmitting}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVehicleId(veh.id);
                              handleTransmitToRar(veh.id);
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold transition-all shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                          >
                            {isTransmitting ? (
                              <>
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                <span>Se transmite...</span>
                              </>
                            ) : (
                              <>
                                <UploadCloud className="w-3.5 h-3.5" />
                                <span>Transmite la RAR (1-Click)</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Detailed Transmission Dossier & Live Terminal */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#07172f]/95 border border-slate-200 dark:border-white/15 shadow-xl space-y-6">
              
              {/* Dossier Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 text-[#0066FF] dark:text-[#00D2FF] font-mono text-xs font-bold border border-blue-200 dark:border-blue-400/20">
                      DOSAR DEVIZ SERVICE #{currentVehicle.devizNr}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      Finalizat {currentVehicle.completedAt}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {currentVehicle.make} ({currentVehicle.year})
                  </h4>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    VIN (Serie Șasiu): <strong className="text-slate-900 dark:text-white">{currentVehicle.vin}</strong> • Înmatriculare: <strong className="text-[#0066FF] dark:text-[#00D2FF]">{currentVehicle.plate}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  {currentVehicle.rarStatus === 'transmitted' && (
                    <button
                      type="button"
                      onClick={() => {
                        setDownloadSuccess(true);
                        setTimeout(() => setDownloadSuccess(false), 2500);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/25 font-bold text-xs flex items-center gap-2 border border-emerald-300 dark:border-emerald-400/30 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{downloadSuccess ? 'Recipisă Descărcată!' : 'Exportă Recipisă RAR (PDF)'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Main 2-column Grid: Left = Legal Payload to be sent, Right = 1-Click Action & Response */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Column: Data points sent to RAR AutoPass */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#0066FF] dark:text-[#00D2FF]" />
                    Date transmise oficial în Pașaportul Tehnic RAR:
                  </div>

                  <div className="space-y-3">
                    {/* Item 1: Odometer */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Kilometraj Citit în Bord la Recepție/Ieșire</div>
                        <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                          {currentVehicle.km.toLocaleString('ro-RO')} km
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold border border-emerald-200 dark:border-emerald-400/20">
                        Certificat Service
                      </span>
                    </div>

                    {/* Item 2: Interventions & Deviz Operations */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-slate-400 font-semibold">Lucrări & Piese Montate (Deviz #{currentVehicle.devizNr}):</span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">{currentVehicle.devizTotal} RON</span>
                      </div>
                      <div className="space-y-1">
                        {currentVehicle.operations.map((op, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{op}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Item 3: Legal Compliance & Service Metadata */}
                    <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#0066FF] dark:text-[#00D2FF]" />
                        <span>Transmisie securizată prin certificat API Registrul Auto Român</span>
                      </div>
                      <span className="font-mono font-bold text-[#0066FF] dark:text-[#00D2FF] text-[11px]">
                        Legea 142/2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: 1-Click Action & Live Status Terminal */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* State 1: PENDING TRANSMISSION */}
                  {currentVehicle.rarStatus === 'pending' && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0a1b38] border border-slate-200 dark:border-white/10 space-y-4">
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wide">
                        <Clock className="w-4 h-4" />
                        Gata de raportare oficială
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Toate piesele și manopera din devizul <strong>#{currentVehicle.devizNr}</strong> au fost verificate. Apasă butonul de mai jos pentru transmiterea imediată a fișei către RAR AutoPass.
                      </p>

                      <button
                        type="button"
                        onClick={() => handleTransmitToRar(currentVehicle.id)}
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-cyan-500 hover:from-[#0052cc] hover:to-cyan-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                      >
                        <UploadCloud className="w-4 h-4" />
                        <span>Transmite Devizul la RAR AutoPass (1-Click)</span>
                      </button>

                      <div className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                        ⚡ Fără reintroducere manuală • Fără timp pierdut la ghișeu
                      </div>
                    </div>
                  )}

                  {/* State 2: TRANSMITTING LIVE ANIMATION */}
                  {currentVehicle.rarStatus === 'transmitting' && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/80 dark:bg-[#0a1b38] border border-blue-300 dark:border-blue-400/40 space-y-4 animate-in fade-in">
                      <div className="flex items-center gap-2 text-[#0066FF] dark:text-[#00D2FF] font-bold text-xs uppercase tracking-wide">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Se transmite devizul către RAR...
                      </div>

                      {/* Progress Steps */}
                      <div className="space-y-2.5 text-xs font-mono">
                        <div className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors ${
                          transmittingStep >= 1 ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold' : 'text-slate-400'
                        }`}>
                          {transmittingStep > 1 ? <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" /> : <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 animate-spin"></span>}
                          <span>1. Criptare deviz &amp; km: {currentVehicle.km.toLocaleString()} km</span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors ${
                          transmittingStep >= 2 ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold' : 'text-slate-400'
                        }`}>
                          {transmittingStep > 2 ? <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" /> : transmittingStep === 2 ? <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 animate-spin"></span> : <span className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>}
                          <span>2. Conectare nod securizat API RAR AutoPass</span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors ${
                          transmittingStep >= 3 ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold' : 'text-slate-400'
                        }`}>
                          {transmittingStep === 3 ? <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 animate-spin"></span> : <span className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>}
                          <span>3. Înregistrare oficială în Pașaportul Tehnic</span>
                        </div>
                      </div>

                      <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#0066FF] to-cyan-400 h-full transition-all duration-500"
                          style={{ width: `${(transmittingStep / 3) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* State 3: TRANSMITTED SUCCESSFULLY */}
                  {currentVehicle.rarStatus === 'transmitted' && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-400/40 text-emerald-900 dark:text-emerald-200 space-y-4 animate-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                        <div>
                          <div className="font-black text-sm text-slate-900 dark:text-white">
                            TRANSMITERE FINALIZATĂ CU SUCCES!
                          </div>
                          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">
                            Protocol: {currentVehicle.protocolId}
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-emerald-200 dark:border-emerald-400/20 text-xs space-y-1.5 font-mono">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Ora raportării:</span>
                          <span className="font-bold text-slate-900 dark:text-white">{currentVehicle.transmissionTimestamp}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Km înregistrați:</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentVehicle.km.toLocaleString()} km</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Deviz asociat:</span>
                          <span className="font-bold text-slate-900 dark:text-white">#{currentVehicle.devizNr}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        Datele au fost integrate oficial în Pașaportul Tehnic al autovehiculului {currentVehicle.plate}.
                      </p>

                      <div className="pt-1 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => handleResetTransmission(currentVehicle.id)}
                          className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline cursor-pointer"
                        >
                          Resetează pentru a retesta
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const nextVeh = vehicles.find(v => v.id !== currentVehicle.id && v.rarStatus === 'pending');
                            if (nextVeh) setSelectedVehicleId(nextVeh.id);
                          }}
                          className="text-xs font-bold text-[#0066FF] dark:text-[#00D2FF] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Următorul automobil</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

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
