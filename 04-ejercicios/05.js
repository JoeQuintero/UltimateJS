/**
 * Crear algoritmo que devuelva número menor y mayor de un array, no ordenarlos, sólo saber cuál es mayor y cuál es menor
 * 
 */

let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    //Si las inicializo con 0 y el valor menor es 0, entonces se va crear un problema porque en un array con positivos 0 será el menor siempre 
    let menor = arr[0];
    let mayor = arr[0]; 
    for(numero of arr){
        menor = menor < numero ? menor : numero 
        mayor = mayor > numero ? mayor : numero
    }
    return[menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);

//------------------------------------------------------------------------------
//Ordenados
let array2 = [2,5,7,15,-5,-100,55];
function bubbleSortMenorMayor(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
            // Intercambiar
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            }
            console.log('i=',i,'j=',j,'->', arr);
        }
    }
    return arr;
}


let numeros2 = bubbleSortMenorMayor(array2);
console.log(numeros2);
