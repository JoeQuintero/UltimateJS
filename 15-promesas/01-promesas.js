
//Esta función constructora recibe una función que es otra función con dos argumentos
let promesa = new Promise((resolve, reject)=>{
    //10s para recibir respuesta
    setTimeout (()=>resolve('Hola mundo'), 10000)
});

console.log(promesa);

promesa.then(
    valor=>console.log(valor),
    e=>console.log('error',e),
);