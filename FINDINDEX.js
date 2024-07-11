// Lista de posibles ladrones en el caso del robo en la mansión
let posiblesLadrones = ['Señor Lápiz', 'Señorita Pluma', 'Doctor Tijeras', 'Señora Papel'];

// Función para verificar si un sospechoso es el culpable
function esCulpable(sospechoso) {
    return sospechoso === 'Doctor Tijeras';
}

// Encontrando la posición del culpable utilizando el método findIndex
let indiceCulpable = posiblesLadrones.findIndex(esCulpable);

// Verificando si se encontró al culpable y mostrando el resultado en la consola
if (indiceCulpable !== -1) {
    console.log('he encontrado al culpable del robo en la mansión:');
    console.log(`${posiblesLadrones[indiceCulpable]}`);
} else {
    console.log('No he encontrado al culpable del robo entre los posibles ladrones.');
}
