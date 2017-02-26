function move(arr, from, to){
    var temp = arr[from];  
    for(var i = from; i < to; i++){
        arr[i] = arr[i + 1];
    }
    arr[to] = temp;
    return arr;  
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

