//--------------------Estos métodos buscan con los índices, son más rápidos------------------

//HTMLElement
let htmlElement = document.getElementById('cuerpo');
console.log(htmlElement);
// console.log(Object.getPrototypeOf(htmlElement));

//HTMLCollection -> Se parece a un array, pero no lo es
let elementosRed = document.getElementsByClassName('red');
console.log(elementosRed);

//NodeList -> parecido a una collection pero es distinto 
let elementosChanchito =  document.getElementsByName('chanchito');
console.log(elementosChanchito);

//HTMLCollection 
let parrafos = document.getElementsByTagName('p');
console.log(parrafos);


//---------------------Estos métodos buscan en todo el documento, son lentos-----------------
//HTMLElement - > Devuelve sólo un elemento
//Si es # va a buscar por id
//Si es . va a buscar por clase
let el = document.querySelector('#cuerpo');
console.log(el);

//NodeList
//Si es # va a buscar por id
//Si es . va a buscar por clase
//Si es etiqueta no ponemos nada
let els = document.querySelectorAll('p');
console.log(els);



let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');

console.log(plive,pstatic);

//Agregamos un elemento al DOM desde js
let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive,pstatic);