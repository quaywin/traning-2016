function filter_elements_larger_number(arr, number){
    var len = arr.length;
    var result = [];
    for(var i = 0; i< len; i++){
        if(arr[i] > number) 
            result.push(arr[i]);
    }
    return result;
}

console.log(filter_elements_larger_number([4, 5, 1, 7, 9, 100, 50, 10], 7));