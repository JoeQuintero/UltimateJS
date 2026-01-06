//Función constructora
// function User(a){
//     let name = a;
//     this.getName = function(){
//         return name;
//     }
// }

// const u = new User('Toby');
// console.log(u.getName());

//Clase constructora 
class User{
    #name;
    constructor(name){
        this.#name = name;
    }
    #logger(){
    }
    getName(){
        this.#logger();
        return this.#name;
    }
}

const u = new User('Toby');

console.log(u);