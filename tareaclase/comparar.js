var m = [1, 2, 3, 4, 5];
var u = [1, 2, 3, 4, 5];

var comparar = function(arr1, arr2) {
	var result = true;
	if(Array.isArray(arr1) && Array.isArray(arr2)) {
		arr1.forEach(function(val, index) {
			if(val !== arr2[index]) {
				result = false;
			}
		})
		return result;
	} else {
		console.log("error");
	}
}	

console.log(comparar(m, u));
