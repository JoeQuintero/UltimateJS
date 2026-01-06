let controller = new AbortController();
//Dentro de abortcontroller está la propiedad signal, por lo que hago destructuring
let{signal} = controller;
console.log('Con destructuring: ', {signal});
console.log('Sin destructuring: ', signal);

async function getTodos(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    try{
        //Devuelve promesa, usando get por defecto
        const response = await fetch(url, {signal});
        //Devuelve promesa, trayendo todo como un json
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.log('error:', e)
    }
}

getTodos();
console.log("antes:", signal.aborted);
controller.abort();
console.log("después:", signal.aborted);


