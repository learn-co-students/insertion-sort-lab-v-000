function findMinAndRemove(array){
  let min
  let minIndex
  for (let index = 0; index < array.length; index++) {
    if (index === 0){
      minIndex = index
      min = array[index];
    } else {
      if (array[index] < min){
        min = array[index]
        minIndex = index
      }
    }
  }
  return array.splice(minIndex, 1);
}

function insertionSort(array){
  let sorted = []
  while (array.length != 0) {
    const min = findMinAndRemove(array);
    sorted.push(min[0]);
  }
  return sorted;
}
