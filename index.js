function findMinAndRemove(array){

    let min = array[0]
    let min_index = 0

    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            min_index = i
        }
    }

    array.splice(min_index, 1);

    // debugger
    return min
}

function selectionSort(array){
    
    let sorted = []
    let min

    while(array.length > 0){
        
        min = findMinAndRemove(array)
        sorted.push(min)

    }

    return sorted

}
// function findMinAndRemove(array){
//     let currentMin = array[0]
//     let minIndex = 0
//     for(let i = 0; i < array.length; i++){
//       if(array[i] < currentMin){
//         currentMin = array[i]
//         minIndex = i
//       }
//     }
//     array.splice(minIndex, 1);
//     return currentMin;
//   }
  
//   function selectionSort(array){
//     let sorted = []
//     let min;
//     while(array.length != 0){
//       min = findMinAndRemove(array)
//       sorted.push(min)
//     }
//     return sorted;
// }