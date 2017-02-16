function exponent(b, n){
    var mul = 1;
    for(var i = 1; i <= n; i++){
        mul *= b;
    }
    return mul;
}

console.log(exponent(3, 3));