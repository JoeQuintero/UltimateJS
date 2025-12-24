const letras = ['a','b',1,'c','d',1];

console.log(letras.indexOf('c'));
console.log(letras.indexOf(1));
console.log(letras.lastIndexOf(1));

//Para validar si el elemento existe, antes se hacía, pero se creo un método para eso 
console.log(letras.indexOf(1) !== -1);
//.includes() devuelve un booleano si lo encuentra
console.log(letras.includes(1));

//Si quiero buscar a partir de cierto número uso un índice comosegundo argumento con cualquiera de los métodos anteriores

console.log('\nDos argumentos');
console.log(letras.indexOf('c',4));
console.log(letras.indexOf(1),2);
console.log(letras.lastIndexOf(1,2));
console.log(letras.indexOf(1,2) !== -1);
console.log(letras.includes(1,2));

