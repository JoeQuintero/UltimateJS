function User(){
    this.name = 'Hola mundo';
}

//Método de prototipo
User.prototype.login = function(){
    console.log('Iniciando sesión', this.name);
}

const user = new User();

for (let prop in user){
    if(!user.hasOwnProperty(prop))
    console.log(prop);
};

console.log(Object.keys(user));