import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyModules } from './components/KeyModules';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { RarAutopassSection } from './components/RarAutopassSection';
import { PerformanceDiagram } from './components/PerformanceDiagram';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { GdprModal } from './components/GdprModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sampro_theme');
      return saved === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('sampro_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState('Plan Pro (Recomandat)');
  const [isGdprModalOpen, setIsGdprModalOpen] = useState(false);
  const [gdprInitialFilter, setGdprInitialFilter] = useState('all');
  const [simulatorInitialTab, setSimulatorInitialTab] = useState<'whatsapp' | 'rar' | 'hoists'>('whatsapp');

  const handleOpenDemo = (planName?: string) => {
    if (planName) {
      setSelectedPlanForDemo(planName);
    }
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleOpenLegal = (filter?: string) => {
    setGdprInitialFilter(filter || 'all');
    setIsGdprModalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsGdprModalOpen(false);
  };

  const handleScrollToSimulator = (tab?: 'whatsapp' | 'rar' | 'hoists') => {
    if (tab) {
      setSimulatorInitialTab(tab);
    }
    const simulatorElement = document.getElementById('simulator');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020b1b] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-[#0066FF] selection:text-white antialiased transition-colors duration-300">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenDemo={() => handleOpenDemo()} 
        onOpenLegal={handleOpenLegal} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        {/* Hero Showcase with Formula 1 Speed & Apple Keynote Aura */}
        <Hero 
          onOpenDemo={() => handleOpenDemo('Plan Pro')} 
          onScrollToSimulator={() => handleScrollToSimulator('whatsapp')} 
        />

        {/* 5 Core ERP/CRM Modules (Bento Architecture) */}
        <KeyModules 
          onSelectSimulatorTab={(tab) => handleScrollToSimulator(tab)} 
        />

        {/* Live Interactive Workshop Simulator (WhatsApp, RAR, Hoists) */}
        <InteractiveSimulator 
          initialTab={simulatorInitialTab} 
        />

        {/* Romanian Official RAR Autopass Compliance Deep Dive */}
        <RarAutopassSection 
          onScrollToSimulator={() => handleScrollToSimulator('rar')} 
          onOpenDemo={() => handleOpenDemo('Integrare RAR Autopass')} 
        />

        {/* Sales Advisors Keynote Performance Diagram & SVG Curve */}
        <PerformanceDiagram />

        {/* Interactive Workshop ROI & Saved Hours Calculator */}
        <RoiCalculator 
          onOpenDemo={() => handleOpenDemo('Calcul Rentabilitate')} 
        />

        {/* Social Proof & Romanian Workshop Testimonials */}
        <Testimonials />

        {/* Transparent Subscription Plans (Start, Pro, Enterprise) */}
        <Pricing 
          onOpenDemo={(plan) => handleOpenDemo(plan)} 
        />
      </main>

      {/* Corporate BUU.RO Footer with Legal and Support details */}
      <Footer 
        onOpenDemo={() => handleOpenDemo()} 
        onOpenLegal={handleOpenLegal} 
      />

      {/* Interactive Demo Request Lead Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemo} 
        selectedPlan={selectedPlanForDemo} 
      />

      {/* Official Legal & GDPR Privacy Modal (8 Complete Sections) */}
      <GdprModal 
        isOpen={isGdprModalOpen} 
        onClose={handleCloseLegal} 
        initialFilter={gdprInitialFilter} 
      />

    </div>
  );
};

export default App;
