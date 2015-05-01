/*Hacer una función que reciba una string y retorne la misma string pero agregando después de cada caracter su í­ndice correspondiente. Es decir, que retorne la misma string transformada de la siguiente forma:

console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"*/

function agregarIndice(cadena) {
	if (Object.prototype.toString.call(cadena) === "[object String]") {
		var cadenaNueva = "";
		for(var x in cadena) {
			cadenaNueva += cadena[x] + x;
		}
		return cadenaNueva;
	}
	return false;
}

console.log(agregarIndice("sarasa"));