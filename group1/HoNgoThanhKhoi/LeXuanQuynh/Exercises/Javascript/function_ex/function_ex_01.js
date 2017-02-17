function reverseNumber(n){
    var res = 0;
    while (n !== 0){
        res = res * 10 + n % 10;
        n = (n - n % 10) / 10;
    }
    return res;
}

var n = 32243;

console.log(n);
console.log(reverseNumber(n));