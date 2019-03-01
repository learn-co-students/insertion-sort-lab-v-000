function findMinAndRemove(array){
    let smallest = array[0];
    let smallestIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            smallestIndex = i
            smallest = array[i]
        }
    }
    array.splice(smallestIndex, 1);
    return smallest;
}

function insertionSort(array){
    let sorted = []
    while (array.length != 0){
        sorted.push(findMinAndRemove(array))
    }
    return sorted;
}
