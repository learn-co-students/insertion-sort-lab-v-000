function findMinAndRemove(array){
  let smallest = array[0]
  for (var i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  let index = array.indexOf(smallest)
  return array.splice(index,1)
}

function insertionSort(array){
    let newMin;
    let sorted = []
    while(array.length != 0){
      newMin = findMinAndRemove(array)
      sorted.push(newMin[0])
    }
    return sorted;
}
