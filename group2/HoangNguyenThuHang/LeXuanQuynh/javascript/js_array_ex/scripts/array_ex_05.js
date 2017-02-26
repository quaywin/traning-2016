function merge_array(arr1, arr2){
    var arr = [];
    arr = arr1.concat(arr2);
    var len = arr.length;
    
    for(var i = 0; i < len - 1; i++){
        for(var j = i + 1; j < len; j++){
            if(arr[i] == arr[j]){
                arr.splice(i, 1);
                len--;
                i--;
            }
        }
    }
    return arr;
}

var arr1 = [1, 2, 3, 4, 5, 90, 111];
var arr2 = [1, 2, 3, 4, 5, 9, 10, 111];
console.log(merge_array(arr1, arr2));

