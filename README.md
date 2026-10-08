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

### 2. Pornire Server de Dezvoltare (Frontend + Backend)
```bash
npm run dev:all
```
Aceasta va porni simultan:
- Frontend React pe portul 3043 (`http://localhost:3043/`)
- Backend API pe portul 3001 (pentru trimiterea emailurilor)

**SAU** poți porni serviciile separat:
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend API
npm run server
```

### 3. Build & Preview Producție
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment pe Server cu Hestia CP

### Opțiunea 1: Deployment cu Docker (Recomandat)

1. **Build Docker Image pe server:**
```bash
cd /path/to/SamProV
docker build -t sampro-web .
```

2. **Rulează containerul:**
```bash
docker run -d -p 3043:3043 --name sampro sampro-web
```

3. **Configurează Hestia CP:**
   - Adaugă un nou template web cu portul 3043
   - Configurează proxy pass în Nginx către portul 3043
   - Activează SSL cu Let's Encrypt

### Opțiunea 2: Deployment Direct (fără Docker)

1. **Clonează repository pe server:**
```bash
cd /var/www/
git clone <repository-url> sampro
cd sampro
```

2. **Instalare dependențe și build:**
```bash
npm install
npm run build
```

3. **Instalare și configurare Postfix (pentru sendmail):**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postfix

# În timpul instalării selectează "Internet Site"
# Configurează myhostname și mydestination
```

4. **Configurează proces manager (PM2):**
```bash
# Instalare PM2
sudo npm install -g pm2

# Pornește serverul API
pm2 start server.js --name sampro-api

# Pornește frontend cu serve (sau folosește nginx)
npm install -g serve
pm2 start "serve dist -l 3043" --name sampro-web

# Salvează configurația PM2
pm2 save
pm2 startup
```

5. **Configurează Nginx în Hestia CP:**
   - Adaugă un nou web domain
   - Configurează custom nginx config pentru a servi fișierele statice și a proxy cererile API
   - Exemplu de configurație Nginx:
```nginx
location / {
    proxy_pass http://localhost:3043;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

location /api/ {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### Verificare Trimitere Email

După deployment, testează trimiterea emailurilor:
1. Accesează formularul de contact
2. Completează datele și trimite
3. Verifică logurile serverului: `pm2 logs sampro-api`
4. Verifică coada de email: `mailq` (pentru Postfix)

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

## � Configurare Trimitere Email

Formularul de contact trimite emailuri prin backend API folosind sendmail (instalat pe server). 

### Configurare Sendmail (Default)
Serverul folosește sendmail din sistem (`/usr/sbin/sendmail`). Asigură-te că sendmail este instalat și configurat pe serverul de producție.

### Opțional: Configurare SMTP
Dacă preferi SMTP în loc de sendmail, modifică `server.js`:

```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
```

Apoi creează fișierul `.env` pe baza `.env.example` și completează datele SMTP.

### Destinatari Email
Emailurile sunt trimise către:
- `contact@buu.ro`
- `suport@sampro.ro`

Poți modifica aceste adrese în `server.js` la linia 32.

---

## �🛠️ Ce Conține Aplicația Web?

1. **Hero Cinematic & Telemetrie F1:**
   - Prezentare de impact cu mașina de Racing și dispozitiv mobil interactiv cu telemetrie live.
   - Indicatori cheie: 350+ service-uri partenere, -74% timp per deviz, 0 erori cod piese.

2. **Cinci Module Cheie ERP/CRM (Arhitectură Bento):**
   - **Calendar & Planificator Elevatoare**: Gestiune mecanic, posturi de lucru, timpi de staționare.
   - **Devize Inteligente & Aprobare 1-Tap  **: Trimitere ofertă cu foto/video atașate din atelier, aprobare instantă de către proprietar.
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
