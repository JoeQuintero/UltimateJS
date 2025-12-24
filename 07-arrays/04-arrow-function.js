//Forma tradicional
// function hola(){
//     return 'Hola mundo';
// }

//Return implicito
const hola = (mensaje) => mensaje + 'Hola mundo';
const hola2 = mensaje => {
    return mensaje + 'Hola mundo'
};
const resultado = hola2('José dice ');
console.log(resultado);

//Prueba
const funcion = (num) => {
    num = num * 2;
    return num + 1;
};

console.log(funcion(5));


