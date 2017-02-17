function rangeBetween(begin, end){
    if (typeof (begin) != 'number' && typeof (end) != 'number')
        return 'Invalid input';
    var array = [];
    for (var i = begin; i <= end; i++){
        array.push(i);
    }
    return array;
}

console.log(rangeBetween(-4, 7));