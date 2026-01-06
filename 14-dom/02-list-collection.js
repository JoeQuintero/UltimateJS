//Ambos tienen los mismos elementos al inicio
let collection = document.getElementsByTagName('p');
console.log(collection);

//COLLECTION
//Para acceder a cada elemento con collection
let item1 = collection.namedItem("chanchito");
console.log(item1);

let item2 = collection.item(3)
console.log(item2);

let item3 = collection[3];
console.log(item3);

//Iterar elementos 
for(el of collection){
    console.log(el);
}

//Podemos transformar la collectin en un array, pero nos lo devuelve como objetos con propiedades
Array.from(collection).forEach(x => console.log(x));

//Aquí muestra el elemento mismo
[...collection].forEach(x => console.log(x));

//NODELIST
console.log('>>>>>De aquí par abajo es Node list<<<<')
let list = document.querySelectorAll('p');
console.log(list);

let itemList = list.item(3);
let itemList2 = list[3];
console.log(itemList, itemList2);

//Para iterar 
list.forEach(x => console.log(x));

//Devuelve iterators 
let entries = list.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

//Devuelve llaves, pero también como iterator
let keys = list.keys();
console.log(keys);
console.log(keys.next());

//Devuelve iterador pero sólo con los valores de node list
let values = list.values();
console.log(values);
console.log(values.next());

//Si necesito métodos de arrays hago un destructuring y lo convierto en array
[...list].forEach(el => console.log(el))


