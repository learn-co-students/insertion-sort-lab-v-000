function findMinAndRemove(array){
  let min = [array[0],0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min[0]) {
      min = [array[i],i];
    }
  }
  array.splice(min[1],1);
  return min[0];
}

function insertionSort(array){
  let sorted = [];
  while(array.length != 0) {
    sorted.push(findMinAndRemove(array));
  }
  return sorted;
}

//array = [0,2,-1,1];
//console.log(insertionSort(array));
