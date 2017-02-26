function perfect_number(n){
    var sum = 0;
    for(var i = 1; i <= n / 2; i++){
        if(n % i == 0){
            sum += i;
        }
    }
    if(sum == n)    
        return true;
    return false;
}

for(var i = 1; i < 100; i++){
    if(perfect_number(i) == true)
        console.log(i);
}
