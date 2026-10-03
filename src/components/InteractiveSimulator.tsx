import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Smartphone,
  Car,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
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
  ArrowRight,
  CreditCard,
  RotateCcw,
  Camera,
  ExternalLink,
  Wrench,
  Search,
  Bell,
  ChevronRight,
  Plus,
  QrCode,
  MessageSquare,
  Send,
  Users,
  Zap,
  SlidersHorizontal,
  Mic,
  X,
  Radio
} from 'lucide-react';

interface InteractiveSimulatorProps {
  initialTab?: 'whatsapp' | 'mechanic' | 'rar' | 'hoists';
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
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'mechanic' | 'rar' | 'hoists'>(initialTab);
  const [prevInitialTab, setPrevInitialTab] = useState(initialTab);

  if (prevInitialTab !== initialTab) {
    setPrevInitialTab(initialTab);
    setActiveTab(initialTab);
  }

  // --- STATE FOR TAB 1: WHATSAPP DEVIZ SIMULATOR (STREAMLINED 5-STEP JOURNEY) ---
  const [waStep, setWaStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [includeAddon, setIncludeAddon] = useState<boolean>(false);
  const [isPayingOnline, setIsPayingOnline] = useState<boolean>(false);
  const [isPaidOnline, setIsPaidOnline] = useState<boolean>(false);

  const baseDevizPrice = 2330;
  const addonPrice = 120;
  const currentDevizTotal = baseDevizPrice + (includeAddon ? addonPrice : 0);

  const handleOpenExactOffer = () => {
    setWaStep(2);
  };

  const handleApproveExactOffer = () => {
    setWaStep(3);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleToggleAddon = (add: boolean) => {
    setIncludeAddon(add);
    setWaStep(4);
  };

  const handleSimulatePayment = () => {
    setIsPayingOnline(true);
    setTimeout(() => {
      setIsPayingOnline(false);
      setIsPaidOnline(true);
      setWaStep(5);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 1100);
  };

  const handleResetWhatsAppFlow = () => {
    setWaStep(1);
    setIncludeAddon(false);
    setIsPayingOnline(false);
    setIsPaidOnline(false);
  };

  // --- STATE FOR TAB 2: MECHANIC APP & INTERNAL WORKSHOP COMMUNICATION ---
  const [mechanicViewMode, setMechanicViewMode] = useState<'both' | 'mechanic' | 'manager' | 'chat'>('both');
  const [mechanicTabFilter, setMechanicTabFilter] = useState<'in_progress' | 'completed' | 'all'>('in_progress');
  const [managerTabFilter, setManagerTabFilter] = useState<'all' | 'waiting' | 'in_progress' | 'completed'>('all');
  const [mechanicSearchQuery, setMechanicSearchQuery] = useState('');
  const [isScanVinModalOpen, setIsScanVinModalOpen] = useState(false);
  const [isVinScanning, setIsVinScanning] = useState(false);
  const [scannedVinData, setScannedVinData] = useState<{ plate: string; vin: string; model: string; km: string } | null>(null);
  const [isNewNoteModalOpen, setIsNewNoteModalOpen] = useState(false);
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [newNoteForm, setNewNoteForm] = useState({
    plate: 'TM-30-MSY',
    model: 'Volkswagen Golf 1.6 TDI',
    defectCategory: 'Distribuție & Motor',
    observation: 'La demontare constatat scurgere la presetupa pompei de apă și curea cu microfisuri. Solicităm acord client pentru înlocuire kit distribuție complet.',
    photoAttached: true
  });
  const [selectedWorkshopVehicle, setSelectedWorkshopVehicle] = useState<{
    id: string;
    plate: string;
    model: string;
    engine: string;
    km: string;
    client: string;
    duration: string;
    status: string;
    statusLabel: string;
    statusTag: string;
    statusColor: string;
    timeReception: string;
    clientsWait: number;
    vin: string;
    diagnosis: string;
    parts: string[];
    assignedMechanic: string;
    photosCount: number;
  } | null>(null);

  const workshopVehiclesList = [
    {
      id: 'w-1',
      plate: 'TM-30-MSY',
      model: 'Volkswagen Golf',
      engine: 'Motorizare 1.6 TDI',
      km: '165.080 km',
      client: 'Popescu Andrei',
      duration: '2h',
      status: 'in_progress',
      statusLabel: 'În lucru',
      statusTag: '#11',
      statusColor: 'blue',
      timeReception: '09:15',
      clientsWait: 2,
      vin: 'WVWZZZAUZJP189042',
      diagnosis: 'Înlocuire kit distribuție ContiTech + Pompă apă SKF. Constatat garnitură uzată.',
      parts: ['Kit distribuție', 'Pompă apă', 'Curea accesorii', 'Antigel G12 (3L)'],
      assignedMechanic: 'Alex B. (Elevator 2)',
      photosCount: 4
    },
    {
      id: 'w-2',
      plate: 'TM-26-ESO',
      model: 'BMW X5',
      engine: 'Motorizare 3.0d',
      km: '142.300 km',
      client: 'Ionescu Mihai',
      duration: '5h',
      status: 'to_do',
      statusLabel: 'De făcut',
      statusTag: '#10',
      statusColor: 'amber',
      timeReception: '10:42',
      clientsWait: 3,
      vin: 'WBAKS410800L98214',
      diagnosis: 'Verificare joc articulație braț inferior stânga + schimb plăcuțe frână ATE Ceramic.',
      parts: ['Braț inferior suspensie', 'Set plăcuțe ATE', 'Senzor uzură'],
      assignedMechanic: 'Alex B. (Elevator 1)',
      photosCount: 2
    },
    {
      id: 'w-3',
      plate: 'TM-18-KLW',
      model: 'Audi A4',
      engine: 'Motorizare 2.0 TDI',
      km: '98.450 km',
      client: 'Toma Cristian',
      duration: '1h',
      status: 'completed',
      statusLabel: 'Finalizată',
      statusTag: '#09',
      statusColor: 'emerald',
      timeReception: '12:30',
      clientsWait: 1,
      vin: 'WAUZZZF48HA120934',
      diagnosis: 'Revizie periodică completă ulei Castrol 5W30 + filtre MANN. Reset service și diagnoză OK.',
      parts: ['Ulei 5W30 5L', 'Filtru ulei', 'Filtru aer', 'Filtru polen', 'Filtru motorină'],
      assignedMechanic: 'Alex B. (Elevator 3)',
      photosCount: 3
    },
    {
      id: 'w-4',
      plate: 'TM-12-STS',
      model: 'Ford Transit',
      engine: 'Motorizare 2.2 TDCI',
      km: '210.000 km',
      client: 'SC Delta SRL',
      duration: '6h',
      status: 'in_progress',
      statusLabel: 'În lucru',
      statusTag: '#08',
      statusColor: 'blue',
      timeReception: '14:05',
      clientsWait: 1,
      vin: 'WF0XXXTTGXHG54321',
      diagnosis: 'Înlocuire kit complet ambreiaj cu volantă dublă LUK și rulment de presiune hidraulic.',
      parts: ['Volantă cu masă dublă LUK', 'Disc & placă ambreiaj', 'Rulment presiune'],
      assignedMechanic: 'Alex B. (Elevator 4)',
      photosCount: 5
    }
  ];

  // Live Internal Chat Demo state
  const [internalMessages, setInternalMessages] = useState<Array<{
    id: string;
    sender: string;
    role: 'mechanic' | 'manager' | 'warehouse' | 'system';
    avatarColor: string;
    time: string;
    message: string;
    badge?: string;
  }>>([
    {
      id: 'm1',
      sender: 'Alex B.',
      role: 'mechanic',
      avatarColor: 'bg-blue-600',
      time: '10:14',
      message: 'La Golf-ul TM-30-MSY: am demontat cureaua de accesorii, pompa de apă are joc mare și scurgeri vizibile. Vă rog trimiteți deviz adițional către client!',
      badge: '🔧 Elevator 2'
    },
    {
      id: 'm2',
      sender: 'Mihai R.',
      role: 'manager',
      avatarColor: 'bg-amber-600',
      time: '10:16',
      message: 'Am întocmit fișa adițională (+340 Lei kit pompă + antigel G12) și am trimis linkul direct pe WhatsApp către clientul Andrei Popescu.',
      badge: '📋 Recepție'
    },
    {
      id: 'm3',
      sender: 'SAMpro Bot',
      role: 'system',
      avatarColor: 'bg-emerald-600',
      time: '10:17',
      message: '✅ Clientul Andrei Popescu a aprobat suplimentarea devizului de pe smartphone în 38 secunde!',
      badge: '⚡ Notificare Automată WhatsApp'
    },
    {
      id: 'm4',
      sender: 'Elena T.',
      role: 'warehouse',
      avatarColor: 'bg-purple-600',
      time: '10:19',
      message: 'Kitul de pompă de apă OE (SKF VKMC) a fost scos din stoc și este pe căruciorul alocat pentru elevatorul 2.',
      badge: '📦 Magazie Piese'
    },
    {
      id: 'm5',
      sender: 'Alex B.',
      role: 'mechanic',
      avatarColor: 'bg-blue-600',
      time: '10:21',
      message: 'Piese recepționate. Încep montajul. Finalizare estimată: 12:15.',
      badge: '🔧 Elevator 2'
    }
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');

  const handleSendChatMessage = (preset?: string) => {
    const textToSend = preset || newChatMessage.trim();
    if (!textToSend) return;
    const newMsg = {
      id: `m-${Date.now()}`,
      sender: 'Alex B.',
      role: 'mechanic' as const,
      avatarColor: 'bg-blue-600',
      time: 'Acum',
      message: textToSend,
      badge: '🔧 Elevator 2 (Tu)'
    };
    setInternalMessages(prev => [...prev, newMsg]);
    setNewChatMessage('');

    // Auto-reply simulation from Șef Atelier after 1.2s
    setTimeout(() => {
      setInternalMessages(prev => [
        ...prev,
        {
          id: `m-${Date.now() + 1}`,
          sender: 'Mihai R.',
          role: 'manager',
          avatarColor: 'bg-amber-600',
          time: 'Acum',
          message: 'Am recepționat solicitarea ta! Informația a fost sincronizată în fișa vehiculului și pe ecranul de recepție.',
          badge: '📋 Șef Atelier'
        }
      ]);
    }, 1100);
  };

  const handleStartVinScan = () => {
    setIsScanVinModalOpen(true);
    setIsVinScanning(true);
    setScannedVinData(null);
    setTimeout(() => {
      setIsVinScanning(false);
      setScannedVinData({
        plate: 'TM-30-MSY',
        vin: 'WVWZZZAUZJP189042',
        model: 'Volkswagen Golf VII 1.6 TDI (2018)',
        km: '165.080 km'
      });
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 1800);
  };

  const handleSaveNote = () => {
    setIsNewNoteModalOpen(false);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Add automatic ping to internal messages
    setInternalMessages(prev => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        sender: 'Alex B.',
        role: 'mechanic',
        avatarColor: 'bg-blue-600',
        time: 'Acum',
        message: `📋 Notă nouă de constatare adăugată pentru ${newNoteForm.plate}: ${newNoteForm.observation}`,
        badge: '🔧 Notă de Constatare'
      },
      {
        id: `m-${Date.now() + 1}`,
        sender: 'Mihai R.',
        role: 'manager',
        avatarColor: 'bg-amber-600',
        time: 'Acum',
        message: `Preluat constatarea pentru ${newNoteForm.plate}. Prețurile pieselor au fost verificate și transmise spre aprobare client.`,
        badge: '📋 Șef Atelier'
      }
    ]);
  };

  // Filtered vehicles for Mechanic Phone
  const filteredMechanicVehicles = workshopVehiclesList.filter(car => {
    if (mechanicSearchQuery) {
      const q = mechanicSearchQuery.toLowerCase();
      const matches = car.plate.toLowerCase().includes(q) || car.model.toLowerCase().includes(q) || car.client.toLowerCase().includes(q) || car.vin.toLowerCase().includes(q);
      if (!matches) return false;
    }
    if (mechanicTabFilter === 'in_progress') return car.status === 'in_progress' || car.status === 'to_do';
    if (mechanicTabFilter === 'completed') return car.status === 'completed';
    return true;
  });

  // Filtered vehicles for Manager Phone
  const filteredManagerVehicles = workshopVehiclesList.filter(car => {
    if (mechanicSearchQuery) {
      const q = mechanicSearchQuery.toLowerCase();
      const matches = car.plate.toLowerCase().includes(q) || car.model.toLowerCase().includes(q) || car.client.toLowerCase().includes(q) || car.vin.toLowerCase().includes(q);
      if (!matches) return false;
    }
    if (managerTabFilter === 'waiting') return car.status === 'to_do';
    if (managerTabFilter === 'in_progress') return car.status === 'in_progress';
    if (managerTabFilter === 'completed') return car.status === 'completed';
    return true;
  });

  // --- STATE FOR TAB 3: 1-CLICK RAR AUTOPASS TRANSMISSION SIMULATOR ---
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
            Alege un scenariu mai jos și testează cum aprobă clientul devizul pe WhatsApp, transmiterea cu 1-click a datelor către RAR AutoPass și organizarea elevatoarelor în atelier.
          </p>

          {/* Navigation Tabs - Responsive Grid without horizontal scroll */}
          <div className="mt-8 w-full max-w-4xl mx-auto p-1.5 rounded-2xl bg-slate-200/70 dark:bg-[#07172f] border border-slate-300/80 dark:border-white/15 grid grid-cols-1 md:grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center text-center gap-2 cursor-pointer ${activeTab === 'whatsapp'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                }`}
            >
              <Smartphone className="w-4 h-4 shrink-0" />
              <span className="leading-snug">1. Deviz WhatsApp (Client)</span>
            </button>

            <button
              onClick={() => setActiveTab('rar')}
              className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center text-center gap-2 cursor-pointer ${activeTab === 'rar'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span className="leading-snug">2. Transmitere Date RAR AutoPass (1-Click)</span>
            </button>

            <button
              onClick={() => setActiveTab('hoists')}
              className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center text-center gap-2 cursor-pointer ${activeTab === 'hoists'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="leading-snug">3. Gestiune Elevatoare Atelier</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STREAMLINED 5-STEP WHATSAPP DEVIZ & RECEPTION FLOW (NO BIG PHONE) */}
        {activeTab === 'whatsapp' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">

            {/* 5-Step Interactive Progress Stepper */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#07172f] border border-slate-200 dark:border-white/10">
              {[
                { step: 1, label: '1. Link WhatsApp', icon: Smartphone },
                { step: 2, label: '2. Ofertă & Aprobare', icon: CheckCircle2 },
                { step: 3, label: '3. Documente & Update', icon: FileText },
                { step: 4, label: '4. Plată Online', icon: CreditCard },
                { step: 5, label: '5. Gata de Predare', icon: Car },
              ].map((item) => {
                const ItemIcon = item.icon;
                const isCurrent = waStep === item.step;
                const isPassed = waStep > item.step;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setWaStep(item.step as 1 | 2 | 3 | 4 | 5)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${isCurrent
                        ? 'bg-[#0066FF] text-white shadow-md'
                        : isPassed
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-400/30'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                  >
                    <ItemIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Authentic WhatsApp Conversation Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-xl bg-white dark:bg-[#07172f]">

              {/* WhatsApp Business Header Bar */}
              <div className="bg-[#075E54] dark:bg-[#0d2a23] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 border border-white/30 flex items-center justify-center font-bold text-sm text-white shadow-sm shrink-0">
                    SA
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base leading-tight">
                      <span>Service Auto Expert</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400 text-[#075E54] text-[9px] font-black">
                        ✓
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-200/90 font-sans mt-0.5">
                      Cont Oficial WhatsApp Business • Automatizat prin SAMpro
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-emerald-200">
                    Audi A6 • CJ 88 SAM
                  </span>
                </div>
              </div>

              {/* Chat Thread Container */}
              <div className="p-4 sm:p-6 space-y-5 bg-[#f0f2f5] dark:bg-[#051121] min-h-[440px]">

                {/* ── STEP 1 BUBBLE: Mesaj WhatsApp cu link ofertă ── */}
                <div className="flex items-start gap-2.5 max-w-2xl">
                  <div className="p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-white dark:bg-[#0c1f38] border border-slate-200 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-100 text-xs sm:text-sm space-y-3">
                    <p className="leading-relaxed">
                      Bună ziua, dl. <strong>Andrei Popescu</strong>! 👋 <br />
                      Constatarea tehnică pentru <strong>Audi A6 (CJ 88 SAM)</strong> a fost finalizată. Am pregătit devizul detaliat cu piesele necesare și manopera normată conform catalogului.
                    </p>

                    {/* Rich Link Preview Card */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span>🔗 sampro.ro/deviz/SP-8429</span>
                        <span className="text-[#0066FF] dark:text-[#00D2FF] font-bold">142.850 km</span>
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">
                        Deviz Digital #SP-8429 • Service Auto Expert
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">
                        Kit Distribuție + Pompă Apă • Plăcuțe Frână Față (ATE)
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">Total estimat:</span>
                        <span className="font-mono font-black text-sm text-[#0066FF] dark:text-[#00D2FF]">2.330 RON</span>
                      </div>
                    </div>

                    {waStep === 1 ? (
                      <button
                        type="button"
                        onClick={handleOpenExactOffer}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Deschide Oferta Exactă (Pasul 2)</span>
                      </button>
                    ) : (
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        Oferta a fost deschisă și vizualizată de client.
                      </div>
                    )}

                    <div className="text-[10px] text-slate-400 text-right font-mono">10:45 ✓✓</div>
                  </div>
                </div>

                {/* ── STEP 2 BUBBLE: Oferta exactă transparentă & Buton de Accept ── */}
                {waStep >= 2 && (
                  <div className="flex items-start gap-2.5 max-w-2xl animate-in fade-in duration-300">
                    <div className="w-full p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-white dark:bg-[#0c1f38] border border-blue-200 dark:border-blue-500/30 shadow-md text-slate-800 dark:text-slate-100 text-xs sm:text-sm space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <FileText className="w-4 h-4 text-[#0066FF] dark:text-[#00D2FF]" />
                          <span>Oferta Exactă Detaliată (Transparentă)</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/20 text-[#0066FF] dark:text-[#00D2FF] text-[10px] font-mono font-bold">
                          #SP-8429
                        </span>
                      </div>

                      {/* Items table */}
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white text-xs">Kit Distribuție + Pompă Apă (ContiTech)</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Piesă originală • Garanție 24 luni</div>
                          </div>
                          <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">1.180 lei</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white text-xs">Set Plăcuțe Frână Față (ATE Original)</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Sistem frânare • Garanție 24 luni</div>
                          </div>
                          <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">420 lei</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white text-xs">Manoperă Înlocuire Distribuție + Aerisire</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">3.2 ore normate oficiale</div>
                          </div>
                          <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">550 lei</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white text-xs">Manoperă Înlocuire Plăcuțe Față</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">1.0 oră normată  </div>
                          </div>
                          <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">180 lei</span>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Total Ofertă cu TVA inclus:</span>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">Preț garantat, fără costuri ascunse</div>
                        </div>
                        <span className="text-base sm:text-lg font-black font-mono text-[#0066FF] dark:text-[#00D2FF]">
                          2.330 RON
                        </span>
                      </div>

                      {waStep === 2 ? (
                        <button
                          type="button"
                          onClick={handleApproveExactOffer}
                          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95 cursor-pointer"
                        >
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Aprobă Oferta pe WhatsApp (1-Click)</span>
                        </button>
                      ) : (
                        <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Oferta a fost acceptată cu 1 click de Andrei Popescu • Trimis în atelier</span>
                        </div>
                      )}

                      <div className="text-[10px] text-slate-400 text-right font-mono">10:47 ✓✓</div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3 BUBBLE: Documente primite & Update deviz live ── */}
                {waStep >= 3 && (
                  <div className="flex items-start gap-2.5 max-w-2xl animate-in fade-in duration-300">
                    <div className="w-full p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-white dark:bg-[#0c1f38] border border-slate-200 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-100 text-xs sm:text-sm space-y-3.5">
                      <p className="leading-relaxed">
                        ✅ <strong>Oferta a fost confirmată!</strong> Piesele au fost comandate automat, iar mașina a intrat pe Elevatorul 1 (mecanic Ionuț Dumitrescu).
                      </p>

                      {/* Downloadable Documents */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                          Documente &amp; Poze Atașate:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-red-500" />
                              <div>
                                <div className="font-semibold text-xs">Fișă Constatare.pdf</div>
                                <div className="text-[9px] text-slate-400">1.4 MB • Semnat digital</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#0066FF] dark:text-[#00D2FF]">Descarcă</span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Camera className="w-4 h-4 text-emerald-500" />
                              <div>
                                <div className="font-semibold text-xs">4 Poze Atelier.zip</div>
                                <div className="text-[9px] text-slate-400">Curea uzată + Plăcuțe</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#0066FF] dark:text-[#00D2FF]">Vezi poze</span>
                          </div>
                        </div>
                      </div>

                      {/* Live Update Box */}
                      <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-400/30 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Update din atelier (Deviz adițional):</span>
                        </div>
                        <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                          La demontare, mecanicul a constatat filtrul de habitaclu colmatat cu praf. Recomandăm înlocuirea cu un filtru nou cu carbon activ (+120 lei).
                        </p>

                        {waStep === 3 ? (
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => handleToggleAddon(true)}
                              className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>+ Aprobă Update (+120 lei)</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleToggleAddon(false)}
                              className="py-1.5 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/15 text-slate-700 dark:text-white font-semibold text-xs cursor-pointer"
                            >
                              Menține devizul inițial
                            </button>
                          </div>
                        ) : (
                          <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                            {includeAddon
                              ? '✓ Filtru habitaclu aprobat (+120 lei) • Deviz actualizat: 2.450 lei'
                              : '✓ Menținut devizul inițial de 2.330 lei'}
                          </div>
                        )}
                      </div>

                      <div className="text-[10px] text-slate-400 text-right font-mono">11:15 ✓✓</div>
                    </div>
                  </div>
                )}

                {/* ── STEP 4 BUBBLE: Deviz final & Plată online ── */}
                {waStep >= 4 && (
                  <div className="flex items-start gap-2.5 max-w-2xl animate-in fade-in duration-300">
                    <div className="w-full p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-white dark:bg-[#0c1f38] border border-slate-200 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-100 text-xs sm:text-sm space-y-3.5">
                      <p className="leading-relaxed">
                        🔧 <strong>Lucrările au fost finalizate cu succes!</strong> Testul de frânare și diagnoza pe stand au ieșit impecabil. Devizul final consolidat este gata.
                      </p>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500 dark:text-slate-400">Factură Fiscală:</span>
                          <span className="font-bold text-slate-900 dark:text-white">#FAC-2026-8429 (SPV ANAF ✓)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500 dark:text-slate-400">Total Deviz Final:</span>
                          <span className="font-black text-base text-slate-900 dark:text-white">
                            {currentDevizTotal.toLocaleString('ro-RO')} RON
                          </span>
                        </div>
                      </div>

                      {!isPaidOnline ? (
                        <div className="space-y-2">
                          <button
                            type="button"
                            disabled={isPayingOnline}
                            onClick={handleSimulatePayment}
                            className="w-full py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all active:scale-95 cursor-pointer"
                          >
                            {isPayingOnline ? (
                              <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                <span>Se procesează plata securizată...</span>
                              </>
                            ) : (
                              <>
                                <CreditCard className="w-4 h-4" />
                                <span>Plătește Online cu Cardul ({currentDevizTotal} lei)</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => setWaStep(5)}
                            className="w-full py-2 text-center text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline cursor-pointer"
                          >
                            Sau voi achita direct la recepție cu card/numerar
                          </button>
                        </div>
                      ) : (
                        <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Plată online de {currentDevizTotal} lei confirmată! Chitanța și factura au fost trimise pe email.</span>
                        </div>
                      )}

                      <div className="text-[10px] text-slate-400 text-right font-mono">12:30 ✓✓</div>
                    </div>
                  </div>
                )}

                {/* ── STEP 5 BUBBLE: Mesaj final: Mașina este gata de predare! ── */}
                {waStep >= 5 && (
                  <div className="flex items-start gap-2.5 max-w-2xl animate-in fade-in duration-300">
                    <div className="w-full p-5 sm:p-6 rounded-2xl rounded-tl-xs bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white dark:from-[#06241e] dark:via-[#092b23] dark:to-[#07172f] border-2 border-emerald-400/50 shadow-xl text-slate-800 dark:text-slate-100 text-xs sm:text-sm space-y-3.5">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base">
                        <Car className="w-5 h-5" />
                        <span>🚗✨ Mașina este gata de predare!</span>
                      </div>

                      <p className="leading-relaxed text-slate-700 dark:text-slate-200">
                        Dl. <strong>Andrei Popescu</strong>, automobilul dvs. <strong>Audi A6 (CJ 88 SAM)</strong> a fost spălat exterior și vă așteaptă în parcarea service-ului!
                      </p>

                      <div className="p-3.5 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-emerald-200/80 dark:border-emerald-400/20 space-y-1.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <span>Pachetul complet de predare este pregătit la recepție:</span>
                        </div>
                        <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-5 list-disc">
                          <li>Cheile mașinii igienizate</li>
                          <li>Certificat de garanție 24 luni pentru piesele ContiTech &amp; ATE</li>
                          <li>Devizul ștampilat și chitanța fiscală</li>
                          <li>Sincronizare automată în registrul oficial RAR AutoPass</li>
                        </ul>
                      </div>

                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Memento automat: Următoarea revizie și ITP programate peste 10.000 km.</span>
                      </div>

                      {/* Reset flow button */}
                      <div className="pt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={handleResetWhatsAppFlow}
                          className="py-2 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-all cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Resetează și testează fluxul din nou</span>
                        </button>
                      </div>

                      <div className="text-[10px] text-slate-400 text-right font-mono">13:10 ✓✓</div>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: MECHANIC APP & INTERNAL WORKSHOP COMMUNICATION (AUTOCEV / SAMpro) */}
        {activeTab === 'mechanic' && (
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">

            {/* Top Controls Bar: Subtitle & View Mode Switcher */}
            <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-[#07172f] border border-slate-200 dark:border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-mono font-bold text-[#0066FF] dark:text-[#00D2FF] mb-2">
                  <Wrench className="w-3.5 h-3.5" />
                  APLICAȚIE MOBILĂ MECANICI &amp; DISPECERAT
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Aplicație Dedicată Mecanici &amp; Comunicare Internă Atelier
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Interfață tactilă rapidă pentru mecanici la elevator și șeful de atelier. Note de constatare digitale, scanare VIN, alocare automată pe elevatoare și comunicare instantă fără deplasări.
                </p>
              </div>

              {/* View Switcher Controls */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setMechanicViewMode('both')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${mechanicViewMode === 'both'
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  📱 Ambele Ecrane
                </button>
                <button
                  type="button"
                  onClick={() => setMechanicViewMode('mechanic')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${mechanicViewMode === 'mechanic'
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  🔧 Vedere Mecanic
                </button>
                <button
                  type="button"
                  onClick={() => setMechanicViewMode('manager')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${mechanicViewMode === 'manager'
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  📋 Vedere Șef Atelier
                </button>
                <button
                  type="button"
                  onClick={() => setMechanicViewMode('chat')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${mechanicViewMode === 'chat'
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat Intern ({internalMessages.length})</span>
                </button>
              </div>
            </div>

            {/* MAIN WORKSHOP SHOWCASE: Left Banner + Phone Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* LEFT VALUE PROPOSITION PILLAR (MATCHING USER SCREENSHOT) */}
              <div className="lg:col-span-3 space-y-4">
                <div className="p-6 rounded-3xl bg-gradient-to-b from-[#091b36] via-[#051329] to-[#040e20] border border-blue-500/25 shadow-2xl relative overflow-hidden text-white space-y-6">
                  {/* Glowing background blob */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />

                  {/* Brand Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-[#0066FF] flex items-center justify-center font-black text-white text-xs shadow-md">
                        SP
                      </div>
                      <span className="font-black text-lg tracking-wider text-white">
                        AUTOCEV <span className="text-[#00D2FF] text-xs font-semibold">APP</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      LIVE v3.4
                    </span>
                  </div>

                  {/* 4 Core Pillars from user screenshot */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-[#00D2FF] shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">Flux de lucru clar și rapid</div>
                        <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                          Mecanicul știe exact ordinea mașinilor și timpii alocați direct pe telefon/tabletă.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">Informații complete și actualizate</div>
                        <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                          Istoric mecanic, kilometraj confirmat și fotografii direct de la elevator.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">Mai puțină birocrație, mai mult timp</div>
                        <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                          Zero foi murdare de ulei și fără alergătură la biroul de recepție pentru clarificări.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">Design modern, creat pentru echipă</div>
                        <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                          Butoane tactile mari, mod întunecat și vizibilitate impecabilă în orice lumină.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Motto from screenshot */}
                  <div className="pt-4 border-t border-white/10 text-center">
                    <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-blue-400">
                      Service eficient. Clienți mulțumiți.
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-1">
                      Conectat la Cloud SAMpro &amp; RAR AutoPass
                    </div>
                  </div>

                  {/* Quick trigger button for internal chat */}
                  <button
                    type="button"
                    onClick={() => setMechanicViewMode('chat')}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Deschide Chat Intern Live ({internalMessages.length})</span>
                  </button>
                </div>
              </div>

              {/* CENTER/RIGHT: THE PHONE SCREENS */}
              <div className={`lg:col-span-9 ${mechanicViewMode === 'chat' ? 'hidden' : 'block'}`}>
                <div className={`grid gap-6 ${mechanicViewMode === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-md mx-auto'
                  }`}>

                  {/* ─────────────────────────────────────────────────────────────
                      PHONE 1: VEDERE MECANIC (ALEX B. - MECANIC)
                     ───────────────────────────────────────────────────────────── */}
                  {(mechanicViewMode === 'both' || mechanicViewMode === 'mechanic') && (
                    <div className="rounded-[44px] p-3 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-900 to-black border-4 border-slate-700/80 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between max-w-sm mx-auto w-full">
                      {/* Dynamic Island & Notch */}
                      <div className="flex items-center justify-between px-4 pt-1 pb-3 text-[11px] font-mono text-slate-300">
                        <span>22:03</span>
                        <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px]">4G</span>
                          <span className="w-4 h-2.5 border border-slate-400 rounded-sm inline-block p-0.5">
                            <span className="block h-full w-2/3 bg-white rounded-2xs" />
                          </span>
                        </div>
                      </div>

                      {/* Phone App Inner Screen */}
                      <div className="space-y-3.5 flex-1 overflow-y-auto pr-0.5 max-h-[700px] scrollbar-thin">

                        {/* Header: Brand + User Role + Notification */}
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-black text-base tracking-wider text-white">
                            AUTO<span className="text-red-500">CEV</span>
                          </span>

                          <div className="flex items-center gap-2">
                            <div className="px-2.5 py-1 rounded-full bg-slate-800/90 border border-white/10 text-xs flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="font-bold text-[11px]">Alex B.</span>
                              <span className="text-[9px] text-slate-400">Mecanic</span>
                            </div>

                            <div className="relative p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white">
                              <Bell className="w-4 h-4" />
                              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-black flex items-center justify-center text-white">
                                3
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Top Card: Note de constatare */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0d2853] via-[#092244] to-[#061935] border border-blue-400/20 relative overflow-hidden shadow-md">
                          <div className="relative z-10 space-y-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-blue-500/20 text-[#00D2FF]">
                                  <FileText className="w-4 h-4" />
                                </div>
                                <span className="font-extrabold text-sm text-white">Note de constatare</span>
                              </div>
                              <span className="px-2 py-0.5 rounded-md bg-blue-500/30 text-[9px] font-mono font-bold text-[#00D2FF] uppercase">
                                🔧 Mecanic
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-snug pt-1">
                              Documentează rapid și profesionist starea vehiculului.
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons: Nouă Notă & Scan VIN */}
                        <div className="grid grid-cols-12 gap-2">
                          <button
                            type="button"
                            onClick={() => setIsNewNoteModalOpen(true)}
                            className="col-span-8 py-2.5 px-3 rounded-xl bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs flex items-center justify-between shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                          >
                            <span className="flex items-center gap-1.5">
                              <Plus className="w-4 h-4" />
                              <span>Nouă notă de constatare</span>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={handleStartVinScan}
                            className="col-span-4 py-2.5 px-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 active:scale-95 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <QrCode className="w-4 h-4 text-[#00D2FF]" />
                            <span>Scan VIN</span>
                          </button>
                        </div>

                        {/* Filter Tabs Pills (În lucru 3, Finalizate 12, Toate 24) */}
                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/10 text-[11px]">
                          <button
                            type="button"
                            onClick={() => setMechanicTabFilter('in_progress')}
                            className={`flex-1 py-1.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${mechanicTabFilter === 'in_progress'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span>În lucru</span>
                            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-blue-500/20 text-blue-700 dark:text-blue-300 font-mono">
                              3
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setMechanicTabFilter('completed')}
                            className={`flex-1 py-1.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${mechanicTabFilter === 'completed'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            <span>Finalizate</span>
                            <span className="text-[10px] text-slate-500 font-mono">12</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setMechanicTabFilter('all')}
                            className={`flex-1 py-1.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${mechanicTabFilter === 'all'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            <span>Toate</span>
                            <span className="text-[10px] text-slate-500 font-mono">24</span>
                          </button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10">
                          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <input
                            type="text"
                            value={mechanicSearchQuery}
                            onChange={(e) => setMechanicSearchQuery(e.target.value)}
                            placeholder="Caută nr. auto, client, VIN..."
                            className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
                          />
                          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 shrink-0 cursor-pointer" />
                        </div>

                        {/* Vehicle Cards List */}
                        <div className="space-y-2.5">
                          {filteredMechanicVehicles.map((car) => (
                            <div
                              key={car.id}
                              onClick={() => setSelectedWorkshopVehicle(car)}
                              className="p-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-md transition-all cursor-pointer group active:scale-[0.99]"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="space-y-1">
                                  {/* Plate Badge */}
                                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-300 font-mono font-black text-xs text-slate-900">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                                    <span>{car.plate}</span>
                                  </div>

                                  <div className="font-bold text-xs text-slate-900">{car.model}</div>
                                  <div className="text-[10px] text-slate-500">
                                    {car.engine} <span className="text-slate-300">•</span> {car.km}
                                  </div>

                                  <div className="flex items-center gap-3 pt-1 text-[10px] text-slate-600">
                                    <span className="flex items-center gap-1">
                                      <User className="w-3 h-3 text-slate-400" />
                                      {car.client}
                                    </span>
                                    <span className="flex items-center gap-1 font-mono text-slate-500">
                                      <Clock className="w-3 h-3 text-slate-400" />
                                      {car.duration}
                                    </span>
                                  </div>
                                </div>

                                {/* Right Status Badge & Arrow */}
                                <div className="flex flex-col items-end justify-between self-stretch">
                                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${car.statusColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                                      car.statusColor === 'amber' ? 'bg-amber-100 text-amber-800' :
                                        'bg-emerald-100 text-emerald-800'
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${car.statusColor === 'blue' ? 'bg-blue-600' :
                                        car.statusColor === 'amber' ? 'bg-amber-600' :
                                          'bg-emerald-600'
                                      }`} />
                                    <span>{car.statusLabel}</span>
                                    <span className="font-mono text-[9px] opacity-75">{car.statusTag}</span>
                                  </span>

                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* Bottom Navigation Bar */}
                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-around text-[10px] text-slate-400">
                        <button type="button" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                          <Smartphone className="w-4 h-4" />
                          <span>Acasă</span>
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1 text-[#00D2FF] font-bold cursor-pointer">
                          <FileText className="w-4 h-4" />
                          <span>Note</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsNewNoteModalOpen(true)}
                          className="w-10 h-10 rounded-full bg-[#0066FF] hover:bg-blue-500 text-white flex items-center justify-center shadow-lg -translate-y-2 cursor-pointer active:scale-95"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                          <Car className="w-4 h-4" />
                          <span>Recepții</span>
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                          <SlidersHorizontal className="w-4 h-4" />
                          <span>Meniu</span>
                        </button>
                      </div>

                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────────
                      PHONE 2: VEDERE ȘEF ATELIER (ALEX B. - ȘEF ATELIER)
                     ───────────────────────────────────────────────────────────── */}
                  {(mechanicViewMode === 'both' || mechanicViewMode === 'manager') && (
                    <div className="rounded-[44px] p-3 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-900 to-black border-4 border-slate-700/80 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between max-w-sm mx-auto w-full">
                      {/* Dynamic Island & Notch */}
                      <div className="flex items-center justify-between px-4 pt-1 pb-3 text-[11px] font-mono text-slate-300">
                        <span>22:03</span>
                        <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px]">4G</span>
                          <span className="w-4 h-2.5 border border-slate-400 rounded-sm inline-block p-0.5">
                            <span className="block h-full w-2/3 bg-white rounded-2xs" />
                          </span>
                        </div>
                      </div>

                      {/* Phone App Inner Screen */}
                      <div className="space-y-3.5 flex-1 overflow-y-auto pr-0.5 max-h-[700px] scrollbar-thin">

                        {/* Header: Brand + User Role + Notification */}
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-black text-base tracking-wider text-white">
                            AUTO<span className="text-red-500">CEV</span>
                          </span>

                          <div className="flex items-center gap-2">
                            <div className="px-2.5 py-1 rounded-full bg-slate-800/90 border border-white/10 text-xs flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-amber-400" />
                              <span className="font-bold text-[11px]">Alex B.</span>
                              <span className="text-[9px] text-amber-300">Șef atelier</span>
                            </div>

                            <div className="relative p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white">
                              <Bell className="w-4 h-4" />
                              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-black flex items-center justify-center text-white">
                                3
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Top Card: Recepție atelier */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#072445] via-[#092244] to-[#061935] border border-blue-400/20 relative overflow-hidden shadow-md">
                          <div className="relative z-10 space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-lg bg-blue-500/20 text-[#00D2FF]">
                                <Car className="w-4 h-4" />
                              </div>
                              <span className="font-extrabold text-sm text-white">Recepție atelier</span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-snug pt-1">
                              Preia rapid vehiculele și gestionează fluxul din service.
                            </p>
                          </div>
                        </div>

                        {/* KPI Stats Chips Row: Azi 6 recepții, În așteptare 2, Finalizate 5 */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded-xl bg-slate-900/90 border border-white/10">
                            <div className="text-[10px] text-slate-400">Azi</div>
                            <div className="font-black text-sm text-white">6</div>
                            <div className="text-[9px] text-slate-500">recepții</div>
                          </div>

                          <div className="p-2 rounded-xl bg-slate-900/90 border border-amber-500/20">
                            <div className="text-[10px] text-amber-400">În așteptare</div>
                            <div className="font-black text-sm text-amber-300">2</div>
                            <div className="text-[9px] text-slate-500">clienți</div>
                          </div>

                          <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/20">
                            <div className="text-[10px] text-emerald-400">Finalizate</div>
                            <div className="font-black text-sm text-emerald-300">5</div>
                            <div className="text-[9px] text-slate-500">detalii</div>
                          </div>
                        </div>

                        {/* Primary Button: + Recepție nouă */}
                        <button
                          type="button"
                          onClick={() => {
                            confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
                            setIsNewNoteModalOpen(true);
                          }}
                          className="w-full py-2.5 px-3 rounded-xl bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs flex items-center justify-between shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Plus className="w-4 h-4" />
                            <span>Recepție nouă</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        {/* Filter Tabs Pills (Toate 6, În așteptare 2, În lucru 2, Finalizate 2) */}
                        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900/90 border border-white/10 text-[10px]">
                          <button
                            type="button"
                            onClick={() => setManagerTabFilter('all')}
                            className={`flex-1 py-1 rounded-lg font-bold transition-all cursor-pointer ${managerTabFilter === 'all'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            Toate (6)
                          </button>
                          <button
                            type="button"
                            onClick={() => setManagerTabFilter('waiting')}
                            className={`flex-1 py-1 rounded-lg font-semibold transition-all cursor-pointer ${managerTabFilter === 'waiting'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            În așteptare (2)
                          </button>
                          <button
                            type="button"
                            onClick={() => setManagerTabFilter('in_progress')}
                            className={`flex-1 py-1 rounded-lg font-semibold transition-all cursor-pointer ${managerTabFilter === 'in_progress'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            În lucru (2)
                          </button>
                          <button
                            type="button"
                            onClick={() => setManagerTabFilter('completed')}
                            className={`flex-1 py-1 rounded-lg font-semibold transition-all cursor-pointer ${managerTabFilter === 'completed'
                                ? 'bg-white text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                              }`}
                          >
                            Finalizate (2)
                          </button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10">
                          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <input
                            type="text"
                            value={mechanicSearchQuery}
                            onChange={(e) => setMechanicSearchQuery(e.target.value)}
                            placeholder="Caută nr. auto, client, VIN..."
                            className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
                          />
                          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 shrink-0 cursor-pointer" />
                        </div>

                        {/* Queue List Cards */}
                        <div className="space-y-2.5">
                          {filteredManagerVehicles.map((car) => (
                            <div
                              key={car.id}
                              onClick={() => setSelectedWorkshopVehicle(car)}
                              className="p-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-md transition-all cursor-pointer group active:scale-[0.99]"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1 ${car.statusColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                                        car.statusColor === 'amber' ? 'bg-amber-100 text-amber-800' :
                                          'bg-emerald-100 text-emerald-800'
                                      }`}>
                                      <span className={`w-1.5 h-1.5 rounded-full ${car.statusColor === 'blue' ? 'bg-blue-600' :
                                          car.statusColor === 'amber' ? 'bg-amber-600' :
                                            'bg-emerald-600'
                                        }`} />
                                      <span>{car.statusLabel}</span>
                                    </span>

                                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {car.timeReception}
                                    </span>

                                    <span className="text-[10px] text-slate-500 font-mono">
                                      +{car.clientsWait}
                                    </span>
                                  </div>

                                  <div className="font-bold text-xs text-slate-900">
                                    {car.plate} <span className="text-slate-400 font-normal">| {car.model}</span>
                                  </div>

                                  <div className="text-[10px] text-slate-500 flex items-center gap-1">
                                    <User className="w-3 h-3 text-slate-400" />
                                    <span>{car.client}</span>
                                  </div>
                                </div>

                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* Bottom Navigation Bar */}
                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-around text-[10px] text-slate-400">
                        <button type="button" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                          <Smartphone className="w-4 h-4" />
                          <span>Acasă</span>
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                          <FileText className="w-4 h-4" />
                          <span>Note</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsNewNoteModalOpen(true)}
                          className="w-10 h-10 rounded-full bg-[#0066FF] hover:bg-blue-500 text-white flex items-center justify-center shadow-lg -translate-y-2 cursor-pointer active:scale-95"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1 text-[#00D2FF] font-bold cursor-pointer">
                          <Car className="w-4 h-4" />
                          <span>Recepții</span>
                        </button>
                        <button type="button" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                          <SlidersHorizontal className="w-4 h-4" />
                          <span>Meniu</span>
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────────────
                APP PROPRIU DE COMUNICARE INTERNĂ (LIVE INTER-TEAM CHAT CONSOLE)
               ───────────────────────────────────────────────────────────────── */}
            <div className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#07172f] border border-slate-200 dark:border-white/10 shadow-xl space-y-6 ${mechanicViewMode === 'chat' ? 'max-w-4xl mx-auto' : ''
              }`}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-400/20 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-500" />
                    COMUNICARE INTERNĂ ATELIER ÎN TIMP REAL
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    Canal Intern: Mecanic ↔ Șef Atelier ↔ Magazie Piese
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Zero strigăte prin atelier, zero deplasări inutile. Fiecare constatare generează automat notificare către recepție și WhatsApp-ul clientului.
                  </p>
                </div>

                {/* Active Connected Users */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-[#0066FF] dark:text-[#00D2FF] text-[11px] font-bold font-mono">
                    🔧 Alex B. (Elevator 2)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-bold font-mono">
                    📋 Mihai R. (Șef Atelier)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-bold font-mono">
                    📦 Elena T. (Magazie)
                  </span>
                </div>
              </div>

              {/* Chat Messages Feed */}
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin">
                {internalMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all ${msg.role === 'system'
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/30'
                        : msg.role === 'mechanic'
                          ? 'bg-blue-50/60 dark:bg-blue-950/20 border-blue-200 dark:border-blue-500/20'
                          : msg.role === 'manager'
                            ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-500/20'
                            : 'bg-purple-50/60 dark:bg-purple-950/20 border-purple-200 dark:border-purple-500/20'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-full ${msg.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                      {msg.sender.substring(0, 2)}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-900 dark:text-white">
                            {msg.sender}
                          </span>
                          {msg.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/70 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                              {msg.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{msg.time}</span>
                      </div>

                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Ping Presets */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono text-slate-400">
                  ⚡ Trimite o simulare rapidă din atelier:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSendChatMessage('La TM-26-ESO (BMW X5): bieletele antiruliu au joc. Vă rog comandați 2 bucăți Lemförder!')}
                    className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-white/5 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-all cursor-pointer"
                  >
                    📦 „Cere bielete antiruliu BMW X5”
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSendChatMessage('La TM-12-STS (Transit): am dat cutia jos. Volanta dublă are joc axial depășit. Trimiteți poză la client.')}
                    className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-white/5 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-all cursor-pointer"
                  >
                    📸 „Poză defect volanță la client”
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSendChatMessage('Lucrarea la Golf TM-30-MSY este finalizată! Mașina iese la probă de drum.')}
                    className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white dark:bg-white/5 dark:hover:bg-emerald-600 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-all cursor-pointer"
                  >
                    ✅ „Finalizat &amp; Ieșire probă drum”
                  </button>
                </div>
              </div>

              {/* Custom Input Form */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="text"
                  value={newChatMessage}
                  onChange={(e) => setNewChatMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChatMessage()}
                  placeholder="Scrie un mesaj intern ca mecanic (ex: 'Piesa a sosit la elevator, montez acum...')"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0066FF]"
                />
                <button
                  type="button"
                  onClick={() => handleSendChatMessage()}
                  className="py-3 px-5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Trimite</span>
                </button>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                MODAL 1: SCAN VIN SIMULATOR
               ───────────────────────────────────────────────────────────────── */}
            {isScanVinModalOpen && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="w-full max-w-md bg-[#0a1628] border border-blue-500/40 rounded-3xl p-6 text-white shadow-2xl space-y-5 relative overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setIsScanVinModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="text-center space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-[#00D2FF] text-xs font-mono font-bold">
                      <QrCode className="w-3.5 h-3.5" />
                      SCANARE VIN OPTICĂ &amp; BARCODE
                    </div>
                    <h4 className="text-lg font-black text-white">Camera Scanare VIN SAMpro</h4>
                    <p className="text-xs text-slate-300">Îndreaptă camera spre talon, stâlpul mașinii sau parbriz.</p>
                  </div>

                  {/* Simulated Camera Viewfinder */}
                  <div className="relative aspect-video rounded-2xl bg-black border-2 border-dashed border-blue-400/50 flex flex-col items-center justify-center overflow-hidden p-4">
                    {/* Viewfinder Target Frame */}
                    <div className="w-56 h-20 border-2 border-[#00D2FF] rounded-lg relative flex items-center justify-center">
                      <div className="font-mono text-xs tracking-widest text-slate-400 font-bold">
                        WVWZZZAUZJP189042
                      </div>
                      {/* Animated Laser Beam */}
                      {isVinScanning && (
                        <div className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_8px_#ff0000] animate-bounce" />
                      )}
                    </div>

                    <div className="text-[10px] text-slate-400 font-mono mt-3">
                      {isVinScanning ? '🔄 Decodare serie șasiu în timp real...' : '✅ Seria a fost identificată!'}
                    </div>
                  </div>

                  {/* Decoded Data Preview */}
                  {scannedVinData && (
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 space-y-2 animate-in zoom-in-95">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-300">
                        <span>Vehicul Recunoscut Automat:</span>
                        <span className="font-mono">{scannedVinData.plate}</span>
                      </div>
                      <div className="text-xs text-white font-semibold">{scannedVinData.model}</div>
                      <div className="text-[11px] font-mono text-slate-300">VIN: {scannedVinData.vin} • {scannedVinData.km}</div>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsScanVinModalOpen(false)}
                      className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 cursor-pointer"
                    >
                      Închide
                    </button>
                    {scannedVinData && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsScanVinModalOpen(false);
                          setIsNewNoteModalOpen(true);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-blue-600 cursor-pointer"
                      >
                        Deschide Notă Constatare
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────────
                MODAL 2: NOUĂ NOTĂ DE CONSTATARE MECANIC
               ───────────────────────────────────────────────────────────────── */}
            {isNewNoteModalOpen && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="w-full max-w-lg bg-white dark:bg-[#07172f] border border-slate-200 dark:border-white/10 rounded-3xl p-6 text-slate-900 dark:text-white shadow-2xl space-y-5 relative">
                  <button
                    type="button"
                    onClick={() => setIsNewNoteModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-[#0066FF] dark:text-[#00D2FF] text-xs font-mono font-bold">
                      <Wrench className="w-3.5 h-3.5" />
                      CONSTATARE LA ELEVATOR (TABLETĂ / TELEFON)
                    </div>
                    <h4 className="text-xl font-black">Notă Nouă de Constatare Tehnică</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Mecanicul completează sau dictează defectul observat direct de sub automobil.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">Automobil în lucru</label>
                      <select
                        value={newNoteForm.plate}
                        onChange={(e) => setNewNoteForm(prev => ({ ...prev, plate: e.target.value }))}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-300 dark:border-white/10 text-xs font-bold"
                      >
                        <option value="TM-30-MSY">TM-30-MSY (Volkswagen Golf 1.6 TDI)</option>
                        <option value="TM-26-ESO">TM-26-ESO (BMW X5 3.0d)</option>
                        <option value="TM-18-KLW">TM-18-KLW (Audi A4 2.0 TDI)</option>
                        <option value="TM-12-STS">TM-12-STS (Ford Transit 2.2 TDCI)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">Descriere defecțiune / Solicitare piese</label>
                      <textarea
                        rows={3}
                        value={newNoteForm.observation}
                        onChange={(e) => setNewNoteForm(prev => ({ ...prev, observation: e.target.value }))}
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-300 dark:border-white/10 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>

                    {/* Voice Memo Simulator */}
                    <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isRecordingAudio ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-500/20 text-[#0066FF] dark:text-[#00D2FF]'
                          }`}>
                          <Mic className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold">Dictare Vocală AI (Hands-Free)</div>
                          <div className="text-[10px] text-slate-500">Transcre automat în fișă în timp ce lucrezi cu mănuși</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsRecordingAudio(!isRecordingAudio)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${isRecordingAudio ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                          }`}
                      >
                        {isRecordingAudio ? 'Oprește' : 'Dictare'}
                      </button>
                    </div>

                    {/* Photo upload mock */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-semibold">Fotografii doveditoare defect</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                        3 Poze Atașate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsNewNoteModalOpen(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/15 text-xs font-bold cursor-pointer"
                    >
                      Anulează
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveNote}
                      className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      <span>Salvează &amp; Trimite la Șef Atelier</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────────────────
                MODAL 3: VEHICLE DETAIL & INSPECTION SHEET
               ───────────────────────────────────────────────────────────────── */}
            {selectedWorkshopVehicle && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="w-full max-w-lg bg-white dark:bg-[#07172f] border border-slate-200 dark:border-white/10 rounded-3xl p-6 text-slate-900 dark:text-white shadow-2xl space-y-5 relative">
                  <button
                    type="button"
                    onClick={() => setSelectedWorkshopVehicle(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-start justify-between pr-8">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 font-mono font-black text-sm text-[#0066FF] dark:text-[#00D2FF]">
                        {selectedWorkshopVehicle.plate}
                      </div>
                      <h4 className="text-xl font-black mt-1">{selectedWorkshopVehicle.model}</h4>
                      <p className="text-xs text-slate-500 font-mono">VIN: {selectedWorkshopVehicle.vin} • {selectedWorkshopVehicle.km}</p>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${selectedWorkshopVehicle.statusColor === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300' :
                        selectedWorkshopVehicle.statusColor === 'amber' ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300' :
                          'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300'
                      }`}>
                      {selectedWorkshopVehicle.statusLabel}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 space-y-1">
                      <div className="font-bold text-slate-700 dark:text-slate-300">Constatare Tehnică Mecanic:</div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{selectedWorkshopVehicle.diagnosis}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 space-y-1.5">
                      <div className="font-bold text-slate-700 dark:text-slate-300">Piese de schimb alocate:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedWorkshopVehicle.parts.map((p, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 text-[#0066FF] dark:text-[#00D2FF] font-semibold text-[11px]">
                            ✓ {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5">
                        <span className="text-slate-400">Client:</span> <span className="font-bold">{selectedWorkshopVehicle.client}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5">
                        <span className="text-slate-400">Mecanic:</span> <span className="font-bold">{selectedWorkshopVehicle.assignedMechanic}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedWorkshopVehicle(null);
                        setActiveTab('rar');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:opacity-90 cursor-pointer"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Transmite la RAR AutoPass (Tab 3)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedWorkshopVehicle(null)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      Închide
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 3: INTERACTIVE 1-CLICK RAR AUTOPASS TRANSMISSION SIMULATOR */}
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
                      className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${isSelected
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
                        Gata de raportare
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
                        <div className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors ${transmittingStep >= 1 ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold' : 'text-slate-400'
                          }`}>
                          {transmittingStep > 1 ? <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" /> : <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 animate-spin"></span>}
                          <span>1. Criptare deviz &amp; km: {currentVehicle.km.toLocaleString()} km</span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors ${transmittingStep >= 2 ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold' : 'text-slate-400'
                          }`}>
                          {transmittingStep > 2 ? <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" /> : transmittingStep === 2 ? <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 animate-spin"></span> : <span className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>}
                          <span>2. Conectare nod securizat API RAR AutoPass</span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors ${transmittingStep >= 3 ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold' : 'text-slate-400'
                          }`}>
                          {transmittingStep === 3 ? <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 animate-spin"></span> : <span className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>}
                          <span>3. Înregistrare   în Pașaportul Tehnic</span>
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
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300 w-full">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 gap-3">
              <div>
                <h3 className="text-xl font-bold text-[#0080ff] dark:text-[#00D2FF] tracking-tight">
                  Panou Live Atelier &amp; Elevatoare (Service Auto Expert)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Apasă pe un elevator pentru a avansa stadiul lucrării sau a elibera postul
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> În Lucru
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Finalizat
                </span>
                <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-500"></span> Liber
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hoists.map((hoist) => (
                <div
                  key={hoist.id}
                  onClick={() => advanceHoistStatus(hoist.id)}
                  className="p-5 rounded-2xl bg-white dark:bg-[#07172f]/80 hover:bg-slate-50 dark:hover:bg-[#0c244b] border border-slate-200 dark:border-white/10 hover:border-[#0066FF]/40 dark:hover:border-[#00D2FF]/40 transition-all cursor-pointer flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-3">

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#0066FF] dark:text-[#00D2FF]">
                        {hoist.name}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${hoist.status === 'in_progress' ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-400/30' :
                          hoist.status === 'completed' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30' :
                            'bg-slate-500/20 text-slate-700 dark:text-slate-400 border border-slate-500/30'
                        }`}>
                        {hoist.status === 'in_progress' ? 'În Lucru' : hoist.status === 'completed' ? 'Finalizat' : 'Liber / Rezervat'}
                      </span>
                    </div>

                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {hoist.car}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                        {hoist.operation}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <span>Progres Lucrare</span>
                        <span>{hoist.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-black/40 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${hoist.status === 'completed' ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#0066FF] to-[#00D2FF]'
                            }`}
                          style={{ width: `${hoist.progress}%` }}
                        ></div>
                      </div>
                    </div>

                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
                      {hoist.mechanic}
                    </span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      {hoist.timeEst}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                💡 Sincronizare automată în timp real cu panoul de recepție și WhatsApp-ul clientului.
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
