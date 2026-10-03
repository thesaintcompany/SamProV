import React from 'react';
import { Star, ShieldCheck, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Cristian Popescu',
      role: 'Manager General',
      service: 'AutoExpert Cluj-Napoca',
      city: 'Cluj-Napoca',
      hoists: '6 Elevatoare',
      stars: 5,
      text: 'Trimiterea devizului pe WhatsApp cu fotografii atașate a schimbat radical relația cu clienții. Înainte pierdeam ore întregi sunând după aprobări; acum, în 5 minute avem devizul confirmat de pe telefonul clientului. Rata noastră de acceptare a crescut cu peste 30%!'
    },
    {
      name: 'Ing. Radu Dumitru',
      role: 'Șef Atelier & Calitate',
      service: 'ProAuto Hub București',
      city: 'București, Sector 6',
      hoists: '10 Elevatoare & ITP',
      stars: 5,
      text: 'Integrarea directă cu RAR Autopass este genială. Nu mai stăm să tastăm manual serii de șasiu sau să verificăm datele de ITP din alte site-uri. La recepție introducem numărul și avem istoricul complet în 3 secunde. Protecția codurilor de piese ne-a salvat mii de euro.'
    },
    {
      name: 'Mihai Vasilescu',
      role: 'Proprietar Service',
      service: 'PitStop Service Timișoara',
      city: 'Timișoara',
      hoists: '4 Elevatoare',
      stars: 5,
      text: 'Faptul că e 100% în cloud și merge de pe tabletele mecanicilor a adus o disciplină extraordinară pe fiecare elevator. Știm în orice moment dacă o mașină e gata sau dacă așteptăm piese. Suportul celor de la BUU.RO e impecabil.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#030d22] relative overflow-hidden text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-xs font-rounded font-bold tracking-wider text-[#0066FF] dark:text-[#00D2FF] mb-4">
            <Quote className="w-3.5 h-3.5" />
            ÎNCREDERE DOVEDITĂ ÎN ATELIERELE AUTO
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Peste 350 de Service-uri din România Lucrează cu SAMpro
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            De la ateliere mecanice independente de familie, până la mari centre multibrand și stații ITP.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-[#06152b]/90 border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-6 hover:border-[#0066FF]/30 dark:hover:border-[#00D2FF]/30 transition-all shadow-xs dark:shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {r.name}
                  </div>
                  <div className="text-xs text-[#0066FF] dark:text-[#00D2FF]">
                    {r.role} • {r.service}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5 font-mono">
                    <MapPin className="w-3 h-3" />
                    {r.city} • {r.hoists}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-white/10 text-[#0066FF] dark:text-white flex items-center justify-center font-bold text-xs">
                  {r.name.charAt(0)}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#07172f]/60 border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-600 dark:text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            <span>GDPR 100% Compliant (UE 2016/679)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]"></span>
            <span>Servere Cloud București &amp; Frankfurt</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Criptare End-to-End AES-256</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>Dezvoltat de BUU.RO</span>
          </div>
        </div>

      </div>
    </section>
  );
};
