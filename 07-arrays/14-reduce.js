//La idea es sumar todos los elementos del array, pero existe una forma más limpia de hacerlo y es mediante reduce. Reduceright lo hace de derecha a izquierda y recibe dos parametros, el primero es un acumulador y el segundo es el elemento a iterar, el acumulador es el valor inicial desde el que empieza, se indica al final 
const numeros = [1,2,3,4,5];

//El acumulador empieza en 0 y el itera cada elemento, entonces va a sumar a todos. }
const suma = numeros.reduce((acc,el)=>{
    return acc + el;
},0);

const anidado = [[1,2],3,[4,5]];
const plano = anidado.reduce((acc,el)=>acc.concat(el),[]);
console.log(plano); 

const usuarios = [
    {edad:19,nombre:'Jose'},
    {edad:15,nombre:'Toby'},
    {edad:25,nombre:'Quintero'},
    {edad:10,nombre:'Borreguito'},
];

const indexado =  usuarios.reduce((acc,el)=>({
    ...acc,
    [el.nombre]:el,
}),{});

console.log(indexado);