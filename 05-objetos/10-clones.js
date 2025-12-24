//Cómo duplicar objetos sin que apunten a la misma referencia 
let punto = {
    x:10,
    y:15,
};

// Object.assign(punto, {z:20});
// console.log(punto);
//De esta manera tomamos propiedades de un objeto y se la asignamos a otro 

let referencia = Object.assign(punto,{z:20,x:1});
let clonePunto = Object.assign({}, punto, {z:20, x:1},);
console.log(punto, clonePunto);

//console.log(referencia);
let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

//Otra forma
let copia = {...punto};
console.log(copia);

//Forma antigua
let copia4 = {};
for(let llave in punto){
    copia4[llave] = punto[llave];
}
console.log(copia4);
