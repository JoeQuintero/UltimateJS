//Crear una copia del objeto sin usar Object.assign() ni operador spread ...
//no debo de usar ninguna función o método
//Acceso con la forma antigua con in
let obj1 = {id:1,name:'jose'};

function crearCopia(obj){
    object = {};
    for(llave in obj){
        object[llave] = obj[llave];
    }
    return object;
}
let obj2 = crearCopia(obj1);

console.log({obj1,obj2});