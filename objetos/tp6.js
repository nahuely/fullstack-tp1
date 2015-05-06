function filtrarKeys(obj, filtros, bool) {
	'use strict';
	if(Object.prototype.toString.call(obj) === "[object Object]" && Object.prototype.toString.call(filtros) === "[object Array]") {
		var inclusionFlag = bool || false;
		var keys = Object.keys(obj);
		return keys.filter(function(value) {
			if(inclusionFlag) {
				if(filtros.indexOf(value) === -1) return true;
			} else {
				if(filtros.indexOf(value) !== -1) return true;
			}	
		})
	}
}

console.log(filtrarKeys({"a": 1, "b": 2, "c": 3}, ["c"], true));