function findMinAndRemove(array){
  let minIndex = 0;
  let currentMin = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] < currentMin) {
      currentMin = array[i];
      minIndex = i;
    }
  }

  array.splice(minIndex, 1)
  return currentMin;
}

function insertionSort(array){
  let sorted = [];

  while (array.length > 0) {
    sorted.push(findMinAndRemove(array))
  }

  return sorted;
}
