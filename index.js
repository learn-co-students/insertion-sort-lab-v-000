function findMinAndRemove(array){
    let counter = 0;
    let currentMin = array[counter];
    while (counter < array.length-1) {
        if (array[counter+1] < currentMin) {
            currentMin = array[counter+1]
        }
        else {
            counter++;
        }
    }
    const min = currentMin;
    const index = array.indexOf(min);
    array.splice(index, 1);
    return min;
}

function insertionSort(array){
    let newMin;
    let sorted = []
    while(array.length != 0){
      newMin = findMinAndRemove(array)
      sorted.push(newMin)
    }
    return sorted;
}
