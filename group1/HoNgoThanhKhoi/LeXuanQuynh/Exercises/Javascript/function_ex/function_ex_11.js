function findMinMax(array){
    var res = [];
    var max, min, x, y;
    max = array[0];
    min = array[0];
    for (var i = 0; i < array.length; i++){
        if (max < array[i]){
            max = array[i];
            x = i;
        }
        if (min > array[i]){
            min = array[i];
            y = i;
        }
    }
    res.splice(0, 0, min, max, x, y);
    return res;
}

function find(array){
    var res = [];
    res = findMinMax(array);
    array.splice(res[2], 1);
    array.splice(res[3], 1);
    res = findMinMax(array);
    res.splice(2,2);
    return res;
}

var array = [1, 2, 3, 4, 5];

console.log(array);
console.log(find(array));