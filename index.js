function findMinAndRemove(array){
  let minElement = array[0]
  let minIndex = 0
  for (var i = 1; i < array.length; i++) {
    if (array[i] < minElement) {
      minElement = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return minElement
}

function insertionSort(array){
  let newMin
  let sorted = []

  while (array.length != 0) {
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
