/*1. Función que devuelve el cubo de un número:
Crea una función llamada cubo que reciba un número como parámetro y devuelva su cubo (el número elevado a 3).
*/
function cuboMath(numero) {
    return Math.pow(numero,3)
}

function cubo(numero) {
    return numero **3;}

/*
2. Función que devuelve la longitud de un string:
Crea una función llamada longitud que reciba un string como parámetro y devuelva la longitud del string.

Ejemplo:
longitud("Hola Mundo"); // Debería devolver 10
*/
function longitudString(string) {
    return string.length;
}

/*
3. Sumar todos los elementos de un array:
Crea una función llamada sumarArray que reciba un array de números y devuelva la suma de todos los números del array.

Ejemplo:
sumarArray([1, 2, 3, 4, 5]); // Debería devolver 15
*/

function sumaArray(array) {
    let suma=0;
    array.forEach(element => {
        suma+=element
    });
    return suma
}

//VERSION USANDO REDUCE
function sumarArrayReduce(array) {
    return array.reduce((suma, elemento) => suma + elemento, 0);
}



/*
4. Buscar un valor dentro de un array:
Crea una función llamada buscarValor que reciba un array y un valor a buscar, y devuelva true si el valor se encuentra en el array o false si no lo está.

Ejemplo:
buscarValor([1, 2, 3, 4], 3); // Debería devolver true
buscarValor([1, 2, 3, 4], 5); // Debería devolver false
*/

function buscarValor(array,valor) {
    let encontrado=false;
    array.forEach(element => {
        if(element===valor) encontrado=true
    });
    return encontrado
}

//ALTERNATIVA CON INCLUDES
function buscarValorIncludes(array, valor) {
    return array.includes(valor);
}

/*
5. Función que convierte una cadena de texto a mayúsculas:
Crea una función llamada convertirAMayusculas que reciba un string y lo convierta a mayúsculas.

Ejemplo:
convertirAMayusculas("hola"); // Debería devolver "HOLA"
*/
function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}

/*
6. Contar cuántas veces aparece un valor en un array:
Crea una función llamada contarValor que reciba un array y un valor y devuelva cuántas veces aparece ese valor en el array.

Ejemplo:
contarValor([1, 2, 3, 1, 4, 1], 1); // Debería devolver 3
*/

function contarValor(array, valor) {
    let contador=0
    array.forEach(element => {
        if (element===valor) {
           contador++ 
        }
    });
    return contador
}
/*
7. Función que determina si un número es par o impar:
Crea una función llamada esPar que reciba un número y devuelva true si el número es par, o false si es impar.

Ejemplo:
esPar(4); // Debería devolver true
esPar(5); // Debería devolver false
*/
function esPar(numero) {
   return numero%2===0;
}

/*
8. Función que elimina los elementos duplicados de un array:
Crea una función llamada eliminarDuplicados que reciba un array con elementos duplicados y devuelva un nuevo array sin los duplicados.

Ejemplo:
eliminarDuplicados([1, 2, 3, 3, 4, 5, 1]); // Debería devolver [1, 2, 3, 4, 5]
*/

function eliminarDuplicados(array) {
    let resultado=[]
    array.forEach(element => {
        if(!resultado.includes(element))
            resultado.push(element)
    });
    return resultado
}

//FUNCION RAPIDA CON SET
/*... (spread operator):

El operador de expansión (...) toma los elementos del Set (que son iterables) y los "expande" en un nuevo array.*/
function eliminarDuplicadosSet(array) {
    return [...new Set(array)];  
}


/*
9. Función que convierte un número en su equivalente binario:
Crea una función llamada decimalABinario que reciba un número decimal y lo convierta a binario.

Ejemplo:
decimalABinario(10); // Debería devolver "1010"
*/

function decimalABinario(numero) {
    let resultado = '';
    while (numero > 0) {
        // Obtener el resto de la división entre 2
        resultado = (numero % 2) + resultado;
        // Dividir el número por 2
        numero = Math.floor(numero / 2);
    }
    return resultado || '0';  // Si el número es 0, devolver '0'
}

//FUNCION RAPIDA TOSTRING
function decimalBinarioString(numero) {
    return numero.toString(2);
}

/*
10. Función que imprime los primeros n números Fibonacci:
Crea una función llamada fibonacci que reciba un número n y devuelva los primeros n números de la secuencia de Fibonacci.

Ejemplo:
fibonacci(5); // Debería devolver [0, 1, 1, 2, 3]
*/

function fibonacci(n) {
    if (n <= 0) return []; // Si n es 0 o menor, devolvemos un array vacío
    if (n === 1) return [0]; // Si n es 1, devolvemos el primer número de la secuencia

    let secuencia = [0, 1]; // Inicializamos la secuencia con los dos primeros números de Fibonacci
    for (let i = 2; i < n; i++) {
        // Cada nuevo número es la suma de los dos anteriores
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
    return secuencia;
}