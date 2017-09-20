function findMinAndRemove(array) {
    // setup two vars: one to hold the minimum w/default of first array item & the index place of the smallest number w/default of 0
    var min = array[0],
        indexOfMin = 0;

    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set the current item to the current iterated item
        var currentItem = array[i]
            // if the current iterated item is less than the value of min
        if (array[i] < min) {
            // set the value of min to be that current iterated item
            min = array[i]
                // set the index value to be the current iterated item's index value
            indexOfMin = i
        }
    }
    // remove the new low number from the current array
    array.splice(indexOfMin, 1);
    // return the new low number
    return min;
}

function insertionSort(array) {
    // setup two vars: one to hold the new minimum value and one to hold the new sorted array
    var newMin,
        sorted = [];

    // repeat process until the old array is empty
    while (array.length != 0) {
        // set the value of newMin to the result of the findMinAndRemove() function with the array passed in
        newMin = findMinAndRemove(array);
        // push the newMin var value to the new sorted array
        sorted.push(newMin);
    }
    // return the sorted array
    return sorted;
}