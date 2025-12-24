//Cambiar de angulos a radianes
console.log(Math.PI);
//Devuelve el valor absoluto;
console.log(Math.abs(-15));


console.log(Math.PI,
    Math.abs(-15),
    Math.round(15.5), //Redondea hacia arriba
    Math.round(15.4), //Redondea hacia abajo si es menor a .5
    Math.floor(15.9), //Redondea a entero hacia abajo
    Math.ceil(15.0001), //Redondea a entero hacia arriba
    Math.pow(2,3), //Potencia 
    Math.sqrt(9), // Raíz cuadrada
);

//Número pseudoaleatorio
console.log(Math.random());

//Si quiero que mi número esté en un rango
function getRandom(min,max){
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1,10));
