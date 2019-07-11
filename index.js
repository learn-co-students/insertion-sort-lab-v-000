function findMinAndRemove(array) {
  let min = array[0];
  let minIndex = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < min) {
      min = array[index];
      minIndex = index;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array) {
  let newMin;
  let sortedArray = [];
  while (array.length > 0) {
    newMin = findMinAndRemove(array);
    sortedArray.push(newMin);
  }
  return sortedArray;
}
