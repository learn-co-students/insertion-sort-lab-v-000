function findMinAndRemove(array){
  let minimum = array[0];
  let minimumIndex = 0;
  let i = 0;

  for(i=0;i<array.length;i++){
    if(array[i] < minimum){
      minimum = array[i];
      minimumIndex = i;
    }
  }
  array.splice(minimumIndex, 1);
  return minimum;
}

function insertionSort(array){
  let sortedArray = [];

  while(!!array.length){
    sortedArray.push(findMinAndRemove(array));
  }
  return sortedArray;
}
