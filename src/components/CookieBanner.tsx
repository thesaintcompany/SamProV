import React, { useState, useEffect } from 'react';
import {
  Cookie,
  ShieldCheck,
  Check,
  Settings2,
  X,
  Lock,
  BarChart3,
  Sliders
} from 'lucide-react';

interface CookieBannerProps {
  onOpenLegal: (section?: string) => void;
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'sampro_cookie_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenLegal,
  forceOpen = false,
  onCloseForceOpen
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    preferences: true
  });
  const [hasSavedConsent, setHasSavedConsent] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CookiePreferences = JSON.parse(saved);
        setPreferences({
          essential: true,
          analytics: parsed.analytics ?? false,
          preferences: parsed.preferences ?? true
        });
        setHasSavedConsent(true);
        if (forceOpen) {
          setIsVisible(true);
          setShowDetails(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Appears discreetly after 800ms without blocking any interaction
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, [forceOpen]);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
      setShowDetails(true);
    }
  }, [forceOpen]);

  const saveConsent = (analytics: boolean, userPrefs: boolean) => {
    const consentData: CookiePreferences = {
      essential: true,
      analytics,
      preferences: userPrefs,
      timestamp: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    } catch {
      // Ignore in private browsing
    }
    setHasSavedConsent(true);
    setIsVisible(false);
    setShowDetails(false);
    if (onCloseForceOpen) {
      onCloseForceOpen();
    }
  };

  const handleAcceptAll = () => {
    setPreferences({ essential: true, analytics: true, preferences: true });
    saveConsent(true, true);
  };

  const handleAcceptEssential = () => {
    setPreferences({ essential: true, analytics: false, preferences: false });
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences.analytics, preferences.preferences);
  };

  const handleQuickDismiss = () => {
    // 1-click dismiss button: saves default essential-only consent quietly
    handleAcceptEssential();
  };

  const handleReopen = () => {
    setShowDetails(true);
    setIsVisible(true);
  };

  return (
    <>
      {/* Discreet floating badge on bottom-left when dismissed */}
      {!isVisible && hasSavedConsent && (
        <button
          onClick={handleReopen}
          aria-label="Setări Cookies & GDPR"
          title="Preferințe confidențialitate și module cookie"
          className="fixed bottom-4 left-4 z-40 p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#07172f]/85 hover:bg-[#0c2448] text-slate-300 hover:text-white border border-white/15 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs transition-all duration-200 hover:scale-105 group cursor-pointer"
        >
          <Cookie className="w-3.5 h-3.5 text-[#00D2FF] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-[11px] font-medium">
            GDPR &amp; Cookie
          </span>
        </button>
      )}

      {/* Modern, non-intrusive floating notification (bottom-right on desktop, full-width on mobile) */}
      {isVisible && (
        <aside
          className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 w-[calc(100%-1.5rem)] sm:w-[440px] pointer-events-auto transition-all duration-300"
          role="region"
          aria-label="Notificare privind confidențialitatea și modulele cookie"
        >
          <div className="rounded-2xl bg-[#07172f]/95 dark:bg-[#07172f]/98 text-white border border-white/20 shadow-2xl backdrop-blur-xl p-4 sm:p-5 relative overflow-hidden transition-all duration-200">
            
            {/* Subtle glow accent in corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/15 blur-2xl pointer-events-none rounded-full"></div>

            {/* Header: Title + Instant 1-Click Close */}
            <div className="flex items-start justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#00D2FF] shrink-0">
                  <Cookie className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                      Confidențialitate &amp; Cookie
                    </h4>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#0066FF]/25 text-[#00D2FF] border border-[#0066FF]/30">
                      GDPR
                    </span>
                  </div>
                </div>
              </div>

              {/* 1-Click Dismiss Button (X) */}
              <button
                onClick={handleQuickDismiss}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                aria-label="Închide și acceptă doar modulele esențiale"
                title="Închide (continuă cu setările de bază)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Compact friendly text */}
            <p className="mt-2 text-[12px] text-slate-300 leading-snug relative z-10">
              Folosim doar module strict necesare pentru funcționarea platformei și opțional analiză pentru performanță. Datele nu sunt vândute terților.
            </p>

            {/* Inline Detailed Options when "Personalizează" is clicked */}
            {showDetails && (
              <div className="mt-3 pt-3 border-t border-white/10 space-y-2 relative z-10 animate-in fade-in duration-150">
                
                {/* 1. Strict Necessary */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[11px]">
                    <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">Strict Necesare</span>
                      <span className="text-slate-400 block text-[10px]">Securitate, sesiune și temă</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold shrink-0">
                    Activ
                  </span>
                </div>

                {/* 2. Analytics */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[11px]">
                    <BarChart3 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                    <div>
                      <span className="font-bold text-white">Analiză &amp; Performanță</span>
                      <span className="text-slate-400 block text-[10px]">Viteză și diagnosticare erori</span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#0066FF]"></div>
                  </label>
                </div>

                {/* 3. Preferences */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[11px]">
                    <Sliders className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">Preferințe Calculator</span>
                      <span className="text-slate-400 block text-[10px]">Salvare reglaje ROI și ateliere</span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) => setPreferences(prev => ({ ...prev, preferences: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#0066FF]"></div>
                  </label>
                </div>

              </div>
            )}

            {/* Quick Actions Bar */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 relative z-10">
              
              <button
                type="button"
                onClick={() => onOpenLegal('sec7')}
                className="text-[11px] text-slate-400 hover:text-[#00D2FF] underline flex items-center gap-1 transition-colors"
              >
                <ShieldCheck className="w-3 h-3 text-[#00D2FF]" />
                <span>Politica GDPR</span>
              </button>

              <div className="flex items-center gap-1.5 ml-auto">
                {!showDetails ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowDetails(true)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-semibold border border-white/10 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Settings2 className="w-3 h-3" />
                      <span>Opțiuni</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleAcceptEssential}
                      className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      Esențiale
                    </button>
                    <button
                      type="button"
                      onClick={handleAcceptAll}
                      className="px-3 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-[11px] font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <Check className="w-3 h-3" />
                      <span>Acceptă</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowDetails(false)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] transition-all cursor-pointer"
                    >
                      Înapoi
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveCustom}
                      className="px-3 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-[11px] font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
                    >
                      Salvează
                    </button>
                  </>
                )}
              </div>

            </div>

          </div>
        </aside>
      )}
    </>
  );
};
