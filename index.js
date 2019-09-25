function findMinAndRemove(arr){
  let min = arr[0]
  let minIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
      minIndex = i
    }
  }
  arr.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  let sorted = []
  while (array.length) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
