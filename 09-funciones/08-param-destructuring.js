const config = {
    url: 'https://default.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}

function webserver(config) {
    const {url, ...rest} = config;
    console.log(rest);
    return url;
}

console.log(webserver(config));