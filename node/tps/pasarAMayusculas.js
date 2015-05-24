"use strict";

var fs = require("fs");
var origin = process.argv[2];
var originWithNoExtension = origin.slice(0, origin.indexOf('.'));
var extension = origin.slice(origin.indexOf('.'));
var path = process.cwd() + "/";

if(!origin) {
	console.log("Tiene que especificar un origen\nEjemplo de uso: node pasarAMayusculas.js [archivo origen]");
	process.exit();
}

function vowelsToUpperCase(str) {
	return str.replace(/(a|e|i|o|u)/gm, function(coincidence) {
		return coincidence.toUpperCase();
	})
}

var rstream = fs.createReadStream(path + origin, {encoding: "utf-8"});
var wstream = fs.createWriteStream(path + originWithNoExtension + "Mayus" + extension, {encoding: "utf-8"});

rstream.on('data', function(data) {
	wstream.write(vowelsToUpperCase(data));
})

rstream.on('end', function() {
	wstream.end();
})