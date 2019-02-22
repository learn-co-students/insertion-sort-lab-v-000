function findMinAndRemove(array){
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i]
    if (currentElement < array[minIndex]) {
      minIndex = i
    }
  }
  return array.splice(minIndex, 1)[0]
}

function insertionSort(array){
  let sorted = []
  while (array.length > 0) {
    let newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
