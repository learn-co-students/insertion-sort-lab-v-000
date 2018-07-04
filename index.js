function findMinAndRemove(array){
    let minIndex = 0
    let min = array[minIndex]

    for (const [index, value] of array.entries()) {
        if (value < min) {
            min = value
            minIndex = index
        }
    }

    return (array.splice(minIndex, 1))[0]
}

function insertionSort(array){
    let min
    let sorted = []

    while (0 != array.length){
        min = findMinAndRemove(array)
        sorted.push(min)
    }

    return sorted
}
