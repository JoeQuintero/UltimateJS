
function cualEsMayor(a,b){
    //Primera forma
    // if (a>b){
    //     return a;
    // }else{
    //     return b;
    // }

    //Segunda forma
    return (a>b) ? a : b;
}

let mayor = cualEsMayor(10,5);

console.log(mayor);