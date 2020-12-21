const findMinAndRemove = (arr) => {
  let minVal = arr[0];
  let minIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      minIdx = i;
    }
  }
  arr.splice(minIdx, 1);
  return minVal;
}

const selectionSort = (arr) => {
  let newArr = [];
  let newMin;
  while (arr.length !== 0) {
    newMin = findMinAndRemove(arr);
    newArr.push(newMin);
  }

  return newArr;

}
