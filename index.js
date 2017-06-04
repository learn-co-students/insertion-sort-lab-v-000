function findMinAndRemove(array){
	var min = array[0],
		minIndex = 0;
	for (var i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			minIndex = i;
		}
	}
	array.splice(minIndex, 1);
	return min;
}

function insertionSort(array){
	var sorted = [];
	while(array.length > 0) {
		sorted.push(findMinAndRemove(array));
	}
	return sorted;
}
