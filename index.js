function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;
    array.forEach((item, index) => {
        if (item < min) {
            min = item;
            minIndex = index;
        }
    });
    array.splice(minIndex, 1);
    return min;
}

function insertionSort(array){
    let sortedArr = [];
    while (array.length !== 0){
        sortedArr.push(findMinAndRemove(array));
    }
    return sortedArr;
}
