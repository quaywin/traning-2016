var number1 = window.prompt("Input number 1 : ");
var number2 = window.prompt("Input number 2 : ");

var num1 = parseInt(number1, 10);
var num2 = parseInt(number2, 10);

while(num1 != num2){
    if(num1 > num2){
        num1 = num1 - num2;
    }
    if(num1 < num2){
        num2 = num2 - num1;
    }
}

console.log(num1);