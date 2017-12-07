function findMinAndRemove(array){
  let min = array[0];
  let minIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIdx = i;
    };
  };
  array.splice(minIdx, 1);
  return min;
};

function insertionSort(array){
  let sortedArray = [];
  while (!!array.length) {
    sortedArray.push(findMinAndRemove(array));
  };
  return sortedArray;
};
