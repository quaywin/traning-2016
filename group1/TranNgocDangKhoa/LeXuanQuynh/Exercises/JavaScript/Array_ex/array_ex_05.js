function merge_array(arr1, arr2){
    var mergArr = arr1.concat(arr2);
    for(var i=0; i<mergArr.length;i++){
        for(var j=i+1; j<mergArr.length;j++){
            if(mergArr[i]===mergArr[j]){
                mergArr.splice(j,1);
            }
        }
    }
    return mergArr;
}
var array1 = [1, 2, 3,4]; 
var array2 = [2, 30, 1,4]; 
console.log(merge_array(array1, array2));
