function isPrime(num){
    for (var i = 2; i < num/2; i++)
        if (num % i == 0) return false;
    return true;
}

var i = 25;

console.log(i);
console.log(isPrime(i));