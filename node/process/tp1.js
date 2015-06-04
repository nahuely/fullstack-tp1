var argumentos = process.argv.slice(2);

function sumarParametros(array) {
"use strict";
	return array.reduce(function(previo, actual) {
		return parseInt(previo) + parseInt(actual);	
	})	
}

console.log(sumarParametros(argumentos));

