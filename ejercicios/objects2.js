/*Hacer una función que reciba un objeto el cual posee propiedades con valores de string
 y retorne una string cómo resultado de la concatenación de todos los valores de las propiedades del objeto. Ejemplo:

console.log(concatenarObj({ a: "h", b:"o",c:"l", d:"a"})); // imprime "hola"
console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"})); // imprime "sarasa"*/

function concatenarObj(obj) {
	if(Object.prototype.toString.call(obj) === "[object Object]") {
		var result = "",
			keys = Object.keys(obj),
			keysLen = keys.length;
			
		for(var x = 0; x < keysLen; x++) {
			result += obj[keys[x]];
		}
		return result;
	}
	return false;
}

console.log(concatenarObj({ z: "sa", x:"ra", y:"sa"}));