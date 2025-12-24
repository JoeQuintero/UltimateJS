let user = {
    id: 1,
    name: 'Pepon',
    age: 28,
};

//Nombre de la propiedad
for(let propiedad in user){
    console.log(propiedad, user[propiedad]);
}

let animales = ['chanchito feliz', 'Dragón', 'Canguro'];
for(let indice in animales){
   console.log(indice, animales[indice]);
}