function getRamdom_Array(array){
    return array[Math.floor(Math.random()*array.length)];
}
console.log(getRamdom_Array([1,5,6,7,8]));