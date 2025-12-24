//Devolver el objeto con mayor edad

const usuarios = [
    {edad: 17, nombre: 'Jose', plan: 'premium'},
    {edad: 13, nombre: 'Toby', plan: 'free'},
    {edad: 32, nombre: 'Quintero', plan: 'free'},
    {edad: 25, nombre: 'Borreguito', plan: 'gold'},
];

function obtenerMayor(arr) {
    let mayor = arr[0];
    for(let usuario of arr){
        if(mayor.edad < usuario.edad){
            mayor = usuario;
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);


function obtenerMayor2(arr) {
  return arr.reduce((max, el) => 
  {
    //console.log(typeof max.edad);
    return el.edad > max.edad ? el : max;}
  );
}
//cuando el tiene una edad mayor que max, entonces el reemplaza a max.


const mayor2 = obtenerMayor2(usuarios);
console.log(mayor2);

// Como no ponemos valor inicial, el max empieza siendo el PRIMER elemento:

// max = {edad: 17, nombre: 'Jose'}

// Cómo funciona realmente reduce() cuando NO das un valor inicial

// Si NO pones valor inicial, así:

// arr.reduce((acc, el) => ...)


// Entonces:

// acc (acumulador) comienza como el primer elemento del arreglo → índice 0

// el (elemento actual) empieza en el segundo elemento → índice 1

// Por eso la primera comparación es entre el elemento 0 y el elemento 1.