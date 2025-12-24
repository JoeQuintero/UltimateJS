const usuarios = [
    {edad: 17, nombre: 'Jose', plan: 'premium'},
    {edad: 13, nombre: 'Toby', plan: 'premium'},
    {edad: 32, nombre: 'Quintero', plan: 'free'},
    {edad: 25, nombre: 'Borreguito', plan: 'gold'},
];

function cuantosPremium(usrs){
    return usrs.reduce((acc,el) =>{
        return el.plan !== 'free' ? acc+1 : acc;
        // if(el.plan !== 'free'){
        //     acc++;
        // }
        // return acc;
    },0);
    //También esto
    // let numero = usrs.filter(usr=>usr.plan !== 'free');
    // return numero.length;
}

function cuantosMayores(usrs){
    return usrs.reduce((acc,el)=>{
        return el.edad > 18 ? acc+1 : acc;    
    //     if(el.edad>18){
    //         acc++;
    //     }
    //     return acc;
    },0);
    //También esto
    // let numero = usrs.filter(usr=>usr.edad > 18);
    // return numero.length;
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));


//Resumiendo funciones en una línea
const cuantosPremium2 = (usrs) => usrs.reduce((acc,el) => el.plan !== 'free' ? acc+1 : acc, 0);
const cuantosMayores2 = (usrs) => usrs.reduce((acc,el)=> el.edad > 18 ? acc+1 : acc,0);
;

console.log(cuantosPremium2(usuarios));
console.log(cuantosMayores2(usuarios));
