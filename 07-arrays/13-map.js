//Ayuda a obtener un arreglo de los valores de las propiedades que queramos 
//Puedo agregarle el formato que quiera a lo que me da map

const usuarios = [
    {edad:19,nombre:'Jose'},
    {edad:15,nombre:'Toby'},
    {edad:25,nombre:'Quintero'},
    {edad:10,nombre:'Borreguito'},
];

//El valor que retorne la función es lo que va tener la lista, de modo que si necesito una lista de nombres, me va a devolver el valor de la propiedad nombre de cada objeto en un array
const lista = usuarios.map(usuario => `<li>${usuario.nombre}</li>`);
//Luego uso join para juntar los valores en una cadena y le agrego más valores
const html = `<ol>${lista.join('')}</ol>}`
console.log(html);

//Retorno objeto dentro de
// const mapped = usuarios.map( usuario => ({
//         ...usuario,
//         mayor:usuario.edad>=18,   
// }));

// console.log(mapped);

console.log('Segundo texto');
//Encadenando, pueden ir en una línea o separado por renglón
const lista2 = usuarios
    .filter(usuario=> usuario.edad>17)
    .map(usuario=>`<li>${usuario.nombre}</li>`);
const html2 = `<ol>${lista2.join('')}</ol>}`
console.log(html2);