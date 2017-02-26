function findGCD(a, b){
    if(a == b){
        return a;
    }
    else if(a > b){
        for(var i = b; i >= 1; i--){
            if(parseInt(a % i) == 0 && parseInt(b % i) == 0){
                return i;
            }
        }
    }
    else{
        for(var i = a; i >= 1; i--){
            if(parseInt(a % i) == 0 && parseInt(b % i) == 0){
                return i;
            }
        }
    }
}

var a, b;
a = window.prompt("Input a");
b = window.prompt("Input b");
var gcd = findGCD(a, b);
alert("The greatest common divisor (GCD) of " + a + " and " + b + " is " + gcd);


