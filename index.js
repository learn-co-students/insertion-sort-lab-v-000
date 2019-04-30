function findMinAndRemove(array){ //[2,1,4,7,2,9]
  let min = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++){
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }
  array.splice(index, 1)
  return min
}

function insertionSort(array){
  let sorted = [];
  while (array.length > 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
