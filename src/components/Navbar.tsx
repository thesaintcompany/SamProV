import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Send,
  Car,
  Boxes,
  Receipt,
  Sparkles
} from 'lucide-react';

interface MenuItem {
  title: string;
  desc: string;
  href?: string;
  action?: () => void;
}

interface ProductItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
}

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLegal?: (section?: string) => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDemo, 
  onOpenLegal,
  theme = 'light', 
  toggleTheme 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (activeMenu) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleMenu = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(prev => prev === menuKey ? null : menuKey);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  /* ─────────────────────────────────────────────────────────────────────────────
     DATA DEFINITIONS FOR SAMPRO MEGAMENU
  ───────────────────────────────────────────────────────────────────────────── */

  // 1. Explorează
  const exploreLinks: MenuItem[] = [
    {
      title: 'Ce este SAMPRO',
      desc: 'Platforma completă, modulele și pentru cine e conceput SAMPRO.',
      href: '#module'
    },
    {
      title: 'Tur ghidat',
      desc: 'Un tur pas cu pas prin fluxul complet al service-ului auto.',
      href: '#simulator'
    },
    {
      title: 'Demo Live',
      desc: 'Încearcă platforma live, fără cont și fără instalare.',
      action: onOpenDemo
    },
    {
      title: 'Începe gratuit',
      desc: 'Creează un cont demonstrativ și testează gratuit 14 zile.',
      action: onOpenDemo
    }
  ];

  // 2. Soluții
  const solutionsProcess: MenuItem[] = [
    {
      title: 'Recepție & Devize',
      desc: 'Programări rapide, deviz instant în 45s și aprobare pe WhatsApp.',
      href: '#module'
    },
    {
      title: 'Gestiune & Facturare',
      desc: 'Comenzi piese automate, gestiune stocuri și e-Factura ANAF.',
      href: '#module'
    }
  ];

  const solutionsWorkshop: MenuItem[] = [
    {
      title: 'Mecanică & Diagnoză',
      desc: 'Planificare elevatoare, timpi normați și istoricul complet al mașinii.',
      href: '#module'
    },
    {
      title: 'Tinichigerie & Vopsitorie',
      desc: 'Dosare complexe de daună și devize decontate direct cu asigurătorii.',
      href: '#module'
    },
    {
      title: 'Vulcanizare & Hotel Anvelope',
      desc: 'Gestiune depozit anvelope clienți, etichetare și remindere sezoniere.',
      href: '#module'
    },
    {
      title: 'Rețele & Francize Service',
      desc: 'Multi-locație, raportare unificată și drepturi diferențiate pe roluri.',
      href: '#module'
    }
  ];

  // 3. Produse (Cards with icons)
  const products: ProductItem[] = [
    {
      title: 'Elevatoare & Atelier',
      desc: 'Planificare mecanic, timpi morți zero și distribuție optimă pe posturi.',
      icon: Calendar,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      href: '#module'
    },
    {
      title: 'Devize & WhatsApp',
      desc: 'Aprobare instantanee cu 1 singur click direct pe telefonul clientului.',
      icon: Send,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      href: '#module'
    },
    {
      title: 'Conexiune RAR & Autopass',
      desc: 'Interogare automată VIN oficială și generare Pașaport Tehnic.',
      icon: Car,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      href: '#rar-autopass'
    },
    {
      title: 'Piese & Cataloage OEM',
      desc: 'Integrări Autonet, Unix, Inter Cars, Materom cu adaos protejat.',
      icon: Boxes,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      href: '#module'
    },
    {
      title: 'Financiar & e-Factura',
      desc: 'Facturare automată, e-Factura ANAF prin SPV, chitanțe și plăți.',
      icon: Receipt,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      href: '#module'
    },
    {
      title: 'Asistent Inteligent AI',
      desc: 'Estimare manoperă inteligentă și remindere automate de ITP și revizii.',
      icon: Sparkles,
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
      href: '#module'
    }
  ];

  // 4. Resurse
  const resources: MenuItem[] = [
    {
      title: 'Migrare date',
      desc: 'Ghid de migrare fără riscuri din alte softuri sau din Excel spre SAMpro.',
      action: onOpenDemo
    },
    {
      title: 'Implementare & Onboarding',
      desc: 'Cum se configurează și se lansează platforma în service-ul tău în sub 24 de ore.',
      action: onOpenDemo
    },
    {
      title: 'Conformitate RAR & Autopass',
      desc: 'Ghidul complet al cerințelor legale RAR și eliberarea pașaportului tehnic.',
      href: '#rar-autopass'
    },
    {
      title: 'Calculator ROI Service',
      desc: 'Calculează exact timpul salvat și creșterea de profit net realizată lunar.',
      href: '#calculator-roi'
    }
  ];

  // 5. Parteneri
  const partners: MenuItem[] = [
    {
      title: 'Distribuitori Piese Auto',
      desc: 'Comenzi rapide conectate la Autonet, Unix, Inter Cars, Materom.',
      href: '#module'
    },
    {
      title: 'Integrări Oficiale (RAR & ANAF)',
      desc: 'Conexiune directă SPV ANAF pentru e-Factura și interogare oficială RAR.',
      href: '#rar-autopass'
    },
    {
      title: 'Asigurători & Dosare Daună',
      desc: 'Proceduri accelerate pentru devize și decontări directe cu asigurătorii.',
      href: '#module'
    },
    {
      title: 'Program Parteneri & Consultanți',
      desc: 'Devino partener certificat SAMpro și oferă consultanță atelierelor auto.',
      action: onOpenDemo
    }
  ];

  // 6. Suport
  const support: MenuItem[] = [
    {
      title: 'Centru de suport dedicat',
      desc: 'Asistență telefonică și WhatsApp cu specialiști dedicați în România.',
      action: onOpenDemo
    },
    {
      title: 'Contact & Demonstrație',
      desc: 'Programează o sesiune de prezentare live 1-la-1 pentru service-ul tău.',
      action: onOpenDemo
    },
    {
      title: 'Enterprise & Rețele Service',
      desc: 'Planuri Enterprise: securitate avansată, servere dedicate, API și SLA garantat.',
      action: onOpenDemo
    },
    {
      title: 'Securitate & Backup Cloud',
      desc: 'Cum sunt protejate datele: backup zilnic triplu, ISO 27001 și GDPR.',
      action: () => onOpenLegal && onOpenLegal('security')
    }
  ];

  const isLight = theme === 'light';

  // Header background logic:
  // When unscrolled AND no megamenu open: completely transparent so Hero background seamlessly fills the top!
  // When scrolled OR megamenu is open: frosted glass background to provide high contrast.
  const hasFrostedHeader = scrolled || activeMenu !== null;

  const headerClass = hasFrostedHeader
    ? isLight
      ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.06)] py-3'
      : 'bg-[#070b14]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
    : 'bg-transparent border-b border-transparent py-4 sm:py-5';

  // Desktop nav button text styles
  const navBtnBase = 'inline-flex h-10 items-center gap-1.5 rounded-[6px] px-3 text-[0.9375rem] transition-colors cursor-pointer';
  const navBtnColor = (isOpen: boolean) => {
    if (isLight) {
      return isOpen
        ? 'text-[#0066FF] bg-blue-50/80 font-bold'
        : 'text-slate-900 hover:text-black hover:bg-slate-900/[0.05] font-semibold';
    }
    return isOpen
      ? 'text-white bg-[rgb(238_242_248/0.1)] font-semibold'
      : 'text-[#dfe5ee] hover:text-white hover:bg-[rgb(238_242_248/0.07)] font-medium';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4 lg:gap-6">
          
          {/* ── Brand Logo ───────────────────────────────────────────────── */}
          <div className="flex items-center space-x-3 shrink-0">
            <a 
              href="#" 
              aria-label="SAMpro — pagina principală"
              className="flex items-center gap-2.5 group shrink-0 rounded-[4px]"
            >
              <img 
                src={theme === 'dark' ? '/assets/logo-white-full.png' : '/assets/logo-light.png'} 
                alt="SAMpro - Service Auto Management Pro" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-400/20 text-[#0066FF] dark:text-[#00D2FF] font-rounded text-[10px] font-bold">
                v3.4
              </span>
            </a>
          </div>

          {/* ── Desktop Navigation matching user's requested IMFS structure ── */}
          <nav aria-label="Navigație principală" className="hidden xl:block h-full">
            <ul className="flex h-full items-center gap-1 text-[0.9375rem]">
              
              {/* 1. Explorează */}
              <li 
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter('explore')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'explore'}
                  onClick={() => toggleMenu('explore')}
                  className={`${navBtnBase} ${navBtnColor(activeMenu === 'explore')}`}
                >
                  <span>Explorează</span>
                  <ChevronDown className={`size-4 opacity-70 transition-transform duration-200 ${activeMenu === 'explore' ? 'rotate-180' : ''}`} />
                </button>
              </li>

              {/* 2. Soluții */}
              <li 
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter('solutii')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'solutii'}
                  onClick={() => toggleMenu('solutii')}
                  className={`${navBtnBase} ${navBtnColor(activeMenu === 'solutii')}`}
                >
                  <span>Soluții</span>
                  <ChevronDown className={`size-4 opacity-70 transition-transform duration-200 ${activeMenu === 'solutii' ? 'rotate-180' : ''}`} />
                </button>
              </li>

              {/* 3. Produse */}
              <li 
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter('produse')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'produse'}
                  onClick={() => toggleMenu('produse')}
                  className={`${navBtnBase} ${navBtnColor(activeMenu === 'produse')}`}
                >
                  <span>Produse</span>
                  <ChevronDown className={`size-4 opacity-70 transition-transform duration-200 ${activeMenu === 'produse' ? 'rotate-180' : ''}`} />
                </button>
              </li>

              {/* 4. Prețuri (direct link) */}
              <li className="relative flex h-full items-center">
                <a
                  href="#preturi"
                  onClick={closeMenu}
                  className={`inline-flex h-10 items-center rounded-[6px] px-3 text-[0.9375rem] transition-colors ${
                    isLight 
                      ? 'text-slate-900 hover:text-black hover:bg-slate-900/[0.05] font-semibold' 
                      : 'text-[#dfe5ee] hover:text-white hover:bg-[rgb(238_242_248/0.07)] font-medium'
                  }`}
                >
                  Prețuri
                </a>
              </li>

              {/* 5. Resurse */}
              <li 
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter('resurse')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'resurse'}
                  onClick={() => toggleMenu('resurse')}
                  className={`${navBtnBase} ${navBtnColor(activeMenu === 'resurse')}`}
                >
                  <span>Resurse</span>
                  <ChevronDown className={`size-4 opacity-70 transition-transform duration-200 ${activeMenu === 'resurse' ? 'rotate-180' : ''}`} />
                </button>
              </li>

              {/* 6. Parteneri */}
              <li 
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter('parteneri')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'parteneri'}
                  onClick={() => toggleMenu('parteneri')}
                  className={`${navBtnBase} ${navBtnColor(activeMenu === 'parteneri')}`}
                >
                  <span>Parteneri</span>
                  <ChevronDown className={`size-4 opacity-70 transition-transform duration-200 ${activeMenu === 'parteneri' ? 'rotate-180' : ''}`} />
                </button>
              </li>

              {/* 7. Suport */}
              <li 
                className="relative flex h-full items-center"
                onMouseEnter={() => handleMouseEnter('suport')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'suport'}
                  onClick={() => toggleMenu('suport')}
                  className={`${navBtnBase} ${navBtnColor(activeMenu === 'suport')}`}
                >
                  <span>Suport</span>
                  <ChevronDown className={`size-4 opacity-70 transition-transform duration-200 ${activeMenu === 'suport' ? 'rotate-180' : ''}`} />
                </button>
              </li>

            </ul>
          </nav>

          {/* ── Action CTAs & Controls ───────────────────────────────────── */}
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            
            {/* Theme Toggle (Dark / Light) */}
            {toggleTheme && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={theme === 'dark'}
                aria-label={theme === 'dark' ? 'Temă luminoasă' : 'Temă întunecată'}
                title={theme === 'dark' ? 'Comută pe modul luminos' : 'Comută pe modul întunecat'}
                className={`inline-flex size-10 items-center justify-center rounded-[6px] transition-colors cursor-pointer ${
                  isLight 
                    ? 'text-slate-800 hover:text-black hover:bg-slate-900/[0.06]' 
                    : 'text-[#c9d2e0] hover:text-white hover:bg-[rgb(238_242_248/0.08)]'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="size-[18px] text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="size-[18px] text-slate-800 hover:-rotate-12 transition-transform" />
                )}
              </button>
            )}

            {/* Demo Live CTA */}
            <button
              type="button"
              onClick={onOpenDemo}
              className={`hidden h-10 items-center gap-1.5 rounded-[6px] px-3 text-[0.9375rem] font-semibold transition-colors 2xl:inline-flex cursor-pointer ${
                isLight 
                  ? 'text-slate-900 hover:text-[#0066FF] hover:bg-blue-50/80' 
                  : 'text-[#eef2f8] hover:text-white hover:bg-[rgb(238_242_248/0.07)]'
              }`}
            >
              <span>Demo Live</span>
              <ArrowUpRight className="size-4" />
            </button>

            {/* Primary Action Button: Începe gratuit */}
            <button
              type="button"
              onClick={onOpenDemo}
              className="hidden h-10 items-center rounded-[6px] bg-[#0066FF] px-4 text-[0.9375rem] font-semibold text-white shadow-[0_4px_15px_rgba(0,102,255,0.35)] transition-all hover:bg-[#0052cc] hover:shadow-[0_6px_20px_rgba(0,102,255,0.45)] hover:scale-[1.02] active:scale-95 sm:inline-flex cursor-pointer"
            >
              Începe gratuit
            </button>

            {/* Mobile Menu Hamburger Button */}
            <div className="xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label="Deschide meniul"
                className={`inline-flex size-10 items-center justify-center rounded-[6px] transition-colors cursor-pointer ${
                  isLight 
                    ? 'text-slate-900 hover:bg-slate-900/[0.08]' 
                    : 'text-[#eef2f8] hover:bg-[rgb(238_242_248/0.08)]'
                }`}
              >
                <Menu className="size-5" />
              </button>
            </div>

          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP MEGA-MENU PANELS (Floating over hero)
        ═══════════════════════════════════════════════════════════════════ */}
        {activeMenu && (
          <div 
            className={`w-full border-b transition-all duration-200 animate-in fade-in slide-in-from-top-2 shadow-2xl relative z-40 ${
              isLight
                ? 'bg-white/98 backdrop-blur-2xl border-slate-200/90 shadow-[0_25px_50px_rgba(0,0,0,0.12)]'
                : 'bg-[#070b14]/98 backdrop-blur-2xl border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.7)]'
            }`}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

              {/* ── PANEL 1: Explorează ──────────────────────────────────── */}
              {activeMenu === 'explore' && (
                <div className="flex flex-wrap items-start justify-between gap-10">
                  <div className="w-full lg:w-auto">
                    <div className="grid gap-x-10 gap-y-8 max-w-md">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                          Descoperă platforma
                        </p>
                        <ul className="space-y-1">
                          {exploreLinks.map((item) => (
                            <li key={item.title}>
                              {item.action ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    closeMenu();
                                    item.action?.();
                                  }}
                                  className={`w-full text-left group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </button>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={closeMenu}
                                  className={`group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="w-full sm:w-80">
                    <div className={`rounded-[12px] p-6 border ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/90' 
                        : 'bg-[rgb(238_242_248/0.04)] border-white/10'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Demo Live
                      </p>
                      <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isLight ? 'text-slate-700' : 'text-[#c9d2e0]'}`}>
                        Încearcă platforma live, fără cont și fără instalare direct în browser.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          closeMenu();
                          onOpenDemo();
                        }}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#0066FF] dark:text-[#6e9bff] hover:underline cursor-pointer"
                      >
                        <span>Încearcă Demo Live</span>
                        <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PANEL 2: Soluții ─────────────────────────────────────── */}
              {activeMenu === 'solutii' && (
                <div className="flex flex-wrap items-start justify-between gap-10">
                  <div className="w-full lg:w-[44rem]">
                    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                      
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                          Pe proces
                        </p>
                        <ul className="space-y-1">
                          {solutionsProcess.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                onClick={closeMenu}
                                className={`group block rounded-[8px] p-3 transition-colors ${
                                  isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                }`}
                              >
                                <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                  {item.title}
                                </span>
                                <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                  {item.desc}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                          Pe tip de atelier
                        </p>
                        <ul className="space-y-1">
                          {solutionsWorkshop.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                onClick={closeMenu}
                                className={`group block rounded-[8px] p-3 transition-colors ${
                                  isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                }`}
                              >
                                <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                  {item.title}
                                </span>
                                <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                  {item.desc}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="w-full sm:w-80">
                    <div className={`rounded-[12px] p-6 border ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/90' 
                        : 'bg-[rgb(238_242_248/0.04)] border-white/10'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Tur ghidat
                      </p>
                      <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isLight ? 'text-slate-700' : 'text-[#c9d2e0]'}`}>
                        Un tur interactiv pas cu pas prin ecranele și fluxul operațional din service.
                      </p>
                      <a
                        href="#simulator"
                        onClick={closeMenu}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#0066FF] dark:text-[#6e9bff] hover:underline"
                      >
                        <span>Vezi turul</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PANEL 3: Produse ─────────────────────────────────────── */}
              {activeMenu === 'produse' && (
                <div className="flex flex-wrap items-start justify-between gap-10">
                  <div className="w-full lg:w-[48rem]">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Produsele SAMpro
                      </p>
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                onClick={closeMenu}
                                className={`group flex h-full flex-col gap-3 rounded-[10px] border p-4 transition-colors ${
                                  isLight 
                                    ? 'border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/90' 
                                    : 'border-[rgb(238_242_248/0.08)] hover:border-[rgb(238_242_248/0.18)] hover:bg-[rgb(238_242_248/0.05)]'
                                }`}
                              >
                                <div className={`size-8 rounded-lg flex items-center justify-center border ${item.color}`}>
                                  <Icon className="size-4 stroke-[2]" />
                                </div>
                                <span>
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.8125rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="w-full sm:w-80">
                    <div className={`rounded-[12px] p-6 border ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/90' 
                        : 'bg-[rgb(238_242_248/0.04)] border-white/10'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Toate modulele
                      </p>
                      <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isLight ? 'text-slate-700' : 'text-[#c9d2e0]'}`}>
                        Platforma integrează 100% din fluxurile unui service auto modern.
                      </p>
                      <a
                        href="#module"
                        onClick={closeMenu}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#0066FF] dark:text-[#6e9bff] hover:underline"
                      >
                        <span>Vezi harta modulelor</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PANEL 4: Resurse ─────────────────────────────────────── */}
              {activeMenu === 'resurse' && (
                <div className="flex flex-wrap items-start justify-between gap-10">
                  <div className="w-full lg:w-auto">
                    <div className="grid gap-x-10 gap-y-8 max-w-md">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                          Ghiduri și materiale
                        </p>
                        <ul className="space-y-1">
                          {resources.map((item) => (
                            <li key={item.title}>
                              {item.action ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    closeMenu();
                                    item.action?.();
                                  }}
                                  className={`w-full text-left group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </button>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={closeMenu}
                                  className={`group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="w-full sm:w-80">
                    <div className={`rounded-[12px] p-6 border ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/90' 
                        : 'bg-[rgb(238_242_248/0.04)] border-white/10'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Migrare date
                      </p>
                      <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isLight ? 'text-slate-700' : 'text-[#c9d2e0]'}`}>
                        Importăm baza ta de date din alte programe sau din fișiere Excel fără nicio întrerupere.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          closeMenu();
                          onOpenDemo();
                        }}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#0066FF] dark:text-[#6e9bff] hover:underline cursor-pointer"
                      >
                        <span>Află detalii</span>
                        <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PANEL 5: Parteneri ───────────────────────────────────── */}
              {activeMenu === 'parteneri' && (
                <div className="flex flex-wrap items-start justify-between gap-10">
                  <div className="w-full lg:w-auto">
                    <div className="grid gap-x-10 gap-y-8 max-w-md">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                          Ecosistem & Integrări
                        </p>
                        <ul className="space-y-1">
                          {partners.map((item) => (
                            <li key={item.title}>
                              {item.action ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    closeMenu();
                                    item.action?.();
                                  }}
                                  className={`w-full text-left group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </button>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={closeMenu}
                                  className={`group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="w-full sm:w-80">
                    <div className={`rounded-[12px] p-6 border ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/90' 
                        : 'bg-[rgb(238_242_248/0.04)] border-white/10'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Integrări sigure
                      </p>
                      <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isLight ? 'text-slate-700' : 'text-[#c9d2e0]'}`}>
                        Conexiuni native cu furnizorii de piese auto, SPV ANAF și baza de date oficială RAR.
                      </p>
                      <a
                        href="#rar-autopass"
                        onClick={closeMenu}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#0066FF] dark:text-[#6e9bff] hover:underline"
                      >
                        <span>Vezi integrările</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PANEL 6: Suport ──────────────────────────────────────── */}
              {activeMenu === 'suport' && (
                <div className="flex flex-wrap items-start justify-between gap-10">
                  <div className="w-full lg:w-auto">
                    <div className="grid gap-x-10 gap-y-8 max-w-md">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                          Suport și încredere
                        </p>
                        <ul className="space-y-1">
                          {support.map((item) => (
                            <li key={item.title}>
                              {item.action ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    closeMenu();
                                    item.action?.();
                                  }}
                                  className={`w-full text-left group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </button>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={closeMenu}
                                  className={`group block rounded-[8px] p-3 transition-colors ${
                                    isLight ? 'hover:bg-slate-100/80' : 'hover:bg-[rgb(238_242_248/0.05)]'
                                  }`}
                                >
                                  <span className={`block font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#0066FF]' : 'text-white group-hover:text-[#6e9bff]'}`}>
                                    {item.title}
                                  </span>
                                  <span className={`mt-1 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-[#a6b1c4]'}`}>
                                    {item.desc}
                                  </span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Promo Card */}
                  <div className="w-full sm:w-80">
                    <div className={`rounded-[12px] p-6 border ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/90' 
                        : 'bg-[rgb(238_242_248/0.04)] border-white/10'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-[#a6b1c4]'}`}>
                        Contact direct
                      </p>
                      <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isLight ? 'text-slate-700' : 'text-[#c9d2e0]'}`}>
                        Scrie-ne sau programează o discuție directă cu un consultant tehnic SAMpro.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          closeMenu();
                          onOpenDemo();
                        }}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#0066FF] dark:text-[#6e9bff] hover:underline cursor-pointer"
                      >
                        <span>Scrie-ne acum</span>
                        <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </header>

      {/* ── Background Scrim behind Mega Menu ────────────────────────────── */}
      {activeMenu && (
        <div 
          aria-hidden="true" 
          className="fixed inset-0 top-[60px] sm:top-[70px] z-30 bg-black/40 dark:bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={closeMenu} 
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE DRAWER (Dialog matching user's requested IMFS structure)
      ═══════════════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer container */}
          <div className={`fixed inset-y-0 right-0 w-full max-w-md shadow-2xl flex flex-col z-50 overflow-y-auto animate-in slide-in-from-right duration-250 ${
            isLight ? 'bg-white text-slate-900' : 'bg-[#070b14] text-white'
          }`}>
            
            {/* Drawer Header */}
            <div className={`flex h-16 items-center justify-between border-b px-5 ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Meniu SAMpro
              </span>
              <button 
                type="button" 
                aria-label="Închide meniul" 
                onClick={() => setMobileMenuOpen(false)}
                className={`inline-flex size-10 items-center justify-center rounded-[6px] transition-colors cursor-pointer ${
                  isLight ? 'hover:bg-slate-100 text-slate-700' : 'hover:bg-white/10 text-slate-300'
                }`}
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="px-5 pb-10 pt-4 flex-1">
              
              {/* Primary Action Top */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="inline-flex h-12 items-center justify-center rounded-[6px] bg-[#0066FF] font-bold text-sm text-white shadow-lg shadow-blue-500/25 transition-transform hover:bg-[#0052cc]"
                >
                  Începe gratuit
                </button>
              </div>

              {/* Accordion List with <details> matching user requested structure */}
              <ul className={`mt-6 divide-y border-y ${
                isLight ? 'divide-slate-200 border-slate-200' : 'divide-white/10 border-white/10'
              }`}>
                
                {/* 1. Explorează */}
                <li>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 py-3.5 font-bold list-none">
                      <span>Explorează</span>
                      <ChevronDown className="size-4 shrink-0 opacity-70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-4 pt-1">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Descoperă platforma
                      </p>
                      <ul className="space-y-3">
                        {exploreLinks.map((item) => (
                          <li key={item.title}>
                            {item.action ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  item.action?.();
                                }}
                                className="block w-full text-left"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </button>
                            ) : (
                              <a
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* 2. Soluții */}
                <li>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 py-3.5 font-bold list-none">
                      <span>Soluții</span>
                      <ChevronDown className="size-4 shrink-0 opacity-70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-4 pt-1">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Pe proces
                      </p>
                      <ul className="space-y-3">
                        {solutionsProcess.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block"
                            >
                              <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                              <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                            </a>
                          </li>
                        ))}
                      </ul>

                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 mt-4 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Pe tip de atelier
                      </p>
                      <ul className="space-y-3">
                        {solutionsWorkshop.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block"
                            >
                              <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                              <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* 3. Produse */}
                <li>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 py-3.5 font-bold list-none">
                      <span>Produse</span>
                      <ChevronDown className="size-4 shrink-0 opacity-70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-4 pt-1">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Produsele SAMpro
                      </p>
                      <ul className="space-y-3">
                        {products.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block"
                            >
                              <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                              <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* 4. Prețuri */}
                <li>
                  <a
                    href="#preturi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3.5 font-bold text-[0.9375rem]"
                  >
                    Prețuri
                  </a>
                </li>

                {/* 5. Resurse */}
                <li>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 py-3.5 font-bold list-none">
                      <span>Resurse</span>
                      <ChevronDown className="size-4 shrink-0 opacity-70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-4 pt-1">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Ghiduri și materiale
                      </p>
                      <ul className="space-y-3">
                        {resources.map((item) => (
                          <li key={item.title}>
                            {item.action ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  item.action?.();
                                }}
                                className="block w-full text-left"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </button>
                            ) : (
                              <a
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* 6. Parteneri */}
                <li>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 py-3.5 font-bold list-none">
                      <span>Parteneri</span>
                      <ChevronDown className="size-4 shrink-0 opacity-70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-4 pt-1">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Ecosistem & Integrări
                      </p>
                      <ul className="space-y-3">
                        {partners.map((item) => (
                          <li key={item.title}>
                            {item.action ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  item.action?.();
                                }}
                                className="block w-full text-left"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </button>
                            ) : (
                              <a
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* 7. Suport */}
                <li>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 py-3.5 font-bold list-none">
                      <span>Suport</span>
                      <ChevronDown className="size-4 shrink-0 opacity-70 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pb-4 pt-1">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Suport și încredere
                      </p>
                      <ul className="space-y-3">
                        {support.map((item) => (
                          <li key={item.title}>
                            {item.action ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  item.action?.();
                                }}
                                className="block w-full text-left"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </button>
                            ) : (
                              <a
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <span className={`block text-[0.9375rem] font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</span>
                                <span className={`mt-0.5 block text-[0.875rem] leading-snug ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</span>
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

              </ul>

              {/* Theme toggle in mobile drawer */}
              {toggleTheme && (
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={`w-full py-3 rounded-lg border font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                      isLight 
                        ? 'border-slate-300 text-slate-800 hover:bg-slate-100' 
                        : 'border-white/15 text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {theme === 'dark' ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-slate-800" />}
                    <span>{theme === 'dark' ? 'Comută pe Mod Luminos (Day)' : 'Comută pe Mod Întunecat (Dark)'}</span>
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
};
