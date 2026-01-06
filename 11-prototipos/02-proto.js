function User(){
    this.name = 'Hola mundo';
    //Método de instancia
    this.logger = function(){
        console.log("logeando....");
    }
}

//this va hacer referencia a los objetos creados por las instancias

const user1 = new User();
const user2 = new User();

//Método de prototipo
User.prototype.login = function(){
    console.log('El usuario ha iniciado sesión', this.name);
    this.logger();
}

//Object toString
console.log(user1.toString());

//Si quisiera interceptar o sobreescribit el método para que no invoque el de object:
User.prototype.toString = function(){
    console.log('Usuario:', this.name);
}

console.log(user1.toString());





