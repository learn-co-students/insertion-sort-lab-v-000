function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  let tempArray = [];
  while(array.length > 0) {
    tempArray.push(findMinAndRemove(array));
  }
  return tempArray;
}
