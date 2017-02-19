function nthlargest(array, num){
    array.sort(function(a, b){return b-a});
    return array[num-1];
}
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));