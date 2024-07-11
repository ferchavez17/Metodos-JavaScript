// Array de abrigos de la colección
let abrigos = ['Abrigo de lana', 'Abrigo de cuero', 'Abrigo de tweed'];

// Nuevo abrigo que quieres agregar a la colección
let nuevoAbrigo = 'Abrigo de terciopelo';

// Utilizando el método unshift para agregar el nuevo abrigo al principio de la colección
abrigos.unshift(nuevoAbrigo);

console.log(`Has agregado a la colección el nuevo abrigo: ${nuevoAbrigo}`);
console.log('Los abrigos de la colección son ahora:');
console.log(abrigos);