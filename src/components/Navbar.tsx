import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Zap, 
  LogIn,
  Calendar,
  Send,
  Car,
  Boxes,
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLegal?: (section?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const [mobileModulesExpanded, setMobileModulesExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth mouse enter/leave with buffer delay (standard in Stripe / Linear / Monday.com)
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setModulesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setModulesDropdownOpen(false);
    }, 150);
  };

  // Top CRM/ERP module grid for the hover flyout
  const moduleFlyoutItems = [
    {
      title: 'Elevatoare & Atelier',
      desc: 'Planificare mecanic, timpi morți zero',
      icon: Calendar,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      href: '#module'
    },
    {
      title: 'Devize & WhatsApp',
      desc: 'Aprobare instantanee 1-tap pe telefon',
      icon: Send,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      href: '#module'
    },
    {
      title: 'Conexiune RAR',
      desc: 'Interogare VIN oficială & Pașaport Tehnic',
      icon: Car,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      href: '#rar-autopass'
    },
    {
      title: 'Piese & Cataloage',
      desc: 'Coduri OEM sigure și adaos protejat',
      icon: Boxes,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      href: '#module'
    },
    {
      title: 'CRM & Notificări',
      desc: 'Remindere ITP, revizii și retenție clienți',
      icon: Users,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/20',
      href: '#module'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#020b1b]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' 
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Cloud Pill */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src="/assets/logo-white.png" 
                alt="SAMpro Logo" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#00D2FF] font-mono font-semibold">
                  CLOUD ERP / CRM
                </span>
                <span className="text-xs text-slate-400 font-medium leading-none">
                  Service Auto România
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center pl-3 border-l border-white/10 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#00D2FF] font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse"></span>
                v3.4
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Top CRM/ERP style: 1-word buttons + Mega-Flyout) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-slate-300">
            
            {/* Module Trigger with Interactive Hover Flyout */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#module"
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm tracking-tight transition-all duration-200 ${
                  modulesDropdownOpen 
                    ? 'text-white bg-white/10 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Module</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${modulesDropdownOpen ? 'rotate-180 text-[#00D2FF]' : 'text-slate-400'}`} />
              </a>

              {/* Mega-Flyout Popover (Stripe & Monday.com style) */}
              {modulesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-[580px] -ml-6 pt-3 animate-in fade-in zoom-in-95 duration-200 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#041126]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)] grid grid-cols-12 gap-5 ring-1 ring-white/10">
                    
                    {/* Left: Module List (7 cols) */}
                    <div className="col-span-7 space-y-1">
                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 px-2.5 pb-1">
                        Capabilități Ecosistem
                      </div>
                      {moduleFlyoutItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setModulesDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                          >
                            <div className={`p-2 rounded-lg border ${item.color} shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-white group-hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    {/* Right: Featured Card (5 cols - Highlighting ROI / Conversion) */}
                    <div className="col-span-5 flex flex-col justify-between p-4 rounded-xl bg-gradient-to-br from-blue-900/40 via-blue-950/30 to-black/60 border border-blue-400/20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D2FF]/10 blur-2xl pointer-events-none"></div>
                      
                      <div className="space-y-2 relative z-10">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-mono text-[#00D2FF]">
                          <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                          Impact Dovedit
                        </div>
                        <div className="text-xs font-bold text-white leading-tight">
                          -74% Timp Devize &amp; Fără Retururi de Piese
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Creat special pentru ritmul din atelierele și service-urile din România.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setModulesDropdownOpen(false);
                          onOpenDemo();
                        }}
                        className="mt-3 w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white text-[11px] font-semibold flex items-center justify-between transition-colors group-hover:border-blue-400/40"
                      >
                        <span>Cere Prezentare</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Rezultate (Single-word link to performance) */}
            <a
              href="#performanta"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Rezultate
            </a>

            {/* Calculator (Single-word link to ROI) */}
            <a
              href="#calculator-roi"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Calculator
            </a>

            {/* Prețuri (Single-word link to pricing) */}
            <a
              href="#preturi"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Prețuri
            </a>
          </nav>

          {/* Action CTAs (Top CRM/ERP style: Clean Login + High-converting Demo) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                alert('Portalul securizat de autentificare SAMpro Cloud este activ. Contactați administratorul pentru acreditare sau solicitați acces demonstrativ.');
              }}
              className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              Login
            </a>

            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0050cb] hover:from-[#0072ff] hover:to-[#005ae6] rounded-full shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group border border-blue-400/30"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5 text-[#00D2FF] fill-[#00D2FF] animate-pulse" />
              <span>Demo</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Interactive & Organized) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020b1b]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 gap-1">
            
            {/* Mobile Module Accordion */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setMobileModulesExpanded(!mobileModulesExpanded)}
                className="w-full px-3.5 py-3 text-sm font-semibold text-white flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span>Module</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileModulesExpanded ? 'rotate-180 text-[#00D2FF]' : ''}`} />
              </button>

              {mobileModulesExpanded && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-white/10 bg-black/20">
                  {moduleFlyoutItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        <div className={`p-1.5 rounded-md border ${item.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Direct 1-word links */}
            <a
              href="#performanta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Rezultate</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href="#calculator-roi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Calculator</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href="#preturi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Prețuri</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                alert('Portalul securizat de autentificare SAMpro Cloud este activ. Contactați administratorul pentru acreditare sau solicitați acces demonstrativ.');
              }}
              className="w-full py-2.5 rounded-full border border-white/10 text-slate-200 font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5"
            >
              <LogIn className="w-4 h-4 text-blue-400" />
              <span>Login</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


