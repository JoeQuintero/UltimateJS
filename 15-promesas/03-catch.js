let promesa1 = new Promise((res,rej)=>{
    rej(12);
});

let promesa2 = new Promise((res,rej)=>{
    res(15);
});

promesa1.then(valor => {
    console.log("Primera promesa")
    if(valor>10){
        return promesa2;
    }
}).then((valor2)=>{
    console.log("Segunda promesa")
    return valor2;
}).catch(e => console.log(e)).finally(()=>{console.log('Aca estamos en finally!')});




