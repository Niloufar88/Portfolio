

<?php
// 1. Prüfen, ob das Formular überhaupt per POST abgeschickt wurde
$requestMethod = $_SERVER["REQUEST_METHOD"] ?? "POST"; 

if ($requestMethod == "POST") {

    // 2. Die Daten aus dem HTML-Formular abfangen
    // Fix: We add ?? '' to prevent warnings if the fields are empty during tests
    $name = $_POST['absender_name'] ?? 'Test Name';
    $email = $_POST['absender_email'] ?? 'test@example.com';
    $nachricht = $_POST['absender_message'] ?? 'Test Message';

    // 3. Einstellungen für deine E-Mail
    $empfaenger = "niloufar88@hotmail.com"; // HIER DEINE ECHTE E-MAIL EINTRAGEN
    $betreff = "Neue Portfolio-Nachricht von " . $name;
    
    // 4. Den Inhalt der E-Mail zusammenbauen
    $email_inhalt = "Du hast eine neue Nachricht erhalten:\n\n";
    $email_inhalt .= "Name: " . $name . "\n";
    $email_inhalt .= "E-Mail: " . $email . "\n\n";
    $email_inhalt .= "Nachricht:\n" . $nachricht . "\n";

    // 5. E-Mail-Header setzen (damit du direkt auf die E-Mail des Absenders antworten kannst)
    $header = "From: " . $email . "\r\n" .
              "Reply-To: " . $email . "\r\n" .
              "X-Mailer: PHP/" . phpversion();

    // 6. Die E-Mail absenden mit der eingebauten mail() Funktion
    if (mail($empfaenger, $betreff, $email_inhalt, $header)) {
        // Wenn es klappt, zeigen wir eine Erfolgsmeldung
        echo "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.";
    } else {
        // Falls der Server einen Fehler hat
        echo "Mensch! Da ist etwas schiefgelaufen. Bitte versuche es später noch einmal.";
    }
} else {
    // Falls jemand versucht, die senden.php direkt im Browser aufzurufen
    echo "Zugriff verweigert.";
}
?>