//bit: 0 1
//Byte: 8 bits
//Byte: 00000000 -> 0 
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000100 -> 4
//Byte: 00000101 -> 5
//Byte: 00000110 -> 6

//Cada 0 es un 2 elevado a una posicion
//Posicion:    7 6 5 4 3 2 1 0
//Potencia:   2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
//Valor en decimal:      128 64 32 16 8 4 2 1
// Es base decimal porque los números se representan en base 10: 0,1,2,3,4,5,6,7,8,9
// Es base binaria porque los números se representan en base 2: 0,1

//Operadores bitwise, usan la base binaria para hacer operaciones a nivel de bits
console.log( 1 | 3 );// 00000011 // -> 3
console.log( 1 | 4 );// 00000101 // -> 5
console.log( 3 | 5 );// 00000111 // -> 7

//No selecciona uno u otro, selecciona los 1 de ambos y los pone en el resultado, creando nuevos numeros
console.log( 1 & 3 ); // 00000001 // -> 1
console.log( 1 & 4 ); // 00000000 // -> 0
console.log( 3 & 5 ); // 00000001 // -> 1