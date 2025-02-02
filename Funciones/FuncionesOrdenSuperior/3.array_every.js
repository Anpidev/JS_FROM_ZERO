/*Los arrays también tienen un método every análogo al método some. 
Este método devuelve true cuando la función dada devuelve true para cada elemento en el array. 
En cierto modo, some es una versión del operador || que actúa en arrays, y every es como el operador &&.

Implementa every como una función que recibe un array y una función de predicado como parámetros. 
Escribe dos versiones, una usando un bucle y otra usando el método some.*/

function every(array, test) {
    for (let elemento of array) {
      if (!test(elemento)) {
        return false; // Si algún elemento no cumple el test, devuelve false
      }
    }
    return true; // Todos los elementos cumplen el test
  }

  
  //SOME
  function every(array, test) {
    return !array.some(elemento => !test(elemento));
  }
  