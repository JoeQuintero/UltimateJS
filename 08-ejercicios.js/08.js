const usuarios = [
    {edad: 17, nombre: 'Jose', plan: 'premium'},
    {edad: 13, nombre: 'Toby', plan: 'free'},
    {edad: 32, nombre: 'Quintero', plan: 'gold'},
    {edad: 25, nombre: 'Borreguito', plan: 'free'},
];

//Obtener los usuarios pago
//Ordenar de mayor a menor edad
//Devolver el nombre del usuario 
//Crear una plantilla HTML
//Imprimirla en consola 

function obtenerUsuarios(usuarios){
    //Filtro
    let array = usuarios.filter(u => u.plan !=='free');
    //Ordeno
    array.sort((a,b) => {
        //Si es menor
        if(a.edad < b.edad){
            return 1;
        }
        //Si es mayor
        if(a.edad > b.edad){
            return -1;
        }
        //Si son iguales
        return 0;
    });
    //mapeo cada valor y le agrego formato de html
    let lista = array.map(u => `<li>${u.nombre}</li>`);
    //Junto el arreglo
    //let html = `<ul>\n\t${lista.join('\n\t')}\n</ul>`;
    let html = `
    <ul>
        ${lista.join(`
        `)}
    <ul>`;
    return html;
}

let resultado = obtenerUsuarios(usuarios);
console.log(resultado);

/**
 * <ul>
 * <li>Quintero</li>
 * <li>Jose</li>
 * </ul>
 */