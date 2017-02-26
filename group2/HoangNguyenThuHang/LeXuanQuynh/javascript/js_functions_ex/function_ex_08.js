function check_prime(n){
    if(n < 2)    
        return false;
    if(n == 2)
        return true;
    for(var i = 2; i <= n / 2; i++){
        if(n % i == 0)  
            return false;
    }
    return true;
}
console.log(check_prime(7));
console.log(check_prime(8));