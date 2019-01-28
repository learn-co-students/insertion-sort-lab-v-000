function findMinAndRemove(array){
    let minValue = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1)  //updates array with minValue removed
    return minValue;
}

function insertionSort(array){ //[12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
    let sorted = [];
    let min;
    while (array.length > 0) {
        min = findMinAndRemove(array) //returns minValue
        sorted.push(min)
    }
    return sorted;
}
