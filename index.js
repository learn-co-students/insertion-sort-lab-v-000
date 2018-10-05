function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (currentNum < min) {
      min = currentNum;
      minIndex = i;
    }
  }

  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  let minNum;
  let sortedArray = [];

  while (array.length > 0) {
    minNum = findMinAndRemove(array);
    sortedArray.push(minNum);
  }

  return sortedArray;
}


// [4, -3, 6, 8, -10]
