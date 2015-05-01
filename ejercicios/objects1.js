/*Hacer una función que reciba un objeto y retorne un array con todos los valores 
de sus propiedades cómo elementos. Ejemplo:

console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]*/

function aArrayDeValores(obj) {
	if(Object.prototype.toString.call(obj) === "[object Object]") {
		var result = [],
			keys = Object.keys(obj),
			keysLen = keys.length;
			
		for(var x = 0; x < keysLen; x++) {
			result.push(obj[keys[x]]);
		}
		return result;
	}
	return false;
}

console.log(aArrayDeValores({ a: 1, b: "z", c: 3}));