/*Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:

#
##
###
####
#####
######
#######
*/

let resultado = "";
for (let i = 0; i < 7; i++) {
  resultado += "#";
  console.log(resultado);
}