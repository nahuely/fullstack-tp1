/*Hacer una función que reciba dos parámetros del tipo string. La función deberá retornar la cantidad de apariciones 
que tiene el segundo parámetro en el primer parámetro. Ejemplo:

console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0*/

function contarOcurrencias(cadena, caracter) {
	if (Object.prototype.toString.call(cadena) === "[object String]" && Object.prototype.toString.call(caracter) === "[object String]") {
		var repeticiones = 0;
		for(var x in cadena) {
			if(cadena[x] === caracter) repeticiones++;
		}
		return repeticiones;
	}
	return false;
}

console.log(contarOcurrencias("sarasa", "z"));