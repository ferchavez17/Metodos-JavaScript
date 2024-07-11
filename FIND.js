// Array de marcadores clave en las ruinas antiguas
let marcadores = ['Estatua de piedra', 'Escritura antigua', 'Puerta dorada', 'Reloj de sol'];

// Función para buscar el marcador que señala la ubicación de la reliquia
function esMarcadorReliquia(marcador) {
    return marcador === 'Puerta dorada';
}

// Encontrando el marcador que señala la ubicación de la reliquia utilizando el método find
let marcadorReliquia = marcadores.find(esMarcadorReliquia);

// Verificando si se encontró el marcador y mostrando el resultado en la consola
if (marcadorReliquia) {
    console.log('hemos encontrado el marcador que señala la ubicación de la reliquia perdida:');
    console.log(`${marcadorReliquia}`);
} else {
    console.log('No hemos encontrado el marcador que señala la ubicación de la reliquia perdida.');
}
