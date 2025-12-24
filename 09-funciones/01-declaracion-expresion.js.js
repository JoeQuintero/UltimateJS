//En cualquier lenguaje de programación esto debería de dar error
console.log(suma);

//Declaración de funciones: Function Declaration 

//1. Función nombrada -> Named Function
function suma(){
    console.log('Sumando...')
}

//2. Función nombrada -> Anonymus function
// function (){
//     console.log('Función anónima')
// }
//Así se declara la función anónima, pero necesita ser usada como argumento o en algún lugar para que tenga sentido usar una función sin nombre

// A su vez eso puede estar dentro del método de un método
[].map( function suma(){
    console.log('Sumando...')
})

//3. Expresión de funciones -> function expression 
let resta = function(){ // Anonymus function expression
    console.log('Restando...')
};

let multiplica = function multi(){
    console.log('Restando...') //Named function expression 
};

//4. Funciones flecha -> Arrow functions
let dividir = () => {
    console.log('Dividiendo...')
}




