const punto = {
    x:10,
    y:20,
    //Se puede resumir a:
    //dibujar(){}
    //Sin la necesidad de poner el nombre de la propiedad, si no directo
    dibujar: function(){
        console.log('Dibujando');
    }
};

// delete punto.dibujar;
if ('dibujar' in punto){
    punto.dibujar();
}

//El c{odigo viejo hace esto: }
//let Keys = Object.keys(punto);
console.log(Object.keys(punto));
for(llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

//En vez de eso existe un método en Javascript que nos devuelve en array el par de llave valor
console.log('ENTRIES');
for(entry of Object.entries(punto)){
    console.log(entry);
}
console.log('FIN ENTRIES');

//Esta funcionalidad es nueva
for(llave in punto){
    console.log(llave, punto[llave]);
}

function suma(a, b){
    return a+b;
}

console.log(typeof suma(5,6));


