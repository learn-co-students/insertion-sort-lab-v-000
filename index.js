function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0;
  for (let i=1; i<array.length; i++) {
    if (min > array[i]) {
      minIndex = i;
      min = array[i]
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  var newArray = [];
  var len = array.length;
  for (let i=0; i<len;i++) {
    newArray.push(findMinAndRemove(array));
  }
  return newArray;

}
