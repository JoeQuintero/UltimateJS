//Al definir un objeto realmente estamos iniciando un objeto, por lo que declararlo de las siguientes formas es lo mismo
let obj = {};
//Lo de arriba es un atajo para crear un objeto
let obj2 = new Object();

console.log(obj.constructor);
console.log(obj2.constructor);

/**
 * Existen distintos tipos de cosntructores
 * new Array(); []
 * new String(); "" / '' / ``
 * new Number(); 12
 * new Boolean(); true / false
 * 
 */

function Usuario(){
    this.name = 'Josesin';
}

let user = new Usuario();

console.log(user.constructor);

//Todos los constructores derivan de Object
console.log(typeof ''); //Devuelve String
console.log(typeof new String); //Devuelve Object
console.log(typeof new Usuario); //Devuelve Object
//Cuando usamos un string/enteros u otro dato con métodos, js envuelve al dato y nos permite usar los métodos, luego lo desenvuelven cuando pasa a la siguiente línea de ejecución

//Las literales y los objetos pueden actuar diferente
const s1 = '1+1';
const s2 = new String('1+1');
console.log(s1, s2);
console.log(eval(s1),eval(s2.valueOf()));
//valueOf también lo tienen los boolean y los number

