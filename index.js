function findMinAndRemove(array){
  let min;
  let minIndex = 0;
  array.forEach((num, index) => {
    if (min === undefined || num < min) {
      min = num;
      minIndex = index;
    }
  })
  array.splice(minIndex, 1)
  return min;
}

function insertionSort(array){
  let sorted = new Array([]);
  while (!!array.length) {
    let minReturn = findMinAndRemove(array)
    sorted.push(minReturn);
  }
  return sorted
}
