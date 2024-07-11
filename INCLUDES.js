// Array de marcas distintivas en la cueva antigua
let marcas = ['Pintura rupestre', 'Jeroglífico antiguo', 'Colgante de oro', 'Llave de plata'];

// Marca a buscar para confirmar la presencia del tesoro
let marcaTesoro = 'Jeroglífico antiguo';

// Verificando si la marca distintiva del tesoro está presente utilizando el método includes
if (marcas.includes(marcaTesoro)) {
    console.log('Se ha encontrado la marca distintiva que confirma la presencia del tesoro:');
    console.log(`${marcaTesoro}`);
} else {
    console.log('No se ha encontrado la marca distintiva que confirme la presencia del tesoro en la cueva antigua.');
}
