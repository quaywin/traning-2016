function array_filled(n, value){
    var arr = [];
    for(var i = 0; i < n; i++){
        arr.push(value);
    }
    return arr;
}

console.log(array_filled(4, "abc"));