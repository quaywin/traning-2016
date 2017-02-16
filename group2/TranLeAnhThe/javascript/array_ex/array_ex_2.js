var array =  [NaN, 0, 15, false, -22, '',undefined, 47, null, 1223];
var result = [];
var i = 0;
var j = 0;
while(i < array.length){
    if(array[i]){
        result[j] = array[i];
        j++;
    }
    i++;
}
console.log(result);    