import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import {
  X,
  Send,
  CheckCircle2,
  Building2,
  User,
  Phone,
  Wrench,
  MapPin,
  Rocket
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  onOpenLegal?: (section?: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = 'Plan Pro (Recomandat)',
  onOpenLegal
}) => {
  const [serviceName, setServiceName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [hoists, setHoists] = useState('3-5');
  const [gdprChecked, setGdprChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprChecked) {
      alert('Te rugăm să bifezi acordul de prelucrare a datelor GDPR.');
      return;
    }

    setSubmitting(true);

    try {
      const now = new Date();
      const timestamp = now.toLocaleString('ro-RO', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Europe/Bucharest'
      });

      // ── Build the full HTML email body in code ──────────────────────
      // The EmailJS template only needs: {{{message_html}}}
      // (triple braces = unescaped HTML pass-through)
      const message_html = `
<div style="font-family:'Segoe UI',Roboto,Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0066FF 0%,#0040cc 100%);padding:28px 32px;text-align:center;">
    <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">
      🚀 Cerere Demo SAMpro
    </h1>
    <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">
      Solicitare nouă primită pe ${timestamp}
    </p>
  </div>

  <!-- Body -->
  <div style="padding:28px 32px;">

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

      <!-- Service Name -->
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;width:40%;">
          <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
            🏢 Nume Service
          </span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:15px;font-weight:700;color:#0f172a;">
            ${serviceName || '—'}
          </span>
        </td>
      </tr>

      <!-- Contact Person -->
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
            👤 Persoană Contact
          </span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:15px;font-weight:700;color:#0f172a;">
            ${contactName || '—'}
          </span>
        </td>
      </tr>

      <!-- Phone -->
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
            📱 Telefon
          </span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <a href="tel:${phone}" style="font-size:15px;font-weight:700;color:#0066FF;text-decoration:none;">
            ${phone || '—'}
          </a>
        </td>
      </tr>

      <!-- City -->
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
            📍 Oraș / Județ
          </span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:15px;font-weight:600;color:#0f172a;">
            ${city || '—'}
          </span>
        </td>
      </tr>

      <!-- Hoists -->
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
            🔧 Elevatoare / Mecanici
          </span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
          <span style="font-size:15px;font-weight:600;color:#0f172a;">
            ${hoists || '—'}
          </span>
        </td>
      </tr>

      <!-- Selected Plan -->
      <tr>
        <td style="padding:12px 0;vertical-align:top;">
          <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
            📦 Pachet Selectat
          </span>
        </td>
        <td style="padding:12px 0;vertical-align:top;">
          <span style="display:inline-block;padding:4px 12px;border-radius:20px;background:#EEF2FF;color:#0066FF;font-size:13px;font-weight:800;">
            ${selectedPlan || '—'}
          </span>
        </td>
      </tr>

    </table>

  </div>

  <!-- Footer -->
  <div style="background:#f8fafc;padding:18px 32px;border-top:1px solid #e2e8f0;text-align:center;">
    <p style="margin:0;font-size:11px;color:#94a3b8;">
      Acord GDPR confirmat ✅ · Trimis de pe sampro.buu.ro · ${timestamp}
    </p>
  </div>

</div>`;

      const templateParams = {
        // ── Individual fields (in case the template uses them) ──
        serviceName,
        contactName,
        phone,
        city,
        hoists,
        selectedPlan,
        timestamp,
        // ── EmailJS standard fields ──
        from_name: contactName,
        reply_to: phone,
        to_name: 'SAMpro Team',
        subject: `🚀 Cerere Demo SAMpro — ${serviceName || 'Nespecificat'} (${selectedPlan})`,
        // ── Full HTML body (template needs only {{{message_html}}}) ──
        message_html,
        // ── Plain-text fallback ──
        message: [
          `═══ CERERE DEMO SAMPRO ═══`,
          ``,
          `🏢 Service:       ${serviceName || '—'}`,
          `👤 Contact:       ${contactName || '—'}`,
          `📱 Telefon:       ${phone || '—'}`,
          `📍 Oraș/Județ:    ${city || '—'}`,
          `🔧 Elevatoare:    ${hoists || '—'}`,
          `📦 Pachet:        ${selectedPlan || '—'}`,
          ``,
          `🕐 Data cerere:   ${timestamp}`,
          `✅ GDPR:          Acord confirmat`,
          ``,
          `═══════════════════════════`,
        ].join('\n'),
      };

      await emailjs.send(
        'service_s07r2vh',
        'template_rt8vqll',
        templateParams,
        'aTPXNWpLxPnwXerpq'
      );

      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (error) {
      setSubmitting(false);
      console.error('Eroare la trimiterea emailului:', error);
      alert('Eroare la trimiterea emailului. Încearcă din nou.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setServiceName('');
    setContactName('');
    setPhone('');
    setCity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#07172f] border border-slate-200 dark:border-white/20 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-white relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Glow corner accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 dark:bg-[#0066FF]/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Închide formularul"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Cerere Transmisă cu Succes!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
              Mulțumim, <strong>{contactName || 'domnule consilier'}</strong>! Echipa <strong>SAMpro / BUU.RO</strong> a primit solicitarea pentru <strong>{serviceName || 'service-ul dumneavoastră'}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 font-mono">
              Un specialist tehnic te va contacta în maximum <strong>15 minute</strong> pentru activarea instanței demo de 14 zile și configurarea elevatoarelor.
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              Închide și continuă navigarea
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 text-[#0066FF] dark:text-[#00D2FF] font-mono text-xs font-bold mb-2">
                <Rocket className="w-3.5 h-3.5" />
                ACCES DEMO 14 ZILE GRATUIT
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Pornește Motorul Service-ului Tău
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Pachet selectat: <span className="text-[#0066FF] dark:text-[#00D2FF] font-bold">{selectedPlan}</span>. Configurare în 10 minute, fără card de credit necesar.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Service Name */}
              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
                  Nume Service Auto / Atelier *
                </label>
                <input
                  type="text"
                  required
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder="ex. AutoPro Serv Cluj"
                  className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#030d22] border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] dark:focus:border-[#00D2FF] transition-all text-xs"
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
                  Nume Persoană de Contact *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="ex. Cristian Popescu (Manager / Șef Atelier)"
                  className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#030d22] border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] dark:focus:border-[#00D2FF] transition-all text-xs"
                />
              </div>

              {/* Phone & City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
                    Telefon Mobil (România) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07xx xxx xxx"
                    className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#030d22] border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] dark:focus:border-[#00D2FF] transition-all font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
                    Oraș / Județ
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="ex. Cluj-Napoca, București"
                    className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#030d22] border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] dark:focus:border-[#00D2FF] transition-all text-xs"
                  />
                </div>
              </div>

              {/* Number of Hoists */}
              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#0066FF] dark:text-[#00D2FF]" />
                  Număr Elevatoare / Mecanici
                </label>
                <select
                  value={hoists}
                  onChange={(e) => setHoists(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#030d22] border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white focus:outline-none focus:border-[#0066FF] dark:focus:border-[#00D2FF] transition-all text-xs"
                >
                  <option value="1-2">1 - 2 Elevatoare (Atelier mic / Start)</option>
                  <option value="3-5">3 - 5 Elevatoare (Service mediu)</option>
                  <option value="6-10">6 - 10 Elevatoare (Service complet / ITP)</option>
                  <option value="10+">Peste 10 Elevatoare / Flotă Multi-locație</option>
                </select>
              </div>

              {/* GDPR Agreement */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modalGdpr"
                  checked={gdprChecked}
                  onChange={(e) => setGdprChecked(e.target.checked)}
                  required
                  className="mt-0.5 rounded text-[#0066FF] focus:ring-0 bg-white dark:bg-slate-900 border-slate-300 dark:border-white/20"
                />
                <label htmlFor="modalGdpr" className="text-slate-600 dark:text-slate-400 text-[11px] leading-tight cursor-pointer">
                  Sunt de acord cu prelucrarea datelor pentru contactarea în vederea prezentării SAMpro conform{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenLegal) onOpenLegal('sec3');
                    }}
                    className="text-[#0066FF] dark:text-[#00D2FF] underline hover:opacity-80 inline"
                  >
                    Politicii GDPR (Art. 28)
                  </button>. Datele nu sunt înstrăinate terților.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 mt-2 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 active:scale-95 transition-all cursor-pointer"
              >
                {submitting ? (
                  <span>Se transmite solicitarea...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Solicită Prezentare Gratuită 14 Zile</span>
                  </>
                )}
              </button>

            </form>

            <div className="text-center text-[10px] text-slate-500 font-mono">
              🔒 Securitate garantată • Servere Uniunea Europeană (ISO 27001)
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
