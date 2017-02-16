function contains(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }
    return false;
}

console.log(contains([2, 5, 9, 6], 5));