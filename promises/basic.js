'use strict';

var Q = require('q');
var fs = require('fs');
var exec = require('child_process').exec;

function ejecutar(resp) {
	if(!resp) {return "err";}
	var deferred = Q.defer();
	exec('cat basic.js', function(err, stdout, stderr) {
		if(err || stderr) {
			deferred.reject(err);
		} else {
			deferred.resolve(stdout);
		}
	})
	return deferred.promise;
}

function readFilePromise(file) {
	var deferred = Q.defer();
	fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
		if(err) {
			deferred.reject(err);
		} else {
			deferred.resolve(data);
		}
	})
	return deferred.promise;
}

function writeFilePromise(data, fileName) {
	var deferred = Q.defer();
	fs.writeFile(fileName, data, function(err) {
		if(err) {
			deferred.reject(err);
		} else {
			deferred.resolve(true);
		}
	})
	return deferred.promise;
}


readFilePromise('basic.js')
	.then(function(data) {
		return data;
	})
	.then(function(data) {
		return writeFilePromise(data, 'basic2.js');
	})
	.then(function(data) {
		return ejecutar(data);
	})
	.then(function(data) {
		console.log('Esto es ejecutado por el comando cat');
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	})