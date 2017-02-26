function factors(n){
    var arr = [];
    arr.push(1);
    for(var i = 2; i <= n/2; i++){
        if(n % i == 0){
            arr.push(i);
        }
    }
    arr.push(n);
    return arr;
}

console.log(factors(10));
console.log(factors(11));
console.log(factors(20));