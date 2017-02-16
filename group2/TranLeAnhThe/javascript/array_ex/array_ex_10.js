function getRandItem(arr){
    var item = Math.floor(Math.random() * arr.length);
    return arr[item]; 
}

console.log(getRandItem([1,2,3,4,5,6]));