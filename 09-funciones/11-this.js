//Dentro de un objeto: this hace referencia al objeto 
//En una función this hace referencia al objeto window, global 
//Si se usa new hace referencia al objeto que será creado

//1ER CASO
// const user = {
//     nombre: 'Jose',
//     login(){
//         console.log(this);
//     } ,
// };

// user.logout = function logout(){
//     console.log(this);
// };

// user.login();

//2DO CASO 
// function log(){
//     console.log(this);
// }

// log();

//3ER CASO
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola mundo');

/*
 * Cuando usamos la palabra reservada new ocurren 4 cosas
    1.	Se crea un objeto literal
    2.	Se vincula el objeto a this
    3.	Se vincula el prototipo
    4.	Si no retorna nada, entonces retorna this
*/