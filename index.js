function findMinAndRemove(array){
  let minArray = array[0]
  let minIndex = 0

  for(let i = 0; i < array.length; i++){
    if (array[i] < minArray) {
      minArray = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return minArray
}

function insertionSort(array){
  let newArray = []

  while (array.length !== 0) {
    let min = findMinAndRemove(array)
    newArray.push(min)
  }

  return newArray

}
