function contains(arr, element){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == element)
            return true;
    }
    return false;
}
console.log(contains([2, 5, 9, 6], 5));