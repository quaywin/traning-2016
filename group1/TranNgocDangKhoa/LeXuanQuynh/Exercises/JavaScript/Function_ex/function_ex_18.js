function binarySearch(arr, value){
    var half = Math.floor((arr.length-1)/2);
    if(arr[half]===value){
        return half;
    }else if(arr[half]>value){
        return binarySearch(arr.slice(0,half), value);
    }else{
        return half +1+ binarySearch(arr.slice(half+1), value);
    }
}
var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22];  
console.log(binarySearch(myArray,7));  
