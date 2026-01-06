/**
 * Ejercicio 1:
 * Usando la función constructora cambio el contexto de this utilizando el método de call que contienen las funciones en JavaScript.
 * De esta manera, al imprimir debo de ver un objeto que tiene la propieda de nombre y dos métodos: login() y logout()
 * Y al invocar los métodos login y logout deben de imprimir en consola "Jose ha iniciado sesión" y "Jose ha cerrado sesión"
 */

const obj = {
    nombre: 'Jose',
};

function Extender(){
    //Como es un constructor no debe retornar nada
    //Puedo usar this haciendo referencia al objeto que se pasa por call
    this.login = ()=>{
        console.log(`${this.nombre} ha iniciado sesión`);
    };
    this.logout = ()=>{
        console.log(`${this.nombre} ha cerrado sesión`);
    };
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();