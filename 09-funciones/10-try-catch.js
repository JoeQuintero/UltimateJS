function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El parámetro no es un array');
    }
    
    //Si no le pongo argumento al final toma como primer elemento el primer valor del array
    return arr.reduce((acc, el) => {
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error(`Elemento ${el} no es un número`);
        }

        return acc + el;
    });
}

try{
    console.log(sumaTodo([1,2,5,7]));
} catch(error){
    console.log(error.message);
}

console.log('El programa continúa...');