function findMinAndRemove(array){
	let min = array[0];
	array.forEach(function(element, i){
		element < min ? min = element : min = min;
	})
	array.splice(array.indexOf(min), 1);
	return min;
}

function insertionSort(array){
	let sortedArray = [];
	while (array.length > 0) {
		let minValue = findMinAndRemove(array);
		sortedArray.push(minValue);
	}
	return sortedArray;
}
