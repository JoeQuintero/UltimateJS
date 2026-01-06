/**
 * Toma una función, agrupa los parámetros, toma los argumentos y los pasa a log 
 * Entender cómo funcionan los callbacks como la función filter. 
 * AL final sólo imprime los argumentos pasados a log en un array
 */

function callback(fn, ...rest){
    fn(...rest);
}

function log(...args){
    console.log(args);
}

callback(log,1,2,3,4);


//Otra forma de hacerlo es con una arrow function
callback((...args)=>{
    console.log(args);
},1,2,3,4);

//Si lo asocio con los métodos de arrays como filter, aquí estaría usando un predicate function, es decir una función que retorna true o false
// [].filter((el)=>{
// });