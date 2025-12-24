//Las funciones son objetos de primera clase, tienen propiedades 
function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
//Cantidad de argumentos que recibe una función
console.log(Usuario.length);

//No ejecuto la función, paso el valor de la función
const U = Usuario;
let user = new U('Jose');
console.log(user);

//Recibe función constructora
function of(Fn, arg){
    return new Fn(arg);
}

//Se pueden asignar a otras variables o constantes, se pueden pasar como argumentos a otras funciones

let user1 = of(Usuario, 'Pepe');
console.log(user1);

function returned(){
    //Puedo usar funciones anónimas o ponerle nombre aquí
    return function(){
        console.log('Hola mundo');
    }
}

//Llama una función que devuelve otra función, pero esa función que devuelve todavía no se ejecuta, sólo pasa el valor
let saludo = returned();

//Aquí ya se ejecuta el valor de la función que se tenía almacenado 
saludo();

