function sort(array){
    for (var i = 0; i < array.length; i++){
        for (var j = i+1; j < array.length; j++){
            if (array[i] > array[j]){
                var t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}

function binarySearch(array, x){
    var i = 0, j = array.length-1, t;
    while (i <= j){
        t = (j+i - (j+i)%2) / 2;
        if (array[t] === x) return t;
        if (array[t] < x) i = t + 1;
        else j = t - 1;
    }
    return -1;
}

var s = [3, 1, 2, 4, 9, 6, 5, 8, 7];

console.log(s);

s = sort(s);

console.log(s);

console.log(binarySearch(s, 6));