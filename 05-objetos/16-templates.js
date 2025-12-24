const saludo = "hola a todos, \nqué pasa \tchicos ";

let nombre = "José";
let apellido = "Quintero";
const plantilla = `Hola ${nombre} ${apellido}
Bienvenidos a "Ultimate JavaScript :)

prueba\n
adios
`;

function plantilla2(nombre){
    return `
        Esta es una función de ${nombre}
    `
};

console.log(plantilla2('José'));
