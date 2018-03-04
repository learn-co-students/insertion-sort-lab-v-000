function findMinAndRemove(array){
    let min = array[0]; 
    let minIndex = 0;
    for(let i = 0; i < array.length; i++){
        let currentItem = array[i];
        if(currentItem < min){
        	min = currentItem;
        	minIndex = i; 
        }   
    }
    array.splice(minIndex, 1);
    return min;
}

function insertionSort(array){
	let sortedArray = [];
	// function pushMin(array){
	// 	if(array.length < 2){
	// 		sortedArray.push(array[0])
	// 	}else {
	// 		let min = findMinAndRemove(array)
	// 		sortedArray.push(min)
	// 		pushMin(array);
	// 	}
	// }
	// pushMin(array);
	while(array.length !== 0){
		let min = findMinAndRemove(array)
		sortedArray.push(min)
	}
	return sortedArray;
}
