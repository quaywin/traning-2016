var temp ={
    name:"abc",
    age:13,
    isMarried: true
}
function convert(obj){
    var arr=[];
    for(var i in obj)
        arr.push([i,obj[i]]);
    return arr;
}
console.log(convert(temp));