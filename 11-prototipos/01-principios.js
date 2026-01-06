// //Programación estructurada
// let nombre = "Hola";
// let apellido = "Mundo";

// function getNombreCompleto(nombre, apellido){
//     return [nombre, apellido].join("");
// }

// let fullname = getNombreCompleto(nombre, apellido);

// //Progamación orientada a objetos
// const user = {
//     nombre:'Jose',
//     apellido:'Quintero',
//     getNombreCompleto(){
//         return [this.nombre, this.apellido].join(" ");
//     },

// };

// console.log(user.getNombreCompleto());


//PRINCIPIOS DE POO

//1 - ENCAPSULACIÓN
// const user = {
//     nombre: 'José',
//     apellido: 'Quintero',
//     getNombreCompleto(){
//         return [this.nombre, this.apellido].join(' ');
//     },
// }
// console.log(user.getNombreCompleto());

//2 - ABSTRACCION - No va a funcionar el código, sólo es ejemplo
// const user = new User();
// user.password = "Josesin";
// user.save();

// 3 - HERENCIA
// User
// Restaurante
// Motocicleta


// 4 - POLIMORFISMO
//En vez de escribir esto para cada entidad
// function validaEntidad(entidad){
//     switch(entidad.nombre){
//         case 'User':
//             entidad.save;
//             break;
//         case 'Restaurante':
//             entidad.guardar;
//             break;
//         case 'moto';
//             //...

//     }
// }
// //Se resume a esto: 
// function validaEntidad(entidad){
//     entidad.save();
// }