const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'],
];


//Resultado video
function dividePorTipo(arr){
    return {
       numeros: arr.filter(n => typeof n === "number"), 
       string: arr.filter(n => typeof n === "string"), 
       objetos: arr.filter(n => typeof n === "object"), 
    };
}

//Mi Forma
// function dividePorTipo(arr){
//     //acc aquí es un objeto
//     return arr.reduce((acc,el)=> { 
//             const tipo = typeof el;
//             // Si no existe aún la clave, se crea con un array vacío
//             if (!acc[tipo]) {
//                 acc[tipo] = [];
//             }
//             // Aquí no se sobrescribe, se agrega
//             acc[tipo].push(el);

//             return acc;
//         },{}
//     );
// }

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
