/*Escribe una función de orden superior loop que proporcione algo similar a una declaración for loop. 
Debería recibir un valor, una función de prueba, una función de actualización y una función de cuerpo. 
En cada iteración, primero debe ejecutar la función de prueba en el valor actual del bucle y detenerse 
si devuelve falso. Luego debe llamar a la función de cuerpo, dándole el valor actual, y 
finalmente llamar a la función de actualización para crear un nuevo valor y 
empezar de nuevo desde el principio.

Al definir la función, puedes usar un bucle regular para hacer el bucle real.

*/

function loop(valorInicial, prueba, actualizacion, cuerpo) {
    for (let valor = valorInicial; prueba(valor); valor = actualizacion(valor)) {
        cuerpo(valor);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);