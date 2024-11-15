/*1. Funciones declaradas:
Las funciones declaradas son la forma más común de declarar funciones en JavaScript. 
Tienen una sintaxis clara y son elevadas al inicio del contexto de ejecución debido a una característica llamada hoisting.

Características:
Se pueden declarar en cualquier parte del código, y puedes llamarlas antes de que sean definidas debido al hoisting.
Tienen un nombre, lo que facilita su reutilización y su comprensión en el código.
*/
saludar("Carlos"); // Funciona gracias a hoisting

function saludar(nombre) {
    console.log("Hola, " + nombre);
};


/*2. Expresiones de Función (Function Expressions)
En este caso, una función se define dentro de una variable o constante. A diferencia de las funciones declaradas, las expresiones de función no se elevan 
al principio y deben ser declaradas antes de su llamada.

Características:
No pueden ser llamadas antes de su declaración.
Anónimas: A menudo se les asigna una función anónima (sin nombre), pero también puedes darle un nombre.
Usadas frecuentemente como callbacks o para definir funciones dentro de objetos o arrays.
*/
const multiplicar = function(a, b) {
    return a * b;
};

console.log(multiplicar(4, 5)); // Imprime: 20

/*3. Funciones Flecha (Arrow Functions)
Las funciones flecha son una sintaxis más compacta que fue introducida en ES6. Son muy útiles cuando se desea escribir funciones de manera más rápida, 
especialmente para funciones pequeñas o de una sola línea.

Características:
Sintaxis más corta, especialmente útil para funciones que solo tienen una expresión.
No tienen su propio this, lo que las hace ideales para ser usadas en callbacks o métodos dentro de objetos.
No pueden ser usadas como constructores (es decir, no puedes usar new con ellas).
Sintaxis:
Si la función solo tiene un parámetro, los paréntesis pueden ser omitidos. Si tiene un solo retorno, 
no es necesario usar la palabra clave return ni las llaves {}.
*/
// Con un solo parámetro y una sola línea:
const cuadrado = num => num * num; 

// Más complejo:
const sumarNumeros = (a, b) => {
    const suma = a + b;
    return suma;
};

// Renombramos la función para evitar conflicto:
const saludarFlecha = nombre => `Hola, ${nombre}!`; // Expresión de una sola línea

console.log(saludarFlecha("Ana")); // Imprime: Hola, Ana!

/*Parámetros por Defecto:
A partir de ES6, JavaScript permite asignar valores por defecto a los parámetros en caso de que no se pase un argumento.
*/

function saludarConValorDefecto(nombre = "Amigo") {
    console.log("Hola, " + nombre + "!");
}

saludarConValorDefecto("Carlos"); // Imprime: Hola, Carlos!
saludarConValorDefecto();         // Imprime: Hola, Amigo!

/*Argumentos Rest:
A veces no sabemos cuántos argumentos se van a pasar a la función. El operador rest (...) nos permite capturar un número indefinido de argumentos en un solo array.
*/
function sumarRest(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(sumarRest(1, 2, 3, 4)); // Imprime: 10

/*Retorno de funciones:
Las funciones en JavaScript pueden devolver valores utilizando la palabra clave return. Si no se especifica un return, la función devolverá undefined por defecto.*/
function sumarDosNumeros(a, b) {
    return a + b;
}

let resultado = sumarDosNumeros(5, 3);
console.log(resultado); // Imprime: 8
//Si no usamos return en la función, el valor de retorno será undefined
function saludarSinReturn() {
    console.log("Hola");
}

let saludo = saludarSinReturn();
console.log(saludo); // Imprime: undefined

/*Funciones anidadas:
Es posible declarar funciones dentro de otras funciones. Esto puede ser útil si necesitas tener una función local que solo se usa dentro de la función principal.*/
function exterior() {
    console.log("Soy la función exterior");

    function interior() {
        console.log("Soy la función interior");
    }

    interior(); // Se puede llamar a la función interior aquí
}

exterior();

/*Funciones como Objetos (Funciones como Objetos de Primera Clase)
En JavaScript, las funciones son objetos de primera clase. Esto significa 
que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas desde otras funciones.*/
function saludoFunc(func) {
    console.log("Preparando saludo...");
    func();
}

const decirHola = () => console.log("¡Hola!");

saludoFunc(decirHola); // Imprime: Preparando saludo... ¡Hola!

/*Funciones recursivas:
Las funciones recursivas son aquellas que se llaman a sí mismas. 
Son útiles para problemas que pueden dividirse en subproblemas similares (como recorrer estructuras de datos jerárquicas, como árboles).
*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Caso base: el factorial de 0 o 1 es 1
    }
    return n * factorial(n - 1);  // Llamada recursiva
}

console.log(factorial(5));  // Imprime: 120

