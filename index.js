function findMinAndRemove(myNumbers) {
  let smallest = myNumbers[0];
  for (const myNumber of myNumbers) {
    if (myNumber < smallest) {
      smallest = myNumber;
    }
  }
  for (let index = 0; index < myNumbers.length; index++) {
    if (myNumbers[index] === smallest) {
      myNumbers.splice(index, 1);
    }
  }
  //Big N is N so far...
  return smallest;
}

function insertionSort(array) {
  let newArray = [];
  let counter = 0;
  const limit = array.length;
  while (counter < limit) {
    const smallBoi = findMinAndRemove(array);
    newArray.push(smallBoi);
    counter++;
  }
  return newArray;
}
