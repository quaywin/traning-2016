function returnArray(arr, val)
{
    var rel = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= val){
            rel.push(arr[i]);
        }
    }
    return rel;
}

console.log(returnArray([1,2,3,4,5], 2));