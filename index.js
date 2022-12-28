/*Escribir un nùmero, si este es mùltiplo de 3 y de 5 imprimir BingBong, si solo es mùltiplo de 3 imprimir Bing y si solo es mùltiplo de 5 imprimir Bong*/
const value = prompt ('Por favor ingrese un número')
const numberUser = parseInt (value)

if (numberUser % 3 === 0 && numberUser % 5 === 0) {
  console.log ('BingBong')
} else if (numberUser % 3 === 0) {
  console.log ('Bing')
} else if (numberUser % 5 === 0) {
  console.log ('Bong')
} else {
  console.log ('No es múltiplo ni de 3 ni de 5')
}