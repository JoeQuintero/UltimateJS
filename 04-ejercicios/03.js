/** 
 * indice validar que no sea menor a cero y que el elemento exista en el array
 * Obtener un elemento por su índice, el valor que se le pase como indice no puede ser menor que cero y el elemento debe de existir en el array, en el caso de que me pase, me debe de indicar que el elemento no existe
 */
function getbyIdx(arr,idx){
    return ((idx >= 0)&&(idx<=arr.length)) ? arr[idx] : 'El elemento no existe';
}

let resultado = getbyIdx([1,2],1);
console.log(resultado);