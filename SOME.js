// Array de sospechosos en el caso de robo
let sospechosos = ['Ladrón experto', 'Amante del arte', 'Empleado del museo', 'Forastero sospechoso'];

// Función para verificar si un sospechoso estuvo presente en la escena del crimen
function estuvoPresente(sospechoso) {
    let posiblesEvidencias = ['Huellas dactilares', 'Casquillo de bala', 'Fotografía comprometedora'];

    // Simulación de comprobación de evidencias en la escena del crimen
    return posiblesEvidencias.some(evidencia => evidencia.includes(sospechoso));
}

// Verificando si alguno de los sospechosos estuvo presente en la escena del crimen utilizando el método some
if (sospechosos.some(estuvoPresente)) {
    console.log('Hemos encontrado indicios que vinculan a uno de los sospechosos con el robo:');
    console.log(`¡Hay un sospechoso que estuvo presente en la escena del crimen!`);
} else {
    console.log('No se encontraron evidencias que vinculen a los sospechosos con el robo.');
}