function findMinAndRemove(array){
 let min = array[0]
 let minIndex = 0
 for (let counter = 0; counter < array.length; counter++) {
   let currentElement = array[counter]
   if (array[counter] < min) {
     min = array[counter]
     minIndex = counter
   }
 }
 array.splice(minIndex, 1)
 return min;
}

function insertionSort(array){
  let newMin;
  let sorted = []
  while(array.length != 0) {
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted;
}
