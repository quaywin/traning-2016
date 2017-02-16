function array_filled(value, fill){
    var arr = [];
    for(var i = 0; i < value; i++){
        arr.push(fill);
    }
    return arr;
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));