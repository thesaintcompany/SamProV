# SAMpro — Service Auto Management Pro (Cloud ERP / CRM)

> **Tot ce ai nevoie, într-un singur loc. Simplu. Rapid. Eficient. Uman.**  
> Soluție Cloud SaaS dedicată atelierelor auto, vopsitoriilor, centrelor ITP și marilor rețele de service din România. Dezvoltat în parteneriat cu [BUU.RO](https://www.buu.ro).

---

## 🏎️ Tehnologii & Arhitectură

- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS v4, Glassmorphism & Motorsport Precision Design Tokens
- **Iconografie & Animații:** Lucide React, Canvas Confetti
- **Deployment:** Dockerfile multi-stage (Node 22 + Nginx Alpine) pre-configurat pentru **Coolify** pe portul **3043**.

---

## 🚀 Rulare Locală

### 1. Instalare Dependențe
```bash
npm install
```

### 2. Pornire Server de Dezvoltare (Port 3043)
```bash
npm run dev
```
Aplicația va fi accesibilă la: `http://localhost:3043/`

### 3. Build & Preview Producție
```bash
npm run build
npm run preview
```

---

## 🐳 Ghid de Publicare pe GitHub & Deployment în Coolify

Aplicația este 100% configurată pentru a rula pe **portul 3043** prin **Coolify** utilizând repository-ul tău de GitHub.

### Pasul 1: Inițializare Git & Push pe GitHub
Dacă nu ai creat încă repository-ul pe GitHub, rulează în terminalul proiectului:
```bash
git init
git add .
git commit -m "feat: SAMpro cloud web platform ready for Coolify (port 3043)"
git branch -M main
git remote add origin https://github.com/<utilizatorul-tau>/<nume-repo>.git
git push -u origin main
```

### Pasul 2: Adăugare Aplicație în Coolify
1. Intră în panoul **Coolify** (ex. `https://coolify.domeniul-tau.ro`).
2. Navighează la **Projects** -> Selectează mediul (ex. `Production`).
3. Apasă pe **+ New** -> **Application** -> **Public Repository** sau **GitHub App** (dacă ai integrat contul).
4. Selectează repository-ul GitHub proaspăt încărcat.
5. La **Build Pack**, selectează **Dockerfile** (sau **Docker Compose** - ambele fișiere sunt incluse în rădăcina proiectului).
6. La secțiunea **Ports Exposes**, asigură-te că este setat:
   ```text
   3043
   ```
   *(Portul intern al containerului este 3043, iar Coolify / Traefik va genera automat certificatul SSL HTTPS și va mapa domeniul tău pe portul 3043)*.
7. Setează domeniul dorit în câmpul **Domains** (ex: `https://sampro.ro` sau `https://app.sampro.ro`).
8. Apasă pe **Deploy**. În mai puțin de 60 de secunde, containerul tău Nginx Alpine va fi live!

---

## 🛠️ Ce Conține Aplicația Web?

1. **Hero Cinematic & Telemetrie F1:**
   - Prezentare de impact cu mașina de Raccing și dispozitiv mobil interactiv cu telemetrie live.
   - Indicatori cheie: 350+ service-uri partenere, -74% timp per deviz, 0 erori cod piese.

2. **Cinci Module Cheie ERP/CRM (Arhitectură Bento):**
   - **Calendar & Planificator Elevatoare**: Gestiune mecanic, posturi de lucru, timpi de staționare.
   - **Devize Inteligente & Aprobare 1-Tap pe WhatsApp**: Trimitere ofertă cu foto/video atașate din atelier, aprobare instantă de către proprietar.
   - **Hub Oficial RAR & Autopass**: Validare automată a seriei de șasiu (VIN), kilometraj certificat și emitere Pașaport Tehnic.
   - **Protecție Cod Piese & Cataloage OEM**: Eliminare retururi și protecția adaosului comercial.
   - **Smart PR & CRM Empatic**: Notificări automate pe parcursul reparației, remindere sezoniere (ITP, revizii, anvelope).

3. **Simulator Interactiv Live (3 Scenarii):**
   - **Deviz WhatsApp Client:** Interacțiune completă pe telefon cu selecție piese și aprobare 1-tap cu animație confetti.
   - **Interogare RAR Autopass:** Căutare după număr înmatriculare sau VIN, afișare kilometraj și descărcare Pașaport Tehnic PDF.
   - **Gestiune Elevatoare:** Panou de atelier cu schimbare dinamică de stadiu per elevator.

4. **Diagramă Performanță Vânzători (Stil Apple Keynote):**
   - Pipeline comparativ în 4 etape (Intake, Pricing, WhatsApp Closing, Fulfillment).
   - Curbă dinamică SVG de accelerare a veniturilor Consilierilor de Service.

5. **Calculator ROI & Ore Economisite:**
   - Slidere interactive pentru număr de elevatoare, devize/zi și bilet mediu.
   - Calcul în timp real al orelor economisite și al profitului net lunar generat.

6. **Planuri & Prețuri Transparente:**
   - Comutator Facturare Lunară / Facturare Anuală (-20% reducere).
   - Plan Start (690 lei/lună), Plan Pro (1289 lei/lună), Plan Enterprise (Custom).

7. **Modal Solicitare Demo 14 Zile:**
   - Formular complet adaptat pieței din România, validare număr telefon, selecție elevatoare și confirmare instantanee.

8. **Modal Documentație Legală & GDPR (8 Secțiuni):**
   - Termeni & Condiții SaaS, Roluri & Drepturi, GDPR (UE 2016/679), Securitate Cloud AES-256, Reglementări RAR, Politică Cookie și ANPC.

---

## 📄 Fișiere Cheie de Configurare

- `vite.config.ts`: Configurat cu `server.port = 3043`, `server.host = '0.0.0.0'` și `preview.port = 3043`.
- `Dockerfile`: Multi-stage build (Node 22 -> Nginx Alpine pe portul 3043).
- `nginx.conf`: Nginx cu compresie Gzip, cache pentru statice și fallback SPA pe portul 3043.
- `docker-compose.yml`: Configurație Docker Compose gata de lansare în Coolify.

---

© 2026 SAMpro by BUU.RO. Toate drepturile rezervate.
