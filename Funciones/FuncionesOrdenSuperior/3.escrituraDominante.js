/*Escribe una función que calcule la dirección de escritura dominante en una cadena de texto. 
Recuerda que cada objeto script tiene una propiedad direction que puede ser "ltr" (de izquierda a derecha), 
"rtl" (de derecha a izquierda) o "ttb" (de arriba a abajo).

*/

function dominantDirection(text) {
    // Función auxiliar para encontrar el script de un carácter
    function characterScript(code) {
      for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
          return script;
        }
      }
      return null;
    }
  
    // Contar direcciones según los caracteres del texto
    let directionCounts = {};
    for (let char of text) {
      let script = characterScript(char.codePointAt(0));
      if (script) {
        directionCounts[script.direction] = (directionCounts[script.direction] || 0) + 1;
      }
    }
  
    // Encontrar la dirección dominante
    let dominant = null;
    let maxCount = 0;
    for (let [direction, count] of Object.entries(directionCounts)) {
      if (count > maxCount) {
        maxCount = count;
        dominant = direction;
      }
    }
  
    return dominant; // Devuelve la dirección dominante
  }
  