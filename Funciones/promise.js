/*Promesa: Representa una operación que puede completarse o fallar,
y proporciona métodos como .then() y .catch() para manejar su resultado de manera más limpia.
Una promesa puede tener tres estados posibles:

Pendiente (Pending): La promesa aún no se ha completado, es decir, la operación asíncrona aún está en progreso.
Resuelta (Fulfilled): La operación se completó con éxito y la promesa tiene un valor.
Rechazada (Rejected): La operación falló y la promesa tiene un motivo o error.
*/
let miPromesa = new Promise((resolve, reject) => {
    let exito = true;  // Cambia esto a false para ver cómo funciona el error
    
    setTimeout(() => {
        if (exito) {
            resolve("¡La operación fue exitosa!");
        } else {
            reject("Hubo un error.");
        }
    }, 2000);
});

// Manejo de la promesa con .then() y .catch()
miPromesa
    .then((resultado) => {
        console.log("Resultado:", resultado);  // Si la promesa es exitosa
    })
    .catch((error) => {
        console.error("Error:", error);  // Si la promesa es rechazada
    });


    //OTRO EJEMPLO DE PROMESA
    let promesa1 = new Promise((resolve) => {
        setTimeout(() => resolve("Primera tarea completada"), 1000);
    });
    
    let promesa2 = new Promise((resolve) => {
        setTimeout(() => resolve("Segunda tarea completada"), 2000);
    });
    
    promesa1
        .then((resultado1) => {
            console.log(resultado1);
            return promesa2;  // Retornamos la segunda promesa
        })
        .then((resultado2) => {
            console.log(resultado2);
        });
    