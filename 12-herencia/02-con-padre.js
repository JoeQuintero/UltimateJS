function Entidad(entidad){
    this.id = Math.random().toString('20');
    this.entidad = 'user';
}

function User(){
    //Al cambiar el contexto de this, cuando llamo a entidad, el this dentro de entidad es el de usuario
    Entidad.call(this,'prueba');
    this.attrs = {
        name: 'Jose',
        email: 'josequintero@holamundo.io',
    }
}

const u = new User();
console.log(u);