function findMinAndRemove(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }

    array.splice(array.indexOf(min), 1)
    return min
}

function insertionSort(array) {
    let min;
    let sortedArray = [];
    let count = array.length;
    for (let i = 0; i < count; i++) {
        min = findMinAndRemove(array)
        sortedArray.push(min)
    }
    return sortedArray
}
