function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  let i = 0
  for(i = 0; i < array.length; i++){
    let currentElement = array[i]
    if(currentElement < min){
      min = currentElement
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  let newMin;
  let sorted = [];
  while(array.length > 0){
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
