function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min ) {
      min = array[i]
      minIndex = i     
    }
  }
  array.splice( minIndex ,1)
  return min
}

function insertionSort(array){
  var min;
  var newArray = []
  while ( array.length != 0 ) {
    min = findMinAndRemove(array)
    newArray.push(min)
  }
  return newArray;
}
