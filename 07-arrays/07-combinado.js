let arr1 = [1,2,{id:1,nombre:'jose',}];
let arr2 = [3,4];

//Este método no modifica arrays originales, crea uno nuevo 
let combinados = arr1.concat(arr2);
console.log(combinados);

//Si quiero dividirlo puedo usar .slice()
let cortado = combinados.slice(1);
console.log(cortado);

let divididos2 = combinados.slice();
divididos2.push(8);
console.log(divididos2);
divididos2[2].unoMas = 8;
console.log(combinados);