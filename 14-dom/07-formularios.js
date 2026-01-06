//Cuando se ejecute el render por primera vez, data y errors están vacíos, por lo que se deben de setear
let initialValues = {
    name: 'Jose',
    lastname: '',
}
let render = ({data,errors}) => {
    return `
        <form name = 'formulario'>
            <div> 
                <label> Nombre: </label>
                <input name = "name" value="${data.name}"/>
                ${errors.name || ''}
            </div>
            <div> 
                <label> Apellido: </label>
                <input name = "lastname" value="${data.lastname}"/>
                ${errors.lastname || ''}
            </div>
            <div><button>Enviar</button> </div>
        </form>
    `
}
let validate = data => {
    let errors = {};
    if(!data.name){
        errors.name = 'Campo obligatorio';
    }
    if(!data.lastname){
        errors.lastname = 'Campo obligatorio';
    }

    return errors;
    
}

let form = document.createElement('form');

//Se le mandan valores iniciales al objeto de data
form.innerHTML = render({data:initialValues, errors:{}});
document.body.append(form);

//Evitar que se recargue la página
form.addEventListener('submit', e => {
    e.preventDefault();
})

form.addEventListener('submit', e => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc,el) => {
        //Si la propiedad de name está vacía 
        if(!el.name){
            return acc;
        }
        acc[el.name] = el.value
        return acc;
    },{})
    //Creo una función que manda el objeto con las propiedades de name y sus valores, para validar que los campos no estén vacíos
    const errors = validate(data);
    
    //Aquí valido si es que hay errores, en caso de que sí vuelvo a renderizar el html y reutilizo la función, pero con modificaciones, se valida que todo este bien del lado del cliente para depués mandar a server
    if(Object.keys(errors).length > 0){
        let html = render({errors,data});
        form.innerHTML = html;
        return;
    }
});

