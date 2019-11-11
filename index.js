function findMinAndRemove(array){
  
  // set first element as inital min
  let min = array[0];
  let minIndex = 0;
  
  // loop through elements in array
  for (let i=0; i < array.length; i++) {
    
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  let nextMin;
  let sorted = [];
  
  while (array.length !== 0) {
    nextMin = findMinAndRemove(array);
    sorted.push(nextMin);
  }
  return sorted;
}
