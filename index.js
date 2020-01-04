function findMinAndRemove(array){
  let currentMin = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < currentMin){
      currentMin = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return currentMin;
}

function insertionSort(array){
  let sorted = []
  let min;
  while(array.length != 0){
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted;
}

// function insertionSort(array){
//   for (let i = 1; i < array.length; i++) {
//     let key = array[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (array[j] > key) {
//         array[j + 1] = array[j];
//         array[j] = key;
//       };
//     };
//   };
//
//   return array;
// };
