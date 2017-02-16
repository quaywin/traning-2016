function merge_array(array1, array2){
    var result = array1;
    for(var i = 0; i < array2.length; i++){
        var check = false;
        for(var j = 0; j < result.length; j++){
            if(array2[i] === result[j]){
                check  = true;
                break;
            }
        }
        if(check === false){
            result.push(array2[i]);
        }
    }
    return result;
}


console.log(merge_array([1, 2, 3], [2, 30, 1]));
