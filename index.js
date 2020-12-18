function findMinAndRemove(array){
  let minVal;
  for (let i; i < array.length; i++) {
    if (array[i] < array[i++]) {
      minVal = array[i];
    }
  }
  return minVal;
}

function selectionSort(array){

}
