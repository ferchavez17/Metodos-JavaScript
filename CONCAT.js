// Listas de piezas del antiguo artefacto mágico encontradas en diferentes ubicaciones
let piezasEnLaSelva = ['Esfera de la Luna', 'Colmillo de Dragón'];
let piezasEnLaMontaña = ['Flecha de la Aurora', 'Corona Estelar'];
let piezasEnElDesierto = ['Lágrima de Fénix', 'Guantelete Solar'];

// Utilizando el método concat para fusionar las listas de piezas encontradas
let todasLasPiezasEncontradas = piezasEnLaSelva.concat(piezasEnLaMontaña, piezasEnElDesierto);

// Mostrando todas las piezas encontradas en la consola
console.log('Durante mi aventura, encontre las siguientes piezas del antiguo artefacto mágico:');
todasLasPiezasEncontradas.forEach(pieza => {
    console.log(`${pieza}`);
});
