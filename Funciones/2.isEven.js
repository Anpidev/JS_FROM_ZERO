/*Hemos visto que podemos usar % (el operador de resto) para verificar 
si un número es par o impar al usar % 2 para ver si es divisible por dos. 
Aquí hay otra forma de definir si un número entero positivo es par o impar:

El cero es par.

El uno es impar.

Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva isEven que corresponda a esta descripción.
 La función debe aceptar un solo parámetro (un número entero positivo) y devolver un booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. ¿Por qué? ¿Puedes pensar en una forma de solucionarlo?
*/

function isEven(n) {
    // Caso base: si el número es 0, es par
    if (n === 0) return true;
  
    // Caso base: si el número es 1, es impar
    if (n === 1) return false;
  
    // Si el número es negativo, convertirlo en positivo
    if (n < 0) return isEven(-n);
  
    // Llamada recursiva restando 2
    return isEven(n - 2);
  }
  
  // Pruebas
  console.log(isEven(50)); // true
  console.log(isEven(75)); // false
  console.log(isEven(-1)); // false
  