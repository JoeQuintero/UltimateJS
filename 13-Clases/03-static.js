class Restaurants{
    static cantidad = 12;
    constructor(name){
        this.name = name;
    }
    getTimetable(){ //Obtener horario
        console.log('horario restaurante');
    }
    //Método estático
    static getRestaurant(id){
        //..
        return new Restaurants('BBQ');
    }
}

//Método estático
const r = Restaurants.getRestaurant(12);
