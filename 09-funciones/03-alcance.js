let afuera = 'Estoy afuera';

function alcance(){
    console.log(afuera);
    afuera = 'estoy dentro';
    function saludo(){}
    var vieja = 'Ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola Mundo!';    
}

console.log(afuera);
alcance()
console.log(afuera);