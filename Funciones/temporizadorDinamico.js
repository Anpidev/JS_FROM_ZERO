function esperarYSaludar(nombre, tiempo) {

    return setTimeout(() => console.log("Hola "+nombre), tiempo);
}

//Prueba

esperarYSaludar("Angela",3000);