//Var o const da igual si uso objetos 
const user = {id:1,};
user.name = 'Jose';
user.mail = 'jlqg1322@gmail.com';
//Función anónima
user.guardar = function(){
    console.log('Guardando usuario...');
}

console.log(user);
user.guardar();
delete user.mail;
delete user.guardar;
console.log(user);

//Object.freeze
const user1 = Object.freeze({id:1}); 
user1.name = 'Jose';
user1.id = 2;
console.log(user1);
//Muestra al objeto en su estado inicial, no le agrega ninguna propiedad ni permite cambiar valores. 

//Object.seal
const user2 = Object.seal({id:1}); 
user2.name = 'Jose';
user2.id = 2;
console.log(user2);
//Muestra al objeto en su estado inicial, permite cambiar valores de propiedades, más no agregar o quitar. 