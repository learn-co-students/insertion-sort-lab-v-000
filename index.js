function findMinAndRemove(array){
  let minimum = array[0]
  let minIndex = 0
  for (let i=0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return minimum
}

function insertionSort(array){
  let sorted = []
  while (array.length !== 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
