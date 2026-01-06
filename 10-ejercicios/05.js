/**
 * Ordena por minusculas
 * Debo filtrar los espacios
 */

//mi versión
function ordenar(texto, fn){
    //Recordar que aquí split retorna un array, pero como tal al ejecutar el método no cambia a el contenido de texto
    let dividido = texto.toLowerCase().split("").filter(letra=>letra !== " ");
    dividido.sort((a,b)=>{
        if (a>b){
            return -1;
        }
        if (a<b){
            return 1;
        }
        return 0;
    });
    //Si en el método sort cambio los return de 1s, puedo invertir el orden, si no paso ninguna función ordena
    //de menor a mayor por defecto


    fn(dividido.join(""));
}



ordenar('hola mundo', console.log);