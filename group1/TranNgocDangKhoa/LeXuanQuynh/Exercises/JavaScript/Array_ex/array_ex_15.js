function array_range(start,length){
    var array = new Array(length);
    for(var i=0; i<length;i++){
        array[i]=start++;
    }
    return array;
}
console.log(array_range(1, 4)); 
console.log(array_range(-6, 4));