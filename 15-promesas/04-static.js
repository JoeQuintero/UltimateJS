let promesa1 = new Promise((res,rej)=>{
    res(5);
});

let promesa2 = new Promise((res,rej)=>{
    res(15);
});

promesa1.then(valor => {
    console.log("Primera promesa")
    if(valor>10){
        //No entra a if
        console.log('Entro a if')
        return promesa2;
    }
// return Promise.reject('Valor menor que 10');
return Promise.resolve('Valor menor que 10' + ' '+ 5555);

}).then((valor2)=>{
    console.log("Segunda promesa", valor2)
    return valor2;
}).catch(e => console.log(e)).finally(()=>{console.log('Aca estamos en finally!')});

