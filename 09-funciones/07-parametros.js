/**
 * Este objeto contendría la configuración de nuestra aplicación
 * {
 * url: ...
 * bucket: amazon S3
 * port: 80
 * }
 */

// Con base en esto podríamos construir funciones que devuelvan objetos que nos permitan conectarnos a nuestra API
// function configurarAPI(url) {
//     //Puedo configurar una URL por defecto, si es que no trae argumento:
//     const defaultURL = url || 'https//default.io';
//     //Puedo imprimirlo con cualquiera de las dos formas
//     //return url;
//     return `${defaultURL}`;
// };

const config = {
    url: 'https://default.io',
};

function configurarAPI(url, bucket = 145, port = 90) {
    //Esto sería una url formateada
    return `${url}//${bucket}:${port}`;
};


console.log(configurarAPI('https://holamundo.io', '125', 80));
//Si quiero asignarle valores por defecto, a todos los que están por la derecha
//Se le deben asignar valores a todos los de la derecha,
console.log(configurarAPI('https://holamundo.io'));


