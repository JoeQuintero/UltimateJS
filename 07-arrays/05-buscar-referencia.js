const usuarios = [
    {id:1,name:'Jose'},
    {id:2,name:'Quintero'},
];
//Aquí le estoy pasando un objeto, como le estoy pasando un objeto las referencias de los objetos son diferentes
const resultado = usuarios.indexOf({id:1,name:'Jose'});
console.log(resultado);

const resultado2 = usuarios.find(usuario => usuario.name === 'Jose');
const resultado3 = usuarios.findIndex(usuario => usuario.name === 'Jose');
console.log(resultado2);
console.log(resultado3);
