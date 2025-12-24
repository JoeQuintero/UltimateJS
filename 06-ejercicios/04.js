/**
 * Crear una función que me permita saber cuáles son métodos de un objeto
 * 
 */

let objeto = {
    id:1,
    name:'Jose',
    login:function(){},
    logout:function(){}, 
}

function cualMetodos(obj){
    for(llave in obj){
        if(typeof obj[llave] === 'function'){
            console.log(llave);
        }
    }
}


cualMetodos(objeto);