// Datos de las criaturas mágicas del bosque encantado
let criaturas = [
    { nombre: 'Fauno', tamaño: 'pequeño' },
    { nombre: 'Dragón', tamaño: 'grande' },
    { nombre: 'Unicornio', tamaño: 'mediano' },
    { nombre: 'Ogro', tamaño: 'grande' },
    { nombre: 'Sirena', tamaño: 'pequeño' }
];

// Utilizando el método filter para seleccionar las criaturas grandes
let criaturasGrandes = criaturas.filter(criatura => criatura.tamaño === 'grande');

// Mostrando las criaturas grandes en la consola
criaturasGrandes.forEach(criatura => {
    console.log(`¡Encontré a un ${criatura.nombre} de tamaño grande en el bosque encantado!`);
});
