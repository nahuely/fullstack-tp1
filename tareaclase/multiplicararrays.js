var array2 = [22,18,70,56,42,24];
var array1 = [13,53,73,15,27,39,91,95,77];
var result = [];
var x = 0;
var resultAux;

while(array1[x] !== undefined || array2[x] !== undefined) {
	resultAux = array1[x] * array2[x];
	if(isNaN(resultAux)) {
		if(array1[x] === undefined) {
			result.push(array2[x]);
		} else {
			result.push(array1[x]);
		}
	} else {
		result.push(resultAux);
	}
	x++;
}

console.log(result);
