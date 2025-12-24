// let arr = [1,2];
// arr = [];

//Con los array no pasa lo mismo que con los objetos de valores de referencia, si cambio el valor de un array que haya obtenido como valores los de otro array no pasa nada con el array original
// let arr = [1,2];
// let arr2 = arr;
// arr = [];
// console.log(arr2,arr);

//tercera forma
// let arr = [1,2];
// arr.length = 0;
// console.log(arr);

//cuarta forma
// let arr = [1,2,3,4,5];
// arr.splice(0, arr.length);
// console.log(arr);

//Ultima forma con un loop
let arr = [1,2,3];
while(arr.length > 0){
    arr.pop();
}
console.log(arr);