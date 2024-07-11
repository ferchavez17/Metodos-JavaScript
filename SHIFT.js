// Array de reliquias encontradas en el templo
let reliquias = ['Amuleto dorado', 'Esfera de cristal', 'Collar de perlas', 'Libro antiguo'];

// Utilizando el método shift para sacar la primera reliquia de la mochila
let reliquiaExtraida = reliquias.shift();

console.log(`Has sacado del templo la reliquia: ${reliquiaExtraida}`);
console.log('Las reliquias restantes en tu mochila son:');
console.log(reliquias);