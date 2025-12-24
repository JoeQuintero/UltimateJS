//Las funciones anónimas de un constructor pasan a ser métodos de un objeto
//Aquí las propiedades se le pasan al objeto "this", se le van agregando
//La idea con esta funcion es crear un objeto que tenga: 
//{id: 1, recuperarClave: function(){}}
function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){ //Método = Función asignada a una propiedad de objeto
        console.log('Recuperando clave...');
    }
}

//Si quiero crear un objeto no basta con llamar la función, si no que debo usar palabra reservada new
let user = new Usuario();
console.log(user);
user.recuperarClave();

/**
 * Ocurren 4 cosas al usar nee
 * 1. se crea objeto literal del aire {}
 * 2. se vincula el prototipo de la función Usuario con el objeto que se acaba de crear (Se ve más adelante)
 * 3. Al objeto vacío creado se le asigna la palabra this, de modo que queda this = {}
 * 4. Como la función no retorna nada, lo que hace es retornar el objeto this, por eso "Creamos un objeto"
 * 
 */
