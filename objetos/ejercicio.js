/*Dado una lista de alumnos cuyos nombres son pepe, juan carlos, alfredo, maria, carla, y josefa,  y sus edades son 30, 20, 10, 56, 70, 44. Hacer una funcion que reciba esta lista de alumnos, y devuelva un array con los nombres de los que son mujeres mayores de 50. Recibir la edad a filtrar, y el nombre de la key a extraer del array de entrada por parametro*/
'use strict';

var alumnos = [
	{nombre: "pepe", edad:"30", sexo: "h"},
	{nombre: "juan carlos", edad:"20", sexo: "h"},
	{nombre: "alfredo", edad:"10", sexo: "h"},
	{nombre: "maria", edad:"56", sexo: "m"},
	{nombre: "carla", edad:"70", sexo: "m"},
	{nombre: "josefa", edad:"44", sexo: "m"}
];

function filtrarEdad(lista, edadMin, sexo, campoADevolver) {
	var listaFiltrada = lista.filter(function(obj) {
		return obj.edad > edadMin && obj.sexo === sexo;
	});
	
	return listaFiltrada.map(function(obj) {
		return obj[campoADevolver];
	});
}

console.log(filtrarEdad(alumnos, 20, "m", "nombre"));