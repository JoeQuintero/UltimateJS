const usuario = {
    nombre: 'José',
    apellido: 'Quintero',
    get nombreCompleto(){
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(valor){
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

usuario.nombreCompleto = 'Toby ';
console.log(usuario.nombreCompleto);

