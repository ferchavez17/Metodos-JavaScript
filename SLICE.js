// Datos de las frutas exóticas en el mercado mágico
let frutas = ['Manzana', 'Plátano', 'Kiwi', 'Mango', 'Piña', 'Uva', 'Sandía', 'Fresa'];

// Utilizando el método slice para seleccionar solo algunas frutas del mercado
// Selecciona las frutas del índice 2 al 4 (no incluye la fruta en el índice 5)
let frutasSeleccionadas = frutas.slice(2, 5); 

// Mostrando las frutas seleccionadas en la consola
console.log('Hoy en el mercado mágico, he seleccionado las siguientes frutas:');
frutasSeleccionadas.forEach(fruta => {
    console.log(`${fruta}`);
});
