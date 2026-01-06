let el = document.createElement('p');

el.innerText = 'Elemento creado';

//Se agrega al final de HTML, le pudo poner el elemento o un texto
document.body.append(el);

//Con esto lo quito del dom 
el.remove()

//Si lo quiero agregar al inicio del html
document.body.prepend(el);

//Si quiero sustituir elementos
let div = document.createElement('div');
div.innerText = 'Soy un texto';
// document.body.append(div);

el.replaceWith(div);

//Otra alternativa es:
document.body.replaceChild(el, div);

//También puedo eliminar elementos:
document.body.removeChild(el);

//Existe otro método para agregar elementos al final, pero sólo recibe nodos (etiquetas html), no texto
document.body.appendChild(el);

//Insertar un elemento antes de otro
document.body.insertBefore(div,el);

//Hay otros que me permiten moverlo dentro o fuera de las etiquetas de body
document.body.insertAdjacentElement('beforebegin',div); //Antes de etiqueta
document.body.insertAdjacentElement('afterbegin',div); //Después de etiqueta al inicio
document.body.insertAdjacentElement('beforeend',div); //Antes de terminar etiqueta
document.body.insertAdjacentElement('afterend',div); // después de terminar etiqueta

let eltest = document.createElement('div');
let eltest2 = document.createElement('div');
// eltest.innerText = 'Hola';
// eltest2.innerText = '<ul><li>Ejemplo lista no ordenada</li></ul>';

document.body.insertAdjacentHTML('beforebegin', '<p>Esta es la prueba</p>'); //No funcionó con la variable de eltest2
document.body.insertAdjacentHTML('afterbegin', '<p>Esta es la prueba</p>'); //No funcionó con la variable de eltest2
document.body.insertAdjacentHTML('beforeend', '<p>Esta es la prueba</p>'); //No funcionó con la variable de eltest2
document.body.insertAdjacentHTML('afterend', '<p>Esta es la prueba</p>'); //No funcionó con la variable de eltest2


// document.body.insertAdjacentText();
document.body.insertAdjacentText('afterend', '<p>Esta es la prueba</p>'); 






