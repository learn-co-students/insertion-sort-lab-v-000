//finds the min & removes it
function findMinAndRemove(array){
  let minVal = array[0];
  let minIdx = 0;

  for(let i=0; i<array.length; i++) {
    if (array[i] < minVal) {
      minVal = array[i];
      minIdx = i;
    }
  }

  return array.splice(minIdx,1)[0];
}

//sorts array via insertion
function insertionSort(array){
  const sortedArray = []
  for(let i=array.length; i>0; i--) {
    sortedArray.push(findMinAndRemove(array));
  }

  return sortedArray;
}
