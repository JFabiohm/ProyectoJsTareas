const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const prioridadSelect = document.getElementById("Prioridad");

function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.sort((a, b) => a.prioridad - b.prioridad);
    tareasGuardadas.forEach(tarea => {
        agregarTareaDOM(tarea.texto, tarea.id, tarea.prioridad);
    });
}

function prioridadTexto(prioridad) {
    switch (prioridad) {
        case 1:
            return "Difícil";
        case 2:
            return "Media";
        case 3:
            return "Fácil";
        default:
            return "Sin prioridad";
    }
}

function agregarTareaDOM(texto, id, prioridad) {
    let pTarea = document.createElement("p");
    pTarea.textContent = `${texto} - Prioridad: ${prioridadTexto(prioridad)}`;
    pTarea.className = "parrafoT";
    pTarea.dataset.id = id; 

    let bTarea = document.createElement("button");
    bTarea.textContent = "Eliminar";
    bTarea.className = "btnEliminar";

    let b2Tarea = document.createElement("button");
    b2Tarea.textContent = "Editar";
    b2Tarea.className = "btnEditar";

    contenedorTareas.appendChild(pTarea);
    contenedorTareas.appendChild(b2Tarea);
    contenedorTareas.appendChild(bTarea);

    bTarea.addEventListener("click", function() {
        eliminarTarea(id, pTarea, bTarea, b2Tarea);
    });

    b2Tarea.addEventListener("click", function() {
        let editar = prompt("Edita el nuevo texto:");
        if (editar !== null && editar.trim() !== "") {
            pTarea.textContent = `${editar} - Prioridad: ${prioridadTexto(prioridad)}`;
            actualizarTarea(id, editar);
        }
    });
}

function agregarTareaLocalStorage(texto, id, prioridad) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.push({ texto, id, prioridad });
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
}

function actualizarTarea(id, nuevoTexto) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const tareasActualizadas = tareasGuardadas.map(tarea => 
        tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
    );
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
}

function eliminarTarea(id, ...elementos) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const tareasActualizadas = tareasGuardadas.filter(tarea => tarea.id !== id);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));

    elementos.forEach(elemento => contenedorTareas.removeChild(elemento));
}

document.addEventListener('DOMContentLoaded', cargarTareas);

agregar.addEventListener("click", function() {
    let tareaF = tarea.value;
    let prioridad = parseInt(prioridadSelect.value);
    if (!tareaF.trim()) {
        alert("Por favor, ingresa un texto para la tarea.");
        return;
    }

    if (isNaN(prioridad)) {
        alert("Por favor, selecciona una prioridad.");
        return;
    }

    const id = Date.now();
    agregarTareaDOM(tareaF, id, prioridad);
    agregarTareaLocalStorage(tareaF, id, prioridad);

    tarea.value = "";
});

const tarea1 = document.getElementById("tarea2");
const fecha1 = document.getElementById("fecha2");
const agregar1 = document.getElementById("agregar2");
const contenedorTareas1 = document.getElementById("contenedorTareas2");

function cargarEventos() {
    const eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    eventosGuardados.forEach(evento => {
        agregarEventoDOM(evento.texto, evento.id, evento.fecha);
    });
}

function agregarEventoDOM(texto, id, fecha) {
    let pTarea1 = document.createElement("p");
    pTarea1.textContent = `${texto} - Fecha: ${fecha}`;
    pTarea1.className = "parrafoT1";
    pTarea1.dataset.id = id; 

    let bTarea1 = document.createElement("button");
    bTarea1.textContent = "Eliminar";
    bTarea1.className = "btnEliminar1";

    let b2Tarea1 = document.createElement("button");
    b2Tarea1.textContent = "Editar";
    b2Tarea1.className = "btnEditar1";

    contenedorTareas1.appendChild(pTarea1);
    contenedorTareas1.appendChild(b2Tarea1);
    contenedorTareas1.appendChild(bTarea1);

    bTarea1.addEventListener("click", function() {
        eliminarEvento(id, pTarea1, bTarea1, b2Tarea1);
    });

    b2Tarea1.addEventListener("click", function() {
        let editar1 = prompt("Edita el nuevo texto:");
        if (editar1 !== null && editar1.trim() !== "") {
            pTarea1.textContent = `${editar1} - Fecha: ${fecha}`;
            actualizarEvento(id, editar1, fecha);
        }
    });
}

function agregarEventoLocalStorage(texto, id, fecha) {
    const eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    eventosGuardados.push({ texto, id, fecha });
    localStorage.setItem('eventos', JSON.stringify(eventosGuardados));
}

function actualizarEvento(id, nuevoTexto, fecha) {
    const eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    const eventosActualizados = eventosGuardados.map(evento => 
        evento.id === id ? { ...evento, texto: nuevoTexto, fecha } : evento
    );
    localStorage.setItem('eventos', JSON.stringify(eventosActualizados));
}

function eliminarEvento(id, ...elementos) {
    const eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    const eventosActualizados = eventosGuardados.filter(evento => evento.id !== id);
    localStorage.setItem('eventos', JSON.stringify(eventosActualizados));

    elementos.forEach(elemento => contenedorTareas1.removeChild(elemento));
}

document.addEventListener('DOMContentLoaded', cargarEventos);

agregar1.addEventListener("click", function() {
    let tareaF1 = tarea1.value;
    let fechaF1 = fecha1.value;
    if (!tareaF1.trim()) {
        alert("Por favor, ingresa una descripción para el evento.");
        return;
    }

    if (!fechaF1) {
        alert("Por favor, selecciona una fecha.");
        return;
    }

    const id = Date.now();
    agregarEventoDOM(tareaF1, id, fechaF1);
    agregarEventoLocalStorage(tareaF1, id, fechaF1);

    tarea1.value = "";
    fecha1.value = "";
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    
    evt.currentTarget.className += " active";
}


