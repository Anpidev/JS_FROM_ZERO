//Función de Orden Superior: Crea una función llamada filtrarPares que tome un array de números y devuelva un nuevo array solo con los números pares.

    function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
    }

    // Ejemplo de uso
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
    const arrayPares = filtrarPares(arrayNumeros);
    console.log(arrayPares); // Imprime: [2, 4, 6, 8]

//Función Recursiva: Crea una función recursiva llamada sumarNumeros que reciba un número n y devuelva la suma de todos los números desde 1 hasta n.
    function sumarNumeros(n) {
    // Caso base: si n es 1, devolvemos 1
    if (n === 1) {
        return 1;
    }
    // Llamada recursiva: sumamos n con la suma de los números de 1 a n-1
    return n + sumarNumeros(n - 1);
    }

    // Prueba de la función
    console.log(sumarNumeros(5)); // Imprime: 15 (1 + 2 + 3 + 4 + 5)
    console.log(sumarNumeros(10)); // Imprime: 55 (1 + 2 + ... + 10)


//Funciones Anónimas: Usa una función anónima dentro de un setTimeout para imprimir un mensaje después de 3 segundos.

setTimeout(function () {
    console.log("Han pasado 3 segundos. ¡Hola desde una función anónima!");
}, 3000);
/*setTimeout(() => {
    console.log("Han pasado 3 segundos. ¡Hola desde una función flecha!");
}, 3000);
*/

