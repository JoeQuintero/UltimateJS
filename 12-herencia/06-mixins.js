function mixin(Ctr, ...args){//Toma todos los valores y los agrupa en un array
    Object.assign(Ctr.prototype, ...args); //Toma cada elemento como valor independiente y lo agrega
}

let vuela = {
    vuela(){
        return 'Volando';
    }
}

let nada = {
    nada(){
        return 'Nadando';
    }
}

let bano = {
    bano(){
        console.log('Yendo al baño');
    }
}

let camina = {
    camina(){
        console.log('Caminando');
    }
}

//Vuela, nada, camina, va al baño
function Pato(){
    this.name = 'Patito';
}
mixin(Pato, nada, bano, camina, vuela);
let pato = new Pato();
console.log(pato.vuela());

//Camnina, nada, va al baño
function Perro(){}
Object.assign(Perro.prototype, nada, bano, camina);
let perro = new Perro();
console.log(perro.nada());

//Nada, va al baño
function Pez(){}
Object.assign(Pez.prototype, nada, bano);
let pez = new Pez();

//Vuela pero no nada, camina ni va al baño
function Avion(){}
Object.assign(Avion.prototype, vuela);

// console.log(Avion.prototype, new Avion());