import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  LogIn
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLegal: (section?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenLegal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Acasă', href: '#' },
    { name: 'Module & Flux', href: '#module' },
    { name: 'Simulator Live', href: '#simulator' },
    { name: 'RAR Autopass', href: '#rar-autopass' },
    { name: 'Performanță F1', href: '#performanta' },
    { name: 'Calculator ROI', href: '#calculator-roi' },
    { name: 'Prețuri', href: '#preturi' },
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
          
          {/* Brand Logo & Telemetry Pill */}
          <div className="flex items-center space-x-4">
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

            {/* Cloud Version & Status Badge */}
            <div className="hidden lg:flex items-center space-x-2 pl-3 border-l border-white/10 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#00D2FF] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse"></span>
                v3.4 Cloud
              </span>
              <span className="text-slate-400 text-[11px] font-medium hidden xl:inline">
                Sincronizat RAR &amp; WhatsApp
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200 hover:text-[#00D2FF] py-1 text-sm tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => onOpenLegal('all')}
              className="text-slate-400 hover:text-white transition-colors duration-200 text-sm tracking-tight inline-flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              GDPR
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            <a
              href="#autentificare"
              onClick={(e) => {
                e.preventDefault();
                alert('Portalul securizat de autentificare SAMpro Cloud este activ. Contactați administratorul pentru acreditare sau solicitați acces demonstrativ.');
              }}
              className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              Autentificare
            </a>

            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0050cb] hover:from-[#0072ff] hover:to-[#005ae6] rounded-full shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group border border-blue-400/30"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5 text-[#00D2FF] fill-[#00D2FF] animate-pulse" />
              <span>Cere Demo Gratuit</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020b1b]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#00D2FF]">
            <span className="flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5" />
              Sistem Cloud Activ (99.98% SLA)
            </span>
            <span className="text-emerald-400">Online</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLegal('all');
              }}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between text-left"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Termeni, Condiții &amp; GDPR
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Solicită Prezentare / Demo 14 Zile</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
