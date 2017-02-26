function rangeBetwee(from, to){
    var arr = [];
    for(var i = from; i <= to; i++){
        arr.push(i);
    }
    return arr;
}

console.log(rangeBetwee(4, 7)); 
console.log(rangeBetwee(-4, 7));
