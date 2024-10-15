document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    // Lista de usuarios y contraseñas válidas
    const validUsers = [
        { username: 'subsecretario general adjunto', password: 'secretario2020' },
        { username: 'director interino', password: 'paradox' },
        { username: 'director asistente', password: 'omega' },
        { username: 'nexus-alpha', password: 'nexusteam' }
    ];

    // Verificar si las credenciales coinciden con alguno de los usuarios válidos
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirige a otra página si las credenciales son correctas
        window.location.href = "altomando.html";
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        error.textContent = "Nombre de usuario o contraseña incorrectos.";
        error.style.display = "block";
    }
});
