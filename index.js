function findMinAndRemove(array){
  let min = array[0]
  let index

  for(let i=0; i< array.length; i++){
    if(min> array[i]){
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min

}

function insertionSort(array){
  let newArray = []

  while(array.length != 0){
    newArray.push(findMinAndRemove(array))
  }
  return newArray
}
