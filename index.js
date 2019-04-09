function findMinAndRemove(array){
  let ind
  let min = array[0]
  for (let i = 0; i<array.length; i++){
    if (array[i] < min){
      min = array[i]
      ind = i
    }
  }
  array.splice(ind,1)
  return min
}

function insertionSort(array){
  // let len = array.length
  let sorted=[]
  while (array.length > 0){
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
