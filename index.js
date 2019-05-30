function findMinAndRemove(array){                   // [2, 3, 4, 5, 6, 7]
  let min = array[0]                                // 2
  let minIndex = 0

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i]

    if (array[i] < min) {                           // compares min against all elements in array until either it is the biggest or another index is
      min = array[i]                                // becomes new minimum if there is an element that is smaller
      minIndex = i
    }
  }
  array.splice(minIndex, 1);

  return min;
}

function insertionSort(array){
  let newMin;
  let sorted = []

  while (array.length != 0) {
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }

  return sorted;
}
