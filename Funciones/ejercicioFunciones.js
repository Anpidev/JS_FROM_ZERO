//Función de Orden Superior: Crea una función llamada filtrarPares que tome un array de números y 
// devuelva un nuevo array solo con los números pares.
function filtrarPares(numeros) {
    let pares=[];
    numeros.forEach(numero => {
        if(numero%2===0)
            pares.push(numero)
    });
    return pares
}
//METODO MAS ABREVIADO
function filtrarParesAbreviado(numeros) {
    // Usamos el método filter para devolver solo los números pares
    return numeros.filter(numero => numero % 2 === 0);
}



//Función Recursiva: Crea una función recursiva llamada sumarNumeros que reciba un número n y 
// devuelva la suma de todos los números desde 1 hasta n.
    
function sumarNumeros(n) {
    // Caso base: si n es 1, simplemente devolvemos 1
    if (n === 1) {
        return 1;
    }
    // Llamada recursiva: sumamos n con la suma de los números hasta n - 1
    return n + sumarNumeros(n - 1);
}

// Pruebas
console.log(sumarNumeros(5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(sumarNumeros(10)); // 55 (1 + 2 + ... + 10)



//Funciones Anónimas: Usa una función anónima dentro de un setTimeout para imprimir un mensaje después de 3 segundos.
setTimeout(() => {
    console.log("Hola a todos")
}, 3000);

