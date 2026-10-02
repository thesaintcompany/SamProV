import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  LogIn,
  Calendar,
  Send,
  Car,
  Boxes,
  Users,
  Sparkles,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLegal?: (section?: string) => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, theme = 'light', toggleTheme }) => {
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

  const moduleFlyoutItems = [
    {
      title: 'Elevatoare & Atelier',
      desc: 'Planificare mecanic, timpi morți zero',
      icon: Calendar,
      color: 'text-blue-500 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20',
      href: '#module'
    },
    {
      title: 'Devize & WhatsApp',
      desc: 'Aprobare instantanee 1-tap pe telefon',
      icon: Send,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20',
      href: '#module'
    },
    {
      title: 'Conexiune RAR',
      desc: 'Interogare VIN oficială & Pașaport Tehnic',
      icon: Car,
      color: 'text-amber-500 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20',
      href: '#rar-autopass'
    },
    {
      title: 'Piese & Cataloage',
      desc: 'Coduri OEM sigure și adaos protejat',
      icon: Boxes,
      color: 'text-purple-500 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-500/10 dark:border-purple-500/20',
      href: '#module'
    },
    {
      title: 'CRM & Notificări',
      desc: 'Remindere ITP, revizii și retenție clienți',
      icon: Users,
      color: 'text-indigo-500 bg-indigo-50 border-indigo-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-400/20',
      href: '#module'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-[#020b1b]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' 
          : 'bg-white/70 dark:bg-transparent border-b border-slate-100 dark:border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (Official logo variants for Day/Light mode and Dark mode) */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src={theme === 'dark' ? '/assets/logo-dark.png' : '/assets/logo-light.png'} 
                alt="SAMpro - Service Auto Management Pro" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-400/20 text-[#0066FF] dark:text-[#00D2FF] font-mono text-[10px] font-semibold">
                v3.4
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links (Single-word + Mega-Flyout) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            
            {/* Acasă */}
            <a
              href="#"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-[#0066FF] font-semibold border-b-2 border-[#0066FF] rounded-b-none"
            >
              Acasă
            </a>

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
                    ? 'text-[#0066FF] bg-blue-50 dark:bg-white/10 shadow-xs' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5'
                }`}
              >
                <span>Module</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${modulesDropdownOpen ? 'rotate-180 text-[#0066FF]' : 'text-slate-400'}`} />
              </a>

              {/* Mega-Flyout Popover */}
              {modulesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-[580px] -ml-6 pt-3 animate-in fade-in zoom-in-95 duration-200 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white/95 dark:bg-[#041126]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)] grid grid-cols-12 gap-5 ring-1 ring-black/5 dark:ring-white/10">
                    
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
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors group"
                          >
                            <div className={`p-2 rounded-lg border ${item.color} shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-[#0066FF] transition-colors flex items-center gap-1">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    {/* Right: Featured Card */}
                    <div className="col-span-5 flex flex-col justify-between p-4 rounded-xl bg-gradient-to-br from-blue-50 via-blue-100/50 to-white dark:from-blue-900/40 dark:via-blue-950/30 dark:to-black/60 border border-blue-200/80 dark:border-blue-400/20 relative overflow-hidden group">
                      <div className="space-y-2 relative z-10">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-400/30 text-[10px] font-mono font-bold text-[#0066FF] dark:text-[#00D2FF]">
                          <Sparkles className="w-3 h-3 text-[#0066FF] dark:text-[#00D2FF]" />
                          Impact Dovedit
                        </div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                          -74% Timp Devize &amp; Fără Retururi de Piese
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          Creat special pentru ritmul din atelierele și service-urile din România.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setModulesDropdownOpen(false);
                          onOpenDemo();
                        }}
                        className="mt-3 w-full py-2 px-3 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-[11px] font-semibold flex items-center justify-between transition-colors shadow-xs"
                      >
                        <span>Cere Prezentare</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Rezultate */}
            <a
              href="#performanta"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 transition-all"
            >
              Rezultate
            </a>

            {/* Calculator */}
            <a
              href="#calculator-roi"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 transition-all"
            >
              Calculator
            </a>

            {/* Prețuri */}
            <a
              href="#preturi"
              className="px-3.5 py-2 rounded-lg text-sm tracking-tight text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 transition-all"
            >
              Prețuri
            </a>
          </nav>

          {/* Action CTAs (Theme Toggle + Login + Începe Acum Gratuit) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Dark / Light Mode Toggle Button */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                title={theme === 'dark' ? 'Comută pe mod luminos' : 'Comută pe mod întunecat'}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600 hover:-rotate-12 transition-transform" />
                )}
              </button>
            )}

            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                alert('Portalul securizat de autentificare SAMpro Cloud este activ. Contactați administratorul pentru acreditare sau solicitați acces demonstrativ.');
              }}
              className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5 text-[#0066FF] dark:text-blue-400" />
              Login
            </a>

            {/* Matching button in screenshot: Începe Acum Gratuit → */}
            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0066FF] hover:bg-[#0052cc] rounded-full shadow-[0_4px_15px_rgba(0,102,255,0.35)] hover:shadow-[0_6px_20px_rgba(0,102,255,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
            >
              <span>Începe Acum Gratuit</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#020b1b]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto shadow-xl">
          
          <div className="grid grid-cols-1 gap-1">
            
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-bold text-[#0066FF] bg-blue-50 dark:bg-white/5 flex items-center justify-between"
            >
              <span>Acasă</span>
              <ChevronRight className="w-4 h-4 text-[#0066FF]" />
            </a>

            {/* Mobile Module Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-white/[0.02]">
              <button
                onClick={() => setMobileModulesExpanded(!mobileModulesExpanded)}
                className="w-full px-3.5 py-3 text-sm font-semibold text-slate-800 dark:text-white flex items-center justify-between hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <span>Module</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileModulesExpanded ? 'rotate-180 text-[#0066FF]' : ''}`} />
              </button>

              {mobileModulesExpanded && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-black/20">
                  {moduleFlyoutItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-[#0066FF] transition-colors"
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

            {/* Direct links */}
            <a
              href="#performanta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Rezultate</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#calculator-roi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Calculator</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#preturi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Prețuri</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="w-full py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                <span>{theme === 'dark' ? 'Mod Luminos (Alb)' : 'Mod Întunecat (Dark)'}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                alert('Portalul securizat de autentificare SAMpro Cloud este activ. Contactați administratorul pentru acreditare sau solicitați acces demonstrativ.');
              }}
              className="w-full py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              <LogIn className="w-4 h-4 text-[#0066FF]" />
              <span>Login</span>
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <span>Începe Acum Gratuit</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
