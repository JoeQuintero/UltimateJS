function saludar(...rest){
    console.log(this, rest);
}

//1er forma
// saludar.call({propiedad: 'hola mundo'},1,5);
// //2da forma
// saludar.apply({propiedad: 'hola mundo'},[1,5]);
//3ra forma
// saludar.bind({propiedad: 'hola mundo'})(3,5);
//4ta forma
// (function saludar(...rest){
//     console.log(this, rest);
// }).bind({propiedad: 'hola mundo'})(3,5);


//Contextos de this 
const usuario = {
    nombre: 'Jose',
    ciudadanias: ['Chile', 'Mexico', 'New Zealand'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(function (ciudania){
            console.log(this.nombre, ciudania);
        }.bind(this));
    }
};

// usuario.mostrarCiudadanias();

const usuario2 = {
    nombre: 'Jose',
    ciudadanias: ['Chile', 'Mexico', 'New Zealand'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach((ciudania)=>{
            console.log(this.nombre, ciudania);
        },this);
    }
};

usuario.mostrarCiudadanias();

