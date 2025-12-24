/**
 * Datos que vienen de lugares distintos
 * Cómo trabajo con ambas?
 * Antes de realizar cualquiera de los dos arrays, tomar un u otro array para tener un estandar
 * De users a usuarios o al revés
 */

const usuarios = [
    {edad:17, nombre:'Toby', plan:'premium'},
    {edad:13, nombre:'Jose', plan:'free'},
    {edad:32, nombre:'Fernanda', plan:'free'},
];

const users = [
    {age:22, name: 'Michael', membership:'premium'},
    {age:19, name: 'Sarah', membership:'free'},
    {age:45, name: 'Laura', membership:'free'},
];

//Unificar las estructuras de usuarios y user
//Fusionar los array
//Ordenar por edad
//Crear plantilla HTML
//<li>Nombre: name, Edad: age </li>
//Imprimir la lista en consola

//1ra opción, mapear los objetos del array con objetos en inglés y crear otro
const userEspanol = users.map(u => {
    return {
        edad:u.age,
        nombre:u.name,
        plan:u.membership,
    }
});

//2da opción O lo puedo hacer así:
// const userEspanol = users.map(u =>({
//         edad:u.age,
//         nombre:u.name,
//         plan:u.membership,
//     }));
console.log(userEspanol);

//Junto todos los objetos en un array
const todos = [...usuarios,...userEspanol];
//De esta forma se comparan los valores de las edades de los objetos 
todos.sort((a,b) => {
    if(a.edad < b.edad){
        return 1;
    }
    if(a.edad > b.edad){
        return -1;
    }
    return 0;
});

//Construyo elementos de lista 
const lista = todos.map(u =>
    `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);

//Junto los elementos del array en un string, dandoles formato
const html =`
<ul>
    ${lista.join(`
    `)}
</ul>
`;

console.log(html);
console.log(typeof html);

const objetosprueba = [
    {id:1, valor:'a'},
    {id:2, valor:'b'},
    {id:3, valor:'c'},
];

const objetosprueba2 = [
    {identificador:4, valor:'d'},
    {identificador:5, valor:'e'},
    {identificador:6, valor:'f'},
]

const objetosprueba2a1 = objetosprueba2.map(u =>({
    id:u.identificador,
    valor:u.valor,
}));

const objetos = [...objetosprueba,...objetosprueba2a1];
console.log(objetos);

objetos.sort((a,b)=>{
    if (a.id < b.id){
        return 1;
    }
    if (a.id > b.id){
        return -1;
    }
    return 0;
})

const pruebaformato = objetos.map(u =>{
return `Objeto: ${u.id}, valor: ${u.valor}`
});

const pruebaformatos = objetos.map(u =>`Objetos: ${u.id}, valor: ${u.valor}`
);

console.log(pruebaformato);
console.log(pruebaformatos);

const nuevo = pruebaformato.join("\n");
console.log(nuevo);
