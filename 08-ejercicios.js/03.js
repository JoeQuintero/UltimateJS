const usuarios = [
    {edad: 17, nombre: 'Jose', plan: 'premium'},
    {edad: 15, nombre: 'Toby', plan: 'free'},
    {edad: 25, nombre: 'Quintero', plan: 'free'},
    {edad: 10, nombre: 'Borreguito', plan: 'gold'},
];

function getPaidUsers(usrs){
    return usrs.filter(usr=>usr.plan !== 'free');
    //return usrs.filter(usr=>usr.plan === 'premium' || usr.plan === 'gold');
}

console.log(getPaidUsers(usuarios));