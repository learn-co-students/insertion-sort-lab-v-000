function findMinAndRemove(array){
    // declare a minval to store the smallest number
    let minVal = array[0]
    let minIndex = 0

    for(let i = 0; i < array.length; i++) {
        if (array[i] < minVal) {
            minVal = array[i]
            minIndex = i
        }
    }

    array.splice(minIndex, 1)
    return minVal
}

function insertionSort(array){
    let sortedArr = []
    let minVal = array[0]

    while (array.length != 0) {
        sortedArr.push(findMinAndRemove(array))
    }
    return sortedArr
}
