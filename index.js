function findMinAndRemove(array) {
  let arrMin = array[0];
  let arrIdx = 0;
  array.forEach((el, idx) => {
    if (arrMin > el) {
      arrMin = el;
      arrIdx = idx;
    }
  });
  const num = array.splice(arrIdx, 1);
  return num[0];
}

function insertionSort(array) {
  let sorted = [];
  while (array.length != 0) {
    let newMin = findMinAndRemove(array);
    sorted.push(newMin);
  }
  return sorted;
}
