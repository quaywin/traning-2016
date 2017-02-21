function sortNumber(a, b) {
    return a - b;
}
var arrayNumber = [ 43,  56,  23,  89,  88,  90,  99,  652];
console.log(arrayNumber.sort(sortNumber));
function outArr(arr, position) {
    console.log(arr[position]);
}
          outArr(arrayNumber, 4);
