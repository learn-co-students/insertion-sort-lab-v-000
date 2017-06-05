function findMinAndRemove(array) {
  let i, j;

  for (i = 1, j = 0; i < array.length; i++) {
    if (array[i] < array[j]) j = i;
  }

  return array.splice(j, 1)[0];
}

function insertionSort(array) {
  const sorted = [];
  let i, l;
  
  for (i = 0, l = array.length; i < l; i++) {
    sorted.push(findMinAndRemove(array));
  }

  return sorted;
}
