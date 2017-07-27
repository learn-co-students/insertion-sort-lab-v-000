function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
      minIndex = i
    }
  }
  return array.splice(minIndex, 1)[0]
}

function insertionSort(array){
  let sortedArr = []
  while (array.length > 0) {
    sortedArr.push(findMinAndRemove(array))
  }
  return sortedArr
}
