function findMinAndRemove(array){
  let smallest = 0
  let min = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[smallest]) {
      smallest = i
      min = array[i]
    }
  }

  array.splice(smallest,1)
  return min
}

function insertionSort(array){
  let sortedArray = new Array(array.length)

  if (array.length === 0) {
    return 'array is empty'
  }

  for (let i = 0; i < sortedArray.length; i++) {
    sortedArray[i] = findMinAndRemove(array)
  }

  return sortedArray
}
