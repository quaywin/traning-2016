function array_filled(n, element){
    if (typeof (element) != 'string' || typeof (n) != 'number')
        return 'Invalid input';
    var array = [];
    array.length = n;
    array.fill(element);
    return array;
}

console.log(array_filled(5, 'sdgd'));
