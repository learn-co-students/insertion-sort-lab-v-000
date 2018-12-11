function findMinAndRemove(array){
      let min = array[0];
      let minIndex = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min){
          min = array[i];
          minIndex = i;
        }
    }
      array.splice(minIndex, 1)
      return min
}

function insertionSort(array){
    let newMin;
    let sorted = []
    while( array != 0) {
      let newMin = findMinAndRemove(array)
      sorted.push(newMin)
    }
    return sorted;
}
