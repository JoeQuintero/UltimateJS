
let serialize = target => 
    //Reduce para construir el elemento
    Array.from(target.elements).reduce((acc,el)=>{
        //Si no tiene propiedad de name es porque ese es el botón de enviar 
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    },{})

class User{
    //Hacemos la url privada para que no sea modificada
    //static para no tener crear usuarios y usar la url
    static #url = 'https://jsonplaceholder.typicode.com/users'
    static #users = [];
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');
    static #initialValues = {
        name: '',
        email: '',
    }

    constructor(data){
        this.name = data.name;
        this.email = data.email;
    }

    //static para usarlo a nivel de clase y async para usar await
    static async getAll(){
        try{
            //Usa el método get por defecto 
            const response = await fetch(this.#url);
            if(!response.ok){
                //Error tiene propiedad de message y otras
                //Si lo imprimo así sólo voy a indicar que el mensaje es un objeto, pero no puedo acceder a él
                // throw new Error(response);
                //Para mejorar eso, mejor mando el mensaje directamente y así puedo acceder a sus propiedades
                throw response;
            }
            //Para guardar referencia de usuarios en memoria lo guardo en una variable
            this.#users = await response.json();
            return this.#users;
        }catch(e){
            console.log('Error, no fue posible conectarse a la URL', e)
        }
    }

    static renderUser(u){
        //Para que devuelva un nodo:
        let li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    static render(){
        let users = this.#users;
        users.forEach(u=> {
            this.#ul.appendChild(this.renderUser(u));
        });

        //Tenemos referencia ya en el ul sin necesidad de usar getElementByID
        return this.#ul;
    }

    static onSubmit(e){
        e.preventDefault();
        //El elemento de html del formulario que se inserta
        let data = serialize(e.target);
        //Eso hace que al llenar los datos del forms, se cree una instancia de usuario y se agregue a la lista: 
        let user = new User(data);
        //Este método no puede ser estático, debe ser del mismo objeto
        const errors = user.validate();
        //Debemos renderizar el form si hay error
        if(Object.keys(errors).length > 0){ //Si hay error
            //this no debe ser formulario, debe ser el usuario
            console.log(this);
            //Cuando se llama onSubmit, este tiene un nuevo contexto, el del html y por eso devuelve el form, eso se arregla con bind

            this.#form.innerHTML = this.formHTML({data,errors});
            return;
        }
        //Si no hay error
        user.save();
    }

    save(){
        //lógica aquí, this dentro de la función hace referencia al usuario 
        return User.save(this);
        //Crear un método estático 
    }

    static async save(user){
        try{
            const response = await fetch(this.#url,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user),
            })
            const data = await response.json();
            //Debemos agregar el usuario a la propiedad estatica de users y al dom
            //Agregar al listado de usuarios al comienzo
            this.#users.unshift(data);
            //prepend sólo recibe elementos html
            this.#ul.prepend(this.renderUser(data));
        }catch(e){
            console.log('Error', e)
        }
    
    }

    validate(){
        let errors = {};
        if(!this.name){
            errors.name = "Nombre es obligatorio"
        }
        if(!this.email){
            errors.email = "Correo es obligatorio"
        }
        return errors;
    }

    static formHTML({data, errors}){
        //Los formularios deben tener un valor inicial para una validación más sencilla
        return `
        <form>
            <div>
                <label>Nombre: </label>
                <input name = "name" value = "${data.name}"/>
                ${errors.name || ''}
            </div>
            <div>
                <label>Correo: </label>
                <input name = "email" value = "${data.email}"/>
                ${errors.email || ''}
            </div>
            <input type = "submit" value = "Enviar"/>
        </form>
        `
    }

    static renderForm(){
        //onSubmit - Lo que vamos a hacer cuando el usuario de click
        //Initial values
        //Error
        //html

        //Se cambia el contexto para que sea el de la clase usuario y no del evento, que es el html
        this.#form.onsubmit = this.onSubmit.bind(this);
        this.#form.innerHTML = this.formHTML({
            data: this.#initialValues,
            errors:{},
        });
        return this.#form;
    }
}

//Este es el código de la aplicación, main es una convención, pero puede ser cualquier nombre
async function main(){
    const users = await User.getAll();
    //Esto debe devolver un nodo de una lista no ordenada
    const template = User.render(); //ul - document.createElement('ul'), devuelve un nodo 
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', template)
    document.body.insertAdjacentElement('afterbegin', form)
}

main();