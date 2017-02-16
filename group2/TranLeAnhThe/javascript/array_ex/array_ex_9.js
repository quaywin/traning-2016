function nthlargest(arr, value){
    if(value > arr.length || value < 0){
        return false;
    }
    var max = arr[0];
    for(var i = 1; i < value; i++){
        if(max < arr[i]){
            max =  arr[i];
        }
    }
    return max;
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));