function findMinAndRemove(array){
  var min = array[0];
  var minIndex = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] <= min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}


function insertionSort(array){
  var newArray = [];
  while (array.length > 0){
    newArray.push(findMinAndRemove(array));
  }
  return newArray;
}
