/*1. Función que devuelve el cubo de un número:
Crea una función llamada cubo que reciba un número como parámetro y devuelva su cubo (el número elevado a 3).

Ejemplo:

cubo(3); // Debería devolver 27*/

function cubo(numero) {
    return Math.pow(numero,3);
};

console.log(cubo(3));


/*
2. Función que devuelve la longitud de un string:
Crea una función llamada longitud que reciba un string como parámetro y devuelva la longitud del string.

Ejemplo:
longitud("Hola Mundo"); // Debería devolver 10
*/

function longitud(frase) {
    return frase.length;
};

console.log(longitud("Hola mundo"));
/*
3. Sumar todos los elementos de un array:
Crea una función llamada sumarArray que reciba un array de números y devuelva la suma de todos los números del array.

Ejemplo:
sumarArray([1, 2, 3, 4, 5]); // Debería devolver 15
*/
function sumarArray(array) {
    return array.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(sumarArray([1, 2, 3, 4, 5])); // Debería devolver 15

/*
4. Buscar un valor dentro de un array:
Crea una función llamada buscarValor que reciba un array y un valor a buscar, y devuelva true si el valor se encuentra en el array o false si no lo está.

Ejemplo:
buscarValor([1, 2, 3, 4], 3); // Debería devolver true
buscarValor([1, 2, 3, 4], 5); // Debería devolver false
*/

function buscarValor(array, valor) {
    return array.includes(valor); // Usamos el método `includes` para verificar si el valor está en el array
}

// Ejemplos de uso
console.log(buscarValor([1, 2, 3, 4], 3)); // Debería devolver true
console.log(buscarValor([1, 2, 3, 4], 5)); // Debería devolver false


/*
5. Función que convierte una cadena de texto a mayúsculas:
Crea una función llamada convertirAMayusculas que reciba un string y lo convierta a mayúsculas.

Ejemplo:
convertirAMayusculas("hola"); // Debería devolver "HOLA"
*/
function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
};

console.log(convertirAMayusculas("hola"));
/*
6. Contar cuántas veces aparece un valor en un array:
Crea una función llamada contarValor que reciba un array y un valor y devuelva cuántas veces aparece ese valor en el array.

Ejemplo:
contarValor([1, 2, 3, 1, 4, 1], 1); // Debería devolver 3
*/
function contarValor(array, valor) {
    let contador = 0;
    for (const elemento of array) {
        if (elemento === valor) {
            contador++; 
        }
    }
    return contador;
};

console.log(contarValor([1, 2, 3, 1, 4, 1], 1));

/*
7. Función que determina si un número es par o impar:
Crea una función llamada esPar que reciba un número y devuelva true si el número es par, o false si es impar.

Ejemplo:
esPar(4); // Debería devolver true
esPar(5); // Debería devolver false
*/
function esPar(numero) {
    return numero % 2 === 0;
};
console.log(esPar(4));
console.log(esPar(5));

/*
8. Función que elimina los elementos duplicados de un array:
Crea una función llamada eliminarDuplicados que reciba un array con elementos duplicados y devuelva un nuevo array sin los duplicados.

Ejemplo:
eliminarDuplicados([1, 2, 3, 3, 4, 5, 1]); // Debería devolver [1, 2, 3, 4, 5]
*/
function eliminarDuplicados1(array) {
    const resultado = [];
    for (const elemento of array) {
        if (!resultado.includes(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
//FORMA MAS FACIL CON SET
function eliminarDuplicados(array) {
    return [...new Set(array)];
}

// Prueba
console.log(eliminarDuplicados([1, 2, 3, 3, 4, 5, 1])); // Debería devolver [1, 2, 3, 4, 5]




/*
9. Función que convierte un número en su equivalente binario:
Crea una función llamada decimalABinario que reciba un número decimal y lo convierta a binario.

Ejemplo:
decimalABinario(10); // Debería devolver "1010"
*/
function decimalABinario1(numero) {
    let binario = "";
    while (numero > 0) {
        binario = (numero % 2) + binario; // Calcula el resto y lo agrega al inicio
        numero = Math.floor(numero / 2); // Divide el número entre 2
    }
    return binario || "0"; // Retorna "0" si el número inicial era 0
}

//FORMA MAS FACIL CON TOSTRING
function decimalABinario(numero) {
    let binario = numero.toString(2); // Convierte el número a binario.
    return binario || "0";            // Si el número es 0, el resultado es "0".
}
// Prueba
console.log(decimalABinario(10)); // Debería devolver "1010"
console.log(decimalABinario(0));  // Debería devolver "0"
/*
10. Función que imprime los primeros n números Fibonacci:
Crea una función llamada fibonacci que reciba un número n y devuelva los primeros n números de la secuencia de Fibonacci.

Ejemplo:
fibonacci(5); // Debería devolver [0, 1, 1, 2, 3]
*/
function fibonacci(n) {
    if (n <= 0) return []; // Si n es menor o igual a 0, devolvemos un array vacío.
    if (n === 1) return [0]; // Si n es 1, devolvemos solo el primer número de la secuencia.

    let fib = [0, 1]; // Inicializamos el array con los dos primeros números de Fibonacci.
    
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); // Cada número es la suma de los dos anteriores.
    }
    
    return fib;
}

// Pruebas:
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(1)); // [0]
console.log(fibonacci(0)); // []
