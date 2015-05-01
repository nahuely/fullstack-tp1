'use strict';

var Singleton = {
	instance: null,
	init: function(nombre, apellido, edad) {
		return {
			nombre: nombre,
			apellido: apellido,
			edad: edad			
		}
	},
	getInstance: function(nombre, apellido, edad) {
		if(!this.instance) {
			this.instance = this.init(nombre, apellido, edad);
		}
		return this.instance;
	}
}

var data = Singleton.getInstance("nahue", "amendo", 29);
Singleton.getInstance("nahue", "amendo", 23123);
console.log(data);
console.log(Singleton.instance);