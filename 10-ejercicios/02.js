/**
 * Similar al ejercicio anterior, pero ahora la función extender debe retornar un nuevo objeto y no se usa el método call ni apply.
 * Extender devuelve el usuario, pero al revisarlo en consola va a tener esos dos métodos login y logout.
 */

//1ra forma
// const obj = {
//     nombre: 'Jose',
// };

// function extender(usuario){
//     usuario.login = ()=>{
//         console.log(`${usuario.nombre} ha cerrado sesión`);
//     };
//     usuario.logout = ()=>{
//         console.log(`${usuario.nombre} ha cerrado sesión`);
//     };

//     return usuario;
// }

// const usuario = extender(obj);
// console.log(usuario);
// usuario.login();
// usuario.logout();

//2da forma
const obj = {
    nombre: 'Jose',
};

function extender(usuario){
    const metodos = {
        login(){
            console.log(`${this.nombre} ha iniciado sesión`);
        },
        logout(){
            console.log(`${this.nombre} ha cerrado sesión`);
        }
    };

    return Object.assign(usuario, metodos);

}

const usuario = extender(obj);
console.log(usuario);
usuario.login();
usuario.logout();
