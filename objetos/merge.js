
/*Crear una función merge que reciba dos objetos cómo parámetros, obj1 y obj2, y que retorne un objeto nuevo con 
las todas las propiedades de obj1 y de obj2 con sus respectivos valores. En el caso de que ambos 
objetos posean una misma propiedad, el objeto resultado deberá tener la propiedad en cuestión 
con el valor que posee obj2.*/
var foo = { a: 1, b: "adsda"};
var bar = { z: "sarasa"};
var m = { p: "asd", a: 10};

function merge(obj1, obj2) {
	var result = {};
	Array.prototype.forEach.call(arguments, function(obj) {
		for (var x in obj) {
			result[x] = obj[x];
		} 
	});
	return result;
}

var res = merge(foo, bar);
console.log(res.a, res.z); // 1 "sarasa"
console.log(foo === res, bar === res); // false false

//var u = merge(foo);
//console.log(foo === u);



/*Crear una función que dado un objeto obj retorne el total de la suma de todos los valores de sus propiedades.*/

function sumarPropiedades(obj) {
	var result = 0;
	for (var x in obj) {
		result += obj[x];
	}
	return result;
}

var obj = {a: 1, b:2,c:3,d:4};
console.log(sumarPropiedades(obj)); // 7


/*Crear una función poseenMismasPropiedades que dado dos objetos obj1 y obj2, retorne 
true sólo si ambos objetos poseen las mismas propiedades y los mismos valores respectivamente. En 
caso contrario retornar false.*/


function poseenMismasPropiedades(obj1, obj2) {
	if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
	
	for (var x in obj1) {
		if(!obj2.hasOwnProperty(x) || obj1[x] !== obj2[x]) return false;
	}	
	return true;
}

console.log(poseenMismasPropiedades({a:1, b:12223}, {a:1, b:1223}));




/*Crear una función que dado un objeto orig retorne un nuevo objeto con las
 mismas propiedades que orig. Utilizar la función merge del Ejercicio 1.*/

 
 var foo = { a: 1, b: "adsda"};
 
 function cloneObject(obj) {
 	return merge(obj);
 }
 
 
 var newObject = cloneObject(foo);
 
 console.log(foo, newObject);
 console.log(foo === newObject);