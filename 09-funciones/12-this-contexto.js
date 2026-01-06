//Contextos de this 
const usuario = {
    nombre: 'Jose',
    ciudadanias: ['Chile', 'Mexico', 'New Zealand'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach((ciudania)=>{
            console.log(this.nombre, ciudania);
        });
    }
};

usuario.mostrarCiudadanias();
