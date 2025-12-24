//Primera forma 
function paraAbsoluto(arr){
    return arr.map(n => Math.abs(n));
}


//segunda forma (Mía)
// function paraAbsoluto(arr){
//     return arr.reduce((acc,el)=>acc.concat(Math.abs(el)),[]);
// }

const ns = [-2,3,5,-15];

const absolutos = paraAbsoluto(ns);
console.log(absolutos);


// const usuarios = [
//     {edad:-119,nombre:'Jose'},
//     {edad:15,nombre:'Toby'},
//     {edad:25,nombre:'Quintero'},
//     {edad:10,nombre:'Borreguito'},
// ];
// const lista = usuarios.map(usuario => Math.abs(usuario.edad));

// console.log(lista);