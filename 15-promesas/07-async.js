let promesa1 = param1 => new Promise((res,rej)=>{
    //'Calcular algo'
    const b = 'Hola';
    res(b);
});

let promesa2 = param2 => new Promise((res,rej)=>{
    //Calculamos algo...
    res(param2 + ' Mundo');
});

let promesa3 = (param1,param2) => new Promise((res,rej)=>{
    res('Josesin ' + param1 + ' ' +param2);
});

//Esto lo eliminamos
// Promise.resolve('Primer valor')
//     .then(a => {
//         return promesa1(a)
//             .then(b => {
//                 return promesa2(b).then(()=>{
//                     promesa3()
//                 })
//             })
//     })

async function main(){
    try{
        //ESTE ES EL MODIFICADO POR MÍ
        //Si no tiene await, el valor de a es el de una promesa, pero si lo tiene, entonces el valor de a va ser en el cual se resolvió la promesa, de modo que a, va ser 'Primer valor'
        const a = await Promise.resolve('Primer valor');
        console.log('a:', a);

        const b = await promesa1(a);
        console.log('b:', b);

        const c = await promesa2(b);
        console.log('c:', c);

        const d = await promesa3(a, b);
        console.log('d:', d);

        //ESTO ERA LO ORIGINAL
        // //Aquí se llama a la promesa pero no se hace nada con el valor:
        // const a = await Promise.resolve('Primer valor');
        // const b = await promesa1(a);
        // const _ = await promesa2(b);
        // promesa3(a,b);
    }catch(error){
        console.log({error});
    }
}

main();

