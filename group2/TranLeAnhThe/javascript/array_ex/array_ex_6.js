function remove_array_element(arr, value){ 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            for(var j = i; j < arr.length; j++){
                arr[j] = arr[j + 1];
            }
            arr.length--;
        }
    }
    return arr;
}
console.log(remove_array_element([2, 5, 9, 6, 5, 3], 5));