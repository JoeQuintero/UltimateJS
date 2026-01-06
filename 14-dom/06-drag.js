let id;
function createDraggable(){
    let span = document.createElement('span');
    span.innerText = 'Arrastrable';
    span.draggable = true;
    //Este es el id estático
    span.id = 'hola-mundo';
    //Para asignarlo dinámicamente a una variable:
    span.ondragstart = e =>{
        id = e.target.id;
    }

    //Aquí lo retorno para que se envíe y se agregué al documento y no aparezca undefined
    // document.body.append(span);
    return span;
}

function createDroppableArea(){
    //Un cuadrado donde pueda dejar caer el elemento
    let dropArea = document.createElement('div');
    //Aquí el classname drop está embebido en el html, lo que hace es agregarselo al elemento
    dropArea.className = 'drop';

    //Cuando arrastre un elemento quiero que cambie de color el cuadro, y al sacarlo de encima que el color quede como estaba
    dropArea.ondragenter = e => {
        //target es el elemento como tal y se cambia su propiedad de background
        e.target.style.background = 'yellow';
    }

    dropArea.ondragleave = e =>{
        e.target.style.background = '';
    }

    //Evita que el elemento regrese a su sitio
    dropArea.ondragover = e => e.preventDefault();

    //Agrega el elemento a la etiqueta del evento donde se activa
    dropArea.ondrop = e => {
        //Hacemos referencia a la etiqueta del target
        e.target.appendChild(document.getElementById(id));
    }

    return dropArea;
}

let draggable = createDraggable();
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();

document.body.append(draggable);
document.body.append(dropArea1);
document.body.append(dropArea2);