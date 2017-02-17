function isPerfect(num){
    var tong = 0;
    for (var i = 1; i <= num/2; i++)
        if (num % i == 0) tong += i;
    return tong == num;
}

var num = 8128;

console.log(num);
console.log(isPerfect(num));