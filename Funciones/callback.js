/*
Callback: Es una función pasada como argumento que se ejecuta después de que se termine una tarea.

*/

//Callback
function hacerPeticion(callback) {
    // Simulamos hacer una petición que tarda 2 segundos
    setTimeout(() => {
        console.log("Petición completada.");
        callback("Datos recibidos");
    }, 2000);
}

hacerPeticion((resultado) => {
    console.log("Resultado:", resultado); // Callback que recibe los datos
});

//CALLBACK 2
function leerArchivo(nombreArchivo, callback) {
    console.log(`Leyendo el archivo: ${nombreArchivo}...`);
    
    // Simulamos un retraso en la lectura del archivo (como si estuviera en un servidor o disco duro)
    setTimeout(() => {
        const datos = `Contenido del archivo ${nombreArchivo}`;
        console.log("Lectura del archivo terminada.");
        
        // Llamamos al callback con los datos leídos
        callback(datos);
    }, 3000);
}

// Usamos el callback para procesar los datos una vez que la lectura se haya completado
leerArchivo("miArchivo.txt", (contenido) => {
    console.log("Contenido del archivo:", contenido);
});
