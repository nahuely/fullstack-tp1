var numeros = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24];
var odd = [];
var even = [];

var numerosLen = numeros.length;
for(var x = 0; x < numerosLen; x++) {
	if(numeros[x] % 2 === 0) {
		even.push(numeros[x]);
	} else {
		odd.push(numeros[x]);
	}
}

console.log("Pares: " + odd.join(";"));
console.log("Impares: " + even.join(";"));
