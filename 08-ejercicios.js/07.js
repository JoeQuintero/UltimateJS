/**
 * Agrupar a los usuarios por propiedad, creando un objeto con las propiedades 
 * Existe una propiedad con 'premium con dos objetos'
 * 
 */

const usuarios = [
    {edad: 17, nombre: 'Jose', plan: 'premium'},
    {edad: 13, nombre: 'Toby', plan: 'free'},
    {edad: 32, nombre: 'Quintero', plan: 'gold'},
    {edad: 25, nombre: 'Borreguito', plan: 'free'},
];

//Esta función existe en Object.groupBy
function groupBy(arr,propiedad){
    return arr.reduce((groups,objeto)=>{
        let val = objeto[propiedad];
        //Aquí creamos cada propiedad groups.val
        groups[val] = groups[val] ? groups[val] : [];
        groups[val].push(objeto);
        console.log(groups);
        return groups;
    },{});
}

const obj = {};
console.log({obj});
const grouped = groupBy(usuarios,'plan');
console.log({grouped});













//
        // const val = item[prop];
        // groups[val] = groups[val] || [];
        // groups[val].push(item);
        // return groups;