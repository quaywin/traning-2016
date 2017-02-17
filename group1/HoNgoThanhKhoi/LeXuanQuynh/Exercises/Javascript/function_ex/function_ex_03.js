function allSubStrs(str){
    var res = [];
    for (var i = 0; i < str.length; i++)
        for (var j = i; j < str.length; j++)
            res.push(str.substring(i,j+1));
    return res;
}

var str = 'dog';

console.log(str);
console.log(allSubStrs(str));