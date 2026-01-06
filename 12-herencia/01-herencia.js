function User(){
    this.name = 'Hola Mundo';
}

function Product(){
    this.name = 'Producto';
}

function Entidad(){}
Entidad.prototype.save = function(){
    //Esta función constructora no tiene name, pero al pasarlo a product y a user sí la va a tener
    console.log(this.name, 'guardado en base de datos');
}

Entidad.prototype.validate = function(){
    //Esta función constructora no tiene name, pero al pasarlo a product y a user sí la va a tener
    console.log(this.name, 'validando');
}


// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;

// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

let user = new User();
let producto = new Product();

console.log(user);
console.log(producto);


