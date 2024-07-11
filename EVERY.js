// Array de características que debe cumplir la planta deseada
let caracteristicasDeseadas = ['Hoja grande', 'Flores amarillas', 'Tallo grueso', 'Raíz profunda'];

// Array de plantas encontradas en la selva
let plantasEncontradas = [
    { nombre: 'Planta A', caracteristicas: ['Hoja grande', 'Flores amarillas', 'Tallo grueso'] },
    { nombre: 'Planta B', caracteristicas: ['Flores amarillas', 'Raíz profunda'] },
    { nombre: 'Planta C', caracteristicas: ['Hoja grande', 'Tallo grueso', 'Raíz profunda'] }
];

// Función para verificar si una planta cumple con todas las características deseadas
function cumpleCaracteristicasDeseadas(planta) {
    return caracteristicasDeseadas.every(caracteristica => planta.caracteristicas.includes(caracteristica));
}

// Verificando si todas las plantas cumplen con las características deseadas utilizando el método every
if (plantasEncontradas.every(cumpleCaracteristicasDeseadas)) {
    console.log('todas las plantas cumplen con las características de la planta deseada:');
    plantasEncontradas.forEach(planta => {
        console.log(`- ${planta.nombre}`);
    });
} else {
    console.log('Algunas de las plantas no cumplen con todas las características deseadas.');
}

