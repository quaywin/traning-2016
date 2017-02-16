function reverseNumber(num){
    var numRever = 0;
    while(num !== 0){
        var digit = num % 10;
        numRever = numRever * 10 + digit;
        num = parseInt(num / 10);
    }
    return numRever;
}

console.log(reverseNumber(12345));