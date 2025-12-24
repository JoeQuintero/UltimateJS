/**
 * Crear algoritmo que tome un array de objetos y devuelva un array de pares
 * 
 * 
 */

let array = [{
    id:1,
    name:'Jose',
}, {
    id:2,
    name:'Toby',
}, {
    id:3,
    name:'Fer',
}];

//2 soluciones

// function toPairs(arr){
//     let array2 = [];
//     for(j = 0; j < arr.length; j++){
//         array2[j] = [arr[j].id, arr[j]]; 
//     }
//     return array2; 
// }

function toPairs(arr){
    let array2 = [];
    for(indice in arr){
        array2[indice] = [arr[indice].id, arr[indice]]; 
    }
    return array2; 
}

//Un par es un array de arrays, esto es lo que debo de imprimir:
// let pares = [
//     [1, {id:1, name: 'Jose'}],
//     [2, {id:2, name: 'Toby'}],
//     [3, {id:3, name: 'Fer'}],
// ];


let resultado = toPairs(array);
console.log(resultado);