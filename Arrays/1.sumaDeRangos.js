/*Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array que 
contenga todos los números desde inicio hasta fin, incluyendo fin.

Luego, escribe una función sum que tome un array de números y devuelva la suma de estos números. 
Ejecuta el programa de ejemplo y verifica si realmente devuelve 55.

Como asignación adicional, modifica tu función range para que tome un tercer argumento opcional que indique
 el valor de “paso” utilizado al construir el array. Si no se proporciona un paso, 
 los elementos deberían aumentar en incrementos de uno, correspondiendo al comportamiento anterior. 
 La llamada a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. 
 Asegúrate de que esto también funcione con valores de paso negativos, de modo que range(5, 2, -1) produzca [5, 4, 3, 2].*/

 function range(inicio,fin) {
    let array=[]
   for (let index = inicio; index <= fin; index++) {
    array.push(index)
   }
   return array
 }

 function sum(array) {
    let suma=0;
    array.forEach(element => {
        suma+=element
    });
    return suma
}

function rangeConPaso(inicio, fin, paso = 1) {
    let array = [];
    if (paso > 0) {
        // Paso positivo
        for (let index = inicio; index <= fin; index += paso) {
            array.push(index);
        }
    } else if (paso < 0) {
        // Paso negativo
        for (let index = inicio; index >= fin; index += paso) {
            array.push(index);
        }
    }
    return array;
}