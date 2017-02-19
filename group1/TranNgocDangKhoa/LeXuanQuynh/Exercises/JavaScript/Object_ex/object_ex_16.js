var temp ={
    name:"abc",
    age:13,
    isMarried: true
}
function trans(obj){
    var obj2 =  new Object();
    for(var i in obj){
        obj2[obj[i]]=i;
    }
    return obj2;
}
console.log(trans(temp));