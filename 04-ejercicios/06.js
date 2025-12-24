/**
 * Crear algoritmo que devuelva cantidad de números
 * positivos de un array
 * 
 */

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(){
    let contador = 0;
    //Puedo poner u omitir el let
    for(let numero of array){
        if(numero > 0){
            contador++;
        }
    }
    return contador;
}

let resultado = cuantosPositivos(array);
console.log(resultado);

