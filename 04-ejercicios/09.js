/**
 * Crear algoritmo que devuelva un array de objetos en abse a pares
 * 
 */

//Difiere con el anterior en no tener un id, con base al numero que está ahí debo de agregar un id
let pairs = [
    [1, {name:'Jose'}],
    [2, {name:'Toby'}],
    [3, {name:'Fer'}],
];


function toCollection(arr){
    let array_new = [];

    //2 soluciones
    // for(indice in arr){
    //     let temporal = arr[indice][1];
    //     temporal.id = arr[indice][0];
    //     console.log(temporal)
    //     array_new[indice] = temporal;
    // }
    // 

    for(indice in arr){
        let elemento = arr[indice];
        array_new[indice] = elemento[1];
        array_new[indice].id = elemento[0];
    }

    return array_new;

}

let resultado = toCollection(pairs);
console.log(resultado);

//La idea es conseguir esto: 
// let array = [{
//     id:1,
//     name:'Jose',
// }, {
//     id:2,
//     name:'Toby',
// }, {
//     id:3,
//     name:'Fer',
// }];