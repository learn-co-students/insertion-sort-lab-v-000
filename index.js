function findMinAndRemove(array){
    let min = array[0];
    let newIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            newIndex = i;
        }
    }
    array.splice(newIndex, 1);
    return min;
}

function insertionSort(array){
    let sortedArray = [];
    let newMin;

    while (array.length > 0) {
        newMin = findMinAndRemove(array)
        sortedArray.push(newMin);
    }

    return sortedArray;
}
