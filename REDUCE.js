// Array de gemas preciosas recolectadas en la travesía
let gemasPreciosas = [
    { tipo: 'diamante', valor: 1000 },
    { tipo: 'esmeralda', valor: 800 },
    { tipo: 'rubí', valor: 600 },
    { tipo: 'zafiro', valor: 500 }
];
// Calculando el valor total de todas las gemas con el método reduce
let valorTotal = gemasPreciosas.reduce((acumulador, gema) => acumulador + gema.valor, 0);

console.log('El valor total de todas las gemas preciosas recolectadas es:');
console.log(valorTotal);
