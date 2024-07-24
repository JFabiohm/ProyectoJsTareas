const correo = document.getElementById("correo")
const contraseña = document.getElementById("contra")
const guardar = document.getElementById("guardar")
const contenedor = document.getElementById("contenedor")

guardar.addEventListener("click", function () {
    let correoA = correo.value
    let contraseñaA = contraseña.value

    contenedor.appendChild(correoA)
    contenedor.appendChild(contraseñaA)
    
})


