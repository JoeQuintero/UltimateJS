let numeros = [15,30,-3]
//Acomoda los elementos en orden de menor a mayor 
numeros.sort();
//Acomoda de menor a mayor
numeros.reverse();
console.log(numeros);

let letras = ['z','a','d'];
letras.sort();
letras.reverse();
console.log(letras);

//Problema con sort()
let conMayus = ['Z','a','b'];
conMayus.sort();
console.log(conMayus);


/**
 * a antes b =>-1
 * b antes a => 1
 * si son iguales =>0
 */
conMayus.sort((a,b) => {
    //Que todos los strings estén en uppercase o lowercase
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();
    if(alower < blower){return -1};
    if(alower > blower){return 1};
    return 0;
});

console.log(conMayus);

let arrayObjetos = [
    {edad:24,name:'Jose'},
    {edad:11,name:'Toby'},
    {edad:5,name:'Borreguito de toby'},
];

arrayObjetos.sort((a,b)=>{
    if(a.edad<b.edad) return -1;
    if(a.edad>b.edad) return 1;
    return 0;
});
console.log(arrayObjetos);


