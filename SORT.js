// Lista de gemas recolectadas con su valor de rareza
let gemas = [
    { tipo: 'Rubí', rareza: 7 },
    { tipo: 'Zafiro', rareza: 5 },
    { tipo: 'Esmeralda', rareza: 9 },
    { tipo: 'Diamante', rareza: 10 },
    { tipo: 'Amatista', rareza: 3 }
];

// Ordenando las gemas por rareza de manera ascendente
gemas.sort((a, b) => a.rareza - b.rareza);

// Mostrando las gemas ordenadas por rareza
console.log(gemas);
