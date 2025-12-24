/**
 * Propiedad existente
 * Debo verificar si una propiedad existe
 */

let objeto = {
    id:1,
    name:'Jose',
    login:function(){},
    logout:function(){}, 
}

let propiedad = 'name';

//Opción 1
// function tieneProp(obj, propiedad){
//     let existe = false;
//     for(llave in obj){
//         if(llave === propiedad){
//             existe = true;
//         }
//     }
//     return existe;
// }

//Opción 2
function tieneProp(obj, propiedad){
    let propiedades = Object.keys(obj);
    let existe = false;
    for(elemento of propiedades){
        if(elemento === propiedad){
            return true;
        }
    }
    return false;

}

console.log(tieneProp(objeto,propiedad));