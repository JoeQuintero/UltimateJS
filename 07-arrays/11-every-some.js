let usuarios = [
    {id:1, activo:false},
    {id:2, activo:false},
    {id:3, activo:false},
    {id:4, activo:false},
];

let todosActivos = usuarios.every(u=>{
    console.log('Todos activos', u.id);
    return u.activo;
});

console.log(todosActivos);

// let algunoActivo = usuarios.some(u=>{
//     console.log(u.id);
//     return u.activo;
// });

// console.log(algunoActivo);

