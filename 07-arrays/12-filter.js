const usuarios = [
    {edad:'25', name:'Jose'},
    {edad:'15', name:'Toby'},
    {edad:'35', name:'Quintero'},
    {edad:'22', name:'Borreguito'},
];

const mayores = usuarios.filter(usuario=>usuario.edad>17);
const menores = usuarios.filter(usuario=>usuario.edad<17);
console.log(mayores);

