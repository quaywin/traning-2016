function larger(array, num){
    var res = [];
    for (var i = 0; i < array.length; i++)
        if (array[i] > num) res.push(array[i]);
    return res;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(larger(array, 4));