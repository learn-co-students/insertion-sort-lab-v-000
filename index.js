function findMinAndRemove(array){
  let idx = 0;
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      idx = i
    }
  }
  array.splice(idx, 1)
  return min
}

function insertionSort(array){
  let sorted = []
  while (array.length != 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
