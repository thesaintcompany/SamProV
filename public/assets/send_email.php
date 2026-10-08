<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configurare email
$to = "contact@buu.ro";
$subject = "🚀 Cerere Demo SAMpro - Nouă Solicitare";

// Preia datele din POST
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Nu s-au primit date']);
    exit;
}

// Extrage datele
$serviceName = isset($data['serviceName']) ? trim($data['serviceName']) : '';
$contactName = isset($data['contactName']) ? trim($data['contactName']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$city = isset($data['city']) ? trim($data['city']) : 'Nu specificat';
$hoists = isset($data['hoists']) ? trim($data['hoists']) : 'Nu specificat';
$selectedPlan = isset($data['selectedPlan']) ? trim($data['selectedPlan']) : 'Nespecificat';

// Validare
if (empty($serviceName) || empty($contactName) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'Completează toate câmpurile obligatorii']);
    exit;
}

// Construiește emailul
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@buu.ro\r\n";
$headers .= "Reply-To: contact@buu.ro\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Template HTML pentru email
$htmlMessage = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cerere Demo SAMpro</title>
    <style>
        body { font-family: "Segoe UI", Arial, sans-serif; background: #020b1b; color: #f8fafc; padding: 40px 20px; margin: 0; }
        .container { max-width: 600px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px; }
        .logo { font-size: 32px; font-weight: 800; background: linear-gradient(135deg, #0066FF, #00D2FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0 0 8px; }
        .subtitle { font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #475569; margin: 0 0 24px; }
        h2 { font-size: 22px; font-weight: 700; color: #f8fafc; margin: 0 0 4px; }
        .desc { color: #94a3b8; font-size: 14px; margin: 0 0 24px; }
        .info-box { background: rgba(255,255,255,0.03); border-radius: 16px; padding: 24px; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; display: block; margin-bottom: 4px; }
        .value { font-size: 16px; font-weight: 600; color: #f8fafc; margin: 0 0 16px; }
        .footer { margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; }
        .footer a { color: #0066FF; text-decoration: none; font-size: 13px; }
        .badge { display: inline-block; background: #0066FF; color: white; font-size: 10px; font-weight: 700; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
        .divider { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 16px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">SAMpro</div>
        <div class="subtitle">Service Auto Management Pro</div>

        <div class="badge">🚀 Cerere Demo 14 Zile</div>
        <h2>Solicitare de la ' . htmlspecialchars($contactName) . '</h2>
        <p class="desc">Ai primit o cerere de demo pentru SAMpro.</p>

        <div class="info-box">
            <span class="label">🏢 Service Auto</span>
            <p class="value">' . htmlspecialchars($serviceName) . '</p>

            <span class="label">👤 Persoană de Contact</span>
            <p class="value">' . htmlspecialchars($contactName) . '</p>

            <span class="label">📱 Telefon</span>
            <p class="value"><a href="tel:' . htmlspecialchars($phone) . '" style="color:#0066FF;text-decoration:none;">' . htmlspecialchars($phone) . '</a></p>

            <span class="label">📍 Oraș/Județ</span>
            <p class="value">' . htmlspecialchars($city) . '</p>

            <span class="label">🔧 Număr Elevatoare</span>
            <p class="value">' . htmlspecialchars($hoists) . '</p>

            <span class="label">📦 Pachet Selectat</span>
            <p class="value">' . htmlspecialchars($selectedPlan) . '</p>
        </div>

        <div class="footer">
            <p style="color:#64748b;font-size:12px;margin:0 0 8px;">📌 Contactează clientul în maximum 15 minute pentru activarea demo-ului</p>
            <a href="mailto:contact@buu.ro">✉️ contact@buu.ro</a>
        </div>
    </div>
</body>
</html>';

// Trimite email
$sent = mail($to, $subject, $htmlMessage, $headers);

if ($sent) {
    // Salvează în fișier log (opțional)
    $log = date('Y-m-d H:i:s') . " - $serviceName - $contactName - $phone - $city - Elevatoare: $hoists - Pachet: $selectedPlan\n";
    file_put_contents('sampro_contacte.log', $log, FILE_APPEND);

    echo json_encode(['success' => true, 'message' => 'Email trimis cu succes!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Eroare la trimiterea emailului']);
}
?>
