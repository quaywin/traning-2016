function array_range(start, range){
    var arr = [];
    for(var i = 0; i < range; i++){
        arr.push(start);
        start++;
    }
    return arr;
}

console.log(array_range(1, 4)); 
console.log(array_range(-6, 4));
