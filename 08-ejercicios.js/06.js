//Debo de usar reduce

function dividePorTipo(arr){
    //acc aquí es un objeto
    return arr.reduce((acc,el)=> { 
            let llave = typeof el;
            // Si no existe aún la clave, se crea con un array vacío
            console.log(llave, acc[llave], 'prueba'); 
            // Si un elemento no existe devuelve undefined, si if detecta eso lo evalúa como un false
            //Si detecta que no hay nada, es false, ese false se convierte en true para afirmar que no hay nada y entrar en el if, si hay algo es true que se convierte en false y no entra
            if (!acc[llave]) {
                acc[llave] = [];
            }
            //O también esto
            //acc[llave] = acc[llave] ? acc[llave] : []; 
            // Aquí no se sobrescribe, se agrega
            acc[llave].push(el);
            console.log(llave, acc[llave], 'pruebaaa'); 
            return acc;
            //El objeto parte vacío y se le van agregando propiedades
        },{});
};

const miArray = [
    "Hola",
    12,
    true,
    false,
    "Mundo",
    {},
    {id:15},
    ['lala'],
];

let arr = dividePorTipo(miArray);
console.log(arr);