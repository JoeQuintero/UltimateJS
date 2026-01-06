//1er caso con prototype
// function User(name){
//     this.name = name;
//     //Método de instancia
//     this.instancia = function(){}
// }

// User.prototype.login = function(){
//     console.log('Hola mundo');
// }

// const u = new User('Josesin');

//2do caso con class
class User{
    constructor(name){
        this.name = name;
        this.instancia = function(){};
    }

    activo = true;

    logout(){
        console.log('logout');
    }

    login(){
        console.log('Hola mundo');
    }
}

const u = new User('Josesin');
console.log(u);