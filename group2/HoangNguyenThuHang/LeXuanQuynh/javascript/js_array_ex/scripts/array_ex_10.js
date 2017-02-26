function random_item(arr){
    return arr[Math.floor(Math.random() * arr.length)] ;
}

var arr = [4, 2, 7, 4, 10, 15];
console.log(random_item(arr));