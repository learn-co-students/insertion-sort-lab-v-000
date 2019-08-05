function findMinAndRemove(array){
  // PSEUDOCODE
  //
  // Objective: find the min value and remove it

  // STEPS
  // create a variable to hold the min value
  // create a variable to hold the index of the min value
  // assign the min variable the first element of the array
  // assign the index variable an index of 0
  //
  // use a for loop to iterate through the array
  //    if a num is less than the min variable:
  //         assign it as the new min variable
  //         assign its index as the new min index
  //
  // once the for loop finishes
  // use .splice(index of min value,1) to remove and return the min value

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

function insertionSort(array){
  // unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
  // [1]
  const sortedArray = []
  for(let i=array.length; i>0; i--) {
    sortedArray.push(findMinAndRemove(array));
  }

  return sortedArray;
}
