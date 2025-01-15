/*Define la función min que toma dos argumentos y devuelve su mínimo.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

function min(a,b) {
    return Math.min(a,b)
}

//sin usar math.min
function minTernario(a, b) {
    return a < b ? a : b;
}
