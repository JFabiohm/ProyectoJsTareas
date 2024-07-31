const correo = document.getElementById("email");
const contraseña = document.getElementById("password");
const guardar = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const form = document.getElementById("loginForm");

guardar.addEventListener("click", function (event) {
    event.preventDefault(); 
    
    let correoA = correo.value.trim();
    let contraseñaA = contraseña.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correoA)) {
        alert("Por favor, ingresa un correo electrónico válido con @.");
        return;
    }

   
    if (correoA === "" || contraseñaA === "") {
        alert("Por favor completa todos los campos");
        return;
    }
    
    const user = JSON.parse(localStorage.getItem("user")) || [];

    if (correoA === "" || contraseñaA === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    const userCreate = user.some(function (user) {
        return user.email === correoA;
    });

    if (userCreate) {
        alert("El correo ya está registrado");
        return;
    }

    const userdata = {
        email: correoA,
        password: contraseñaA
    };

    user.push(userdata);
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registro exitoso");
    form.reset(); 
    
    window.location.href = "index.html";
});
