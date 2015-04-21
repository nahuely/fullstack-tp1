var myArray = ["1d3", "2f3f2", "2f23", "f34f", "asdas"];
console.log(myArray);

var reverse = function(array) {
	if(Array.isArray(array)) {
		var arrayAux = array.splice(0);
		var arrayLen = arrayAux.length - 1;
		for(var x = arrayLen; x >= 0; x--) {
			array.push(arrayAux[x]);
		}
		return true;		
	}
	return false;
}

console.log(reverse("asdas"));
console.log(reverse(myArray));
console.log(myArray);

