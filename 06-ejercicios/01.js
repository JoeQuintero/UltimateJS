/**Crear usuario mediante una función constructora
 * 
 */

function Usuario(name){
    this.id = Math.random();
    this.name = name;
}

let user = new Usuario('Toby');
let user2 = new Usuario('Jose');
console.log(user, user2);