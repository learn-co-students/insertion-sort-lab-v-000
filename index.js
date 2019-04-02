function findMinAndRemove(array){

  let currentMin = array[0]
  let minIndex = 0

  for(let i = 0; i<array.length; i++){
    if(array[i]<currentMin){
      currentMin = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return currentMin;
}

function insertionSort(array){
  let min;
  let sorted = []
  while(array.length != 0){
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted
}
