// Primer uso FOR ...OF (ARRAYS; STRINGS)
let numeros = [2, 4, 6, 8, 10];
for (const numero of numeros) {
    console.log(numero * 3); // Multiplica cada número por 3
};

// USO FOR...IN (OBJETOS)
let persona = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Barcelona"
};

for (const key in persona) {
    if (Object.prototype.hasOwnProperty.call(persona, key)) {
        console.log(key + ": " + persona[key]); // Imprime clave: valor
    };
};

// USO FOR EACH (ARRAYS)
numeros.forEach((numero) => {
    console.log(numero ** 2); // Imprime el cuadrado de cada número
});
