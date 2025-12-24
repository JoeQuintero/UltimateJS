/**
 * Crear un array de longitud N, y que sus elementos sean números de 1 hasta N.
 */

let longitud = 20; 

function crearArray(n){
    let array = [];

    if(longitud>0){
        for(i=0; i<longitud;i++){
            array[i] = i+1; 
        }
    }

    return array;
    
}

//Si le pasamos el número 7 crea un array con elementos del 1 al 7 por ejemplo

let resultado = crearArray(longitud);
console.log(resultado);
