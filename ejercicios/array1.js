/*Hacer una función que reciba un array de strings y retorne una string igual a la 
concatenación de todos sus elementos. Ejemplo:

console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
console.log(concatenar(["h","o","l","a"])); // imprime "hola"*/

function concatenar(array) {
	if(Object.prototype.toString.call(array) === "[object Array]") {
		var nuevaCadena = "";
		for(var x in array) {
			nuevaCadena += array[x];
		}				
		return nuevaCadena;
	}
	return false;
}

console.log(concatenar(["h","o","l","a"]));