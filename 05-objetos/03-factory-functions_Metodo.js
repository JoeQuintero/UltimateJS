//Las factory fucntion nos permiten crear objetos de una manera sencilla y no repetitiva
//Las funciones anónimas pasan a ser métodos de un objeto

let user = {
    id: 1,
    name: 'Pepito',
    email: 'jlqg1322@gmail.com',
    activo: true,
    recuperarClave: function recuperarClave(){
        console.log('Recuperando clave...');
    },  
};

let user1 = {
    id: 2,
    name: 'Pepito',
    email: 'jlqg1322@gmail.com',
    activo: true,
    recuperarClave: function recuperarClave(){
        console.log('Recuperando clave...');
    },  
};

//Factory function, lo que hacen es crear al objeto 
//Aquí se escriben directamente las propiedades y métodos
function crearUsuario(name, email){
    return {
        name,
        email,
        activo: true,
        recuperarClave: function recuperarClave(){
            console.log('Recuperando clave...');
        },   
    };
}

let user_nuevo = crearUsuario('Jose', 'jlqg1322@gmail.com');
let user_nuevo2 = crearUsuario('Toby', 'toby@gmail.com');

console.log(user_nuevo);
console.log(user_nuevo2);

//Si quiero cambiarle el nombre a alguna propiedad ya sería individual
user_nuevo.edad = 24;
console.log(user_nuevo);

user_nuevo.recuperarClave();
console.log(typeof user_nuevo);