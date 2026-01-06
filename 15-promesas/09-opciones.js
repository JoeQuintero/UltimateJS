const url = 'https://jsonplaceholder.typicode.com/todos/';
//Aquí no puedo usar await, sólo se puede usar con funciones async
fetch(url, {
    //El valor de GET es el valor por defecto de fetch si no lo especificamos
    method: 'POST', //PUT, PATCH, DELETE, GET
    //El to do vendría siendo el hola mundo
    body: JSON.stringify({title: 'Hola mundo'}),
    headers:{
        'Content-Type': 'application/json',
        Authorization: 'api key',
    }, 
    cache: 'no-cache' //default, reload, force-cache, only-if-cached
})
    .then(response=>{
        if(response.ok){
            return response.text();
        }
        return Promise.reject(response.status)
    })
    .then(data=>console.log(data))
    .catch(message=>console.log({message}));