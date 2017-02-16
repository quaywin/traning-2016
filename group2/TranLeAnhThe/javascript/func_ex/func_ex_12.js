function perfectNumber(num){
    var sum = 0;
    for(var i = 1; i < num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    if(num === sum){
        return true;
    }
    return false;
}

for(var i = 1; i < 1000; i++){
    if(perfectNumber(i) === true){
        console.log(i);
    }
}