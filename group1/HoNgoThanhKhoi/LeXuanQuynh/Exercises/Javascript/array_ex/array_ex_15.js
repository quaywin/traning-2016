function array_range(value, length){
    if (typeof (value) != 'number' && typeof (length) != 'number')
        return 'Invalid input';
    var array = [];
    array.length = length;
    array.fill(value);
    for (var i = 0; i < length; i++)
        array[i] += i;
    return array;
}

console.log(array_range(-6, 4));
