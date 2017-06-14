function findMinAndRemove(array){
  var min = array[0];
  var minIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  var sortedArray = [];
  while(array.length > 0){
    var min = findMinAndRemove(array);
    sortedArray.push(min);
  }
  return sortedArray;
}
