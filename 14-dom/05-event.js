//Creo formulario
let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

//Lo agrego al body
document.body.append(form);

//Evento cuando el mouse para por encima del formulario
//Todas las funciones reciben un objeto e = evento
form.onmouseenter = (e) =>{
    console.log('Entra el mouse', e);
};

//Este se activa cuando el usuario saca el mouse 
form.onmouseleave = (e) => {
    console.log('Sale el mouse');
}

//Cuando da click dentro
input.onfocus = e => {
    console.log('Input con focus');
}

//Cada que el usuario de click fuera de un campo al que ya le haya dado click 
input.onblur = e =>{
    console.log('Input perdió el foco');
}

//Aquí es cuando el valor del elemento cambia, target hace referencia al elemento hmtml en sí mismo
input.onchange = e => {
    console.log('valor cambia', e.target.value);
}

//Si es que el user da click se debe detener el autorefresh
// btn.onclick = e => {
//     e.preventDefault();
//     console.log('botón clickeado');
// }

//Algunas aplicaciones usan el método de addListener
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('Boton clickeado')
});