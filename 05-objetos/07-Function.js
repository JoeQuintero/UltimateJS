//Las funciones son objetos de primera clase
function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log('Dibujando...')
    }
}

//Se pueden crear funciones utilizando el constructor function. No usarlo nunca, puede que alguien lo haga pero de preferencia evitarlo. No usarlo: 
//Constructor de Function
// const Point = new Function('x','y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function(){
//         console.log('Dibujando...');
//         }
//     `);

// const p = new Point(1,2);
// console.log(p)

//Extendemos objetos
let punto = {z:7};
//Con call los argumentos se pasan uno a uno 
//Punto.call(punto, 1, 2);
//Con apply debemos pasar argumentos cocmo array, sólo los del lado derecho
Punto.apply(punto, [1, 2]);
//Contexto de "this" es el primer argumento, después es el argumento con call

console.log(punto.constructor);

let test = new Punto(1,5);
console.log(test.constructor);
test.z = 6;
console.log(test.constructor);

//Aqui modificamos las propiedades del objeto creado, no del constructor
//Se agregan propiedades al objeto del constructor 

