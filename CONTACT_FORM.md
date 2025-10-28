# Kontaktní formulář / Contact Form

## Funkčnost / Functionality

Kontaktní formulář používá `mailto:` protokol pro odesílání zpráv. Když uživatel vyplní formulář a odešle ho, otevře se jeho výchozí emailový klient s předvyplněnými údaji.

The contact form uses the `mailto:` protocol to send messages. When a user fills out the form and submits it, their default email client opens with pre-filled data.

## Jak to funguje / How It Works

1. Uživatel vyplní formulář (jméno, email, telefon, předmět, zpráva)
2. Po kliknutí na "Odeslat zprávu" se otevře emailový klient
3. Email je odeslán na: info@lura-it.eu

## Validace / Validation

- Povinná pole: Jméno, Email, Předmět, Zpráva
- Email je validován pomocí regex
- Telefonní číslo je volitelné

## Pro budoucí vylepšení / For Future Improvements

Pokud chcete implementovat backend pro odesílání emailů bez otevírání emailového klienta, můžete použít:

If you want to implement a backend for sending emails without opening an email client, you can use:

- PHP s `mail()` funkcí
- Node.js s nodemailer
- SendGrid / Mailgun API
- EmailJS (client-side service)
- Serverless funkce (AWS Lambda, Azure Functions, Netlify Functions)

## Příklad implementace s EmailJS

```javascript
// Přidejte do HTML:
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// V JS souboru:
emailjs.init("YOUR_PUBLIC_KEY");

$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: $('#name').val(),
        from_email: $('#email').val(),
        phone: $('#phone').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
    }).then(function(response) {
        showFormStatus('Zpráva byla úspěšně odeslána!', 'success');
    }, function(error) {
        showFormStatus('Chyba při odesílání zprávy.', 'error');
    });
});
```
