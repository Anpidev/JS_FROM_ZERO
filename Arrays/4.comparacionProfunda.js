/*Escribe una función deepEqual que tome dos valores y 
devuelva true solo si son el mismo valor o son objetos con las mismas propiedades, 
donde los valores de las propiedades son iguales cuando se comparan con una llamada recursiva a deepEqual.

Para saber si los valores deben compararse directamente (usando el operador === para eso) o
 si sus propiedades deben compararse, puedes usar el operador typeof. 
 Si produce "object" para ambos valores, deberías hacer una comparación profunda. 
 Pero debes tener en cuenta una excepción tonta: debido a un accidente histórico, typeof null también produce "object".

La función Object.keys será útil cuando necesites recorrer las propiedades de los objetos para compararlas.*/
function deepEqual(valor1, valor2) {
    // Si ambos valores son estrictamente iguales, no hay necesidad de comparar más.
    if (valor1 === valor2) {
        return true;
    }

    // Si alguno de los valores es null o no es un objeto, no pueden ser iguales.
    if (valor1 === null || valor2 === null || typeof valor1 !== "object" || typeof valor2 !== "object") {
        return false;
    }

    // Obtenemos las claves de ambos objetos.
    let keys1 = Object.keys(valor1);
    let keys2 = Object.keys(valor2);

    // Si el número de claves es diferente, los objetos no son iguales.
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Recorremos las claves de un objeto y comparamos las propiedades recursivamente.
    for (let key of keys1) {
        // Si la clave no existe en el otro objeto o sus valores no son iguales de forma profunda.
        if (!keys2.includes(key) || !deepEqual(valor1[key], valor2[key])) {
            return false;
        }
    }

    // Si todas las propiedades coinciden, los objetos son iguales.
    return true;
}