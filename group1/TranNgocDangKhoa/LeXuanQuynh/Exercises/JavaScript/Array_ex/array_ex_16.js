function rangeBetwee(start, end){
    var array = new Array(Math.abs(end-start)+1);
    var bool = (end-start>0);
    for(var i=0;i <array.length ;i++){
        if(bool)
            array[i]=start++;
        else    
            array[i]=start--;
    }
    return array;
}
console.log(rangeBetwee(4, 7)); 
console.log(rangeBetwee(-4, 7));
console.log(rangeBetwee(4, -7));