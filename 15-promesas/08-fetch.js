const url = 'https://jsonplaceholder.typicode.com/todos/A';
//Aquí no puedo usar await, sólo se puede usar con funciones async
fetch(url)
    .then(response=>{
        if(response.ok){
            return response.text();
        }
        return Promise.reject(response.status)
    })
    .then(data=>console.log('Resultado en caso de que salga bien: ', data))
    .catch(message=>console.log('Mensaje si es rechazado: ', {message}));