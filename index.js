function findMinAndRemove(array){
    let minNum = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < minNum){
        minNum = array[i]
        minIndex = i
        }
    }
    array.splice(minIndex, 1);
    return minNum;
}

function insertionSort(array){
    let sorted = [];
    let minNum;
    while (array.length != 0) {
        minNum = findMinAndRemove(array)
        sorted.push(minNum)
    }
    return sorted;
}

// let myArr = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
// console.log(findMinAndRemove(myArr));