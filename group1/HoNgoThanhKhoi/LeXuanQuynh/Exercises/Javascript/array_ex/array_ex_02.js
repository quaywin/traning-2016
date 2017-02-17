var array =  [NaN, 0, 15, false, -22, '',undefined, 47, null];
var result = [];

for (var i = 0; i < array.length; i++){
    if (typeof (array[i]) == 'number' && !isNaN(array[i]) && array[i] != 0)
        result.push(array[i]);
}

console.log(result);
console.log('abc');