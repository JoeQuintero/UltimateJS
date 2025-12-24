/**
 * Objetos similares con assign, la idea es obtener un booleano que me diga si los objetos tienen la misma cantidad de propiedades y si las propiedades son las mismas
 *Necesitamos asumir que los objetos son iguales, hasta que comparemos las propiedades vamos a ver que son diferentes
 * Aquí asumimos que los objetos son iguales de ambos son iguales, que las propiedades son las mismas
 * 
 *Lo que se hizo fue usar la llave de uno y asumir que también estaba en la del otro objeto, de modo que en el for se usaba la misma llave como índice para cada objeto y obtener el valor 
 * 
 * Funciona también porque sí la llave no tiene el mismo nombre en el otro objeto entonces no va acceder a ningún valor y va a ser diferente
 * 
 */

function similares(obj1,obj2){
    let distintos = false;
    for(llave in obj1){
        console.log(llave, obj1[llave] + ' y '+ llave, obj2[llave]);
        if(obj1[llave] !== obj2[llave]){
            distintos  = true;
        }
    }

    //Lo que interesa saber es que no sean distintos
    return !distintos;
}


let resultado = similares(
    {id:1, name:'Jose',},
    {id:1, name:'Jose',},
);

console.log(resultado);


