document.getElementById('submitBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vous pouvez ajouter ici la logique pour gérer l'inscription, par exemple envoyer les données à votre serveur

    alert(`Inscription réussie !\n\nAdresse e-mail : ${email}\nMot de passe : ${password}`);
});
