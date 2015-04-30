function sumaInfinita() {
	return Array.prototype.reduce.call(arguments, function(valorPrevio, valorActual) {
		return valorPrevio + valorActual;
	});
}

console.log(sumaInfinita(1, 2, 3, 4));
