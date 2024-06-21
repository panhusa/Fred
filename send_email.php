<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobierz i zabezpiecz dane z formularza
    $location = htmlspecialchars($_POST['location']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Sprawdź, czy adres e-mail ma poprawny format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        // Adres e-mail, na który wiadomość zostanie wysłana (zamień na rzeczywisty adres e-mail Freda)
        $to = 'gas.dawid@gmail.com';  // <-- Zamień na rzeczywisty adres e-mail Freda
        $subject = 'New Performance Notification Request';
        $message = "Location: $location\nEmail: $email";

        // Ustawienia nagłówków e-mail (zamień na rzeczywiste adresy e-mail)
        $headers = 'From: webmaster@example.com' . "\r\n" . // <-- Zamień na rzeczywisty adres nadawcy
                   'Reply-To: webmaster@example.com' . "\r\n" . // <-- Zamień na rzeczywisty adres do odpowiedzi
                   'X-Mailer: PHP/' . phpversion();

        // Wyślij e-mail i sprawdź, czy operacja się powiodła
        if (mail($to, $subject, $message, $headers)) {
            echo "Your request has been sent successfully.";
        } else {
            echo "There was a problem sending your request. Please try again.";
        }
    } else {
        echo "Invalid email format.";
    }
} else {
    echo "Invalid request method.";
}
?>