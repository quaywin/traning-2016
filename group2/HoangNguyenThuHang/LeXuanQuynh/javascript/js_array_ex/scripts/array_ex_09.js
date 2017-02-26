// function permute(a, b){
//     var temp; 
//     temp = a;
//     a = b;
//     b = temp;
// }

function nthlargest(arr, n){
    var len = arr.length;
    for(var i = 0; i < len - 1; i++){
        for(var j = i + 1; j < len; j++){
            if(arr[i] > arr[j]){
                // permute(arr[i], arr[j]);
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
                
                
        }
    }

    return arr[n];
}

var arr = [4, 6, 10, 0, 2, 13, 8, 45];

console.log(nthlargest(arr, 3));