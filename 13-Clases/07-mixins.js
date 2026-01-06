const Entidad = {
    save(){
        console.log('guardado de entidad')
    },
}
const Actualizar = {
    update(){
        console.log('Actualizando')
    },
}

class User{
    constructor(name){
        this.name = name;
    }

    save(){
        console.log('guardado de usuario')
    }

}

//Aquí no sigue el orden
// Object.assign(User.prototype, Entidad);
const nuevoProto = Object.assign({},Entidad, Actualizar);
//Aquí sigue el orden de jerarquía
Object.setPrototypeOf(User.prototype, nuevoProto);

const u = new User('Jose');
u.save();
console.log(u);