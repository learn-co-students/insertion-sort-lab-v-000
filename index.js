function findMinAndRemove(array){
  let min = array[0]
  let index
  let i

    for (i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
        index = i
      } 
    }
    array.splice(index, 1)
    return min
}

function insertionSort(array){
  let sorted = []
  while (array.length !== 0) {
    let min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted;
}
