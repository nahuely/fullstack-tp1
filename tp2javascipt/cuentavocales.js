var vocales = ['a', 'e', 'i', 'o', 'u'];
var palabras = ['sssss', 'aaaaa', 'celeste', 'arbol', 'cielo', 'rio', 'parque', 'corazon', 'hola'];
var result = [];
var ocurrencia = 0;

for(var x = 0; x < palabras.length; x++) {
	var palabra = palabras[x];
	ocurrencia = 0;
	for(var z = 0; z < palabra.length; z++) {
		var letra = palabra[z];
		for(var m = 0; m < vocales.length; m++) {
			if(letra === vocales[m]) {
				ocurrencia++;
				break;		
			}
		}
	}
	result.push(ocurrencia);
}

console.log(palabras);
console.log(result);
