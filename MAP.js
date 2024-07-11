// Datos de transformaciones de habitantes del reino
let habitantes = [
    { nombre: 'Elena', forma: 'Dragón', nivelPoder: 95 },
    { nombre: 'Lucas', forma: 'Fénix', nivelPoder: 88 },
    { nombre: 'Isabel', forma: 'Licántropo', nivelPoder: 75 }
];

// Utilizando el método map para crear un nuevo mapa de transformaciones con niveles de poder
let transformaciones = habitantes.map(habitante => {
    return {
        nombre: habitante.nombre,
        transformacion: `Se transforma en un ${habitante.forma}`,
        poder: habitante.nivelPoder
    };
});

// Mostrando las transformaciones en la consola
transformaciones.forEach(transformacion => {
    console.log(`${transformacion.nombre}: ${transformacion.transformacion} - Nivel de Poder: ${transformacion.poder}`);
});
