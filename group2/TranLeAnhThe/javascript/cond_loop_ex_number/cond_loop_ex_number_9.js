function checkArmstrong(number){
    var sum = 0;
    var temp = number;
    while(number !== 0){
        var digit = number % 10;
        console.log(digit);
        sum += digit * digit * digit;
        number = parseInt(number / 10, 10);
    }
    console.log(sum);
    if(sum === temp){
        return true;
    }
    return false;
}

var number1 = window.prompt("Input number : ");
if(checkArmstrong(parseInt(number1, 10)) === true){
    console.log("TRUE");
}else{
    console.log("FALSE");
}
