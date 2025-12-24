const ahora = new Date();
console.log(ahora);

//Fecha, hora y zona horaria
const fecha = new Date('December 11 2001 04:15 GMT-0300');
console.log(fecha);

//asignando uno a uno
//año, mes (0-11), dia(numero), hora, minuto, segundos, milisegundos

const fecha2 = new Date(1986,11,25,14,15);
//Si hay diferencia de GMT
const fecha3 = new Date(1986,11,25,14+15,15);
console.log(fecha2);

//Si queremos fechas en formato internacional 
console.log('datestring', fecha3.toDateString())
console.log('ISOstring', fecha3.toISOString())
console.log('timestring', fecha3.toTimeString())

fecha3.getDate()
fecha3.getDate()
fecha3.getDate()
fecha3.getDate()

//getDate te da el día del mes 1-31, 
console.log(ahora.getDate());
//Te devuelve el día de la semana empezando desde el domingo 0-6
console.log(ahora.getDay());

