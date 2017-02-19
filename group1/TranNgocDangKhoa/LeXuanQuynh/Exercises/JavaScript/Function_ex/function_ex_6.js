function findLongest(str){
    var arr = str.split(" ");
    var max=0;
    for(var i in arr){
        if(arr[i].length> arr[max].length)
            max=i;
    }
    return arr[max];
}
console.log(findLongest('Web Development Tutorial'));