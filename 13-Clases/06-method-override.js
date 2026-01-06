class Entidad{
    constructor(id){
        this.id = id;
        this.created_at = new Date();
    }

    save(){
        return 'Guardando en base de datos';
    }
}

class User extends Entidad{
    constructor(name){
        super(1);
        this.name = name;
    }
    //Para sobreescribir el método de la clase padre
    save(){
        console.log(super.save());
        return 'Nuevo método';
    }


}

const u = new User('Jose Quintero');
console.log(u.save());
console.log(u);