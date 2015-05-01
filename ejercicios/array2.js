/*Hacer una función que reciba un array y retorne otro array con la misma cantidad de 
elementos, pero que cada elemento sea el tipo de dato del array original. Ejemplo:

console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]*/

function transformarATipos(array) {
	if(Object.prototype.toString.call(array) === "[object Array]") {
		var arrayDeTipos = [];
		for(var x in array) {
			arrayDeTipos.push(typeof array[x]);
		}
		return arrayDeTipos;
	}
	return false;
}

console.log(transformarATipos([function(){}, true]));