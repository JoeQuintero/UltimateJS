const saludo = "Hola mundo";
const pregunta = new String('¿Cómo están mundo?');
console.log(typeof saludo);
console.log(typeof pregunta);

//Cantidad de caracteres
console.log(saludo.length);
//Devuelve índice
console.log(saludo.indexOf("Mu")); 
console.log(saludo.indexOf("un")); 
//Si un texto se encuentra de otro texto, para validar si algo existe o no
console.log(saludo.includes("mundo"));
//Remplaca el primer argumento dentro del string con el segundo que escriba
console.log(saludo.replace("mundo","José"), saludo);
//Pero el método no cambia el objeto, replace sólo es temporal, lo debo de guardar en una variable para que funcione 
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo);
//El índice final, pero no incluye el caracter final, si no uno más para que dé: hola
console.log(saludo.substring(0,4));
//Este método está deprecado, ya no se recomienda
console.log(saludo.substr(2,4));

const espacios = "    Hola         mundo     ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());


