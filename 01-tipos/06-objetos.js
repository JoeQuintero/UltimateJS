let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    //Propiedades
    nombre: nombre,
    anime: anime,
    edad: edad,  
};

console.log(personaje);
console.log(personaje.nombre);
//Se accede al valor poniendo el nombre de la propiedad entre corchetes
console.log(personaje["anime"]);

personaje.edad = 13;
let llave = "edad";
personaje[llave] = 15;

console.log(personaje);

delete personaje.anime;
console.log(personaje);
