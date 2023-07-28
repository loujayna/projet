document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre automatiquement

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vous pouvez ajouter ici la logique pour gérer l'inscription, par exemple envoyer les données à votre serveur

    alert(`Inscription réussie !\n\nAdresse e-mail : ${email}\nMot de passe : ${password}`);
});