function findMinAndRemove(array){
  let min = array[0];
  let minIdx = 0;
  array.forEach((element, idx) => {
    if (min > element){
      min = element;
      minIdx = idx;
    }
  })
  array.splice(minIdx, 1)
  return min;
}

function insertionSort(array){
  let sortedArray = [];
  while(array.length > 0){
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray;
}
