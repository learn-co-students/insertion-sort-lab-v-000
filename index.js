// Algorithm (Insertion sort):
/*
  s1: check if length of array is not 0
  s2:  find the minimumNumber
        s2.1: let first element of array be the key
        s2.2: let the first index be the keyIndex
        s2.3: loop from 0 to the length of array
          S2.3.1: With every iteration, check if next value is less than key
          S2.3.2: if yes, the key is the next value and the index is the index of next value
        S2.4: return the minimum value found in the array (splice) and return the key
  s3:  and push the minimumNumber in sortedArray
  s4:return sortedArray
*/

function findMinAndRemove(array){
  let key = array[0];
  let keyIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < key) {
      key = array[i];
      keyIndex = i;
    }
  }
  array.splice(keyIndex, 1);
  return key;
}

function insertionSort(array){
  let minimumNumber = 0;
  let sortedArray = [];
  while(array.length != 0){
    minimumNumber= findMinAndRemove(array)
    sortedArray.push(minimumNumber);
  }
  return sortedArray;
}
