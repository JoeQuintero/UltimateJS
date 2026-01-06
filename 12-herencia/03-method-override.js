function getProto(u){
    return Object.getPrototypeOf(u);
}

function Entidad(){

}

Entidad.prototype.save = function(){
    console.log('guardando en la bd...');
}

function User(){}
function Product(){}
function Category(){}

Object.setPrototypeOf(User.prototype, Entidad.prototype);   

User.prototype.save = ()=>{
    console.log('Guardando usuario en el servicio...');
}

const u = new User();
u.save();
console.log(u);

console.log(getProto(getProto(u)).save())