function findMinAndRemove(array){
  let min = array[0];
  let minLoc = 0;

  for(let i = 0; i<array.length; i++){
    if(array[i] < min){
      min = array[i];
      minLoc = i;
    }
  }
  return array.splice(minLoc, 1)[0];
}

function insertionSort(array){
  let out = [];

  while(array.length > 0){
    out.push(findMinAndRemove(array));
  }
  return out;
}
