// Array de artefactos antiguos encontrados en la caverna secreta
let artefactosAntiguos = ['Vasija de barro', 'Estatua de oro', 'Collar de jade', 'Tabla de arcilla', 'Amuleto de plata'];

console.log('Artefactos antiguos encontrados:');
console.log(artefactosAntiguos);

// Utilizando el método splice para extraer un artefacto de la colección
let artefactoExtraido = artefactosAntiguos.splice(2, 1)[0];

console.log('¡Has extraído el siguiente artefacto de la colección:');
console.log(artefactoExtraido);

console.log('Artefactos antiguos restantes:');
console.log(artefactosAntiguos);
