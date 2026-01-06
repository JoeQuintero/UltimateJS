let el = document.createElement('p');

//Cambia el contenido que tiene uno de los elementos
el.innerHTML = "Elemento creado";
document.body.append(el);

//Cambia el contenido a
el.innerText = "Hola";

//Si yo quiero que interprete contenido HTML desde el texto
el.innerHTML = "<ul><li>Ejemplo lista no ordenada</li></ul>";

//Si quiero cambiar estilos 
el.style = 'background-color: red; font-weight: bold;';
el.className = 'parrafo';
el.id = 'mi-parrafo';

//Si yo quiero agregar mi propiedad personalizada
//Esto no sirve -> el.mipropiedad = 'mi propiedad';

//Esto sí sirve
el.setAttribute('mipropiedad', 'mi propiedad');

//Si quiero obtener los valores de un objeto del DOM
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');