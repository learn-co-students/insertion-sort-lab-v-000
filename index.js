function findMinAndRemove(array){
  let minValue = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
      minIndex = i
    }
  }
  return array.splice(minIndex, 1)
}

function insertionSort(array){

}
