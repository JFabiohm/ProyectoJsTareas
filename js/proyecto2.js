const correo = document.getElementById("email");
const contraseña = document.getElementById("password");
const guardar = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const form = document.getElementById("loginForm");

guardar.addEventListener("click", function (event) {
    event.preventDefault();  // Previene el comportamiento por defecto del botón de submit
    
    let correoA = correo.value.trim();
    let contraseñaA = contraseña.value.trim();
    
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
    form.reset();  // Método corregido para resetear el formulario
});
