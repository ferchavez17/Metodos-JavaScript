// Definición de la formación defensiva para el castillo
let formacionDefensiva = new Array(5).fill([]);

// Llenar la formación defensiva con unidades militares
for (let i = 0; i < formacionDefensiva.length; i++) {
    formacionDefensiva[i] = new Array(5).fill('O'); // 'O' representa una unidad militar
}

// Mostrar la formación defensiva en la consola
formacionDefensiva.forEach(fila => {
    console.log(fila.join(' '));
});
