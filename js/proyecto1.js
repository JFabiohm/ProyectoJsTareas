document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    messageElement.textContent = '';

    if (email === '' || password === '') {
        messageElement.textContent = 'Por favor, complete todos los campos.';
        messageElement.style.color = 'red';
        return;
    }

    

    
    let users = JSON.parse(localStorage.getItem('user')) || [];

   
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Inicio de sesión exitoso.");

        setTimeout(() => {
            window.location.href = 'index3.html'; 
        }, 1000); 
    } else {
        messageElement.textContent = 'Usuario o contraseña incorrectos.';
        messageElement.style.color = 'red';
    }
});