/**
 * A la función final se le envía el resultado de la suma del resto de los argmentos
 * 
 */

function suma(fn, ...rest){
    //Poner el 0 es opcional, si lo omito toma el primer valor del array
    return fn(rest.reduce((acc, el)=>acc + el, 0));
    
}

suma(resultado => {
    console.log(resultado);
},1,2,3,4,5);