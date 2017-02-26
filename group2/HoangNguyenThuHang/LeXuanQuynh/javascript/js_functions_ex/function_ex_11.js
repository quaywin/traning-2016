function find_second_lowest_greatest(arr){
    arr = arr.sort();
    console.log(arr[1]);
    console.log(arr[arr.length - 2]);
}

var arr = [3, 2, 4, 0, 6, 2]; 
find_second_lowest_greatest(arr);