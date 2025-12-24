const letras = ['a','b'];

//Agregar al final del array
letras.push('c','d');
//agregar al inicio del array
letras.unshift('y','z');
//Agregar elemento después de cierto índice, el 0 indica la cantidad de elementos a sacar o a reemplazar, en este caso no se saca nada, se agrega.
letras.splice(3, 0, 'ñ','ñ');

console.log(letras);
