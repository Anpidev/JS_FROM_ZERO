let size = 8; // Tamaño del tablero
let tablero = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            tablero += " ";
        } else {
            tablero += "#";
        }
    }
    tablero += "\n"; // Añade un salto de línea al final de cada fila
}

console.log(tablero);
