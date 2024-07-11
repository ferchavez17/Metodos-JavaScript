// Arreglo de pistas para encontrar el tesoro perdido en la isla misteriosa
let pistas = ['Siguiendo la estrella del norte', 'Bajo la sombra del cocotero', 'Donde el agua susurra secretos'];

// Buscando la pista que menciona la sombra del cocotero utilizando el método indexOf
let indicePista = pistas.indexOf('Bajo la sombra del cocotero');

// Verificando si se encontró la pista y mostrando el resultado en la consola
if (indicePista !== -1) {
    console.log('Después de descifrar las pistas, hemos encontrado la pista que menciona la sombra del cocotero:');
    console.log(`${pistas[indicePista]}`);
} else {
    console.log('No he encontrado la pista que menciona la sombra del cocotero en la búsqueda del tesoro.');
}
