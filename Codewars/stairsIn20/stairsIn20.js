function stairsIn20(s){
    //Reducimos el array de bidimensional a unidimensional con .flat
    //Sumamos el array con .reduce
    let totalSteps=s.flat().reduce((sum,steps)=>sum+steps,0);
     
    // Multiplicamos el total de pasos del año por 20 para obtener la estimación de 20 años
    return totalSteps * 20;
  }
  
  //Exportar el módulo para que se pueda usar en test.js
  module.exports = stairsIn20;
  