// Arreglo de cofres con monedas de oro en diferentes cantidades
let cofres = [
    [100, 50, 200],
    [75, 120],
    [150, 80, 100, 50]
];

// Utilizando el método flat para aplanar la estructura de datos de los cofres
let todasLasMonedasDeOro = cofres.flat();

// Calculando el total de monedas de oro encontradas en todos los cofres---> método reduce
let totalMonedasDeOro = todasLasMonedasDeOro.reduce((total, monedas) => total + monedas, 0);

// Mostrando el total de monedas de oro encontradas en la consola
console.log('Durante la exploración en la isla misteriosa, ha encontrado un total de:');
console.log(`${totalMonedasDeOro} monedas de oro`);
