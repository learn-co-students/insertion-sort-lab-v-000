function findMinAndRemove(array){
  let min = array[0]
  let minI = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < min) {
      min = array[i]
      minI = i
    }
  }
  array.splice(minI, 1)
  return min
}

function insertionSort(array){
  let sorted = []
  while (array.length != 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
