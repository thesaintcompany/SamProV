import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.API_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configurare sendmail transport
const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
  args: ['-i', '-t']
});

// Endpoint pentru trimiterea emailului
app.post('/api/send-email', async (req, res) => {
  try {
    const { serviceName, contactName, phone, city, hoists, selectedPlan } = req.body;

    // Validare
    if (!serviceName || !contactName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Câmpurile obligatorii lipsesc'
      });
    }

    // Construire conținut email
    const mailOptions = {
      from: 'noreply@buu.ro',
      to: 'contact@buu.ro',
      subject: `🚀 Cerere Demo SAMpro - ${serviceName}`,
      text: `
Solicitare Demo SAMpro

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service Auto: ${serviceName}
Persoană de Contact: ${contactName}
Telefon: ${phone}
Oraș/Județ: ${city || 'Nu specificat'}
Număr Elevatoare: ${hoists}
Pachet Selectat: ${selectedPlan}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acest email a fost generat automat din formularul de contact SAMpro.
Contactați clientul în maximum 15 minute pentru activarea demo-ului de 14 zile.

      `,
      html: `
<h2 style="color: #0066FF;">🚀 Cerere Demo SAMpro</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px 0;">
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service Auto:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceName}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Persoană de Contact:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${contactName}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Oraș/Județ:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${city || 'Nu specificat'}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Număr Elevatoare:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${hoists}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Pachet Selectat:</strong></td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${selectedPlan}</td>
  </tr>
</table>
<p style="color: #666; font-size: 12px;">
  Acest email a fost generat automat din formularul de contact SAMpro.<br>
  Contactați clientul în maximum 15 minute pentru activarea demo-ului de 14 zile.
</p>
      `
    };

    // Trimitere email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email trimis cu succes pentru ${serviceName} (${contactName})`);

    res.json({
      success: true,
      message: 'Email trimis cu succes'
    });

  } catch (error) {
    console.error('❌ Eroare la trimiterea emailului:', error);
    res.status(500).json({
      success: false,
      message: 'Eroare la trimiterea emailului',
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SAMpro API Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 SAMpro API Server running on port ${PORT}`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`);
});
