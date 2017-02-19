function arrayLarger(arr,num){
    var temp = [];
    for(var i in arr){
        if(arr[i]>num)
            temp.push(arr[i]);
    }
    return temp;
}
var array = arrayLarger([10,50,13,54,61],20);
console.log(array);