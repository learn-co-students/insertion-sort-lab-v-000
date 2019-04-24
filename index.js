function findMinAndRemove(array){

    let currentMin = array[0]
    let minIndex = 0 

    for(let i = 0; i < array.length; i++){
        if (array[i] < currentMin){
            currentMin = array[i]
            minIndex = i
        }
    }

    array.splice(minIndex, 1); //start from minIndex, and remove 1 element
    return currentMin;

    //set minimum = first element in the array
    //iterate through array
    //for each element compare it to minimum
    //if it is smaller than min, set min to that element
    //recursive call: insertionSort(splice 1)
    //if it is greater
    //current min stays min
}

function insertionSort(array){
    let sorted = []
    let min;

    while(array.length > 0){
        min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted;
}
