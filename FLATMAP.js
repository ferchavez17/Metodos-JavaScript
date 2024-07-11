// Arreglo de plantas recolectadas, cada una con una combinación de ingredientes para pociones
let plantasRecolectadas = [
    ['Raíz de Mandrágora', 'Pétalos de Lirio'],
    ['Hojas de Menta', 'Espinilla de Sapo', 'Escamas de Dragón'],
    ['Bayas de Saúco', 'Champiñones Lunares', 'Escarcha de Hada']
];

// Utilizando el método flatMap para extraer y combinar los ingredientes de las plantas recolectadas
let ingredientesParaPociones = plantasRecolectadas.flatMap(planta => planta);

// Mostrando los ingredientes clave extraídos de las plantas en la consola
console.log('Durante mis expediciones en los bosques encantados, he recolectado los siguientes ingredientes para mis pociones:');
ingredientesParaPociones.forEach(ingrediente => {
    console.log(`${ingrediente}`);
});
