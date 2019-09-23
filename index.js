function findMinAndRemove(array){
  let min = array[0];
  let index = 0
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      index = i;
    }
  }
  array.splice(index, 1)
  return min;
}

function insertionSort(array){
  let sortedArray = [];
  while (array.length > 0) {
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray;
}
