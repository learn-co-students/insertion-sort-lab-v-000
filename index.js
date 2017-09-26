function findMinAndRemove(array){
  let min = array[0]  // declares min array variable
  let minIndex = 0 // declares minIndex variable
  for(let i = 0; i < array.length; i++){ //for loop iterating over once for each element in the array depending on length.
    if(array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  let sortedArray = []; // Create empty "sortedArray"
  let newMin;
    while(array.length != 0) {  //  loop runs findMinAndRemove on given array and adds it to the end of sortedArray
      newMin = findMinAndRemove(array)
      sortedArray.push(newMin)
    }
  return sortedArray; // returns sorted array!
}
