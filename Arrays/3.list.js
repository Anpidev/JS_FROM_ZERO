/*Escribe una función arrayToList que construya una estructura de lista como la mostrada cuando se le da [1, 2, 3] como argumento. 
También escribe una función listToArray que produzca un array a partir de una lista.
 Agrega las funciones auxiliares prepend, que toma un elemento y una lista y
  crea una nueva lista que añade el elemento al principio de la lista de entrada, y nth,
   que toma una lista y un número y devuelve el elemento en la posición dada en la lista 
(siendo cero el primer elemento) o undefined cuando no hay tal elemento.*/

// 1. Función arrayToList: Convierte un array en una lista enlazada
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

// 2. Función listToArray: Convierte una lista enlazada en un array
function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

// 3. Función prepend: Añade un elemento al principio de una lista
function prepend(value, list) {
    return { value: value, rest: list };
}

// 4. Función nth: Devuelve el elemento en una posición específica de la lista
function nth(list, position) {
    if (!list) return undefined; // Caso base: si la lista está vacía
    if (position === 0) return list.value; // Caso base: hemos llegado a la posición deseada
    return nth(list.rest, position - 1); // Avanzamos al siguiente nodo y reducimos la posición
}