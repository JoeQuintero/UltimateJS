let promesa1 = user => new Promise((res,rej)=>{
    res(user);
});

let promesa2 = user => new Promise((res,rej)=>{
    res(user + ', Hola mundo');
});

promesa1('Josesin')
    .then(user => promesa2(user))
    .then(dato => console.log(dato));
