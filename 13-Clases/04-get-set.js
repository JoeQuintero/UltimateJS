class Restaurants{
    #timetable;
    constructor(name){
        this.name = name;
    }   

    get timetable(){
        return this.#timetable;
    }

    set timetable(value){
        let date = new Date(value);
        let time = date.getTime();
        if(Number.isNaN(time)){
            throw new Error('Fecha invalida')
        }
        this.#timetable = date;
    }
}
   
const r = new Restaurants('BBQ');
//Esto es lo equivalente a ejecutar el setter, no se llama como función
r.timetable = '1 Apr 1923';
//Esto es lo equivalente a ejecutar el getter, no se llama a la función
console.log(r.timetable);

//Esta línea sólo es para comprobar si la fecha es válida
const p = new Date ('30 Apr 1923');
console.log(p);



