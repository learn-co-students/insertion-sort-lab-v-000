function findMinAndRemove(array){
    let min = array[0];
    let indexOfMin = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
            indexOfMin = i
        }
    }
    array.splice(indexOfMin, 1)
    return min
}

function insertionSort(array){
    let sortedArray = [];
    let newMin = 0
    while (array.length !== 0){
        newMin = findMinAndRemove(array)
        sortedArray.push(newMin)
    }
    return sortedArray;
}
