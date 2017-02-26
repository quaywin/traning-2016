function checkArmstrong(number){
    var sum = 0;
    var num = number;
    while(number != 0){
        var temp = parseInt(number % 10);
        number = parseInt(number / 10);
        sum += temp * temp * temp;
    }
    
    if(num == sum){
        return true;
    }
    return false;
}

for(var i = 100; i <= 999; i++){
    var x = checkArmstrong(i);
    if(x == true){
        console.log(i);
    }
}