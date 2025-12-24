/**
 * Agregar Id a objeto de forma aleatoria, agrega la propiedad
 * Object.assign()
 * Se está modificando el valor de referencia del objeto original
 */
let objeto = {name: "Jose"};

function agregarId(obj){
    //Verificar si es un objeto
    if(typeof obj === 'object'){
        obj.id = Math.random();
    }
    return obj;
    // let copia = obj;
    // Object.assign(copia,{id:Math.random()});
    // return copia;
}

agregarId(objeto);
console.log(objeto);