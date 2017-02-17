function nthlargest(array, n){
    //this can be improved by using Heap or Quickselect
    if (n > array.length) return 'Invalid input';
    var t;
    for (var i = 0; i < n; i++)
        for (var j = i + 1; j < array.length; j++){
            if (array[i] < array[j]){
                t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    return array[n-1];
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 5));