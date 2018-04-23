function findMinAndRemove(array){
  let minNum = array[0]
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (array[i] < minNum) {
      minNum = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1)
  return minNum;
  // returns the number and keeps the array spliced, without the number

}

function insertionSort(array){
    let sorted = [];
    let newMin;
    while (array != 0) {
      newMin = findMinAndRemove(array);
      sorted.push(newMin)
    }
    return sorted;

}
