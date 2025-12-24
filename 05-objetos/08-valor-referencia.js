/**
 * Los tipos de datos de referencia son:
 * Objects
 * Arrays
 * Funciones
 */

//Ejemplo 1
let a = 1;
let b = a;
b++;
console.log(a,b);

//Ejemplo 2 - Imprime lo mismo
let a1 = {};
let b1 = a1;
b1.propagregada = 1;
console.log(a1,b1);

//Ejemplo 3 -- No se modifica el valor de a
let a2 = 1;
function suma(n){
    n++;
}
suma(a2);
console.log(a2);

//Ejemplo 4
let a3 = {prop:1,};
function suma2(n){
    n.prop++;
}
suma2(a3);
console.log(a3);

