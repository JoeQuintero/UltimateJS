function Usuario(){
    let id = 1;
    let log2 = function(){
        console.log('hola desde log2');
    }
    this.name = 'Jose';
    this.log = function(){
        console.log('logging...');
    }
    this.guardar = function(){
        log2();
        console.log('guardando...');
    }
}

const usuario = new Usuario();
usuario.guardar();
