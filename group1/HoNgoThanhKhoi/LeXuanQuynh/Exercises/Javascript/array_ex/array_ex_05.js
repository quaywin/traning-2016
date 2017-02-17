function merge_array(arr1, arr2){
    var result = arr1.concat(arr2);
    for (var i = 0; i < result.length - 1; i++){
        for (var j = i+1; j < result.length; j++){
            if (result[i] === result[j]) result.splice(j, 1);
        }
    }
    return result;
}

console.log(merge_array([1, 3, 2, 4], [9, 5, 2, 3, 1, 4]));