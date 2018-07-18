function findMinAndRemove(array){
  let min = array[0];
  let min_index = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      min_index = i
    }
  }
  array.splice(min_index, 1)

  return min
}

function selectionSort(array){
  let sorted_arr = []
  while(array.length > 0){
    let minimum = findMinAndRemove(array)
    sorted_arr.push(minimum)
  }
  return sorted_arr
}


function place_number(sorted_arr, incoming_num){
  for(let i = sorted_arr.length - 1; i >= 0; i--){
    if(incoming_num > sorted_arr[i]){
      sorted_arr.splice(i + 1, 0, incoming_num)
      return sorted_arr
    }
  }
  sorted_arr.splice(0, 0, incoming_num)
  return sorted_arr
}

function insertionSort(array){
  let sorted_arr = []
  let duplicate = Array.from(array)
  while(array.length > 0){
    findMinAndRemove(duplicate)
    let test_num = array.shift()
    place_number(sorted_arr, test_num)
  }
  return sorted_arr
}
