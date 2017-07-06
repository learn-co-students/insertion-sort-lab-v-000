function findMinAndRemove(arr){
  let min = arr[0],
      minIndex = 0,
      i;

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  arr.splice(minIndex, 1);
  return min;
}

function insertionSort(arr){
  let sorted = [];

  while (!!arr.length) {
    sorted.push(findMinAndRemove(arr));
  }
  return sorted;
}
