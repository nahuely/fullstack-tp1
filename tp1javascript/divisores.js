/*
TP nro 1 de javascript.
"imprimir una sola vez separados por coma todos los divisores de 45530"
*/

var result = "";
var valor = 45530;
var limite = valor/2;

for(var x = 1; x <= limite; x++) {
	if(valor % x === 0) {
		result += x + ", ";
	}
}

result += valor;

console.log(result);
