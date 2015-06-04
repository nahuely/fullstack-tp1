var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

explorar('.');

function explorar(path) {
	rl.question("Ingresá un directorio:", function(answer) {
		console.log("el callback se ejecuta con el texto ingresado", answer);
	
		fs.readdir(path + '/' + answer, function(err, dir) {
			dir.forEach(function(elem) {
				console.log(path + '/' + elem);
			});
			explorar(path + '/' + answer);
		});
	});
}
