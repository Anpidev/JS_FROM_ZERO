/*Para este ejercicio, escribe dos funciones, reverseArray y reverseArrayInPlace. 
La primera, reverseArray, debería tomar un array como argumento y producir un nuevo array que tenga los mismos elementos en orden inverso.
La segunda, reverseArrayInPlace, debería hacer lo que hace el método reverse: modificar el array dado como argumento invirtiendo sus elementos.
Ninguna de las funciones puede utilizar el método reverse estándar.
*/



// Función que devuelve un nuevo array con los elementos en orden inverso
function reverseArray(array) {
    let nuevoArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        nuevoArray.push(array[index]);
    }
    return nuevoArray;
}

// Función que invierte los elementos del array original en su lugar
function reverseArrayInPlace(array) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio < fin) {
        // Intercambiamos los elementos usando una variable temporal
        let temp = array[inicio];
        array[inicio] = array[fin];
        array[fin] = temp;

        // Avanzamos hacia el centro del array
        inicio++;
        fin--;
    }
    return array; // Devolvemos el array modificado
}