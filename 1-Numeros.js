var primerNumero = 3.5;
var segundoNumero = 25.5;

//Operaciones aritmaticas con números
var sumaNumeros = primerNumero + segundoNumero;
var restaNumeros = primerNumero - segundoNumero;
var multiplicacionNumeros = primerNumero * segundoNumero;
var divisionNumeros = primerNumero / segundoNumero;

console.log('La suma fue: ', sumaNumeros);
console.log('La resta fue: ', restaNumeros);
console.log('La multiplicación fue: ', parseInt(multiplicacionNumeros));
console.log('La division fue: ', divisionNumeros.toFixed(2));

var numeroMasLetras = primerNumero + "AluraLatam";

//hace una concatenación
console.log(numeroMasLetras);

var numeroMasLetras = primerNumero - "AluraLatam";
console.log(numeroMasLetras); //da NaN Not a Number

