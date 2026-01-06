// Esta sería una función para crear una lista de select
// Render es una librería que se usa mucho en js
function Select(){
    Select.prototype.render = function(){
        console.log('renderizando select')
        //return '<select></select>';
    }
}

function Checkbox(){

}

Checkbox.prototype.render = function(){
    console.log('renderizando checkbox');
}

let componentes = [
    new Select(),
    new Checkbox(),
]

componentes.forEach(c => c.render());