function positiveInt(num){
    var arr =[];
    for(var i=1;i<=num;i++)
        if(num%i===0)
            arr.push(i);
    return arr;
}
console.log(positiveInt(15));
console.log(positiveInt(16));
console.log(positiveInt(17));