// Lista de mascotas
let mascotas = [];

// Función para registrar una nueva mascota
function registrarMascota() {
    const nombre = prompt("Ingrese el nombre de la mascota:");
    const especie = prompt("Ingrese la especie (Perro, Gato, etc.):");
    const edad = prompt("Ingrese la edad de la mascota:");
    const peso = prompt("Ingrese el peso de la mascota (kg):");
    const estadoSalud = prompt("Ingrese el estado de salud (Sano, Enfermo, En tratamiento):");

    const nuevaMascota = {
        nombre,
        especie,
        edad,
        peso,
        estadoSalud
    };

    // Simulamos un retraso en el registro
    setTimeout(() => {
        mascotas.push(nuevaMascota);
        alert(`Mascota ${nombre} registrada exitosamente.`);
    }, 1000); // 1 segundo de espera
}

// Función para listar todas las mascotas
function listarMascotas() {
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }

    let lista = "Mascotas registradas:\n";
    mascotas.forEach((mascota, index) => {
        lista += `${index + 1}. ${mascota.nombre} - ${mascota.especie} - Edad: ${mascota.edad} años - Peso: ${mascota.peso} kg - Estado de Salud: ${mascota.estadoSalud}\n`;
    });

    alert(lista);
}

// Función para buscar una mascota por nombre
function buscarMascota() {
    const nombreBusqueda = prompt("Ingrese el nombre de la mascota a buscar:");

    // Simulamos un retraso en la búsqueda
    setTimeout(() => {
        const mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

        if (mascotaEncontrada) {
            alert(`Mascota encontrada: ${mascotaEncontrada.nombre} - ${mascotaEncontrada.especie} - Edad: ${mascotaEncontrada.edad} años - Peso: ${mascotaEncontrada.peso} kg - Estado de Salud: ${mascotaEncontrada.estadoSalud}`);
        } else {
            alert("Mascota no encontrada.");
        }
    }, 1000); // 1 segundo de espera
}

// Función para actualizar el estado de salud de una mascota
function actualizarEstadoSalud() {
    const nombreMascota = prompt("Ingrese el nombre de la mascota cuya salud desea actualizar:");

    // Simulamos un retraso en la actualización
    setTimeout(() => {
        const mascota = mascotas.find(m => m.nombre.toLowerCase() === nombreMascota.toLowerCase());

        if (mascota) {
            const nuevoEstado = prompt("Ingrese el nuevo estado de salud (Sano, Enfermo, En tratamiento):");
            mascota.estadoSalud = nuevoEstado;
            alert(`Estado de salud de ${mascota.nombre} actualizado a: ${mascota.estadoSalud}`);
        } else {
            alert("Mascota no encontrada.");
        }
    }, 2000); // 2 segundos de espera
}

// Función para eliminar una mascota por nombre
function eliminarMascota() {
    const nombreMascota = prompt("Ingrese el nombre de la mascota a eliminar:");

    // Simulamos un retraso en la eliminación
    setTimeout(() => {
        const index = mascotas.findIndex(m => m.nombre.toLowerCase() === nombreMascota.toLowerCase());

        if (index !== -1) {
            mascotas.splice(index, 1);
            alert(`Mascota ${nombreMascota} eliminada exitosamente.`);
        } else {
            alert("Mascota no encontrada.");
        }
    }, 1500); // 1.5 segundos de espera
}

// Menú principal con opciones
function menu() {
    let opcion;
    do {
        opcion = prompt(`
            Menú:
            1. Registrar nueva mascota
            2. Listar todas las mascotas
            3. Buscar mascota por nombre
            4. Actualizar estado de salud de una mascota
            5. Eliminar mascota por nombre
            6. Salir
        `);

        switch (opcion) {
            case '1':
                registrarMascota();
                break;
            case '2':
                listarMascotas();
                break;
            case '3':
                buscarMascota();
                break;
            case '4':
                actualizarEstadoSalud();
                break;
            case '5':
                eliminarMascota();
                break;
            case '6':
                alert("¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Por favor, elija una opción del 1 al 6.");
                break;
        }
    } while (opcion !== '6');
}

// Iniciamos el menú al cargar la página si
menu();
