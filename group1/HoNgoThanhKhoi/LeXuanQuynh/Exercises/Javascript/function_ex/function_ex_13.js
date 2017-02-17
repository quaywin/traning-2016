function allFactors(num){
    var res = [];
    for (var i = 1; i <= num; i++){
        if (num % i == 0) res.push(i);
    }
    var t = res.length;
    for (var i = 0; i < t; i++){
        res.push((-1*res[i]));
    }
    return res;
}

var num = 6;

console.log(num);
console.log(allFactors(num));