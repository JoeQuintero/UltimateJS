const p1 = Promise.reject('Fallo en conexión al servidor');
const p2 = Promise.resolve(42);
const p3 = new Promise((res,rej)=>{
    setTimeout(rej,1000,'foo');
});

//Resolvemos todas estas promesas y cuando eso pase ejecutamos una porción de código
//La forma en la que funciona es que espera que todo se resuelva, y una vez hecho eso ejecuta .then(), si por alguna razón cualquiera falla, entonces el método que se ejecuta es .catch()

// Promise.all([p1,p2,p3])
//     .then(valores => console.log('all', valores))
//     .catch(e=>{console.log('error en all', e)});

// Promise.race([p1,p2,p3])
//     .then(valor => console.log('race', valor))
//     .catch(e => console.log('error en race', e));

// Promise.any([p1,p2,p3])
//     .then(valor => console.log({valor}))
//     .catch(e => console.log({e}));

Promise.allSettled([p1,p2,p3])
    .then(valores => console.log({valores}))
    .catch(e => console.log({e}));