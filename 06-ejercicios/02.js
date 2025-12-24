/**
 * Crear usuario con una factory function
 * 
 */

function crearUsuario(name){
    return {
        id:Math.random(),
        name:name,
        //name, Es posible acortarlo
    };
}

let user = crearUsuario('Jose');
let user2 = crearUsuario('Toby');

console.log(user,user2);