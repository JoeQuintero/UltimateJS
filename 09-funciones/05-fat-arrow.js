//Las fat arrow functions 
//No tienen arguments 
//No tienen la palabra reservada super ni this
const suma = (a,b) => {
    return Array.from(arguments)
    .reduce((acc,el)=>acc+el);
    
    // let total = 0;
    // for(let valor of arguments){
    //     total+=valor;
    // }
    // return total;
};

console.log(suma(1,2,3,4));

//Va a dar error porque arguments no funciona con arrow function 