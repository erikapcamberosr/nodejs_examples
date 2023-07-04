const edad = 39;
const edadUsuario = "39";

console.log(typeof edad);
console.log(typeof edadUsuario);

//los iguala a número
console.log(edad == edadUsuario);//true
//el valor y el tipo deben ser iguales
console.log(edad === edadUsuario);//false
//concatena, los toma como cadena
console.log(edad + edadUsuario);//3939
//lo resta, lostoma como número
console.log(edad - edadUsuario);//0

//Conversión explicita
//Convertir a number
console.log(edad + Number(edadUsuario));//78
//convertir a string
console.log(String(edad) + edadUsuario);//3939

const edadUsuario_numeros_y_letras = "39a";
console.log(edad + Number(edadUsuario_numeros_y_letras));//NaN

