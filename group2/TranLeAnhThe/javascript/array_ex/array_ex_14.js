function array_range(from, to){
    var arr = [];
    for(var i = 1; i <= to; i++){
        arr.push(from);
        from++;
    }
    return arr;
}

console.log(array_range(1, 4)); 
//[1, 2, 3, 4]
console.log(array_range(-6, 4));
//[-6, -5, -4, -3]
