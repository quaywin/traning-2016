function move(array, x, y){
    if (x < 0) x = array.length + x;
    if (y < 0) y = array.length + y;
    var t = array[x];
    array.splice(x, 1);
    array.splice(y, 0, t);
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));